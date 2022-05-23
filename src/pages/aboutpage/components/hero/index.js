import React from "react";
import { Button } from "../../../../components";
import {
  HeroSectionWrap,
  HeroInner,
  BgWrap,
  BtnWrap,
  TextUp,
  FooterSocial,
  FooterLink,
} from "./style";

import { aboutLooper } from "../../../../assets"
// import { IoNewspaperOutline } from "react-icons/io";
import { RiMoneyDollarCircleLine, RiFileList2Line } from "react-icons/ri";

const HeroSection = () => {
  return (
    <HeroSectionWrap>
      <div className="image-wrap"></div>
      <HeroInner>
        <TextUp>
          <h1>
            Decentralized tokens built on the <span>cardano network</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
            imperdiet nibh at et neque. Sed adipiscing risus aenean neque
            imperdiet amet fermentum.           
            </p>
        </TextUp>
        <BtnWrap>
          <Button text={"Buy DFP"} Icon={RiMoneyDollarCircleLine} size={20} reverse />
          <Button text={"White Paper"} Icon={RiFileList2Line} size={20} reverse />
          
        </BtnWrap>
      </HeroInner>

      <BgWrap>
        <img src={aboutLooper} />
      </BgWrap>
    </HeroSectionWrap>
  );
};

export { HeroSection };
