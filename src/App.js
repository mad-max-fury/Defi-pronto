import { AppRouter } from "./appRouter";
import { useEffect, useState } from "react";
import { Toast } from "./components";
import { WalletConnectModal } from "./container";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [isWalletOpen, setIsWalletOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);

  return (
    <div className="App">
      <Toast
        info={true}
        icon
        showToast={showToast}
        setShowToast={setShowToast}
        message="Wallet connect coming soon"
      />
      <WalletConnectModal
        isOpen={isWalletOpen}
        showToast={showToast}
        setShowToast={setShowToast}
        setIsOpen={setIsWalletOpen}
      />
      <AppRouter
        showModal={showModal}
        SetShowModal={setShowModal}
        connectWalletModal={isWalletOpen}
        setConnectWalletModal={setIsWalletOpen}
      />
    </div>
  );
}

export default App;
