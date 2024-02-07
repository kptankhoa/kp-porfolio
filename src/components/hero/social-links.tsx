import { socials } from '@data';

const SocialLinks = ({ description }: { description: string }) => (
  <div className="flex flex-col justify-center items-center">
    <div className="hero-text flex-col justify-center">
      <p>{description}</p>
    </div>
    <br />
    <br />
    Find me on:
    <div className="hero-socials flex justify-center items-center">
      {socials.map((social, index) => (
        <a key={index} href={social.url} target="_blank">
          <img src={`/socials/${social.icon}`} alt="" />
        </a>
      ))}
    </div>
  </div>
);

export default SocialLinks;
