'use client';

import {useEffect, useRef, useState} from 'react';
import Link from 'next/link';
import {IconButton} from '@material-tailwind/react';
import {EllipsisHorizontalIcon, XMarkIcon} from '../Icons';
import {NAV_ITEMS} from './constants';

function MobileMenu({className}) {
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
      className={`${className} flex-1 justify-end items-center`}>
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
        <nav className="p-0 w-full bg-white/90 dark:bg-slate-950/90 rounded-xl">
          <ul className="py-2 list-none flex justify-end items-start flex-col font-bold">
            {NAV_ITEMS.map(({name, path}) => (
              <li key={path} className="px-4 py-1 w-full rounded-lg">
                <Link href={path} onClick={() => setMobileMenuOpen(false)}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default MobileMenu;
