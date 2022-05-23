import React from "react";
import styled from "styled-components";
import {
  FutureOfCardanoIntroSection,
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
      <FutureOfCardanoIntroSection />
      <OurSupporter />
    </Container>
  );
};

export { LandingPage };
//
const Container = styled.main``;
