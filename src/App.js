import "./App.css";
import { Button, Navbar, SectionIntroCards } from "./components";
import { BrowserRouter as Router } from "react-router-dom";
import { colors } from "./colors";
import { FaBars } from "react-icons/fa";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
