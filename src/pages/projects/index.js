import React from "react";
import styled from "styled-components";
import { colors } from "../../colors";
import {
  CompletedProjects,
  OngoingProjects,
  UpcomingProjects,
} from "./components";

const ProjectPage = () => {
  return (
    <div>
      <TextHeading>
        <TextUp>
          <p>Projects</p>
          <h1>
            Decentralized Incubation <br />
            and launchpad for <span>cardano</span>
          </h1>
        </TextUp>
      </TextHeading>
      <UpcomingProjects />
      <OngoingProjects />
      <CompletedProjects />
    </div>
  );
};

export { ProjectPage };
const TextHeading = styled.div`
  height: fit-content;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  flex-direction: column;
  position: relative;
  gap: 4rem;
  @media screen and (max-width: 800px) {
    padding-top: 4rem;
  }
`;

export const TextUp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 60%;
  margin: 1.5rem auto;

  h1 {
    width: 90%;
    font-size: 2.5rem;
    font-family: Orbitron, sans-serif;
    text-align: center;

    & > span {
      font-size: 3rem;
      font-weight: 400;
      font-family: Orbitron, sans-serif;
      color: ${colors.secondary};
    }
    @media screen and (max-width: 640px) {
      width: 100%;
      font-size: 2.8rem;
      font-family: Orbitron, sans-serif;

      & > span {
        font-size: 2.8rem;
        font-weight: 400;
        font-family: Orbitron, sans-serif;
        color: ${colors.secondary};
      }
    }
  }
  p {
    line-height: 1.8;
    font-size: 1.5rem;
    text-align: center;
    @media screen and (max-width: 900px) {
      width: 100%;
    }
    @media screen and (max-width: 600px) {
      width: 100%;
    }
  }

  @media screen and (max-width: 450px) {
    h1 {
      width: 100%;
      font-size: 31.3px;
      font-family: Orbitron, sans-serif;

      & > span {
        font-size: 31.3px;
        font-weight: 400;
        font-family: Orbitron, sans-serif;
        color: ${colors.secondary};
      }
    }
    p {
      width: 90%;
      font-size: 12.8px;
      line-height: 21px;
    }
  }
`;
