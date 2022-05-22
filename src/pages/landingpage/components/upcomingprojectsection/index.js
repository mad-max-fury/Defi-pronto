import React from "react";
import styled from "styled-components";
import { imageColors, swirl } from "../../../../assets";
import { colors } from "../../../../colors";
import { ProjectCard } from "../../../../components";
const UpcomingProject = () => {
  return (
    <Container>
      <Headingwrap>
        <span className="line"></span>
        <span className="circle"></span>
        <h4>Upcoming Projects</h4>
      </Headingwrap>
      <ProjectWraps>
        {[...Array(5)].map((item) => (
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
        ))}
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
  border: 1px solid red;
  flex-direction: column;
  position: relative;
  gap: 2rem;
  &:before {
    content: "";
    width: 90%;
    height: 100vh;
    top: -4%;
    z-index: -1;
    left: 5%;
    position: absolute;
    background-image: url(${swirl});
  }
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
  border: 1px solid red;
  display: flex;
  flex-flow: row wrap;
  column-gap: 2rem;
  row-gap: 2rem;
  align-items: flex-start;
  justify-content: start;
`;
