import Link from 'next/link';

import { ForgeMark } from '@/components/branding';

const SiteFooter = () => {
  return (
    <footer className='border-t'>
      <div className='mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.4fr_repeat(3,1fr)] lg:px-8'>
        <div>
          <Link
            href='/'
            className='flex items-center gap-3'
          >
            <ForgeMark />
            <span className='font-semibold'>
              Forge<span className='text-teal-500'>UI</span>
            </span>
          </Link>
          <p className='text-muted-foreground mt-4 max-w-sm text-sm leading-6'>
            Production-ready React components and application patterns built for
            real projects.
          </p>
        </div>

        {[
          ['Product', ['Components', 'Patterns', 'Examples', 'Changelog']],
          ['Resources', ['Documentation', 'Installation', 'Theming', 'FAQ']],
          ['Project', ['GitHub', 'License', 'Contributing', 'Roadmap']],
        ].map(([title, links]) => (
          <div key={title as string}>
            <p className='text-sm font-medium'>{title as string}</p>
            <div className='mt-4 space-y-3'>
              {(links as string[]).map((link) => (
                <Link
                  key={link}
                  href='#'
                  className='text-muted-foreground hover:text-foreground block text-sm'
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className='border-t'>
        <div className='text-muted-foreground mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs sm:flex-row sm:items-center sm:justify-between lg:px-8'>
          <p>© 2026 ForgeUI. Built for modern React applications.</p>
          <p>Shadcn UI · Tailwind CSS · TypeScript</p>
        </div>
      </div>
    </footer>
  );
};

export { SiteFooter };
