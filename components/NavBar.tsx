'use client';

import React, {useEffect, useState} from 'react';
import Logo from './navbar/Logo';
import MobileNav from './navbar/MobileNav';
import DesktopNav from './navbar/DesktopNav';
import {HomeIcon, BookmarkIcon, TrophyIcon, IdCardIcon} from './Icons';
import ThemeSwitch from './navbar/ThemeSwitch';

export const navItems = {
  Home: {
    path: '/',
    icon: <HomeIcon className="h-5 w-5" />,
  },
  Posts: {
    path: '/posts',
    icon: <BookmarkIcon className="h-5 w-5" />,
  },
  Cp: {
    path: '/competitive-programming',
    icon: <TrophyIcon className="h-5 w-5" />,
  },
  Resume: {
    path: '/resume',
    icon: <IdCardIcon className="h-5 w-5" />,
  },
};

export default function NavBar(): JSX.Element {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    function changeColor(): void {
      if (window.scrollY >= 192) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }
    window.addEventListener('scroll', changeColor);
    return () => {
      window.removeEventListener('scroll', changeColor);
    };
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 flex justify-between shadow-sm shadow-gray-500 dark:shadow-gray-800 rounded-b-xl
        ${
          isScrolling ? 'bg-blue-100/60 dark:bg-[#202A44]/60' : 'bg-transparent'
        }`}>
      <div className="flex flex-row my-auto">
        <Logo />
        <DesktopNav />
      </div>
      <div className="px-3 flex flex-row my-auto space-x-2">
        <ThemeSwitch />
        <MobileNav />
      </div>
    </div>
  );
}
