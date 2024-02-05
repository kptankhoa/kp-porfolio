import Image from 'next/image'
import logo from '../../public/kp-rune.png'

interface Props {
  firstName: string;
  lastName: string;
}

const Header = (props: Props) => (
  <header className="header">
    <nav className="flex justify-between items-center w-full">
      <div className="logo flex gap-3 items-center">
        <Image
          src={logo}
          width={36}
          height={36}
          alt="KP"
        />
        <span className="font-bold">
          {props.firstName}
          <span className="">{props.lastName}</span>
        </span>
      </div>

      <ul className="menu flex justify-center items-center">
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
