import React from "react";
import { Button } from "../../../../components";
import {
  HeroSectionWrap,
  HeroInner,
  BtnWrap,
  TextUp,
  FooterSocial,
  FooterLink,
} from "./style";

import { whitePaper } from "../../../../assets"
import { ImTelegram, ImTwitter } from "react-icons/im";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

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
          <Button text={"Buy DFP"} Icon={RiMoneyDollarCircleLine} reverse />
          <Button text={"White Paper"} image={whitePaper} reverse />
          
        </BtnWrap>
      </HeroInner>
    </HeroSectionWrap>
  );
};

export { HeroSection };
