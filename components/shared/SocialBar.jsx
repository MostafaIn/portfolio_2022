import { socialLinks } from '@/utils/constants';

const SocialBar = () => {
  return (
    <div className='hidden md:block fixed left-2 md:left-8 bottom-0 z-30'>
      <div className='flex flex-col  justify-center items-center text-primary-300'>
        {socialLinks.map((link) => (
          <a
            key={link.title}
            href={link.link}
            target='_blank'
            className='text-3xl md:my-3 transition-all hover:opacity-70 transform hover:scale-125 hover:text-secondary-400'>
            {link.icon}
          </a>
        ))}
        <div className='h-20 md:h-32 mt-2 w-1/12 bg-primary-300' />
      </div>
    </div>
  );
};

export default SocialBar;
