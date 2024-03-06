import { ReactElement, ReactNode } from 'react';

import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import Head from 'next/head';

import { AppProviders } from '@/providers/AppProviders';

import { cn } from '@/utils/classname';

import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <title>Clean Architecture - Next JS with Tailwind</title>
      </Head>
      <AppProviders>
        {getLayout(
          <main
            className={cn(inter.className, 'text-foreground bg-background')}
          >
            <Component {...pageProps} />
          </main>
        )}
      </AppProviders>
    </>
  );
}
