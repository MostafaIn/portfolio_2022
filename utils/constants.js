// ICONS
import { FiLinkedin, FiGithub } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { ImWhatsapp } from 'react-icons/im';
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiGraphql,
  SiRedux,
  SiWordpress,
  SiMongodb,
  SiFirebase,
  SiJest,
  SiMaterialui,
  SiTailwindcss,
  SiFigma,
} from 'react-icons/si';

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

const mySkills = [
  {
    skill: 'JavaScript',
    icon: <SiJavascript />,
  },
  {
    skill: 'TypeScript',
    icon: <SiTypescript />,
  },
  {
    skill: 'React',
    icon: <SiReact />,
  },
  {
    skill: 'React Native',
    icon: <SiReact />,
  },
  {
    skill: 'GraphQL',
    icon: <SiGraphql />,
  },
  {
    skill: 'Redux',
    icon: <SiRedux />,
  },
  {
    skill: 'WordPress',
    icon: <SiWordpress />,
  },
  {
    skill: 'MongoDB',
    icon: <SiMongodb />,
  },
  {
    skill: 'Firebase',
    icon: <SiFirebase />,
  },
  {
    skill: 'Jest',
    icon: <SiJest />,
  },
  {
    skill: 'Material-UI',
    icon: <SiMaterialui />,
  },
  {
    skill: 'Tailwind css',
    icon: <SiTailwindcss />,
  },
  {
    skill: 'Figma',
    icon: <SiFigma />,
  },
];

export { navLinks, socialLinks, mySkills };
