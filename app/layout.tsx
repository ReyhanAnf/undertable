

import type { Metadata } from "next";
import { Poppins } from "next/font/google"
import "./globals.css";
import { cn } from "@/lib/utils";
import MainNavbar from "@/components/utils/navbar/main-navbar";
import { Toaster } from "@/components/ui/toaster";
import { Providers } from "./Providers";

const poppins = Poppins({
  weight: "400",
  variable: "--font-sans",
  subsets: ["latin"],
  preload: true
})

export const metadata: Metadata = {
  title: "Undertable",
  description: "Share your homework",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-slate-200/90 dark:bg-black font-sans antialiased w-full",
        poppins.variable
      )}>
        <Providers>
          <header>
            <MainNavbar />
          </header>
          {children}
        </Providers>
        <Toaster />

      </body>
    </html>
  );
}
