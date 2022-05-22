import React from "react";
import styled from "styled-components";
import { HeroSection } from "./components";
const LandingPage = () => {
  return (
    <Container>
      <HeroSection />
    </Container>
  );
};

export { LandingPage };

const Container = styled.main``;
