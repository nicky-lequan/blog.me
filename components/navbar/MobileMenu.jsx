'use client';

import {useEffect, useRef, useState} from 'react';
import Link from 'next/link';
import {IconButton} from '@material-tailwind/react';
import {EllipsisHorizontalIcon, XMarkIcon} from '../Icons';
import {navItems} from '../NavBar';

function MobileMenu() {
  const mobileMenuRef = useRef();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleMobileMenuClickAway = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('mousedown', handleMobileMenuClickAway);
    return () => {
      window.removeEventListener('mousedown', handleMobileMenuClickAway);
    };
  }, [mobileMenuRef]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(mobileMenuOpen ? false : true);
  };

  return (
    <div
      ref={mobileMenuRef}
      className="md:hidden flex flex-1 justify-end items-center">
      <IconButton
        size="sm"
        variant="text"
        className="my-auto rounded-full text-black dark:text-white"
        onClick={toggleMobileMenu}>
        {!mobileMenuOpen && <EllipsisHorizontalIcon />}
        {mobileMenuOpen && <XMarkIcon />}
      </IconButton>

      <div
        className={`${
          !mobileMenuOpen ? 'hidden' : 'flex'
        } m-2 p-[0.063rem] absolute top-20 right-1 min-w-[8.75rem] z-10 green-violet-gradient shadow-md shadow-current dark:shadow-gray-800 rounded-xl`}>
        <div className="p-0 w-full bg-white/90 dark:bg-slate-950/90 rounded-xl">
          <ul className="py-2 list-none flex justify-end items-start flex-col font-bold">
            {navItems.map(({name, path}) => (
              <Link
                key={path}
                href={path}
                className="px-4 py-1 w-full rounded-lg hover:bg-slate-600/10 dark:hover:bg-slate-400/10"
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
    </div>
  );
}

export default MobileMenu;
