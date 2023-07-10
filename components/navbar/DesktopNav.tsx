'use client';

import React from 'react';
import {LayoutGroup, motion} from 'framer-motion';
import {usePathname} from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';
import {navItems} from '../NavBar';

export default function DesktopNav(): JSX.Element {
  const pathname = usePathname() ?? '/';

  return (
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
                      className="absolute inset-0 bg-indigo-500/40 dark:bg-gray-900/90 rounded-md z-[-1]"
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
  );
}
