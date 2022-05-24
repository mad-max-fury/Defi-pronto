import styled from "styled-components";
import { colors } from "../../../../colors";

export const Container = styled.div`
  width: 100%;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  margin: 0 auto;

  &>div{
      
    &>h2{
      font-size: 45px;
      font-weight: 500;
      @media screen and (max-width: 650px) {
        font-size: 25px;
      };
    };

    &>p{
      @media screen and (max-width: 650px) {
        font-size: 12.8px;
        line-height: 21px;
        text-align: center;
      };
    };

  };
`;

export const TokenomicsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    padding-top: 54px;
`;

export const TokenomicsBox = styled.div`
    width: 369px;
    height: 176px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 20px;
    flex-direction: column;
    border: 2px solid ${colors.secondary};
    border-radius: 20px;

    &:hover {
        transition: all 0.3s ease-out;
        cursor: pointer;
        box-shadow: 0px 4px 24px ${colors.secondary} ;
      }
`;

export const TokenBoxTitle = styled.h6`
    font-size: 12px;
    font-weight: 400;
    font-family: Orbitron, DM Sans;
    color: ${colors.secondary};

`;

export const TokenBoxDetail = styled.h3`
    font-family: Orbitron, DM Sans;
    
`;