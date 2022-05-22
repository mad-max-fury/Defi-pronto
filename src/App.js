import "./App.css";
import {
  Button,
  Navbar,
  SectionIntroCards,
  Footer,
  IntroWrap,
  MiniFutureCard,
  LaunchBanner,
  Accordion,
} from "./components";
import { BrowserRouter as Router } from "react-router-dom";
import { colors } from "./colors";
import { FaBars } from "react-icons/fa";
import { HowItWorks, OurSupporter } from "./pages/landingpage/components";
import { star } from "./assets";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <OurSupporter />
        <HowItWorks />
        <Accordion heading={"Governance"} />
        <Accordion heading={"Staking"} />

        <MiniFutureCard
          src={star}
          headingtext={"Vetted Projects"}
          paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        />
        <IntroWrap />
        <LaunchBanner />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
