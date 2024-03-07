import type { AppProps } from 'next/app';
import { Inter, Poppins } from 'next/font/google';

import { ThemeProvider } from '@/providers/ThemeProvider';

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

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <main
        className={cn(
          'min-h-screen bg-background antialiased font-sans',
          inter.variable,
          poppins.variable
        )}
      >
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
