import React from "react";
import styled from "styled-components";
const IntroWrap = ({title, desc}) => {
  return (
    <Wrapper>
      <Heading>{title}</Heading>
      <Paragraph>
        {desc}
      </Paragraph>
    </Wrapper>
  );
};

export { IntroWrap };

const Wrapper = styled.div`
  max-width: 614px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  gap: 1rem;
`;
const Heading = styled.h2`
  text-align: center;
`;
const Paragraph = styled.p``;
