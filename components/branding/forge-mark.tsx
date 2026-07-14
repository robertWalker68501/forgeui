import { Hammer, Sparkles } from 'lucide-react';

import { cn } from '@/lib/utils';

export type ForgeMarkProps = {
  className?: string;
};

export function ForgeMark({ className }: ForgeMarkProps) {
  return (
    <span
      className={cn(
        'relative flex size-9 items-center justify-center',
        'rounded-xl border border-teal-400/30',
        'bg-teal-500/10 text-teal-400',
        'shadow-[0_0_30px_-10px_rgba(20,184,166,0.9)]',
        className
      )}
    >
      <Hammer
        className='size-5'
        strokeWidth={1.8}
      />

      <Sparkles
        className='absolute -top-1 -right-1 size-3 text-cyan-300'
        aria-hidden='true'
      />
    </span>
  );
}
