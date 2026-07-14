import { ArrowRight, Menu } from 'lucide-react';
import Link from 'next/link';
import { IoLogoGithub } from 'react-icons/io';

import { ForgeMark } from '@/components/branding';
import { NAVIGATION } from '@/constants';

import { Button, buttonVariants } from '../ui/button';

const SiteHeader = () => {
  return (
    <header className='bg-background/85 sticky top-0 z-50 border-b backdrop-blur-xl'>
      <div className='mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8'>
        <Link
          href='/'
          className='flex items-center gap-3'
        >
          <ForgeMark />
          <span className='text-lg font-semibold tracking-tight'>
            Forge<span className='text-teal-500'>UI</span>
          </span>
        </Link>

        <nav className='hidden items-center gap-7 md:flex'>
          {NAVIGATION.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className='text-muted-foreground hover:text-foreground text-sm transition-colors'
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className='flex items-center gap-2'>
          <Link
            href='https://github.com'
            aria-label='View ForgeUI on GitHub'
            className={buttonVariants({
              variant: 'ghost',
              size: 'icon',
            })}
          >
            <IoLogoGithub className='size-4' />
          </Link>
          <Link
            href='/docs'
            className={buttonVariants({
              className:
                'hidden bg-teal-600 text-white hover:bg-teal-500 sm:inline-flex',
            })}
          >
            Get started
            <ArrowRight className='size-4' />
          </Link>
          <Button
            variant='ghost'
            size='icon'
            className='md:hidden'
          >
            <Menu className='size-5' />
          </Button>
        </div>
      </div>
    </header>
  );
};

export { SiteHeader };
