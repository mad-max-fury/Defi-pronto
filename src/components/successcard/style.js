import styled from "styled-components";
import { colors } from "../../colors";

// export const SectionWrap = styled.section`
//   width: 100%;
//   max-width: 26.75rem;
//   display: flex;
//   flex-direction: column;
//   gap: 1.5rem;
//   text-align: start;
// `;

export const TheCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 426px;
    width: 233px;
    margin: 0 auto;
    /* border: 1px solid red; */
    border-radius: 10px;
    background-color: ${({bgColor}) => bgColor ? bgColor : "#2F282E" };
    transition: all 0.5s ease-out;

    &:hover{
        background-color: ${colors.secondary};
        transition: all 0.4s ease-in;
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

export const SuccessTitle =  styled.h4`
    text-align: center;
    padding-top: 32px;
    font-family: 'Orbitron', DM Sans;
    font-size: 25px;
    /* line-height: 50.48px; */
`;


export const SuccessCaption =  styled.span`
    font-size: 12px;
    text-align: center;
    line-height: 19.42px;
    padding: 8px 12px 0 12px;
    color: ${colors.light_grey};
    font-family: 'DM Sans';
`;


export const SecHeading = styled.h3``;
export const SecParagraph = styled.p``;
