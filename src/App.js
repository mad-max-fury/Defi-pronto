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
  ProjectCard,
  Tokenomics
} from "./components";
import { BrowserRouter as Router } from "react-router-dom";
import { colors } from "./colors";
import { FaBars } from "react-icons/fa";
import { HowItWorks, OurSupporter } from "./pages/landingpage/components";
import { imageColors, imageGalaxy, imageWater, star } from "./assets";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div
          style={{
            display: "flex",
            width: "100%",
            padding: "0.5rem calc((100vw - 1250px)/ 2)",
            flexFlow: "row wrap",
            gap: "1rem",
          }}
        >
          <ProjectCard
            src={imageColors}
            heading={"Hyper Drive Metaverse"}
            paragraph={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio imperdiet nibh at et neque."
            }
            progress={37}
            targetAmount={"20,000"}
            targetRaised={"7,400"}
          />
          <ProjectCard
            src={imageGalaxy}
            heading={"Hyper Drive Metaverse"}
            paragraph={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio imperdiet nibh at et neque."
            }
            progress={100}
            targetAmount={"20,000"}
            targetRaised={"20,000"}
          />
          <ProjectCard
            heading={"Hyper Drive Metaverse"}
            paragraph={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio imperdiet nibh at et neque."
            }
            src={imageWater}
            targetAmount={"TBA"}
            targetRaised={"0.00"}
          />
        </div>

        <OurSupporter />
        <HowItWorks />
        <Accordion heading={"Governance"} />
        <Accordion heading={"Staking"} />

        <MiniFutureCard
          src={star}
          headingtext={"Vetted Projects"}
          paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        />
        <IntroWrap title={"The Future of Cardano Projects"} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio imperdiet nibh at et neque. Sed adipiscing risus aenean neque imperdiet amet fermentum."} />
        <Tokenomics token={"Token Name"} pronto={"Defipronto"} marketcap={"Market Cap"} figure1={"$1,000,000"} initial={"Initial Supply"} figure2={"400,000"} current={"Current Total Supply"} figure3={"200,000"} burned={"Defipronto Burned"} figure4={"30,000"} circulation={"Defipronto in Circulation"} figure5={"100,000"} />
        <LaunchBanner />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
