import React from "react";
import styled from "styled-components";
import {
  HeroSection,
  OurSupporter,
  UpcomingProject,
  Whatwedo,
} from "./components";
const LandingPage = () => {
  return (
    <Container>
      <HeroSection />
      <Whatwedo />
      <UpcomingProject />
      <Ceneter></Ceneter>
      <OurSupporter />
    </Container>
  );
};

export { LandingPage };

const Container = styled.main``;
const Ceneter = styled.div`
  width: 100%;
  /* background-color: #000; */
`;
