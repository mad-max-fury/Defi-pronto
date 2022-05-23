import { AppRouter } from "./appRouter";
import { useState } from "react";
import { Toast } from "./components";

function App() {
  const [showModal, setShowModal] = useState(true);
  return (
    <div className="App">
      <Toast success={true} message="Stake Successful" />
      <AppRouter showModal={showModal} SetShowModal={setShowModal} />
    </div>
  );
}

export default App;
