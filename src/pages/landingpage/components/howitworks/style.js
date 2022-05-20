import styled from "styled-components";
import { colors } from "../../../../colors";

export const HowItWorksWraps = styled.section`
  padding: 0.5rem calc((100vw - 1300px) / 2);
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
export const Heading = styled.h3``;

export const ItemsRow = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  height: fit-content;
  align-items: start;
  @media screen and (max-width: 700px) {
    width: 90%;
    margin: 0 auto;
  }
`;
export const Item = styled.div`
  max-width: 270px;
  margin: auto;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  margin-top: 1.5rem;
  position: relative;

  @media screen and (max-width: 600px) {
    &::after {
      content: "";
      width: 3px;
      height: 2rem;
      background-color: ${colors.secondary};
      margin-top: 1rem;
    }
    &:last-child {
      &::after {
        display: none;
      }
    }
  }
  @media screen and (min-width: 1080px) {
    &::before {
      content: "";
      width: 4rem;
      height: 3px;
      background-color: ${colors.secondary};
      margin-top: 1rem;
      position: absolute;
      left: 85%;
    }
    &:last-child {
      &::before {
        display: none;
      }
    }
  }
`;
export const SpanNum = styled.span`
  font-size: 1.5rem;
  color: ${colors.secondary};
  height: 3.4375rem;
  width: 3.4375rem;
  border-radius: 50%;
  border: 2px solid ${colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ItemHeading = styled.h6``;
export const ItemParagraph = styled.p``;
