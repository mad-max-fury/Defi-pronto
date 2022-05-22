import { BrowserRouter as Router } from "react-router-dom";
import { imageColors, imageGalaxy, imageWater, star } from "../../assets";
import {
  Accordion,
  Footer,
  IntroWrap,
  LaunchBanner,
  MiniFutureCard,
  Navbar,
  ProjectCard,
} from "../../components";
import { HowItWorks, OurSupporter } from "../landingpage/components";

function Components() {
  return (
    <div className="App">
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
      <IntroWrap />
      <LaunchBanner />
      <Footer />
    </div>
  );
}

export { Components };