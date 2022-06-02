import React, { useState } from "react";
import { Button, Toast } from "../../../../components";
import {
  HeroSectionWrap,
  HeroInner,
  BtnWrap,
  TextUp,
  FooterSocial,
  FooterLink,
} from "./style";
import { ImTelegram, ImTwitter } from "react-icons/im";
import { FaMedium } from "react-icons/fa";

const HeroSection = () => {
  const [showToast, setShowToast] = useState(false);

  const handleClick = () => setShowToast(true);
  return (
    <HeroSectionWrap>
      <Toast
        info={true}
        icon
        showToast={showToast}
        setShowToast={setShowToast}
        message="coming soon"
      />
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
          <span onClick={handleClick}>
            <Button text={"Go To App"} />
          </span>
          <FooterSocial>
            <FooterLink to="/">
              <ImTelegram size="25px" />
            </FooterLink>

            <FooterLink to="/">
              <FaMedium size="25px" />
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
