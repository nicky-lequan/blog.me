import React from 'react';
import './global.css';
import type {Metadata} from 'next';
import NavBanner from '@/components/common/navbar/NavBanner';
import NavBar from '@/components/common/NavBar';

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
  children: React.ReactNode;
}): React.ReactNode {
  return (
    <html lang="en" className="text-white bg-black">
      <body className="max-w-7xl mx-auto mb-40 mx-4 mt-8 md:mt-12">
        <NavBanner />
        <NavBar />
        <main className="min-w-0 mt-4 px-6 py-4 flex-auto flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
