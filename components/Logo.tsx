import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Logo(): JSX.Element {
  return (
    <div className="my-auto mx-2">
      <Link aria-label="jooncco.com logo" href="/">
        <Image src="/img/logo.png" alt="logo image" width={72} height={72} />
      </Link>
    </div>
  );
}
