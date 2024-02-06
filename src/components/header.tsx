interface Props {
  firstName: string;
  lastName: string;
}

const Header = (props: Props) => (
  <header className="header">
    <nav className="flex justify-between items-center w-full">
      <div className="logo flex gap-3 items-center">
        <img
          src="/kp-rune.png"
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
        <li className="menu-btn">
          <a href="https://resume.kptankhoa.dev" target="_blank">My Resume</a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
