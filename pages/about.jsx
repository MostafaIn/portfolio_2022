import Image from 'next/image';
import { mySkills } from '@/utils/constants';

const Skills = () => {
  return (
    <div className='flex flex-wrap items-center justify-center border min-h-max min-w-full'>
      {mySkills.map(({ title, svg }) => (
        <div className='p-4 sm:p-6 h-16 sm:h-24'>
          <img key={title} src={svg} alt={title} width={75} height={75} />
        </div>
      ))}
    </div>
  );
};

const About = () => {
  console.log(mySkills[0].svg);
  return (
    <div className='flex flex-col items-start justify-center min-h-screen max-w-xl md:max-w-xl lg:max-w-4xl mx-auto px-4 lg:px-1 border'>
      <h2 className='border-b-2 border-secondary-500 text-secondary-500'>What I Can Do</h2>
      <br />
      <br />
      <section>
        <p>
          I'm obsessed with making things and even more obsessed with making things better. I've
          been in the business of creating since I was a schoolboy and worked in my father's
          workshop. I have three years experience as a sales officer in an electrical company. I
          have learned how to deal with customers correctly. After graduating from Kardan
          university, I've been actively following web technologies.
        </p>
        <br />
        <p>
          My specialty is Web app design and development. My updated skills are vanilla javascript
          with new features, a good understanding of ReactJS / React Native, NodeJS, Redux, MERN
          Stack, and always ready to learn day by day.
        </p>
        <br />
        <p>
          Currently, I have been working on building an online assessment platform. That covers
          everything I have learned and needs some modern technologies to learn.
        </p>
        <br />
      </section>
      <section className='border flex items-center justify-center flex-wrap w-full'>
        <p>Here are a few technologies that I have been working with recently.</p>
        <Skills />
      </section>
    </div>
  );
};
export default About;
