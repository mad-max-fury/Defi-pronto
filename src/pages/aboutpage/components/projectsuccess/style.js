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

    @media screen and (max-width: 650px) {
      width: 90%;
      left: 5%;
      top: -3.2%;
    }
  }

  @media screen and (max-width: 650px) {
    flex-direction: column;
    padding-top: 4.7rem;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* max-width: 400px; */
  width: 35%;
  gap: 2rem;

  @media screen and (max-width: 700px) {
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    /* border: 1px solid red; */
  }

  @media screen and (max-width: 1250px) {
    padding-left: 20px;
    padding-right: 20px;
    width: 95%;
  }
`;

export const SuccessBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 58%;
  /* border: 1px solid red; */

  @media screen and (max-width: 700px) {
    /* display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 auto;
    gap: 1.5rem; */
    padding-top: 45px;
    width: 90%;
    font-size: 25px;
    margin: 0 auto;
    /* border: 1px solid red; */
    gap: 1.5rem;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  @media screen and (max-width: 1250px) {
    padding-top: 45px;
    flex-wrap: wrap;
    width: 95%;
  }
`;

export const SuccessTitle = styled.h3`
  width: 80%;
  font-size: 40px;

  @media screen and (max-width: 840px) {
    width: 100%;
    font-size: 25px;
    margin: 0 auto;
  }
`;

export const SuccessText = styled.p`
  width: 100%;
  line-height: 1.8rem;
  font-family: "DM Sans", sans-serif;
  @media screen and (max-width: 650px) {
    font-size: 12.8px;
    line-height: 21px;
  }
`;
