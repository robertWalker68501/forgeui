import type { Metadata } from 'next';
import { Public_Sans, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Toaster } from 'sonner';

import { cn } from '@/lib/utils';
import Providers from '@/providers/providers';

const spaceGroteskHeading = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
});

const publicSans = Public_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'ForgeUI',
  description:
    'ForgeUI is a collection of production-ready React components designed for building modern applications faster.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={cn(
        'h-full',
        'antialiased',
        'font-sans',
        publicSans.variable,
        spaceGroteskHeading.variable
      )}
      suppressHydrationWarning
    >
      <body
        className='flex min-h-full flex-col'
        suppressHydrationWarning
      >
        <Providers>{children}</Providers>
        <Toaster richColors />
      </body>
    </html>
  );
}
