import { PropsWithChildren } from "react";
import { ThemeProvider } from "next-themes";
import { NextUIProvider } from "@nextui-org/react";

export const AppProviders = ({ children }: PropsWithChildren) => {
  return (
    <NextUIProvider>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        {children}
      </ThemeProvider>
    </NextUIProvider>
  );
};
