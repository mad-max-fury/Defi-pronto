import React from "react";
import styled from "styled-components";
import {
  braille,
  deepSake,
  defiPronto,
  kubb,
  kwoon,
  morello,
  skyBox,
  sloWave,
} from "../../../../assets";
import { colors } from "../../../../colors";
const OurSupporter = () => {
  return (
    <OurSupportWrap>
      <Heading>
        <span>Our</span> Supporters
      </Heading>
      <InnerImageWrap>
        <img src={sloWave} />
        <img src={deepSake} />
        <img src={skyBox} />
        <img src={braille} />
        <img src={morello} />
        <img src={kwoon} />
        <img src={kubb} />
      </InnerImageWrap>
    </OurSupportWrap>
  );
};

export { OurSupporter };

const OurSupportWrap = styled.section`
  height: fit-content;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  gap: 2rem;
  font-family: "DM Sans", sans-serif;
  flex-direction: column;
  padding-bottom: 10rem;
  /* position: relative; */
  &:before {
    content: "";
    width: 100%;
    left: 0;
    height: 10rem;
    background-image: url(${defiPronto});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    @media screen and (max-width: 600px) {
      height: 2rem;
      width: 100%;
    }
  }
  @media screen and (max-width: 600px) {
    padding-bottom: 4rem;
  }
`;
const Heading = styled.h3`
  margin: 0 auto;
  font-size: 42px;
  font-weight: 500;
  span {
    font-size: inherit;
    font-weight: inherit;
    font-family: inherit;
    color: ${colors.secondary};
  }
  @media (max-width: 600px) {
    font-size: 36px;
    font-weight: 400;
  }
  @media (max-width: 350px) {
    font-size: 27px;
    font-weight: 350;
  }
`;
const InnerImageWrap = styled.div`
  width: 85%;
  display: flex;
  margin: 0 auto;
  padding-top: 25px;
  height: fit-content;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  & > img {
    width: 12.5rem;
    object-fit: contain;
    @media (max-width: 520px) {
      width: 10rem;
    }
    @media (max-width: 416px) {
      width: 8rem;
    }
    @media (max-width: 350px) {
      width: 6rem;
    }
  }
`;
