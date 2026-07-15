import { ArrowRight, Check, Copy, LockKeyhole, Search } from 'lucide-react';

import { ForgeMark } from '../branding';
import { Badge } from '../ui/badge';

function BrowserMockup() {
  return (
    // modified
    <div className='relative mx-auto w-full min-w-0 max-w-[900px]'>
      <div className='absolute -inset-4 -z-10 bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.22),transparent_62%)] blur-2xl sm:-inset-10' />

      <div className='overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 shadow-2xl shadow-teal-950/30 lg:h-[560px] xl:h-[600px] 2xl:h-[640px]'>
        <div className='flex h-10 items-center gap-2 border-b border-white/10 px-3'>
          <span className='size-3 rounded-full bg-red-400' />
          <span className='size-3 rounded-full bg-amber-400' />
          <span className='size-3 rounded-full bg-emerald-400' />

          <div className='mx-auto flex h-8 min-w-0 max-w-[72%] flex-1 items-center gap-2 overflow-hidden rounded-lg border border-white/10 bg-white/4 px-3 text-xs text-zinc-500 sm:max-w-[60%]'>
            <LockKeyhole className='size-3' />
            <span className='truncate'>forgeui.dev/components/form-field-control</span>
          </div>
        </div>
        {/* Modified */}
        <div className='grid min-h-0 grid-cols-1 lg:h-[calc(100%-2.5rem)] lg:grid-cols-[150px_minmax(0,1fr)]'>
          <aside className='hidden overflow-hidden border-r border-white/10 bg-black/20 p-3 lg:block'>
            <div className='mb-5 flex items-center gap-2'>
              <ForgeMark className='size-7 rounded-lg' />
              <span className='font-semibold text-white'>ForgeUI</span>
            </div>

            <div className='mb-5 flex h-8 items-center gap-2 rounded-md border border-white/10 px-2 text-[11px] text-zinc-500'>
              <Search className='size-3' />
              Search components...
            </div>

            <p className='mb-2 text-[10px] font-medium tracking-wider text-zinc-600 uppercase'>
              Getting started
            </p>
            <div className='space-y-1 text-xs text-zinc-400'>
              <p className='rounded px-2 py-1.5'>Introduction</p>
              <p className='rounded px-2 py-1.5'>Installation</p>
              <p className='rounded px-2 py-1.5'>Theming</p>
            </div>

            <p className='mt-5 mb-2 text-[10px] font-medium tracking-wider text-zinc-600 uppercase'>
              Components
            </p>
            <div className='space-y-1 text-xs text-zinc-400'>
              <p className='rounded-md bg-teal-500/15 px-2 py-1.5 text-teal-300'>
                Form Field Control
              </p>
              <p className='rounded px-2 py-1.5'>Rich Text Editor</p>
              <p className='rounded px-2 py-1.5'>File Upload</p>
              <p className='rounded px-2 py-1.5'>Data Table</p>
            </div>
          </aside>

          <div className='min-w-0 overflow-hidden p-3.5'>
            <div className='mb-3 flex flex-col justify-between gap-2 md:flex-row md:items-start'>
              <div>
                <div className='mb-2 flex items-center gap-2'>
                  <h3 className='text-xl font-semibold text-white'>
                    Form Field Control
                  </h3>
                  <Badge className='border-teal-400/20 bg-teal-500/10 text-teal-300 hover:bg-teal-500/10'>
                    New
                  </Badge>
                </div>
                <p className='max-w-lg text-xs leading-5 text-zinc-500'>
                  A typed form field that integrates with React Hook Form and
                  supports multiple input types.
                </p>
              </div>

              <div className='flex gap-4 text-xs text-zinc-500'>
                <span className='border-b border-teal-400 pb-2 text-teal-300'>
                  Preview
                </span>
                <span>Code</span>
                <span>Props</span>
              </div>
            </div>

            <div className='rounded-xl border border-white/10 bg-white/2.5 p-3'>
              <div className='grid gap-2.5 md:grid-cols-2'>
                <div className='space-y-2'>
                  <label className='text-xs font-medium text-zinc-300'>
                    Email address <span className='text-teal-400'>*</span>
                  </label>
                  <div className='flex h-9 items-center rounded-md border border-white/10 bg-black/20 px-3 text-xs text-zinc-500'>
                    you@example.com
                  </div>
                </div>

                <div className='space-y-2'>
                  <label className='text-xs font-medium text-zinc-300'>
                    Category <span className='text-teal-400'>*</span>
                  </label>
                  <div className='flex h-9 items-center justify-between rounded-md border border-white/10 bg-black/20 px-3 text-xs text-zinc-500'>
                    Select an option
                    <ArrowRight className='size-3 rotate-90' />
                  </div>
                </div>

                <div className='space-y-2'>
                  <label className='text-xs font-medium text-zinc-300'>
                    Subscribe to updates
                  </label>
                  <div className='flex items-center gap-2 text-xs text-zinc-500'>
                    <span className='flex size-4 items-center justify-center rounded border border-teal-400 bg-teal-400 text-black'>
                      <Check className='size-3' />
                    </span>
                    Send me new component updates.
                  </div>
                </div>

                <div className='space-y-2'>
                  <label className='text-xs font-medium text-zinc-300'>
                    Message
                  </label>
                  <div className='h-14 rounded-md border border-white/10 bg-black/20 p-3 text-xs text-zinc-500'>
                    Write your message...
                  </div>
                </div>
              </div>

              <div className='mt-3 flex gap-2'>
                <span className='rounded-md bg-teal-500 px-4 py-2 text-xs font-medium text-white'>
                  Save changes
                </span>
                <span className='rounded-md border border-white/10 px-4 py-2 text-xs text-zinc-400'>
                  Cancel
                </span>
              </div>
            </div>

            <div className='relative mt-4 ml-auto w-full max-w-md rounded-xl border border-white/10 bg-zinc-950 p-4 shadow-xl lg:hidden'>
              <div className='mb-3 flex items-center justify-between text-[10px] text-zinc-600'>
                <span>TSX</span>
                <Copy className='size-3' />
              </div>
              <pre className='overflow-x-auto text-[10px] leading-5 text-zinc-500'>
                <code>
                  <span className='text-cyan-300'>{'<FormFieldControl'}</span>
                  {'\n  '}
                  <span className='text-teal-300'>control</span>
                  {'={form.control}\n  '}
                  <span className='text-teal-300'>name</span>
                  {'="email"\n  '}
                  <span className='text-teal-300'>type</span>
                  {'="email"\n  '}
                  <span className='text-teal-300'>required</span>
                  {'\n'}
                  <span className='text-cyan-300'>{'/>'}</span>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { BrowserMockup };
