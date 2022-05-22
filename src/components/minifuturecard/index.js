import React from "react";
import styled from "styled-components";
import { colors } from "../../colors";

const MiniFutureCard = ({ src, headingtext, paragraph }) => {
  return (
    <MiniCardWrap>
      <SpanNum>
        <img src={src} alt={`icon for ${headingtext}`} />
      </SpanNum>
      <ItemHeading>{headingtext}</ItemHeading>
      <ItemParagraph>{paragraph}</ItemParagraph>
    </MiniCardWrap>
  );
};

export { MiniFutureCard };

const MiniCardWrap = styled.div`
  max-width: 270px;
  margin: auto;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  margin-top: 1.5rem;
  position: relative;
`;
export const SpanNum = styled.span`
  height: 10rem;
  width: 10rem;
  color: ${colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  & img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
export const ItemHeading = styled.h6`
  text-align: center;
`;
export const ItemParagraph = styled.p`
  text-align: center;
`;
