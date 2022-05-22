import styled from "styled-components";
import { colors } from "../../colors";

export const SectionWrap = styled.section`
  width: 100%;
  max-width: 26.75rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  text-align: start;
`;

export const TheCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 426px;
    width: 233px;
    border: 1px solid red;
    border-radius: 10px;
    background-color: ${colors.primary};

    &:hover{
        background-color: ${colors.secondary};
        transition: all 0.5s ease-in;
    }
`;

export const IconContainer = styled.div`
    border-radius: 50%;
    background-color: ${colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    width: 80px;
    text-align: center;
    /* margin: 0 auto; */
`;


export const SecHeading = styled.h3``;
export const SecParagraph = styled.p``;
