import React from 'react';
import './global.css';
import type {Metadata} from 'next';
import NavBanner from '@/components/navbar/NavBanner';
import NavBar from '@/components/NavBar';
import {ThemeProvider} from './provider';

export const metadata: Metadata = {
  title: {
    default: 'jooncco.com',
    template: '%s | jooncco.com',
  },
  description: "Developer jooncco's blog.",
  icons: {
    shortcut: '/img/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: JSX.Element;
}): JSX.Element {
  return (
    <html lang="en">
      <body className="max-w-7xl mx-auto mb-40 mx-4 mt-8 md:mt-12">
        <ThemeProvider attribute="class">
          <NavBanner />
          <NavBar />
          <main className="min-w-0 mt-4 px-6 py-4 flex-auto flex flex-col">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
