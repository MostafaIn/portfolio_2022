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
  SiNode,
} from 'react-icons/si';

import integrify from '@/images/logos/integrify.png';
import dealRoomEvents from '@/images/logos/dealRoomEvents.png';
import arcada from '@/images/logos/arcada.png';
import theShortcut from '@/images/logos/theShortcut.png';

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
    id: 1,
    skill: 'JavaScript',
    icon: <SiJavascript />,
    svg: '/images/skills/javascript.svg',
  },
  {
    id: 2,
    skill: 'TypeScript',
    icon: <SiTypescript />,
    svg: '/images/skills/typescript.svg',
  },
  {
    id: 3,
    skill: 'React/ReactNative',
    icon: <SiReact />,
    svg: '/images/skills/react.svg',
  },
  {
    id: 4,
    skill: 'Express',
    icon: <SiExpress />,
    svg: '/images/skills/expressjs.svg',
  },
  {
    id: 5,
    skill: 'GraphQL',
    icon: <SiGraphql />,
    svg: '/images/skills/graphql.svg',
  },
  {
    id: 6,
    skill: 'NodeJS',
    icon: <SiNode />,
    svg: '/images/skills/nodejs.svg',
  },
  {
    id: 7,
    skill: 'Redux',
    icon: <SiRedux />,
    svg: '/images/skills/redux.svg',
  },
  {
    id: 8,
    skill: 'WordPress',
    icon: <SiWordpress />,
    svg: '/images/skills/wordpress.svg',
  },
  {
    id: 9,
    skill: 'MongoDB',
    icon: <SiMongodb />,
    svg: '/images/skills/mongodb.svg',
  },
  {
    id: 10,
    skill: 'Firebase',
    icon: <SiFirebase />,
    svg: '/images/skills/firebase.svg',
  },
  {
    id: 11,
    skill: 'Jest',
    icon: <SiJest />,
    svg: '/images/skills/jest.svg',
  },
  {
    id: 12,
    skill: 'Material-UI',
    icon: <SiMaterialui />,
    svg: '/images/skills/material-ui.svg',
  },
  {
    id: 13,
    skill: 'Tailwind css',
    icon: <SiTailwindcss />,
    svg: '/images/skills/tailwind-css.svg',
  },
  {
    id: 14,
    skill: 'Figma',
    icon: <SiFigma />,
    svg: '/images/skills/figma.svg',
  },
];

const myExperiences = [
  {
    id: 1,
    position: 'Junior Web Developer',
    company: 'Integrify Oy',
    coIcon: integrify,
    startDate: 'Jan 2019',
    endDate: 'Sep 2019',
    tasks: ['Upgrade my web development skills', 'look for job'],
  },
  {
    id: 2,
    position: 'Front-end Mobile Developer',
    company: 'Deal Room Events',
    coIcon: dealRoomEvents,
    startDate: 'Dec 2019',
    endDate: 'Mar 2020',
    tasks: ["Rebuilt it's mobile App using React Native"],
  },
  {
    id: 3,
    position: 'Full-stack Developer & Mentor',
    company: 'The Startup Shortcut',
    coIcon: theShortcut,
    startDate: 'Jun 2020',
    endDate: 'Oct 2020',
    tasks: ["Work on it's website", 'hands on teaching on full-stack training batch'],
  },
  {
    id: 4,
    position: 'Full-stack Developer',
    company: 'ARCADA',
    coIcon: arcada,
    startDate: 'Oct 2020',
    endDate: 'Mar 2021',
    tasks: ['built studerapasvenska.fi from scratch', 'look for job'],
  },
  {
    id: 5,
    position: 'Tech Lead & Trainer',
    company: 'The Startup Shortcut',
    coIcon: theShortcut,
    startDate: 'Mar 2021',
    endDate: 'Feb 2022',
    tasks: ['Rebuilt its website', 'teaching on coding101 training programme'],
  },
];

export { navLinks, socialLinks, mySkills, myExperiences };
