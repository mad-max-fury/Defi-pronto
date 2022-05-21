import React from "react";
import styled from "styled-components";
import {
  braille,
  deepSake,
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
`;
const Heading = styled.h3`
  span {
    font-size: inherit;
    font-weight: inherit;
    font-family: inherit;
    color: ${colors.secondary};
  }
`;
const InnerImageWrap = styled.div`
  width: 85%;
  display: flex;
  margin: 0 auto;
  height: fit-content;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  & > img {
    width: 12.5rem;
    object-fit: contain;
  }
`;
