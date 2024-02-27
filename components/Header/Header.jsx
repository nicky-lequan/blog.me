import Link from 'next/link';
import Image from 'next/image';
import {Typography} from '@/providers/AppProvider';
import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';
import ThemeButton from './ThemeButton';

function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#DEF2FF]/90 dark:bg-[#0A090D]/90">
      <div className="mx-auto sm:px-4 px-2 flex flex-row h-[5.063rem] max-w-7xl justify-between items-center">
        <div className="flex flex-row my-auto">
          <Link href="/" className="my-auto">
            <div className="flex gap-3">
              <Image
                src="/assets/images/logo.png"
                alt="logo"
                width={48}
                height={48}
                priority={true}
              />
              <Typography
                variant="h4"
                className="my-auto font-bold lg:block hidden">
                jooncco
              </Typography>
            </div>
          </Link>
        </div>
        <div className="flex flex-row my-auto space-x-1">
          <DesktopMenu className="hidden md:flex" />
          <MobileMenu className="flex md:hidden" />
          <ThemeButton />
        </div>
      </div>
    </header>
  );
}

export default Header;
