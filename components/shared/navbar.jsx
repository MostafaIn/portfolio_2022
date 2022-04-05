import React, { Fragment, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Disclosure } from '@headlessui/react';
import { GrClose, GrMenu } from 'react-icons/gr';

import { navLinks } from '@/utils/constants';
import mylogo from '@/images/myLogo.png';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const NavBar = () => {
  const { route } = useRouter();
  console.log(route);
  let NAVLINKS = navLinks.map((link) => (link.path === route ? { ...link, current: true } : { ...link }));

  return (
    <Disclosure as='nav' className='sticky top-0 h-24 bg-tbg'>
      {({ open }) => (
        <Fragment>
          <div className='max-w-8xl mx-auto px-2 sm:px-6 lg:px-8'>
            <div className='relative flex items-center justify-between h-24'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                {/* Mobile menu button*/}
                <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-primary-50 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <GrClose className='block h-12 w-12 p-3 rounded-full bg-secondary-200 hover:animate-pulse' aria-hidden='true' />
                  ) : (
                    <GrMenu className='block h-12 w-12 p-3 rounded-full bg-secondary-200 hover:animate-pulse' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex-1 flex items-center justify-center sm:items-end sm:justify-between'>
                <div className='flex-shrink-0 flex items-center cursor-pointer hover:animate-pulse'>
                  <Link href='/'>
                    <img className='block lg:hidden h-10 w-auto' src={mylogo.src} alt='MyLogo' />
                  </Link>
                  <Link href='/'>
                    <img className='hidden lg:block h-12 w-12' src={mylogo.src} alt='MyLogo' />
                  </Link>
                </div>
                <div className='hidden sm:block sm:ml-6'>
                  <div className='flex space-x-8 items-center'>
                    {NAVLINKS.map((item) =>
                      item.title.includes('Resume') ? (
                        <a className='resume-btn' key={item.title} href={item.path}>
                          {item.title}
                        </a>
                      ) : (
                        <div onClick={() => console.log(item)} key={item.title}>
                          <Link href={item.path} passHref>
                            <a
                              className={`${item.current ? 'text-secondary-400 pb-1 border-b-2 border-secondary-500' : 'text-secondary-50 nav-item'}`}
                              aria-current={item.current ? `${item.title} page` : undefined}>
                              {item.title}
                            </a>
                          </Link>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
              <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'></div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              {NAVLINKS.map((item) => (
                <Disclosure.Button
                  key={item.title}
                  as='a'
                  href={item.path}
                  className={classNames(
                    item.current ? 'text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium bg-primary-50'
                  )}
                  aria-current={item.current ? 'page' : undefined}>
                  {item.title}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </Fragment>
      )}
    </Disclosure>
  );
};

export default NavBar;
