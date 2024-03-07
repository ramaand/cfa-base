import { ReactElement, ReactNode } from 'react';

import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { Inter, Poppins } from 'next/font/google';

import { ThemeProvider } from '@/providers/ThemeProvider';
import { SessionProvider } from 'next-auth/react';

import { cn } from '@/libs/utils';

import '@/styles/globals.css';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <SessionProvider session={session}>
        {getLayout(
          <main
            className={cn(
              'min-h-screen bg-background antialiased font-sans',
              inter.variable,
              poppins.variable
            )}
          >
            <Component {...pageProps} />
          </main>
        )}
      </SessionProvider>
    </ThemeProvider>
  );
}
