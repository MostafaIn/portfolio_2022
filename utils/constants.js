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
  SiExpress,
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
    svg: '/images/skills/javascript.svg',
  },
  {
    skill: 'TypeScript',
    icon: <SiTypescript />,
    svg: '/images/skills/typescript.svg',
  },
  {
    skill: 'React/ReactNative',
    icon: <SiReact />,
    svg: '/images/skills/react.svg',
  },
  {
    skill: 'Express',
    icon: <SiExpress />,
    svg: '/images/skills/expressjs.svg',
  },
  {
    skill: 'GraphQL',
    icon: <SiGraphql />,
    svg: '/images/skills/graphql.svg',
  },
  {
    skill: 'Redux',
    icon: <SiRedux />,
    svg: '/images/skills/redux.svg',
  },
  {
    skill: 'WordPress',
    icon: <SiWordpress />,
    svg: '/images/skills/wordpress.svg',
  },
  {
    skill: 'MongoDB',
    icon: <SiMongodb />,
    svg: '/images/skills/mongodb.svg',
  },
  {
    skill: 'Firebase',
    icon: <SiFirebase />,
    svg: '/images/skills/firebase.svg',
  },
  {
    skill: 'Jest',
    icon: <SiJest />,
    svg: '/images/skills/jest.svg',
  },
  {
    skill: 'Material-UI',
    icon: <SiMaterialui />,
    svg: '/images/skills/material-ui.svg',
  },
  {
    skill: 'Tailwind css',
    icon: <SiTailwindcss />,
    svg: '/images/skills/tailwind-css.svg',
  },
  {
    skill: 'Figma',
    icon: <SiFigma />,
    svg: '/images/skills/figma.svg',
  },
];

export { navLinks, socialLinks, mySkills };
