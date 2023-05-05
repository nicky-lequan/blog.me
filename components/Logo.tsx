import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Logo(): JSX.Element {
  return (
    <div className="m-2 my-auto">
      <Link aria-label="jooncco.com logo" href="/">
        <Image src="/img/logo.png" alt="logo image" width={60} height={60} />
      </Link>
    </div>
  );
}
