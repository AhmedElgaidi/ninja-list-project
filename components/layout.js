import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <div className="content">
        <NavBar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
