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
`;
const Heading = styled.h2`
  text-align: start;
`;
const Paragraph = styled.p`
  text-align: start;
`;
