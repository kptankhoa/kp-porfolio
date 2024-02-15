import { Telegram, Instagram, GitHub, LinkedIn } from '@mui/icons-material';

interface Social {
  icon: any;
  url: string;
}

export const socials: Social[] = [
  {
    icon: GitHub,
    url: 'https://github.com/kptankhoa',
  },
  {
    icon: LinkedIn,
    url: 'https://www.linkedin.com/in/kptankhoa',
  },
  {
    icon: Instagram,
    url: 'https://www.instagram.com/kptankhoa',
  },
  {
    icon: Telegram,
    url: 'https://t.me/kptankhoa',
  }
];
