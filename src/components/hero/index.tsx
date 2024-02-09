'use client';
import { Heading } from '@components';
import PFP from './pfp';
import TextTypewriter from './typewriter';
import SocialLinks from './social-links';
import './hero.css';

interface Props {
  img: string;
  description: string;
  typewriter: string[]
}

const Hero = (props: Props) => {
  return (
    <div id="about" className="hero">
      <div className="hero-bg" />
      <PFP img={props.img} />
      <Heading firstWord="About" secondWord="Me" />
      <TextTypewriter strings={props.typewriter} />
      <SocialLinks description={props.description} />
    </div>
  );
};

export default Hero;
