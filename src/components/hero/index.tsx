'use client';
import { Footer, Heading, StarsCanvas } from '@components';
import PFP from './pfp';
import TextTypewriter from './typewriter';
import SocialLinks from './social-links';
import './hero.css';

interface Props {
  id: string;
  img: string;
  description: string;
  typewriter: string[]
}

const Hero = (props: Props) => {
  return (
    <div className="hero">
      <div className="hero-bgc hero-bg" />
      <StarsCanvas />
      <PFP img={props.img} />
      <Heading firstWord="About" secondWord="Me" />
      <TextTypewriter strings={props.typewriter} />
      <SocialLinks description={props.description} />
      <Footer name={props.id} />
    </div>
  );
};

export default Hero;
