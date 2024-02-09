import { OpenInNew } from '@mui/icons-material';
import './header.css';

interface Props {
  resume: string;
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

      <input type="checkbox" id="menu-toggle" />
      <label htmlFor="menu-toggle" className="menu-icon">
        &#9776;
      </label>

      <ul className="menu">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experiences">Experiences</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href={props.resume} target="_blank" className="menu-btn">
            My Resume&nbsp;
            <OpenInNew className="text-xl" />
          </a>
        </li>
      </ul>
    </nav>
  </header >
);

export default Header;
