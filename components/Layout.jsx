import NavBar from '@/shared-components/NavBar';
import Loader from '@/components/Loader';

const Layout = ({ children }) => {
  return (
    <div className="border-box bg-tbg">
          <NavBar />
          {/* <Loader /> */}
      {children}
    </div>
  );
};

export default Layout;
