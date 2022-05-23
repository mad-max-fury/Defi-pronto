import { AppRouter } from "./appRouter";
import { useEffect, useState } from "react";
import { Toast } from "./components";
import { WalletConnectModal } from "./container";

function App() {
  const [showModal, setShowModal] = useState(true);
  const [isWalletOpen, setIsWalletOpen] = useState(true);

  return (
    <div className="App">
      <Toast success={true} message="Stake Successful" icon />
      <WalletConnectModal isOpen={isWalletOpen} setIsOpen={setIsWalletOpen} />
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
