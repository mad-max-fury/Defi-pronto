import styled from "styled-components";
import {
  backG,
  bg1,
  defiBgTest,
  heroSection2,
  heroSectionBg,
} from "../../../../assets";
import { colors } from "../../../../colors";
import { Link } from "react-router-dom";
export const HeroSectionWrap = styled.section`
  height: calc(100vh);
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  position: relative;
  max-height: 62rem;
  display: flex;

  & > .image-wrap {
    position: absolute;
    top: -100px;
    left: 0;
    right: 0;
    width: 100%;
    max-width: 1550px;
    margin: 0 auto;
    height: calc(100% + 100px);
    z-index: -1;
    background-image: url(${heroSectionBg});
    /* border: 2px solid red; */
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
    max-height: 69rem;
    @media screen and (max-width: 600px) {
      display: none;
    }
  }
  @media screen and (max-width: 900px) and (min-width: 798px) {
    width: 100%;
    padding: 1rem 1.5rem;
    height: fit-content;
  }
  @media screen and (max-width: 798px) {
    padding: 1rem 1.5rem;
    height: fit-content;
    & > .image-wrap {
      height: calc(100% + 100px);
    }
  }
`;
export const BgWrap = styled.div`
  position: absolute;
  top: -100px;
  left: 0%;
  right: 0;
  width: 100%;
  border: 1px solid red;
  height: 100%;
  z-index: -1;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const HeroInner = styled.div`
  font-family: "DM Sans", sans-serif;
  width: 60%;
  margin-left: 9px;
  height: fit-content;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media screen and (max-width: 900px) {
    width: 100%;
    padding-left: 2rem;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    padding-left: unset;
  }
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
    @media screen and (max-width: 640px) {
      width: 100%;
      font-size: 2.8rem;
      font-family: Orbitron, sans-serif;

      & > span {
        font-size: 2.8rem;
        font-weight: 400;
        font-family: Orbitron, sans-serif;
        color: ${colors.secondary};
      }
    }
    @media screen and (max-width: 415px) {
      width: 100%;
      font-size: 1.8rem;
      font-family: Orbitron, sans-serif;

      & > span {
        font-size: 1.8rem;
        font-weight: 400;
        font-family: Orbitron, sans-serif;
        color: ${colors.secondary};
      }
    }
  }
  p {
    width: 68%;
    line-height: 1.8;
    @media screen and (max-width: 900px) {
      width: 100%;
    }
    @media screen and (max-width: 600px) {
      width: 100%;
    }
    @media screen and (max-width: 415px) {
      width: 100%;
      font-size: 0.8rem;
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
