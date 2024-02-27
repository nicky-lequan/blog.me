import Link from 'next/link';
import {NAV_ITEMS} from './constants';

function DesktopMenu({className}) {
  return (
    <ul className={`${className} my-auto space-x-4`}>
      {NAV_ITEMS.map(({name, path}) => {
        return (
          <Link
            key={path}
            href={path}
            className="rounded-md flex align-middle hover:bg-slate-600/10 dark:hover:bg-slate-400/10">
            <li className="py-[0.313rem] px-[0.625rem] text-xl">{name}</li>
          </Link>
        );
      })}
    </ul>
  );
}

export default DesktopMenu;
