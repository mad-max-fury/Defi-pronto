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
        marketcap={"Total Supply"}
        figure1={"$1,000,000"}
        initial={"$DFP"}
        figure2={"400,000"}
        // current={"Current Total Supply"}
        // figure3={"200,000"}
        // burned={"Defipronto Burned"}
        // figure4={"30,000"}
        // circulation={"Defipronto in Circulation"}
        // figure5={"100,000"}
      />

      <Allocation />

      <AccordionContainer>
        <Divider />
        {[
          {
            title: "Governance",
            content: "$DFP token holders can create and vote on proposals",
          },
          {
            title: "Staking",
            content:
              "Token holders can stake their tokens to get priority access to IDOs on Defipronto launchpad and also earn rewards in more $DFP tokens",
          },
          // {
          //   title: "Deflationary Mechanics",
          //   content: "",
          // },
          // "Liquidity Farming",
        ].map(({ title, content }, index) => {
          return (
            <Accordion
              heading={title}
              content={content}
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
