
import { Analytics } from '@vercel/analytics/react';

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

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
           <script
              dangerouslySetInnerHTML={{
                 __html: `
              (function(d, t) {
                var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
                v.onload = function() {
                  window.voiceflow.chat.load({
                    verify: { projectID: '674e424d49b8573a0d523b73' },
                    url: 'https://general-runtime.voiceflow.com',
                    versionID: 'production'
                  });
                }
                v.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
                v.type = "text/javascript";
                s.parentNode.insertBefore(v, s);
              })(document, 'script');
            `
              }}
           />
        </body>
    </html>
  );
}
