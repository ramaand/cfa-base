import { PropsWithChildren } from 'react';

import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemeProvider } from 'next-themes';

export const AppProviders: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <NextUIProvider>
      <NextThemeProvider attribute="class" forcedTheme="light">
        {children}
      </NextThemeProvider>
    </NextUIProvider>
  );
};
