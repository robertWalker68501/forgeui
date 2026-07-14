export type DocsNavigationItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type DocsNavigationGroup = {
  title: string;
  items: DocsNavigationItem[];
};

export const DOCS_NAVIGATION: DocsNavigationGroup[] = [
  {
    title: 'Getting Started',
    items: [
      { title: 'Introduction', href: '/docs' },
      { title: 'Installation', href: '/docs/installation', disabled: true },
      { title: 'Theming', href: '/docs/theming', disabled: true },
    ],
  },
  {
    title: 'Form Components',
    items: [
      {
        title: 'Form Field Control',
        href: '/docs/components/form-field-control',
      },
      {
        title: 'File Upload Field',
        href: '/docs/components/file-upload-field',
      },
      {
        title: 'Rich Text Editor Field',
        href: '/docs/components/rich-text-editor-field',
      },
    ],
  },
];
