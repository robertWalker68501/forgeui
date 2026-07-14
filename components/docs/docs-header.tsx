import Link from 'next/link';
import { IoLogoGithub } from 'react-icons/io';

import { ForgeMark } from '@/components/branding';
import { buttonVariants } from '@/components/ui/button';

export function DocsHeader() {
  return (
    <header className='bg-background/90 sticky top-0 z-50 border-b backdrop-blur-xl'>
      <div className='mx-auto flex h-16 max-w-375 items-center gap-5 px-5'>
        <Link
          href='/'
          className='flex items-center gap-3'
        >
          <ForgeMark className='size-8 rounded-lg' />
          <span className='font-semibold tracking-tight'>
            Forge<span className='text-teal-500'>UI</span>
          </span>
        </Link>
        <span
          aria-hidden='true'
          className='bg-border hidden h-5 w-px sm:block'
        />
        <Link
          href='/docs'
          className='hidden text-sm font-medium sm:block'
        >
          Documentation
        </Link>
        <div className='ml-auto'>
          <Link
            href='https://github.com'
            className={buttonVariants({ variant: 'ghost', size: 'icon' })}
            aria-label='View ForgeUI on GitHub'
          >
            <IoLogoGithub className='size-4' />
          </Link>
        </div>
      </div>
    </header>
  );
}
