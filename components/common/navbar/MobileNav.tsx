'use client';

import React, {useEffect, useRef, useState} from 'react';
import Link from 'next/link';
import {navItems} from '../NavBar';
import {motion} from 'framer-motion';

export default function MobileNav(): JSX.Element {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleClick(event): void {
      if (
        menuButton.current != null &&
        !menuButton.current.contains(event.target)
      ) {
        setOpen(false);
      }
    }
    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [open]);

  return (
    <div className="my-auto sm:hidden">
      <motion.div whileTap={{scale: 0.7}}>
        <button
          className="p-4 space-y-1 rounded-lg"
          onClick={() => {
            setOpen((prev) => !prev);
          }}
          ref={menuButton}>
          <span className="block w-5 h-0.5 bg-white"></span>
          <span className="block w-5 h-0.5 bg-white"></span>
          <span className="block w-5 h-0.5 bg-white"></span>
        </button>
      </motion.div>

      {open && (
        <ul className="absolute z-10 right-2 mt-4 w-32 origin-top-right divide-y divide-slate-700 rounded-lg bg-gray-900">
          {Object.entries(navItems).map(([name, {path}]) => {
            return (
              <li
                className="my-auto rounded-lg"
                key={path}
                onClick={() => {
                  setOpen(false);
                }}>
                <Link
                  href={path}
                  className="px-4 py-2 block border-gray-500 hover:bg-gray-900 rounded-lg">
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
