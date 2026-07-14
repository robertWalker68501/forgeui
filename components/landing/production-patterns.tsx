import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

import { PATTERNS } from '@/constants';

import { buttonVariants } from '../ui/button';

function ProductionPatterns() {
  return (
    <section className='bg-muted/20 border-b py-20 lg:py-28'>
      <div className='mx-auto max-w-7xl px-5 lg:px-8'>
        <div className='flex flex-col justify-between gap-6 md:flex-row md:items-end'>
          <div className='max-w-2xl'>
            <p className='text-sm font-medium text-teal-600'>
              Production patterns
            </p>
            <h2 className='mt-3 text-3xl font-semibold tracking-tight sm:text-4xl'>
              Start with the feature you need to build.
            </h2>
            <p className='text-muted-foreground mt-4 text-lg leading-8'>
              Patterns show how ForgeUI components work together in complete
              application flows—not just isolated previews.
            </p>
          </div>
          <Link
            href='/patterns'
            className={buttonVariants({
              variant: 'outline',
            })}
          >
            View all patterns
            <ArrowRight className='size-4' />
          </Link>
        </div>

        <div className='mt-12 grid gap-5 lg:grid-cols-3'>
          {PATTERNS.map((pattern) => {
            const Icon = pattern.icon;
            return (
              <Link
                key={pattern.title}
                href={pattern.href}
                className='group bg-card overflow-hidden rounded-2xl border'
              >
                <div
                  className={`flex h-44 items-center justify-center border-b bg-linear-to-br ${pattern.accent}`}
                >
                  <div className='relative flex size-20 items-center justify-center rounded-2xl border border-white/10 bg-zinc-950 text-teal-400 shadow-2xl transition-transform group-hover:scale-105'>
                    <Icon
                      className='size-9'
                      strokeWidth={1.5}
                    />
                    <Sparkles className='absolute -top-2 -right-2 size-5 text-cyan-300' />
                  </div>
                </div>
                <div className='p-6'>
                  <div className='flex items-center justify-between'>
                    <h3 className='text-lg font-semibold'>{pattern.title}</h3>
                    <ArrowRight className='text-muted-foreground size-4 transition-transform group-hover:translate-x-1 group-hover:text-teal-600' />
                  </div>
                  <p className='text-muted-foreground mt-3 text-sm leading-6'>
                    {pattern.description}
                  </p>
                  <div className='mt-5 flex flex-wrap gap-2'>
                    {pattern.components.map((component) => (
                      <span
                        key={component}
                        className='bg-muted text-muted-foreground rounded-md px-2 py-1 text-[11px]'
                      >
                        {component}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export { ProductionPatterns };
