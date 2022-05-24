import { Navbar, Footer, LaunchBanner, GoToTop } from "../../components";

const AuthLayout = ({
  children,
  showModal,
  setShowModal,
  connectWalletModal,
  setConnectWalletModal,
}) => {
  return (
    <>
      <Navbar
        connectWalletModal={connectWalletModal}
        setConnectWalletModal={setConnectWalletModal}
      />
      {children}
      <GoToTop />
      <LaunchBanner />
      <Footer />
    </>
  );
};

export { AuthLayout };
