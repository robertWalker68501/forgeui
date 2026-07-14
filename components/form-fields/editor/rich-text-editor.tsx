"use client";

import {
  useCallback,
  useMemo,
  type ComponentProps,
} from "react";
import { Editor } from "@tinymce/tinymce-react";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";
import { useUploadThing } from "@/utils/uploadthing";

import { getEditorContentStyle } from "./editor-content-style";
import {
  editorPresets,
  type EditorPreset,
} from "./editor-presets";

type TinyMceInit = NonNullable<
  ComponentProps<typeof Editor>["init"]
>;

type ImagesUploadHandler = NonNullable<
  TinyMceInit["images_upload_handler"]
>;

const MAX_IMAGE_SIZE = 4 * 1024 * 1024;

const ALLOWED_IMAGE_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
]);

export type RichTextEditorProps = {
  id?: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  placeholder?: string;
  preset?: EditorPreset;
  height?: number;
  disabled?: boolean;
  invalid?: boolean;
  className?: string;
  ariaDescribedBy?: string;
};

export function RichTextEditor({
  id = "rich-text-editor",
  value,
  onChange,
  onBlur,
  placeholder = "Start writing...",
  preset = "standard",
  height = 500,
  disabled = false,
  invalid = false,
  className,
  ariaDescribedBy,
}: RichTextEditorProps) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const { startUpload, isUploading } =
    useUploadThing("imageUploader");

  const handleImageUpload =
    useCallback<ImagesUploadHandler>(
      async (blobInfo, progress) => {
        const blob = blobInfo.blob();
        const file = new File(
          [blob],
          blobInfo.filename(),
          {
            type: blob.type || "image/jpeg",
            lastModified: Date.now(),
          },
        );

        if (!ALLOWED_IMAGE_TYPES.has(file.type)) {
          throw new Error(
            "Only JPG, PNG, GIF, and WebP images are allowed.",
          );
        }

        if (file.size > MAX_IMAGE_SIZE) {
          throw new Error(
            "Images must be 4 MB or smaller.",
          );
        }

        progress(10);

        const uploadedFiles =
          await startUpload([file]);

        const uploadedFile =
          uploadedFiles?.[0];

        if (!uploadedFile) {
          throw new Error(
            "The image upload was not completed.",
          );
        }

        progress(90);

        const imageUrl =
          uploadedFile.ufsUrl ??
          uploadedFile.serverData?.url;

        if (!imageUrl) {
          throw new Error(
            "UploadThing did not return an image URL.",
          );
        }

        progress(100);

        return imageUrl;
      },
      [startUpload],
    );

  const presetConfig = editorPresets[preset];

  const editorConfig = useMemo<TinyMceInit>(
    () => ({
      height,
      menubar: presetConfig.menubar,
      plugins: presetConfig.plugins,
      toolbar: presetConfig.toolbar,
      quickbars_selection_toolbar:
        presetConfig.quickbarsSelectionToolbar,
      quickbars_insert_toolbar:
        presetConfig.quickbarsInsertToolbar,

      placeholder,
      branding: false,
      promotion: false,
      resize: true,
      statusbar: true,
      toolbar_mode: "sliding",

      skin: isDark ? "oxide-dark" : "oxide",
      content_css: isDark ? "dark" : "default",
      content_style:
        getEditorContentStyle(isDark),

      automatic_uploads: true,
      paste_data_images: true,
      images_reuse_filename: false,
      images_file_types:
        "jpg,jpeg,png,gif,webp",
      images_upload_handler:
        handleImageUpload,

      image_advtab: true,
      image_caption: true,
      image_title: true,
      file_picker_types: "image",

      link_default_target: "_blank",
      link_assume_external_targets: true,
      link_context_toolbar: true,

      browser_spellcheck: true,
      contextmenu: false,
    }),
    [
      handleImageUpload,
      height,
      isDark,
      placeholder,
      presetConfig,
    ],
  );

  return (
    <div className={cn("space-y-2", className)}>
      <div
        data-invalid={invalid || undefined}
        aria-invalid={invalid || undefined}
        aria-describedby={ariaDescribedBy}
        className={cn(
          "overflow-hidden rounded-md border bg-background shadow-xs",
          "transition-[border-color,box-shadow]",
          "focus-within:border-ring focus-within:ring-[3px] focus-within:ring-ring/50",
          invalid &&
            "border-destructive ring-destructive/20 dark:ring-destructive/40",
          (disabled || isUploading) &&
            "pointer-events-none opacity-60",
        )}
      >
        <Editor
          key={isDark ? "dark" : "light"}
          id={id}
          apiKey={
            process.env
              .NEXT_PUBLIC_TINYMCE_API_KEY
          }
          value={value}
          disabled={disabled || isUploading}
          onEditorChange={onChange}
          onBlur={onBlur}
          init={editorConfig}
          scriptLoading={{
            async: true,
          }}
        />
      </div>

      <div
        className="min-h-4 text-xs text-muted-foreground"
        aria-live="polite"
      >
        {isUploading
          ? "Uploading image..."
          : null}
      </div>
    </div>
  );
}
