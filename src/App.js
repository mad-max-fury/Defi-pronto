import { AppRouter } from "./appRouter";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(true);
  return (
    <div className="App">
      <AppRouter showModal={showModal} SetShowModal={setShowModal} />
    </div>
  );
}

export default App;
