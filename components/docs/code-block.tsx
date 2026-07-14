export function CodeBlock({
  code,
  language = 'tsx',
  className,
}: {
  code: string;
  language?: string;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-xl border bg-zinc-950 ${className ?? ''}`}
    >
      <div className='border-b border-white/10 px-4 py-2 text-xs tracking-wider text-zinc-500 uppercase'>
        {language}
      </div>
      <pre className='overflow-x-auto p-5 text-sm leading-7 text-zinc-300'>
        <code>{code}</code>
      </pre>
    </div>
  );
}
