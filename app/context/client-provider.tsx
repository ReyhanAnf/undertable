'use client';

import { SessionProvider } from 'next-auth/react';
import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"


export default function Provider({
  children,
  session
}: {
  children: React.ReactNode,
  session: any
}): React.ReactNode {
  return <SessionProvider session={session} >
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange >
      {children}
    </NextThemesProvider>
  </SessionProvider>
}