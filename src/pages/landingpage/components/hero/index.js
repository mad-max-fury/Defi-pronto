import React from "react";
import { Button } from "../../../../components";
import {
  HeroSectionWrap,
  HeroInner,
  BtnWrap,
  TextUp,
  FooterSocial,
  FooterLink,
  BgWrap,
} from "./style";
import { ImTelegram, ImTwitter } from "react-icons/im";
import { RiDiscordFill } from "react-icons/ri";
import { HeroPageBg, bg1, heroSection2, backG } from "../../../../assets";

const HeroSection = () => {
  return (
    <HeroSectionWrap>
      <div className="image-wrap"></div>
      <HeroInner>
        <TextUp>
          <h1>
            Decentralized Incubation and launchpad for <span>cardano</span>
          </h1>
          <p>
            Get early access to the most promising Cardano projects with
            Highly-vetted ideas and teams you can trust.
          </p>
        </TextUp>
        <BtnWrap>
          <Button text={"Go To App"} />
          <FooterSocial>
            <FooterLink to="/">
              <ImTelegram size="25px" />
            </FooterLink>

            <FooterLink to="/">
              <RiDiscordFill size="25px" />
            </FooterLink>

            <FooterLink to="/">
              <ImTwitter size="25px" />
            </FooterLink>
          </FooterSocial>
        </BtnWrap>
      </HeroInner>
      {/* <BgWrap>
        <img src={backG} />
      </BgWrap> */}
    </HeroSectionWrap>
  );
};

export { HeroSection };
