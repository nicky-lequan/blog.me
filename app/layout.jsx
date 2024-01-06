import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import AppProvider from '../providers/AppProvider';
import AlertWithContent from '@/components/AlertWithContent';
import './globals.css';

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

const RootLayout = ({children}) => {
  return (
    <html lang="en">
      <body className="bg-base flex flex-col h-screen justify-between">
        <AppProvider>
          <NavBar />
          <main className="my-24 mx-auto max-w-6xl min-w-0">{children}</main>
          <Footer />
          <AlertWithContent />
        </AppProvider>
      </body>
    </html>
  );
};

export default RootLayout;
