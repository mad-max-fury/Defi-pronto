import logo from "./logo.svg";
import "./App.css";
import { Button, Navbar } from "./components";
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
      </Router>
    </div>
  );
}

export default App;
