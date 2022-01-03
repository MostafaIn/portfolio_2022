import { mySkills } from '@/utils/constants';

const About = () => {
  console.log(mySkills);
  return (
    <div className='flex flex-col items-start justify-center min-h-screen max-w-4xl mx-auto px-5 sm:px-11 lg:px-8 border'>
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
        <p>Here are a few technologies that I have been working with recently.</p>
      </section>
      <table className='table-auto'>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default About;
