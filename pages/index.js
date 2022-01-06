import Link from 'next/link';
import Image from 'next/image';
import profilePic from '@/images/indexHero.png';

export default function Home() {
  return (
    <>
      <div className='hidden sm:block hero-container -z-1'>
        <Image src={profilePic} alt='my-hero-photo' layout='fill' objectFit='cover' quality={100} />
      </div>
      <div className='flex flex-col items-center lg:items-start justify-center min-h-screen max-w-4xl mx-auto px-4 lg:px-1'>
        <div className='max-w-3xl'>
          <section>
            <h1 className='text-secondary-200'>Hi,</h1>
            <h2>My name is Mostafa.</h2>
            <h3>I have build websites, web & mobile apps.</h3>
          </section>
          <section className='my-6 sm:my-6 max-w-lg'>
            <p>
              I am a software engineer specializing in building websites, web apps & mobile apps.
              using React/React Native currently, I'm focused on teaching web development and learn
              by doing.
            </p>
          </section>
          <Link href='/contact'>
            <button type='button' className='link-btn'>
              CONTACT ME!
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
