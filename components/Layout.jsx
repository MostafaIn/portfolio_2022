import NavBar from '@/shared-components/NavBar';
import SocialBar from '@/components/shared/SocialBar';
import Loader from '@/components/Loader';

const Layout = ({ children }) => {
  return (
    <div className='relative border-box bg-tbg'>
      <NavBar />
      <SocialBar />
      {/* <Loader /> */}
      {children}
    </div>
  );
};

export default Layout;
