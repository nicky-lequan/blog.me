import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import AppProvider from '../providers/AppProvider';
import AlertWithContent from '@/components/AlertWithContent';
import './global.css';

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
      <body className="bg-base flex flex-col h-screen justify-between">
        <AppProvider>
          <NavBar />
          <main className="mb-20 max-w-6xl mx-auto mt-24 min-w-0 px-6 py-4 flex-auto flex flex-col bg-neutral rounded-2xl">
            {children}
          </main>
          <Footer />
          <AlertWithContent />
        </AppProvider>
      </body>
    </html>
  );
}
