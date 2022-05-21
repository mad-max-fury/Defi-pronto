import "./App.css";
import { Button, Navbar, SectionIntroCards, r, Footer } from "./components";
import { BrowserRouter as Router } from "react-router-dom";
import { colors } from "./colors";
import { FaBars } from "react-icons/fa";
import { HowItWorks } from "./pages/landingpage/components";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <HowItWorks />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
