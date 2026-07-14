import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { CATEGORIES } from '@/constants';

function BuildAnything() {
  return (
    <section className='border-b py-20 lg:py-28'>
      <div className='mx-auto max-w-7xl px-5 lg:px-8'>
        <div className='max-w-2xl'>
          <p className='text-sm font-medium text-teal-600'>Build anything</p>
          <h2 className='mt-3 text-3xl font-semibold tracking-tight sm:text-4xl'>
            The building blocks behind complete applications.
          </h2>
          <p className='text-muted-foreground mt-4 text-lg leading-8'>
            Start with a focused component or combine them into complete,
            production-ready workflows.
          </p>
        </div>

        <div className='mt-12 grid gap-5 md:grid-cols-2'>
          {CATEGORIES.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.title}
                href={category.href}
                className='group bg-card relative overflow-hidden rounded-2xl border p-7 transition-all hover:-translate-y-1 hover:border-teal-500/40 hover:shadow-xl hover:shadow-teal-950/5'
              >
                <div className='absolute -top-16 -right-16 size-44 rounded-full bg-teal-500/5 transition-transform group-hover:scale-125' />
                <div className='flex items-start justify-between'>
                  <span className='bg-background flex size-11 items-center justify-center rounded-xl border text-teal-600'>
                    <Icon className='size-5' />
                  </span>
                  <ArrowRight className='text-muted-foreground size-5 transition-transform group-hover:translate-x-1 group-hover:text-teal-600' />
                </div>
                <h3 className='mt-8 text-xl font-semibold'>{category.title}</h3>
                <p className='text-muted-foreground mt-3 max-w-md leading-7'>
                  {category.description}
                </p>
                <div className='mt-6 flex flex-wrap gap-2'>
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className='bg-muted/40 text-muted-foreground rounded-full border px-3 py-1 text-xs'
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export { BuildAnything };
