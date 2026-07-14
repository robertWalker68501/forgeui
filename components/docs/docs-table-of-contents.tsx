export type TableOfContentsItem = {
  title: string;
  href: `#${string}`;
};

const DEFAULT_ITEMS: TableOfContentsItem[] = [
  { title: 'Preview', href: '#preview' },
  { title: 'Installation', href: '#installation' },
  { title: 'Usage', href: '#usage' },
  { title: 'API reference', href: '#api-reference' },
];

export function DocsTableOfContents({
  items = DEFAULT_ITEMS,
}: {
  items?: TableOfContentsItem[];
}) {
  return (
    <nav aria-label='On this page'>
      <p className='mb-3 text-sm font-semibold'>On this page</p>
      <div className='space-y-2'>
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className='text-muted-foreground hover:text-foreground block text-sm transition-colors'
          >
            {item.title}
          </a>
        ))}
      </div>
    </nav>
  );
}
