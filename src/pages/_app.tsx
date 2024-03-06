import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import Head from 'next/head';

import { AppProviders } from '@/providers/AppProviders';

import { cn } from '@/utils/classname';

import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Clean Architecture - Next JS with Tailwind</title>
      </Head>
      <AppProviders>
        <main className={cn(inter.className, 'text-foreground bg-background')}>
          <Component {...pageProps} />
        </main>
      </AppProviders>
    </>
  );
}
