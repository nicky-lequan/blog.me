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

  const isDarkTheme = () => {
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

  return (
    <>
      {isRendered && (
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
      )}
    </>
  );
}

export default ThemeButton;
