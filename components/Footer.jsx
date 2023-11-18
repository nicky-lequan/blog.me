'use client';

import React from 'react';
import {Typography} from '@material-tailwind/react';
import Image from 'next/image';
import {
  CodeforcesIcon,
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LeetcodeIcon,
  LinkedinIcon,
} from './Icons';

const footerItems = [
  {
    name: 'Github',
    href: 'https://github.com/jooncco',
    icon: <GithubIcon />,
  },
  {
    name: 'Leetcode',
    href: 'https://leetcode.com/jooncco',
    icon: <LeetcodeIcon />,
  },
  {
    name: 'Codeforces',
    href: 'https://codeforces.com/profile/jooncco',
    icon: <CodeforcesIcon />,
  },
  {
    name: 'Linkedin',
    href: 'https://linkedin.com/in/jooncco',
    icon: <LinkedinIcon />,
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/jooncco',
    icon: <InstagramIcon />,
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com/jooncco',
    icon: <FacebookIcon />,
  },
];

const Footer = () => (
  <footer className="px-8 py-2 w-full bg-neutral">
    <div className="px-2 flex flex-col flex-wrap items-center justify-center gap-x-12 text-center">
      <Image
        width={100}
        height={100}
        src="/img/logo.png"
        alt="jooncco.dev"
        className="w-14"
      />
      <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
        {footerItems.map(({name, href, icon}) => (
          <Typography
            key={name}
            as="a"
            href={href}
            className="opacity-80 transition-opacity hover:opacity-100">
            {icon}
          </Typography>
        ))}
      </div>
    </div>
    <hr className="my-4 border-blue-gray-900" />
    <Typography color="blue-gray" className="mt-4 text-center font-normal">
      &copy; 2023 Junha Jeong
    </Typography>
  </footer>
);

export default Footer;
