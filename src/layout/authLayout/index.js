import { Navbar, Footer, LaunchBanner } from "../../components";

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
      <LaunchBanner />
      <Footer />
    </>
  );
};

export { AuthLayout };
