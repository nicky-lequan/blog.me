import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import AppProvider from '../providers/AppProvider';
import AlertWithContent from '@/components/AlertWithContent';
import './globals.css';

export const metadata = {
  title: {
    default: 'jooncco',
  },
  description: "Developer jooncco's blog.",
  icons: {
    shortcut: '/assets/images/favicon.ico',
  },
};

function RootLayout({children}) {
  return (
    <html lang="en">
      <body className="bg-base">
        <AppProvider>
          <NavBar />
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
