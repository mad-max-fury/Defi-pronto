import React from "react";
import { Button } from "../../../../components";
import { HeroSectionWrap, HeroInner, BgWrap, BtnWrap, TextUp } from "./style";

import { aboutLooper } from "../../../../assets";

import { RiMoneyDollarCircleLine, RiFileList2Line } from "react-icons/ri";

const HeroSection = () => {
  return (
    <HeroSectionWrap>
      {/* <div className="image-wrap"></div> */}
      <HeroInner>
        <TextUp>
          <h1>
            Decentralized tokens built on the <span>cardano network</span>
          </h1>
          <p>
            Get early access to the most promising Cardano projects with
            Highly-vetted ideas and teams you can trust.
          </p>
        </TextUp>
        <BtnWrap>
          <Button
            text={"Buy DFP"}
            Icon={RiMoneyDollarCircleLine}
            size={20}
            reverse
          />
          <Button
            text={"White Paper"}
            Icon={RiFileList2Line}
            size={20}
            reverse
          />
        </BtnWrap>
      </HeroInner>

      <BgWrap>
        <img src={aboutLooper} />
      </BgWrap>
    </HeroSectionWrap>
  );
};

export { HeroSection };
