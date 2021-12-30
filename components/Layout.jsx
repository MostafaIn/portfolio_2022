import NavBar from '@/shared-components/NavBar';

const Layout = ({ children }) => {
  return (
    <div className="bg-tbg">
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;
