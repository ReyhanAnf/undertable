

import type { Metadata } from "next";
import { Poppins } from "next/font/google"
import "./globals.css";
import { cn } from "@/lib/utils";
import MainNavbar from "@/components/utils/navbar/main-navbar";
import Provider from "./context/client-provider";
import { Toaster } from "@/components/ui/toaster";
import Refresh from "./refresh";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

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

export const dynamic = 'force-static'

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  const session = await getServerSession(authOptions)
  console.log(session)


  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-slate-200/90 dark:bg-black font-sans antialiased w-full",
        poppins.variable
      )}>
        <Provider session={session}>
          <header>
            <MainNavbar />
            <Refresh />
          </header>
          {children}
        </Provider>
        <Toaster />

      </body>
    </html>
  );
}
