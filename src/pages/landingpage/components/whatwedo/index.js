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
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio imperdiet nibh at et neque. Sed adipiscing risus aenean neque imperdiet amet fermentum. Nulla ut sagittis dignissim quisque scelerisque vitae tempor ante. Elementum, augue iaculis condimentum quis. Quis tortor ultricies placerat nam urna."
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
  font-family: "DM Sans", sans-serif;
  flex-direction: column;
  padding-bottom: 10rem;
  &:before {
    content: "";
    width: 100%;
    height: 10rem;
    background-image: url(${defiPronto});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
`;

const InnerWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const ImgWrap = styled.div``;
