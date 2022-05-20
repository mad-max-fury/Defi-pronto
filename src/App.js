import "./App.css";
import { Button, Navbar, SectionIntroCards } from "./components";
import { Button, Navbar, Footer } from "./components";
import { BrowserRouter as Router } from "react-router-dom";
import { colors } from "./colors";
import { FaBars } from "react-icons/fa";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Button
          filled={false}
          bgColor={colors.white}
          text={"Go To App"}
          reverse={false}
          Icon={FaBars}
          noIcon
        />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
