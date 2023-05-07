'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {motion} from 'framer-motion';

export default function Logo(): JSX.Element {
  return (
    <div className="m-2 my-auto">
      <Link aria-label="jooncco.com logo" href="/">
        <motion.div whileTap={{scale: 0.7}}>
          <Image src="/img/logo.png" alt="logo image" width={60} height={60} />
        </motion.div>
      </Link>
    </div>
  );
}
