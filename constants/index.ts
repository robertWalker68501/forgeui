import {
  Blocks,
  FileCode2,
  FileText,
  LayoutDashboard,
  LockKeyhole,
  ShieldCheck,
  TableProperties,
  UploadCloud,
} from 'lucide-react';

export const NAVIGATION = [
  { label: 'Components', href: '/components' },
  { label: 'Patterns', href: '/patterns' },
  { label: 'Documentation', href: '/docs' },
  { label: 'Examples', href: '/examples' },
];

export const CATEGORIES = [
  {
    title: 'Forms',
    description:
      'Typed, accessible form controls with React Hook Form and Zod built in.',
    icon: Blocks,
    href: '/components/forms',
    items: ['Inputs', 'Selects', 'Checkboxes', 'Validation'],
  },
  {
    title: 'Editors',
    description:
      'Rich editing experiences with image uploads, themes, and validation.',
    icon: FileText,
    href: '/components/editors',
    items: ['TinyMCE', 'Image uploads', 'Presets', 'Dark mode'],
  },
  {
    title: 'Data',
    description:
      'Composable tools for tables, filters, pagination, and admin workflows.',
    icon: TableProperties,
    href: '/components/data',
    items: ['Data tables', 'Search', 'Filters', 'Pagination'],
  },
  {
    title: 'Authentication',
    description:
      'Production-ready patterns for accounts, roles, and protected routes.',
    icon: LockKeyhole,
    href: '/components/auth',
    items: ['Better Auth', 'Role guards', 'User menus', 'Sessions'],
  },
];

export const PATTERNS = [
  {
    title: 'Create Post',
    description:
      'A complete publishing flow with validation, header-image uploads, TinyMCE, slugs, and a Prisma Server Action.',
    icon: FileCode2,
    href: '/patterns/create-post',
    components: [
      'FormFieldControl',
      'FileUploadField',
      'RichTextEditorField',
      'Server Action',
    ],
    accent: 'from-teal-500/20 via-cyan-500/10 to-transparent',
  },
  {
    title: 'Admin Dashboard',
    description:
      'A practical application shell with navigation, metrics, tables, search, and role-aware actions.',
    icon: LayoutDashboard,
    href: '/patterns/admin-dashboard',
    components: ['Sidebar', 'Data Table', 'Filters', 'Dialogs'],
    accent: 'from-emerald-500/20 via-teal-500/10 to-transparent',
  },
  {
    title: 'Authentication Flow',
    description:
      'Sign in, registration, validation, protected pages, and account management that work together.',
    icon: ShieldCheck,
    href: '/patterns/authentication',
    components: ['Login', 'Register', 'Better Auth', 'Role Guard'],
    accent: 'from-cyan-500/20 via-sky-500/10 to-transparent',
  },
];

export const FEATURED_COMPONENTS = [
  {
    name: 'FormFieldControl',
    description:
      'One typed field component for inputs, textarea, selects, and checkboxes.',
    icon: Blocks,
    href: '/components/form-field-control',
    status: 'Stable',
  },
  {
    name: 'RichTextEditorField',
    description:
      'TinyMCE with UploadThing, RHF, Zod, theme support, and toolbar presets.',
    icon: FileText,
    href: '/components/rich-text-editor',
    status: 'Stable',
  },
  {
    name: 'FileUploadField',
    description:
      'Drop-in image and file uploads with previews, progress, and validation.',
    icon: UploadCloud,
    href: '/components/file-upload',
    status: 'New',
  },
];

export const COMPARISON = [
  ['React Hook Form integration', true, false],
  ['Zod validation examples', true, false],
  ['Accessible states', true, false],
  ['UploadThing workflows', true, false],
  ['Server Action examples', true, false],
  ['Dark mode support', true, false],
  ['Production patterns', true, false],
];

export const CODE_SAMPLE = `const form = useForm<CreatePostInput>({
  resolver: zodResolver(createPostSchema),
  defaultValues: {
    title: "",
    headerImage: [],
    content: "",
  },
});

<RichTextEditorField
  control={form.control}
  name="content"
  preset="standard"
  required
/>`;
