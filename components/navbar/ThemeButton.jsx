'use client';

import {useState, useEffect} from 'react';
import {useTheme} from 'next-themes';
import {IconButton} from '@material-tailwind/react';
import {MoonIcon, SunIcon} from '../Icons';

function ThemeButton() {
  const {systemTheme, theme, setTheme} = useTheme();
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    setIsRendered(true);
  }, []);

  function isDarkTheme() {
    return theme === 'system'
      ? systemTheme === 'dark'
        ? true
        : false
      : theme === 'dark'
      ? true
      : false;
  }

  function toggleTheme() {
    setTheme(isDarkTheme() ? 'light' : 'dark');
  }

  return (
    <div className="flex flex-row px-2 w-12">
      {isRendered && (
        <IconButton
          size="sm"
          variant="text"
          className="my-auto rounded-full text-black dark:text-white dark:hover:bg-slate-400/10"
          onClick={toggleTheme}>
          {isDarkTheme() && <MoonIcon className="h-6 w-6" />}
          {!isDarkTheme() && <SunIcon className="h-6 w-6" />}
        </IconButton>
      )}
    </div>
  );
}

export default ThemeButton;
