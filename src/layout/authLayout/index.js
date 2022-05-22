import { Navbar, Footer, LaunchBanner } from "../../components";

const AuthLayout = ({ children, showModal, setShowModal }) => {
  return (
    <>
      <Navbar />
      {children}
      <LaunchBanner />
      <Footer />
    </>
  );
};

export { AuthLayout };
