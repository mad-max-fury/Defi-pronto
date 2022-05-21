import "./App.css";
import {
  Button,
  Navbar,
  SectionIntroCards,
  Footer,
  IntroWrap,
  MiniFutureCard,
} from "./components";
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
        <MiniFutureCard
        src={}
          headingtext={"Vetted Projects"}
          paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        />
        <IntroWrap />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
