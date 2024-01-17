import Link from 'next/link';
import {navItems} from '../NavBar';

function PCMenu() {
  return (
    <div className="my-auto md:block hidden">
      <nav className="flex space-x-4">
        {navItems.map(({name, path}) => {
          return (
            <Link
              key={path}
              href={path}
              className="rounded-md flex align-middle hover:bg-slate-600/10 dark:hover:bg-slate-400/10">
              <span className="py-[0.313rem] px-[0.625rem] text-xl">
                {name}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

export default PCMenu;
