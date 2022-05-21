import React from "react";
import styled from "styled-components";
const IntroWrap = () => {
  return (
    <Wrapper>
      <Heading>The Future of Cardano Projects</Heading>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio imperdiet
        nibh at et neque. Sed adipiscing risus aenean neque imperdiet amet
        fermentum.
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
  border: 1px solid red;
`;
const Heading = styled.h2`
  text-align: center;
`;
const Paragraph = styled.p``;
