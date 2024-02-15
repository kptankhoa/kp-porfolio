import { socials } from '@data';

const SocialLinks = ({ description }: { description: string }) => (
  <div className="hero-text flex flex-col justify-center items-center">
    <div className="flex-col justify-center whitespace-pre-line px-5 mb-10">
      <p>{description}</p>
    </div>
    Find me on:
    <div className="hero-socials flex justify-center items-center pt-3">
      {socials.map((social, index) => {
        const Element = social.icon;

        return (
          <a key={index} href={social.url} target="_blank">
            <Element />
          </a>
        );
      })}
    </div>
  </div>
);

export default SocialLinks;
