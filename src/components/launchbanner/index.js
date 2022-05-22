import React from "react";
import styled from "styled-components";
import { defiProntoWhite } from "../../assets";
import { colors } from "../../colors";
import { Button } from "../button";
const LaunchBanner = () => {
  return (
    <LaunchBannerWrap>
      <LaunchBannerContainer>
        <LaunchBannerHeading>
          Want to launch your project on DefiPronto?
        </LaunchBannerHeading>
        <span>
          <Button
            filled={true}
            bgColor={colors.white}
            text={"Apply To Launch Pad"}
          />
        </span>
      </LaunchBannerContainer>
    </LaunchBannerWrap>
  );
};

export { LaunchBanner };

const LaunchBannerWrap = styled.section`
  height: 22.19rem;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 10;
  font-family: "DM Sans", sans-serif;
  background-color: ${colors.secondary};
  width: 100%;
`;
const LaunchBannerHeading = styled.h2`
  max-width: 40.875rem;
`;
const LaunchBannerContainer = styled.div`
  background-image: url(${defiProntoWhite});
  display: flex;
  flex-direction: column;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  & span {
    width: fit-content;
    height: fit-content;
    & > button {
      &:hover {
        color: ${colors.white};
        border-color: ${colors.white};
      }
    }
  }
`;