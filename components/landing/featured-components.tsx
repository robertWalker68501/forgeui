import { Copy } from 'lucide-react';
import Link from 'next/link';

import { FEATURED_COMPONENTS } from '@/constants';

import { Badge } from '../ui/badge';
import { Button, buttonVariants } from '../ui/button';

function FeaturedComponents() {
  return (
    <section className='border-b py-20 lg:py-28'>
      <div className='mx-auto max-w-7xl px-5 lg:px-8'>
        <div className='max-w-2xl'>
          <p className='text-sm font-medium text-teal-600'>
            Featured components
          </p>
          <h2 className='mt-3 text-3xl font-semibold tracking-tight sm:text-4xl'>
            More than visual primitives.
          </h2>
          <p className='text-muted-foreground mt-4 text-lg leading-8'>
            Every ForgeUI component includes the integrations and behaviors
            needed in real applications.
          </p>
        </div>

        <div className='mt-12 grid gap-5 md:grid-cols-3'>
          {FEATURED_COMPONENTS.map((component) => {
            const Icon = component.icon;
            return (
              <div
                key={component.name}
                className='bg-card rounded-2xl border p-6'
              >
                <div className='flex items-center justify-between'>
                  <span className='flex size-10 items-center justify-center rounded-xl bg-teal-500/10 text-teal-600'>
                    <Icon className='size-5' />
                  </span>
                  <Badge variant='outline'>{component.status}</Badge>
                </div>

                <h3 className='mt-6 font-semibold'>{component.name}</h3>
                <p className='text-muted-foreground mt-2 min-h-20 text-sm leading-6'>
                  {component.description}
                </p>

                <div className='mt-6 flex gap-2'>
                  <Link
                    href={component.href}
                    className={buttonVariants({
                      size: 'sm',
                    })}
                  >
                    View docs
                  </Link>
                  <Button
                    size='sm'
                    variant='outline'
                  >
                    <Copy className='size-3.5' />
                    Copy
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export { FeaturedComponents };
