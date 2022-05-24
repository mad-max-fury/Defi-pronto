import React, { useState } from "react";
import styled from "styled-components";

import { HeroSection, ProjectSuccess, RoadMap, Tokenomics } from "./components";

import { colors } from "../../colors";

import { Accordion, Allocation } from "../../components";

const AboutPage = () => {
  const [active, setActive] = useState(0);
  const handleClick = (index) => {
    active === index ? setActive(null) : setActive(index);
  };
  return (
    <Container>
      <HeroSection />
      <ProjectSuccess />
      <RoadMap />
      <Tokenomics
        token={"Token Name"}
        pronto={"Defipronto"}
        marketcap={"Market Cap"}
        figure1={"$1,000,000"}
        initial={"Initial Supply"}
        figure2={"400,000"}
        current={"Current Total Supply"}
        figure3={"200,000"}
        burned={"Defipronto Burned"}
        figure4={"30,000"}
        circulation={"Defipronto in Circulation"}
        figure5={"100,000"}
      />

      <Allocation />

      <AccordionContainer>
        <Divider />
        {[
          "Governance",
          "Staking",
          "Deflationary Mechanics",
          "Liquidity Farming",
        ].map((item, index) => {
          return (
            <Accordion
              heading={item}
              active={index === active && true}
              func={() => handleClick(index)}
            />
          );
        })}
      </AccordionContainer>
    </Container>
  );
};

export { AboutPage };

const Container = styled.main`
  padding-top: 50px;

  @media screen and (max-width: 850px) {
    padding-top: 10px;
  }

  @media (min-width: 851) and (max-width: 950px) {
    padding-top: 0;
  }
`;
const Ceneter = styled.div`
  width: 100%;
  /* background-color: #000; */
`;
const AccordionContainer = styled.section`
  padding: 50px 0;

  @media screen and (max-width: 650px) {
    width: 90%;
    margin: 0 auto;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const Divider = styled.div`
  border-top: 1px solid ${colors.light_grey};
  margin: 0 auto;
  width: 40%;
  padding: 25px 0;
`;
