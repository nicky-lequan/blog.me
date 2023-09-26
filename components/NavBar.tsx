'use client';

import React, {useEffect, useState} from 'react';
import {HomeIcon, BookmarkIcon, TrophyIcon, SunIcon, MoonIcon} from './Icons';
import Link from 'next/link';
import Image from 'next/image';
import {LayoutGroup, motion} from 'framer-motion';
import {usePathname} from 'next/navigation';
import clsx from 'clsx';
import {useTheme} from 'next-themes';
import {IconButton, Typography} from '@material-tailwind/react';

const navItems = {
  About: {
    path: '/about',
    icon: <HomeIcon className="h-5 w-5" />,
  },
  Posts: {
    path: '/posts',
    icon: <BookmarkIcon className="h-5 w-5" />,
  },
  CP: {
    path: '/competitive-programming',
    icon: <TrophyIcon className="h-5 w-5" />,
  },
  Contact: {
    path: '/contact',
    icon: <TrophyIcon className="h-5 w-5" />,
  },
};

export default function NavBar(): JSX.Element {
  const pathname = usePathname() ?? '/';
  const {systemTheme, theme, setTheme} = useTheme();
  // const [isScrolling, setIsScrolling] = useState(false);

  // useEffect(() => {
  //   function changeColor(): void {
  //     if (window.scrollY >= 192) {
  //       setIsScrolling(true);
  //     } else {
  //       setIsScrolling(false);
  //     }
  //   }
  //   window.addEventListener('scroll', changeColor);
  //   return () => {
  //     window.removeEventListener('scroll', changeColor);
  //   };
  // }, []);

  const toggleTheme = (): void => {
    setTheme(
      theme === 'system'
        ? systemTheme === 'dark'
          ? 'light'
          : 'dark'
        : theme === 'dark'
        ? 'light'
        : 'dark'
    );
  };

  return (
    <>
      <div className="sticky top-0 z-50 bg-gray-100 dark:bg-[#151515]">
        <div className="flex flex-row max-w-7xl mx-auto justify-between">
          {/* left */}
          <div className="flex flex-row my-auto">
            {/* logo */}
            <Link href="/" className="m-2 my-auto">
              <div className="flex flex-row space-x-2">
                <Image
                  src="/img/logo.png"
                  alt="logo image"
                  width={70}
                  height={70}
                />
                <Typography
                  variant="h4"
                  className="my-6 font-['raleway'] font-extrabold">
                  jooncco.dev
                </Typography>
              </div>
            </Link>
          </div>
          {/* right */}
          <div className="flex flex-row px-4 my-auto space-x-4">
            {/* menu */}
            <div className="my-auto hidden md:block">
              <LayoutGroup>
                <nav className="flex space-x-4">
                  {Object.entries(navItems).map(([name, {path}]) => {
                    const isActive = path === pathname;
                    return (
                      <Link
                        key={path}
                        href={path}
                        className={clsx(
                          'transition-all rounded-md flex align-middle',
                          {
                            'hover:bg-gray-300/60': !isActive,
                            'dark:hover:bg-transparent': !isActive,
                            'text-neutral-500': !isActive,
                            'font-bold': isActive,
                          }
                        )}>
                        <span className="relative py-[5px] px-[10px] text-xl">
                          {name}
                          {isActive && (
                            <motion.div
                              className="absolute inset-0 z-[-1] bg-blue-500/20 dark:bg-[#DA0037] rounded-md"
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
            {/* switch theme button */}
            <div className="flex flex-row px-2 rounded-full">
              <IconButton
                size="sm"
                variant="text"
                className="my-auto rounded-full text-black dark:text-white"
                onClick={toggleTheme}>
                {theme === 'system' ? (
                  systemTheme === 'light' ? (
                    <SunIcon className="h-6 w-6" />
                  ) : (
                    <MoonIcon className="h-6 w-6" />
                  )
                ) : theme === 'light' ? (
                  <SunIcon className="h-6 w-6" />
                ) : (
                  <MoonIcon className="h-6 w-6" />
                )}
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
