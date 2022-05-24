import React from "react";
import styled from "styled-components";
const IntroWrap = ({ title, desc }) => {
  return (
    <Wrapper>
      <Heading>{title}</Heading>
      <Paragraph>{desc}</Paragraph>
    </Wrapper>
  );
};

export { IntroWrap };

const Wrapper = styled.div`
  max-width: 600px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  gap: 1rem;
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;
const Heading = styled.h2`
  text-align: start;
  @media (max-width: 500px) and (min-width: 351px) {
    font-size: 20px;
    border: 1px solid red;
    font-weight: 400;
  }
  @media (max-width: 350px) {
    font-size: 32px !important;
    border: 1px solid green;
    font-weight: 400;
  } ;
`;
const Paragraph = styled.p`
  text-align: start;
  @media (max-width: 500px) {
    font-size: 13px;
    border: 1px solid red;
    font-weight: 400;
  } ;
`;
