'use client';

import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {motion} from 'framer-motion';
import {useTheme} from 'next-themes';

export default function NavBanner(): JSX.Element {
  const {systemTheme, theme} = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  });

  return (
    <div className="flex justify-center items-center h-40">
      <Link aria-label="jooncco.com" href="/">
        <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 1}}>
          {mounted && (
            <Image
              src={`/img/banner_${
                systemTheme === 'light' || theme === 'light' ? 'light' : 'dark'
              }.png`}
              alt="banner image"
              width={400}
              height={280}
            />
          )}
        </motion.div>
      </Link>
    </div>
  );
}
