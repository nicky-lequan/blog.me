'use client';

import React, {useEffect, useRef, useState} from 'react';
import {SunIcon, MoonIcon, Bars3Icon, Bars3BottomRifhtIcon} from './Icons';
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
  },
  Posts: {
    path: '/posts',
  },
  CP: {
    path: '/competitive-programming',
  },
  Contact: {
    path: '/contact',
  },
};

export default function NavBar(): JSX.Element {
  const pathname = usePathname() ?? '/';
  const {systemTheme, theme, setTheme} = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMobileMenuClickAway = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('mousedown', handleMobileMenuClickAway);
    return () => {
      window.removeEventListener('mousedown', handleMobileMenuClickAway);
    };
  }, [mobileMenuRef]);

  const isDarkTheme = (): boolean => {
    return theme === 'system'
      ? systemTheme === 'dark'
        ? true
        : false
      : theme === 'dark'
      ? true
      : false;
  };

  const toggleTheme = () => {
    setTheme(isDarkTheme() ? 'light' : 'dark');
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(mobileMenuOpen ? false : true);
  };

  return (
    <>
      <div className="fixed top-0 w-full z-50 bg-[#DEF2FF]/90 dark:bg-[#0A090D]/90">
        <div className="mx-auto sm:px-4 px-2 flex flex-row h-[81px] max-w-7xl justify-between items-center">
          {/* left */}
          <div className="flex flex-row my-auto">
            {/* logo */}
            <Link
              href="/"
              className="my-auto"
              onClick={() => {
                window.scrollTo(0, 0);
              }}>
              <div className="flex flex-row space-x-2">
                <Image
                  src="/img/logo.png"
                  alt="logo image"
                  width={70}
                  height={70}
                />
                <Typography
                  variant="h4"
                  className="my-auto font-['raleway'] font-extrabold sm:block hidden">
                  jooncco.dev
                </Typography>
              </div>
            </Link>
          </div>
          {/* right */}
          <div className="flex flex-row my-auto space-x-1">
            {/* pc menu */}
            <div className="my-auto md:block hidden">
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
                        )}
                        onClick={() => {
                          window.scrollTo(0, 0);
                        }}>
                        <span className="relative py-[5px] px-[10px] text-xl">
                          {name}
                          {isActive && (
                            <motion.div
                              className="absolute inset-0 z-[-1] bg-secondary rounded-md"
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
            {/* mobile menu */}
            <div
              ref={mobileMenuRef}
              className="md:hidden flex flex-1 justify-end items-center">
              <IconButton
                size="sm"
                variant="text"
                className="my-auto rounded-full text-black dark:text-white"
                onClick={toggleMobileMenu}>
                {!mobileMenuOpen && <Bars3Icon className="h-6 w-6" />}
                {mobileMenuOpen && <Bars3BottomRifhtIcon className="h-6 w-6" />}
              </IconButton>

              <div
                className={`${
                  !mobileMenuOpen ? 'hidden' : 'flex'
                } m-2 p-4 absolute top-20 right-1 min-w-[140px] z-10 bg-gradient-to-r from-white to-primary dark:from-[#18122B] dark:to-[#3F0071] shadow-md shadow-current dark:shadow-gray-800 rounded-xl`}>
                <ul className="p-0 list-none flex justify-end items-start flex-col gap-4 font-bold">
                  {Object.entries(navItems).map(([name, {path}]) => (
                    <Link
                      key={path}
                      href={path}
                      onClick={() => {
                        window.scrollTo(0, 0);
                        setMobileMenuOpen(false);
                      }}>
                      {name}
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
            {/* dark mode button */}
            <div className="flex flex-row px-2">
              <IconButton
                size="sm"
                variant="text"
                className="my-auto rounded-full text-black dark:text-white"
                onClick={toggleTheme}>
                {isDarkTheme() && <MoonIcon className="h-6 w-6" />}
                {!isDarkTheme() && <SunIcon className="h-6 w-6" />}
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
