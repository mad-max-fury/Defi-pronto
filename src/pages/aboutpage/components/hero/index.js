import React, { useState } from "react";
import { Button, Toast } from "../../../../components";
import { HeroSectionWrap, HeroInner, BgWrap, BtnWrap, TextUp } from "./style";

import { aboutLooper } from "../../../../assets";

import { RiMoneyDollarCircleLine, RiFileList2Line } from "react-icons/ri";

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
          <span onClick={handleClick}>
            <Button
              text={"Buy DFP"}
              Icon={RiMoneyDollarCircleLine}
              size={20}
              reverse
            />
          </span>
          <span onClick={handleClick}>
            <Button
              text={"White Paper"}
              Icon={RiFileList2Line}
              size={20}
              bgColor={"#fff"}
              reverse
            />
          </span>
        </BtnWrap>
      </HeroInner>

      <BgWrap>
        <img src={aboutLooper} />
      </BgWrap>
    </HeroSectionWrap>
  );
};

export { HeroSection };
