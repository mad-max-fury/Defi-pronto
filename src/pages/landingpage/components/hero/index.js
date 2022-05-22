import React from "react";
import { heroSection2, heroSectionBg } from "../../../../assets";
import { HeroSectionWrap, HeroInner } from "./style";
const HeroSection = () => {
  return (
    <HeroSectionWrap>
      <div className="image-wrap">
        {/* <img src={heroSection2} alt="" /> */}
      </div>
      <HeroInner></HeroInner>
    </HeroSectionWrap>
  );
};

export { HeroSection };
