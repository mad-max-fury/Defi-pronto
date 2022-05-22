import React from "react";
import styled from "styled-components";
import { LaunchBanner } from "../../components";
import { HeroSection, OurSupporter, Whatwedo } from "./components";
const LandingPage = () => {
  return (
    <Container>
      <HeroSection />
      <Whatwedo />
      <Ceneter></Ceneter>
      <OurSupporter />
      <LaunchBanner />
    </Container>
  );
};

export { LandingPage };

const Container = styled.main``;
const Ceneter = styled.div`
  width: 100%;
  /* background-color: #000; */
`;
