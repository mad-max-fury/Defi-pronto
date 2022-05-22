import React from "react";
import styled from "styled-components";
import {
  imageColors,
  imageGalaxy,
  imagePaint,
  imageSolid,
  imageWater,
  looperGroup,
  swirl,
} from "../../../../assets";
import { colors } from "../../../../colors";
import { ProjectCard } from "../../../../components";
const UpcomingProject = () => {
  const data = [
    {
      src: imageWater,
      heading: "Hyper Drive Metaverse",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio imperdiet nibh at et neque.",
      progress: null,
      targetAmount: "20,000",
      targetRaised: "0.00",
    },
    {
      src: imagePaint,
      heading: "Hyper Drive Metaverse",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio imperdiet nibh at et neque.",
      progress: null,
      targetAmount: "20,000",
      targetRaised: "0.00",
    },
    {
      src: imageColors,
      heading: "Hyper Drive Metaverse",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio imperdiet nibh at et neque.",
      progress: null,
      targetAmount: "20,000",
      targetRaised: "0.00",
    },
    {
      src: imageSolid,
      heading: "Hyper Drive Metaverse",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio imperdiet nibh at et neque.",
      progress: null,
      targetAmount: "20,000",
      targetRaised: "0.00",
    },
    {
      src: imageGalaxy,
      heading: "Hyper Drive Metaverse",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio imperdiet nibh at et neque.",
      progress: null,
      targetAmount: "20,000",
      targetRaised: "0.00",
    },
  ];
  return (
    <Container>
      <Headingwrap>
        <span className="line"></span>
        <span className="circle"></span>
        <h4>Upcoming Projects</h4>
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

export { UpcomingProject };

const Container = styled.section`
  height: fit-content;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  flex-direction: column;
  position: relative;
  background-image: url(${looperGroup});
  background-image: contain;
  gap: 2rem;
`;
const Headingwrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  span.line {
    height: 2px;
    width: 40px;
    background-color: ${colors.secondary};
  }
  span.circle {
    height: 20px;
    width: 20px;
    background-color: ${colors.secondary};
    border-radius: 50%;
  }
`;
const ProjectWraps = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-flow: row wrap;
  column-gap: 2rem;
  row-gap: 2rem;
  align-items: flex-start;
  justify-content: start;
`;