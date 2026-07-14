import { ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';

type PaginationLink = { title: string; href: string };

export function DocsPagination({
  previous,
  next,
}: {
  previous?: PaginationLink;
  next?: PaginationLink;
}) {
  return (
    <nav
      aria-label='Documentation pagination'
      className='mt-16 grid gap-4 border-t pt-8 sm:grid-cols-2'
    >
      {previous ? (
        <Link
          href={previous.href}
          className='group hover:bg-muted/30 rounded-xl border p-5 transition-colors hover:border-teal-500/40'
        >
          <span className='text-muted-foreground flex items-center gap-2 text-xs'>
            <ArrowLeft className='size-3.5 transition-transform group-hover:-translate-x-1' />
            Previous
          </span>
          <span className='mt-2 block font-medium'>{previous.title}</span>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link
          href={next.href}
          className='group hover:bg-muted/30 rounded-xl border p-5 text-right transition-colors hover:border-teal-500/40'
        >
          <span className='text-muted-foreground flex items-center justify-end gap-2 text-xs'>
            Next
            <ArrowRight className='size-3.5 transition-transform group-hover:translate-x-1' />
          </span>
          <span className='mt-2 block font-medium'>{next.title}</span>
        </Link>
      ) : null}
    </nav>
  );
}
