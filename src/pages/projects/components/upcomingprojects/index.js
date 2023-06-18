import React from "react";
import styled from "styled-components";
import {
  imageColors,
  imageGalaxy,
  imagePaint,
  imageSolid,
  imageWater,
  looperGroup,
} from "../../../../assets";
import { colors } from "../../../../colors";
import { ProjectCard } from "../../../../components";
import { Search } from "../search";
const UpcomingProjects = () => {
  const data = [
    {
      src: imageColors,
      heading: "DefiPronto",
      paragraph:
        "Launchpad & Accelerator to launch the most promising projects on the Cardano blockchain.",
      progress: null,
      targetAmount: "TBA",
      targetRaised: "TBA",
    },
    {
      src: imageSolid,
      heading: "Solar Nodes",
      paragraph:
        "Decentralizing Electricity through solar meshes that will also act as nodes that can generate and validate blocks on an 3rd generation POS blockchain.",
      progress: null,
      targetAmount: "TBA",
      targetRaised: "TBA",
    },
    {
      src: imageGalaxy,
      heading: "Cryptogenie",
      paragraph:
        "Programatically Smart NFTs that you can breed and mutate into new and smart genie NFTs",
      progress: null,
      targetAmount: "TBA",
      targetRaised: "TBA",
    },
    {
      src: imageSolid,
      heading: "Solar Nodes",
      paragraph:
        "Decentralizing Electricity through solar meshes that will also act as nodes that can generate and validate blocks on an 3rd generation POS blockchain.",
      progress: null,
      targetAmount: "TBA",
      targetRaised: "TBA",
    },
    {
      src: imageGalaxy,
      heading: "Cryptogenie",
      paragraph:
        "Programatically Smart NFTs that you can breed and mutate into new and smart genie NFTs",
      progress: null,
      targetAmount: "TBA",
      targetRaised: "TBA",
    },
  ];
  return (
    <Container>
      <Headingwrap>
        <Heading>
          {" "}
          <span className="line"></span>
          <span className="circle"></span>
          <h4>Upcoming Projects</h4>
        </Heading>
        <Search />
      </Headingwrap>
      <ProjectWraps>
        {data.map(
          ({
            src,
            heading,
            paragraph,
            progress,
            targetAmount,
            targetRaised,
          }) => (
            <ProjectCard
              src={src}
              heading={heading}
              paragraph={paragraph}
              targetAmount={targetAmount}
              targetRaised={targetRaised}
            />
          )
        )}
      </ProjectWraps>
    </Container>
  );
};

export { UpcomingProjects };

const Container = styled.section`
  height: fit-content;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  flex-direction: column;
  position: relative;
  background-image: url(${looperGroup});
  background-image: contain;
  gap: 4rem;
  margin-bottom: 4rem;

  @media screen and (max-width: 800px) {
    padding-top: 4rem;
  }
`;
const Headingwrap = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const Heading = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 1rem;
  & > span.line {
    height: 2px;
    width: 40px;
    background-color: ${colors.secondary};
  }
  span.circle {
    height: 10px;
    width: 10px;
    background-color: ${colors.secondary};
    border-radius: 50%;
  }
  & > h4 {
    font-weight: 600;
    @media (max-width: 600px) {
      font-size: 25px !important;
      font-weight: 400 !important;
    }
    @media (max-width: 400px) {
      font-size: 20px !important;
    }
  }
  @media (max-width: 800px) {
    padding-bottom: 1rem;
  }
  @media (max-width: 400px) {
    width: 90%;
    margin: 0 auto;
  }
`;
const ProjectWraps = styled.div`
  width: 100%;
  height: fit-content;
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(24.69rem, 1fr));
  gap: 1rem;
  row-gap: 2rem;
  @media screen and (max-width: 400px) {
    grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
  }
`;
