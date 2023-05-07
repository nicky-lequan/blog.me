import React from 'react';
import Logo from './navbar/Logo';
import NavButton from './navbar/MobileNav';
import DesktopNav from './navbar/DesktopNav';

export const navItems = {
  home: {
    path: '/',
  },
  resume: {
    path: '/resume',
  },
  posts: {
    path: '/posts',
  },
  cp: {
    path: '/cp',
  },
};

export default function NavBar(): JSX.Element {
  return (
    <div className="sticky top-0 h-15 sm:h-20 flex justify-between bg-slate-700/9 border-b border-b-slate-700/40">
      <div className="flex flex-row my-auto">
        <Logo />
        <DesktopNav />
      </div>
      <NavButton />
    </div>
  );
}
