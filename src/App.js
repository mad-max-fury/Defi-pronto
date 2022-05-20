import logo from "./logo.svg";
import "./App.css";
import { Button, Navbar } from "./components";
import { BrowserRouter as Router } from "react-router-dom";
import { colors } from "./colors";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Button filled={true} bgColor={colors.white} noIcon />
      </Router>
    </div>
  );
}

export default App;
