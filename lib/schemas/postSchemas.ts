import { z } from "zod";

import {
  requiredImageSchema,
} from "@/lib/validations/file-upload";
import {
  hasRichTextContent,
} from "@/lib/validations/rich-text";

export const createPostSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, "Post title is required.")
    .max(
      150,
      "Post title cannot exceed 150 characters.",
    ),

  headerImage: requiredImageSchema.max(
    1,
    "Upload only one header image.",
  ),

  content: z
    .string()
    .min(1, "Post content is required.")
    .refine(
      hasRichTextContent,
      "Post content is required.",
    ),
});

export type CreatePostInput =
  z.input<typeof createPostSchema>;

export type CreatePostOutput =
  z.output<typeof createPostSchema>;
