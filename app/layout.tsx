import React from 'react';
import './global.css';
import type {Metadata} from 'next';
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
      <body className="mb-40 bg-white dark:bg-black">
        <ThemeProvider attribute="class">
          <NavBar />
          <main className="max-w-6xl mx-auto mt-2 min-w-0 px-6 py-4 flex-auto flex flex-col bg-gray-100/80 dark:bg-[#0F0F0F] rounded-2xl">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
