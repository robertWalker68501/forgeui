import {
  Code2,
  Copy,
  FileCode2,
  ShieldCheck,
  TerminalSquare,
  WandSparkles,
} from 'lucide-react';

import { CODE_SAMPLE } from '@/constants';

import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

function DeveloperExperience() {
  return (
    <section className='border-b bg-zinc-950 py-20 text-zinc-50 lg:py-28'>
      <div className='mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:items-center lg:px-8'>
        <div>
          <Badge className='border-teal-400/20 bg-teal-500/10 text-teal-300 hover:bg-teal-500/10'>
            Developer experience
          </Badge>
          <h2 className='mt-5 text-3xl font-semibold tracking-tight sm:text-4xl'>
            Documentation designed for copy, paste, and progress.
          </h2>
          <p className='mt-5 max-w-xl text-lg leading-8 text-zinc-400'>
            Every component includes installation steps, API details, Zod
            schemas, form examples, accessibility notes, server workflows, and
            troubleshooting guidance.
          </p>

          <div className='mt-8 grid gap-4 sm:grid-cols-2'>
            {[
              ['Typed APIs', Code2],
              ['Complete examples', FileCode2],
              ['Security guidance', ShieldCheck],
              ['Production recipes', WandSparkles],
            ].map(([label, Icon]) => {
              const ItemIcon = Icon as typeof Code2;
              return (
                <div
                  key={label as string}
                  className='flex items-center gap-3'
                >
                  <span className='flex size-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-teal-300'>
                    <ItemIcon className='size-4' />
                  </span>
                  <span className='text-sm text-zinc-300'>
                    {label as string}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className='overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-2xl'>
          <div className='flex items-center justify-between border-b border-white/10 px-4 py-3'>
            <div className='flex items-center gap-2 text-xs text-zinc-500'>
              <TerminalSquare className='size-4 text-teal-400' />
              CreatePostForm.tsx
            </div>
            <Button
              size='sm'
              variant='ghost'
              className='h-7 text-zinc-400 hover:bg-white/5 hover:text-white'
            >
              <Copy className='size-3.5' />
              Copy
            </Button>
          </div>
          <pre className='overflow-x-auto p-6 text-sm leading-7 text-zinc-400'>
            <code>{CODE_SAMPLE}</code>
          </pre>
        </div>
      </div>
    </section>
  );
}

export { DeveloperExperience };
