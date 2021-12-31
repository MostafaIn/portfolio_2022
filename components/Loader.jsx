import myLogo from '@/images/myLogo.png';

const Loader = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-blue transition-all'>
      <hr className='transition-all animate-changewidth duration-1000 absolute left-0 top-1/2' />
      <img className='animate-bounce transition-all opacity-10' src={myLogo.src} alt="mostafa's Logo" />
      <hr className='transition-all animate-changewidth duration-1000 absolute right-0 top-1/2' />
    </div>
  );
};

export default Loader;
