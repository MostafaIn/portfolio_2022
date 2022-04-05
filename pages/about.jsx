import Image from 'next/image';
import { mySkills } from '@/utils/constants';
import Title from '@/components/Title';

const Skills = () => {
  return (
    <div className='flex flex-wrap items-center justify-center min-h-max min-w-full'>
      {mySkills.map(({ id, title, svg }) => (
        <div key={id} className='p-2 sm:p-4'>
          <Image src={svg} alt={title} width={75} height={75} className='motion-safe:animate-pulse' />
        </div>
      ))}
    </div>
  );
};

const About = () => {
  return (
    <div className='page-wrapper'>
      <Title>What I Can Do</Title>
      <br />
      <br />
      <section>
        <p>
          My specialty is Web app design and development. My updated skills are vanilla javascript with new features, a good understanding of ReactJS
          / React Native, NodeJS, Redux, MERN Stack, and always ready to learn day by day.
        </p>
        <br />
        <p>
          Currently, I have been working on building an online assessment platform. That covers everything I have learned and needs some modern
          technologies to learn.
        </p>
        <br />
      </section>
      <section className='flex items-center justify-center flex-wrap w-full'>
        <h4>Here are a few technologies that I have been working with recently.</h4>
        <Skills />
      </section>
    </div>
  );
};
export default About;
