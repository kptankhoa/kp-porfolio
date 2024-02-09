import Typewriter from 'typewriter-effect';

const TextTypewriter = ({ strings }: { strings: string[] }) => (
  <div className="hero-typewriter">
    <h3>I&apos;m Khoa</h3>
    <Typewriter
      options={{
        strings,
        autoStart: true,
        loop: true,
        wrapperClassName: 'typewriter'
      }}
    />
  </div>
);

export default TextTypewriter;
