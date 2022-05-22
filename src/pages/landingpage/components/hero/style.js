import styled from "styled-components";
import { heroSection2, heroSectionBg } from "../../../../assets";
import { colors } from "../../../../colors";

export const HeroSectionWrap = styled.section`
  height: calc(100vh - 100px);
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  position: relative;
  & > .image-wrap {
    position: absolute;
    top: -100px;
    left: 0;
    width: 100%;
    max-width: 1550px;
    margin: 0 auto;
    height: 100vh;
    z-index: -1;
    background-image: url(${heroSection2});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
  }
`;

export const HeroInner = styled.div`
  font-family: "DM Sans", sans-serif;
  width: 100%;
`;
