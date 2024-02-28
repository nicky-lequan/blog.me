import Image from 'next/image';
import {Typography} from '@/providers/AppProvider';
import {FOOTER_ITEMS} from './constants';

function Footer() {
  return (
    <footer className="px-8 py-2 w-full bg-neutral">
      <div className="px-2 flex flex-col flex-wrap items-center justify-center gap-x-12 gap-y-2 text-center">
        <Image
          width={60}
          height={60}
          src="/assets/images/logo.png"
          alt="logo"
          className="w-12"
        />
        <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
          {FOOTER_ITEMS.map(({name, href, icon}) => (
            <Typography
              key={name}
              as="a"
              href={href}
              className="opacity-70 transition-opacity hover:opacity-100">
              {icon}
            </Typography>
          ))}
        </div>
      </div>
      <hr className="my-4 border-blue-gray-100 dark:border-blue-gray-800" />
      <Typography
        color="blue-gray"
        className="mt-4 text-center font-normal text-text">
        &copy; 2023 Junha Jeong
      </Typography>
    </footer>
  );
}

export default Footer;
