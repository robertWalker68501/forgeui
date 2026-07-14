import { CheckCircle2 } from 'lucide-react';

import { COMPARISON } from '@/constants';

function WhyForgeui() {
  return (
    <section className='border-b py-20 lg:py-28'>
      <div className='mx-auto max-w-5xl px-5 lg:px-8'>
        <div className='text-center'>
          <p className='text-sm font-medium text-teal-600'>Why ForgeUI?</p>
          <h2 className='mt-3 text-3xl font-semibold tracking-tight sm:text-4xl'>
            Skip the repetitive integration work.
          </h2>
          <p className='text-muted-foreground mx-auto mt-4 max-w-2xl text-lg leading-8'>
            ForgeUI gives you the component, validation, accessibility, and
            application workflow in one place.
          </p>
        </div>

        <div className='mt-12 overflow-hidden rounded-2xl border'>
          <div className='bg-muted/40 grid grid-cols-[1fr_100px_120px] border-b px-5 py-4 text-sm font-medium'>
            <span>Capability</span>
            <span className='text-center'>ForgeUI</span>
            <span className='text-center'>Build yourself</span>
          </div>
          {COMPARISON.map(([label, forge, diy], index) => (
            <div
              key={label as string}
              className={`grid grid-cols-[1fr_100px_120px] items-center px-5 py-4 text-sm ${
                index !== COMPARISON.length - 1 ? 'border-b' : ''
              }`}
            >
              <span className='text-muted-foreground'>{label as string}</span>
              <span className='flex justify-center'>
                {forge ? (
                  <CheckCircle2 className='size-5 text-teal-600' />
                ) : null}
              </span>
              <span className='flex justify-center'>
                {diy ? (
                  <CheckCircle2 className='size-5 text-teal-600' />
                ) : (
                  <span className='text-muted-foreground'>Manual</span>
                )}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { WhyForgeui };
