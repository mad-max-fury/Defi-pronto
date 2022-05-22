import styled from "styled-components";
import { heroSection2, heroSectionBg } from "../../../../assets";
import { colors } from "../../../../colors";
import { Link } from "react-router-dom";
export const HeroSectionWrap = styled.section`
  height: calc(100vh);
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  position: relative;
  max-height: 62rem;
  & > .image-wrap {
    position: absolute;
    top: -100px;
    left: 0;
    right: 0;
    width: 100%;
    max-width: 1550px;
    margin: 0 auto;
    height: calc(100vh + 100px);
    z-index: -1;
    background-image: url(${heroSectionBg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
    max-height: 62rem;
  }
  @media screen and (max-width: 900px) {
    width: 100%;
    padding-left: 2rem;
    height: calc(100vh - 100px);
  }
`;

export const HeroInner = styled.div`
  font-family: "DM Sans", sans-serif;
  width: 60%;
  margin-left: 9px;
  height: fit-content;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media screen and (max-width: 900px) {
    width: 80%;
    padding-left: 2rem;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const TextUp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  h1 {
    width: 90%;
    font-size: 4.2rem;

    & > span {
      font-size: 4.9rem;
      font-weight: 400;
      font-family: Monument Extended, sans-serif;
      color: ${colors.secondary};
    }
  }
  p {
    width: 80%;
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
