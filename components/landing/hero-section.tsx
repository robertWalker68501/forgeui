import { ArrowRight, BookOpen, CheckCircle2, Sparkles } from 'lucide-react';
import Link from 'next/link';

import { BrowserMockup } from './browser-mockup';
import { buttonVariants } from '../ui/button';

function HeroSection() {
  return (
    <section className='relative border-b'>
      <div className='absolute inset-0 -z-10 bg-[linear-gradient(to_right,color-mix(in_oklab,var(--border)_35%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_oklab,var(--border)_35%,transparent)_1px,transparent_1px)] mask-[linear-gradient(to_bottom,black,transparent_90%)] bg-size-[64px_64px]' />
      <div className='absolute top-0 left-1/2 -z-10 h-96 w-[min(56rem,95vw)] -translate-x-1/2 rounded-full bg-teal-500/10 blur-[130px] sm:h-125 sm:w-225' />

      <div className='mx-auto grid w-full max-w-[1600px] grid-cols-1 gap-12 px-5 py-16 sm:gap-16 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-8 lg:px-8 lg:py-12 xl:gap-12 2xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] 2xl:gap-14 2xl:py-12'>
        <div className='min-w-0'>
          <div className='bg-background/70 text-muted-foreground mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs shadow-sm'>
            <Sparkles className='size-3.5 text-teal-500' />
            Production-ready components for modern apps
            <ArrowRight className='size-3.5' />
          </div>

          <h1 className='max-w-3xl text-4xl font-semibold tracking-[-0.045em] text-balance sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl'>
            Build modern applications{' '}
            <span className='bg-linear-to-r from-teal-600 via-cyan-500 to-slate-300 bg-clip-text text-transparent'>
              without rebuilding the basics.
            </span>
          </h1>

          <p className='text-muted-foreground mt-6 max-w-2xl text-lg leading-8 text-pretty'>
            ForgeUI is a growing library of fully typed React components and
            application patterns built with Shadcn UI, Tailwind CSS, React Hook
            Form, Zod, UploadThing, Better Auth, Prisma, and Next.js.
          </p>

          <div className='mt-7 flex flex-col gap-3 sm:flex-row'>
            <Link
              href='/components'
              className={buttonVariants({
                size: 'lg',
                className: 'bg-teal-600 text-white hover:bg-teal-500',
              })}
            >
              Browse components
              <ArrowRight className='size-4' />
            </Link>
            <Link
              href='/docs'
              className={buttonVariants({
                size: 'lg',
                variant: 'outline',
              })}
            >
              <BookOpen className='size-4' />
              View documentation
            </Link>
          </div>

          <div className='text-muted-foreground mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm'>
            {[
              'Fully typed',
              'Accessible',
              'Developer friendly',
              'Easy to customize',
            ].map((item) => (
              <span
                key={item}
                className='flex items-center gap-2'
              >
                <CheckCircle2 className='size-4 text-teal-500' />
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className='min-w-0 lg:flex lg:items-center lg:justify-center'>
          <BrowserMockup />
        </div>
      </div>
    </section>
  );
}

export { HeroSection };
