import React from "react";
import styled from "styled-components";
import { defiPronto } from "../../../../assets";
const Whatwedo = () => {
  return <Container>Whatwedo</Container>;
};

export { Whatwedo };

const Container = styled.section`
  height: 38rem;
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 10;
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
