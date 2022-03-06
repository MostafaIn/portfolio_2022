import { Fragment, useState } from 'react';
import { Tab } from '@headlessui/react';
import Image from 'next/image';

import { myExperiences } from '@/utils/constants';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const MyTabs = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  console.log(selectedIndex);
  return (
    <div className='w-full lg:flex justify-start px-2 py-16 sm:px-0'>
      <Tab.Group onChange={(index) => setSelectedIndex(index)}>
        <Tab.List className='flex lg:flex-col flex-initial items-center justify-between w-80 p-1'>
          {myExperiences.map((exp) => (
            <Tab
              key={exp.id}
              className={({ selected }) =>
                classNames(
                  'relative flex items-center justify-start w-80 text-left px-8 py-3 focus:outline-none border-l-4 ease-in-out duration-300',
                  selected
                    ? 'text-secondary-500 bg-primary-800 shadow'
                    : 'text-primary-400 hover:bg-white/[0.12] border-primary-500 hover:text-secondary-800'
                )
              }>
              {/* <div className='absolute left-0 w-1 h-full bg-secondary-500'>{selectedIndex}</div> */}
              {exp.position}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className='w-full mx-4 animation-exp'>
          {myExperiences.map((exp) => (
            <Tab.Panel key={exp.id} className={({ selectedIndex }) => classNames('p-3 animation-exp', 'focus:outline-none')}>
              <h5>
                {exp.position} <span className='text-secondary-500'>@ {exp.company}</span>
              </h5>
              <p>
                {exp.startDate} - {exp.endDate}
              </p>
              <ul className='m-5'>
                {exp.tasks.map((task, index) => (
                  <li key={index} className='flex items-center text-primary-400'>
                    <span className='mr-2.5'>
                      <FaRegArrowAltCircleRight />
                    </span>{' '}
                    {task}
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

const Experience = () => {
  return (
    <div className='flex flex-col items-start justify-center min-h-screen max-w-xl lg:max-w-4xl mx-auto px-4 md:px-1 pt-10'>
      <h2 className='border-b-2 border-secondary-500 text-secondary-500'>Where I've worked</h2>
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
      </section>
      <MyTabs />
    </div>
  );
};

export default Experience;
