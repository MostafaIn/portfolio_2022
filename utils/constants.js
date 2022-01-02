import { FiLinkedin, FiGithub } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { ImWhatsapp } from 'react-icons/im';

const navLinks = [
  {
    title: 'About',
    path: '/about',
    current: false,
    status: false,
  },
  {
    title: 'Experience',
    path: '/experience',
    current: false,
    status: false,
  },
  {
    title: 'Work',
    path: '/work',
    current: false,
    status: false,
  },
  {
    title: 'Contact',
    path: '/contact',
    current: false,
    status: false,
  },
  {
    title: 'Resume',
    path: '/resume',
    current: false,
    status: false,
  },
];

const socialLinks = [
  {
    title: 'LinkedIn',
    icon: <FiLinkedin />,
    link: 'https://www.linkedin.com/in/mostafahazareh/',
  },
  {
    title: 'Github',
    icon: <FiGithub />,
    link: 'https://github.com/mostafaIn',
  },
  {
    title: 'Email',
    icon: <HiOutlineMail />,
    link: 'mailto:mostafa.hazareh@hotmail.com',
  },
  {
    title: 'Whatsapp',
    icon: <ImWhatsapp />,
    link: 'https://wa.me/358451070737',
  },
];

export { navLinks, socialLinks };
