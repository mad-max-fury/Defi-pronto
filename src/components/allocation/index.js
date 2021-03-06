import React from "react";
import styled from "styled-components";

import {
  Container,
  AllocationChartImg,
  ChartInfoContainer,
  ChartInfo,
  Purple,
  Blue,
  Yellow,
  Red,
  Lemon,
  ChartText,
  DeepBlue,
  DeepGreen,
} from "./style";

import { allocationChart } from "../../assets";
import { SectionIntroCards } from "../sectionintrocards";

const Allocation = () => {
  return (
    <Container>
      <SectionIntroCards
        title={"Allocation & Utility"}
        desc={
          "$DFP Token Distribution and how the token will be utilized in the Defipronto ecosystem."
        }
      />
      <AllocationChartImg src={allocationChart} />

      <ChartInfoContainer>
        <ChartInfo>
          <Purple /> <ChartText>Seed Round - 25%</ChartText>
        </ChartInfo>

        <ChartInfo>
          <Blue /> <ChartText>Strategic Round - 15%</ChartText>
        </ChartInfo>

        <ChartInfo>
          <Yellow /> <ChartText>Pre-Sale - 8%</ChartText>
        </ChartInfo>

        <ChartInfo>
          <Red /> <ChartText>Liquidity - 21%</ChartText>
        </ChartInfo>

        <ChartInfo>
          <Lemon /> <ChartText>Team & Advisors - 23%</ChartText>
        </ChartInfo>

        <ChartInfo>
          <DeepBlue /> <ChartText>Community Rewards/Airdrop - 3%</ChartText>
        </ChartInfo>

        <ChartInfo>
          <DeepGreen /> <ChartText>Marketing - 5%</ChartText>
        </ChartInfo>
      </ChartInfoContainer>
    </Container>
  );
};

export { Allocation };
