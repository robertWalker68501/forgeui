'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { DOCS_NAVIGATION } from '@/constants/docs-navigation';
import { cn } from '@/lib/utils';

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <nav
      aria-label='Documentation navigation'
      className='space-y-8'
    >
      {DOCS_NAVIGATION.map((group) => (
        <section key={group.title}>
          <h2 className='mb-3 px-3 text-sm font-semibold'>{group.title}</h2>
          <div className='space-y-1'>
            {group.items.map((item) => {
              if (item.disabled) {
                return (
                  <span
                    key={item.href}
                    aria-disabled='true'
                    className='text-muted-foreground/45 block cursor-not-allowed rounded-md px-3 py-2 text-sm'
                  >
                    {item.title}
                  </span>
                );
              }

              const isActive =
                pathname === item.href ||
                (item.href !== '/docs' && pathname.startsWith(`${item.href}/`));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={cn(
                    'block rounded-md px-3 py-2 text-sm transition-colors',
                    isActive
                      ? 'bg-teal-500/10 font-medium text-teal-700 dark:text-teal-300'
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                  )}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>
        </section>
      ))}
    </nav>
  );
}
