import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { IoLogoGithub } from 'react-icons/io';

import { ForgeMark } from '../branding';
import { buttonVariants } from '../ui/button';

function Cta() {
  return (
    <section className='py-20 lg:py-28'>
      <div className='mx-auto max-w-7xl px-5 lg:px-8'>
        <div className='relative overflow-hidden rounded-3xl border bg-zinc-950 px-6 py-14 text-center text-white shadow-2xl sm:px-12'>
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(20,184,166,0.25),transparent_48%)]' />
          <div className='relative'>
            <ForgeMark className='mx-auto size-12' />
            <h2 className='mx-auto mt-6 max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl'>
              Build the feature. Skip the boilerplate.
            </h2>
            <p className='mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-400'>
              Start with ForgeUI components today and grow into complete
              application patterns as your project evolves.
            </p>
            <div className='mt-8 flex flex-col justify-center gap-3 sm:flex-row'>
              <Link
                href='/docs'
                className={buttonVariants({
                  size: 'lg',
                  className: 'bg-teal-500 text-white hover:bg-teal-400',
                })}
              >
                Get started
                <ArrowRight className='size-4' />
              </Link>
              <Link
                href='https://github.com'
                className={buttonVariants({
                  size: 'lg',
                  variant: 'outline',
                  className:
                    'border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white',
                })}
              >
                <IoLogoGithub className='size-4' />
                View on GitHub
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Cta };
