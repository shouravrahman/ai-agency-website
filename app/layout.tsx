
import { Analytics } from '@vercel/analytics/react';

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const font = Poppins(
  { subsets: ["latin"],
    weight: '400'
}
  );

export const metadata: Metadata = {
     title: "AI-Driven Digital Marketing Agency",
     description: "Empowering businesses with AI-driven strategies for SEO, content creation, analytics, and campaign optimization. Transform your marketing with cutting-edge technology.",
  };


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body

      suppressHydrationWarning={true}
      className={font.className}>
        <Analytics />
        {children}

        </body>
    </html>
  );
}
