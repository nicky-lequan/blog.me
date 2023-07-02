'use client';

import React, {useEffect, useState} from 'react';
import Logo from './navbar/Logo';
import MobileNav from './navbar/MobileNav';
import DesktopNav from './navbar/DesktopNav';

export const navItems = {
  Home: {
    path: '/',
  },
  Posts: {
    path: '/posts',
  },
  Cp: {
    path: '/competitive-programming',
  },
  Resume: {
    path: '/resume',
  },
};

export default function NavBar(): JSX.Element {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    function changeColor(): void {
      if (window.scrollY >= 308) {
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
      className={`sticky top-0 flex justify-between ${
        isScrolling ? 'bg-gray-900/90' : 'bg-transparent'
      } border-b border-b-gray-500 rounded-b-xl`}>
      <div className="flex flex-row my-auto">
        <Logo />
        <DesktopNav />
      </div>
      <MobileNav />
    </div>
  );
}
