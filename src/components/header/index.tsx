'use client';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Link from 'next/link';
import './header.css';

interface Props {
  firstName: string;
  lastName: string;
  navItems: {
    url: string;
    label: string;
  }[];
}

const Header = (props: Props) => {
  const { firstName, lastName, navItems } = props;
  const pathname = usePathname();

  return (
    <header className="header">
      <nav className="flex justify-between items-center w-full">
        <Link href="/">
          <div className="logo unclickable flex gap-3 items-center">
            <img
              src="/kp-rune.png"
              width={36}
              height={36}
              alt="KP"
            />
            <span className="font-bold">
              {firstName}
              <span>{lastName}</span>
            </span>
          </div>
        </Link>

        <input type="checkbox" id="menu-toggle"/>
        <label htmlFor="menu-toggle" className="menu-icon">
          &#9776;
        </label>

        <ul className="menu">
          {navItems.map((item) => (
            <li key={item.url}>
              <Link
                href={item.url}
                className={clsx({ 'menu-btn': pathname === item.url })}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header >
  );
};

export default Header;
