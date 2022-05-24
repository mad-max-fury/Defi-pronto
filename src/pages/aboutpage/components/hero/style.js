import styled from "styled-components";
import { heroSection2, heroSectionBg } from "../../../../assets";
import { colors } from "../../../../colors";
import { Link } from "react-router-dom";
export const HeroSectionWrap = styled.section`
  height: calc(100vh - 100px);
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  position: relative;
  max-height: 62rem;
  border: 1px solid red;
  

  @media screen and (max-width: 450px) {
    margin: 0 auto;
    flex-direction: column;
    align-items: center;
    padding-top: 0px;
    padding-left: 0rem;
    width: 90%;
  }

  @media (min-width: 451px) and (max-width: 900px) {
    width: 100%;
    padding-left: 2rem;
    height: calc(100vh - 100px);
  }
`;

export const BgWrap = styled.div`
  /* position: absolute; */
  top: 0;
  left: 5%;
  right: 0;
  width: 45%;
  height: 90%;
  z-index: -1;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;

    @media screen and (max-width: 450px) {
    margin: 0 auto;
    padding-top: 20px;
    left: 0%;
    width: ;
    height: 100%;
    z-index: -1;

    & > img {
    width: fit-content;
    height: 304px;
    object-fit: contain;

  }
  }
`;

export const HeroInner = styled.div`
  font-family: "DM Sans", sans-serif;
  width: 55%;
  margin-left: 9px;
  height: fit-content;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 450px) {
    width: 100%;
    margin-left: 0;
    padding-left: 0rem;
    margin-top: 0;
    border: 1px solid red;
  }

  @media (min-width: 451px) and (max-width: 900px) {
    width: 80%;
    padding-left: 2rem;
  }
  /* @media screen and (max-width: 600px) {
    width: 100%;
  } */
`;

export const TextUp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  h1 {
    width: 90%;
    font-size: 3.8rem;
    font-family: Orbitron, sans-serif;

    & > span {
      font-size: 3.8rem;
      font-weight: 400;
      font-family: Orbitron, sans-serif;
      color: ${colors.secondary};
    }
  }
  p {
    width: 68%;
    line-height: 1.8;
  }

  @media screen and (max-width: 450px) {
    h1 {
    width: 90%;
    font-size: 31.3px;
    font-family: Orbitron, sans-serif;

    & > span {
      font-size: 1.8rem;
      font-weight: 400;
      font-family: Orbitron, sans-serif;
      color: ${colors.secondary};
    }
  }
  p {
    width: 90%;
    font-size: 12.8px;
    line-height: 21px;
  }
  }
`;
export const BtnWrap = styled.div`
  width: fit-content !important;
  display: flex;
  align-self: start;
  gap: 2rem;
  & > button {
    margin: 0;
  }
`;
export const FooterSocial = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`;
export const FooterLink = styled(Link)`
  color: ${colors.white};
  display: flex;
  justify-content: center;
  align-self: center;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-family: "DM Sans", sans-serif;

  &:hover {
    color: ${colors.secondary};
    transition: all 0.3s ease-in-out;
  }
  &.active {
    color: ${colors.secondary};
    transition: all 0.3s ease-in-out;
  }
`;
