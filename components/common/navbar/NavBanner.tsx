'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {motion} from 'framer-motion';

export default function NavBanner(): JSX.Element {
  return (
    <div className="flex justify-center md:mb-8">
      <Link aria-label="jooncco.com" href="/">
        <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 1}}>
          <Image
            src="/img/banner.png"
            alt="banner image"
            width={1170}
            height={180}
          />
        </motion.div>
      </Link>
    </div>
  );
}
