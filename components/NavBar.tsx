import React from 'react';
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
  return (
    <div className="sticky top-0 flex justify-between bg-slate-700/9 border-b border-b-slate-700/40">
      <div className="flex flex-row my-auto">
        <Logo />
        <DesktopNav />
      </div>
      <MobileNav />
    </div>
  );
}
