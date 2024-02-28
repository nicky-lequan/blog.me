import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import AppProvider from '../providers/AppProvider';
import AlertWithContent from '@/components/AlertWithContent';
import './globals.css';

export const metadata = {
  metadataBase: new URL('https://jooncco.me/'),
  title: {
    default: 'jooncco.me',
    template: '%s | jooncco',
  },
  description: 'This cool nerd never stops.',
  keywords: ['jooncco', 'developer', 'web', 'portfolio'],
};

function RootLayout({children}) {
  return (
    <html lang="en">
      <body className="bg-base">
        <AppProvider>
          <Header />
          <main className="flex flex-col my-28 mx-auto max-w-6xl min-w-0">
            {children}
          </main>
          <Footer />
          <AlertWithContent />
        </AppProvider>
      </body>
    </html>
  );
}

export default RootLayout;
