import React from 'react';
import {
  IconButton,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
} from '@material-tailwind/react';
import {PlusIcon} from '@heroicons/react/24/solid';
import {navItems} from '../NavBar';
import Link from 'next/link';

export default function MobileNav(): JSX.Element {
  return (
    <div className="sm:hidden">
      <SpeedDial placement="bottom">
        <SpeedDialHandler>
          <IconButton className="h-8 w-8 rounded-full shadow-0 hover:shadow-0 bg-gray-800 border-gray-800">
            <PlusIcon className="h-4 w-4 transition-transform group-hover:rotate-45" />
          </IconButton>
        </SpeedDialHandler>
        <SpeedDialContent>
          {Object.entries(navItems).map(([name, {path, icon}]) => {
            return (
              <SpeedDialAction
                key={name}
                className="h-6 w-6 bg-gray-800 border-gray-800">
                <Link href={path}>{icon}</Link>
              </SpeedDialAction>
            );
          })}
        </SpeedDialContent>
      </SpeedDial>
    </div>
  );
}
