import styled from "styled-components";
import { defiPronto } from "../../../../assets";
import { colors } from "../../../../colors";

export const SuccesWrapper = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 auto;
    align-items: center;
    max-width: 1250px;
    width: 100%;
    position: relative;
    padding-top: 9rem;

    &:before {
    content: "";
    width: 100%;
    height: 10rem;
    top: 0%;
    left: 0;
    position: absolute;
    background-image: url(${defiPronto});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }

`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* max-width: 400px; */
    width: 35%;
    gap: 2rem;
`;

export const SuccessBox = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    
    width: 58%;
    /* border: 1px solid red; */
`;

export const SuccessTitle = styled.h3`
    width: 80%;
    font-size: 40px;
`;

export const SuccessText = styled.p`
    width: 90%;
    line-height: 1.8rem;
`;