import React from "react";
import styled from "styled-components";
import { colors } from "../../colors";
import { Button } from "../button";
const LaunchBanner = () => {
  return (
    <LaunchBannerWrap>
      <LaunchBannerContainer>
        <LaunchBannerHeading>
          Want to launch your project on DefiPronto?
        </LaunchBannerHeading>
        <Button
          filled={true}
          bgColor={colors.white}
          text={"Apply To Launch Pad"}
        />
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
`;
const LaunchBannerHeading = styled.h2``;
const LaunchBannerContainer = styled.div``;
