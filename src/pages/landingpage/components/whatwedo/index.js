import React from "react";
import styled from "styled-components";
import { blockChainDark, defiPronto } from "../../../../assets";
import { IntroWrap } from "../../../../components";
const Whatwedo = () => {
  return (
    <Container>
      <InnerWrap>
        <ImgWrap>
          <img src={blockChainDark} />
        </ImgWrap>
        <IntroWrap
          title={"What we do at DefiPronto"}
          desc={
            "We propel and accelerate the best projects, launching only high-quality projects on the Cardano blockchain. Stake $DFP tokens to get early-access to the most promising projects."
          }
        />
      </InnerWrap>
    </Container>
  );
};

export { Whatwedo };

const Container = styled.section`
  height: fit-content;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  gap: 2rem;
  flex-direction: column;
  padding-top: 11rem;
  position: relative;
  padding-bottom: 3rem;

  &:before {
    content: "";
    width: 100%;
    height: 10rem;
    top: 6.5%;
    left: 0;
    position: absolute;
    background-image: url(${defiPronto});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    @media screen and (max-width: 1200px) {
      top: 2%;
      height: 5rem;
    }
  }
  @media screen and (max-width: 1200px) {
    padding: unset;
    width: 90%;
    margin: 0 auto;
    padding-top: 5rem;
  }
  @media screen and (min-width: 1001px) and (max-width: 1300px) {
    width: calc(100% - 4rem);
    margin: 0 auto;
  }
`;

const InnerWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between !important;

  & > div {
    & > h2 {
      font-size: 42px;
      font-weight: 500;
      line-height: 52px;
    }
  }

  & > div {
    & > img {
      width: 100%;
    }
    &:last-of-type {
      max-width: 40%;
      width: 45%;
      justify-self: flex-end;
      margin: unset;

      @media screen and (max-width: 1200px) {
        max-width: 100%;
        width: 100%;
      }
    }
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
    margin: 0 auto;
    flex-direction: column-reverse;
    gap: 2rem;
  }
`;
const ImgWrap = styled.div``;
