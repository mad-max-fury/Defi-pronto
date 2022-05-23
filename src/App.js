import { AppRouter } from "./appRouter";
import { useState } from "react";
import { Toast } from "./components";
import { WalletConnectModal } from "./container";

function App() {
  const [showModal, setShowModal] = useState(true);
  return (
    <div className="App">
      <Toast success={true} message="Stake Successful" icon />
      <WalletConnectModal />
      <AppRouter showModal={showModal} SetShowModal={setShowModal} />
    </div>
  );
}

export default App;
