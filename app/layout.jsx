import Header from '@/components/Header/Header';
import Footer from '@/components/Footer';
import AppProvider from '../providers/AppProvider';
import AlertWithContent from '@/components/AlertWithContent';
import './globals.css';

export const metadata = {
  metadataBase: new URL('https://jooncco.me/'),
  title: {
    default: 'jooncco',
    template: '%s | jooncco',
  },
  description: 'About developer jooncco.',
  keywords: ['jooncco', 'developer', 'web', 'portfolio'],
};

function RootLayout({children}) {
  return (
    <html lang="en">
      <body className="bg-base">
        <AppProvider>
          <Header />
          <main className="flex flex-col my-24 mx-auto max-w-6xl min-w-0">
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
