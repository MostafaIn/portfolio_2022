import { Fragment } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen max-w-7xl mx-auto px-5 sm:px-11 lg:px-8'>
      <div>
        <section>
          <h1 className='text-secondary-200'>Hi,</h1>
          <h2>My name is Mostafa.</h2>
          <h3>I have build websites, web apps & mobile apps.</h3>
        </section>
        <section className='my-10 sm:my-6 max-w-lg'>
          <p>
            I am a software engineer specializing in building websites, web apps & mobile apps.
            using React/React Native currently, I'm focused on teaching web development and learn by
            doing.
          </p>
        </section>
        <Link href='/contact'>
          <button type='button' className='link-btn'>
            CONTACT ME!
          </button>
        </Link>
      </div>
    </div>
  );
}
