import React from 'react';
import './global.css';
import NavBar from '@/components/NavBar';
import {ThemeProvider} from './provider';
import Footer from '@/components/Footer';

export const metadata = {
  title: {
    default: 'jooncco.dev',
    template: '%s | jooncco.dev',
  },
  description: "Developer jooncco's blog.",
  icons: {
    shortcut: '/img/favicon.ico',
  },
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className="bg-base">
        <ThemeProvider attribute="class">
          <NavBar />
          <main className="mb-40 max-w-6xl mx-auto mt-24 min-w-0 px-6 py-4 flex-auto flex flex-col bg-neutral rounded-2xl">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
