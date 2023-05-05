'use client';

import React from 'react';
import {LayoutGroup, motion} from 'framer-motion';
import {usePathname} from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';
import Logo from './Logo';
import NavButton from './NavButton';

const navItems = {
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
  const pathname = usePathname() ?? '/';

  return (
    <div className="sticky top-0 h-15 sm:h-20 flex justify-between bg-slate-700/9 border-b border-b-slate-700/40">
      <div className="flex flex-row my-auto">
        <Logo />
        <div className="my-auto hidden sm:block">
          <LayoutGroup>
            <nav className="flex space-x-2">
              {Object.entries(navItems).map(([name, {path}]) => {
                const isActive = path === pathname;
                return (
                  <Link
                    key={path}
                    href={path}
                    className={clsx(
                      'transition-all hover:text-neutral-200 flex align-middle',
                      {
                        'text-neutral-500': !isActive,
                        'font-bold': isActive,
                      }
                    )}>
                    <span className="relative py-[5px] px-[10px]">
                      {name}
                      {path === pathname && (
                        <motion.div
                          className="absolute inset-0 bg-neutral-800 rounded-md z-[-1]"
                          layoutId="sidebar"
                          transition={{
                            type: 'spring',
                            stiffness: 350,
                            damping: 30,
                          }}
                        />
                      )}
                    </span>
                  </Link>
                );
              })}
            </nav>
          </LayoutGroup>
        </div>
      </div>
      <div className="my-auto sm:hidden">
        <NavButton />
      </div>
    </div>
  );
}
