import React from "react";
import {
  SuccesWrapper,
  TextContainer,
  SuccessBox,
  SuccessTitle,
  SuccessText,
} from "./style";

import { SuccessCard } from "../../../../components/successcard";

import { RiRocketLine } from "react-icons/ri";

import { AiOutlineHeart } from "react-icons/ai";

import { RiBitCoinLine } from "react-icons/ri";
import { colors } from "../../../../colors";

const ProjectSuccess = () => {
  return (
    <SuccesWrapper>
      <TextContainer>
        <SuccessTitle>we can help your project succeed</SuccessTitle>

        <SuccessText>
          Join the Defipronto community and take part in a Bright, Unique, and
          Engaging IDO platform on Cardano to empower the most innovative
          projects.
        </SuccessText>
      </TextContainer>

      <SuccessBox>
        <SuccessCard
          title={"Cardano IDO Launchpad"}
          bgColor={colors.secondary}
          icon={<RiRocketLine size={"40px"} />}
          caption={"Apply to launch on DefiPronto IDO launchpad."}
        />
        <SuccessCard
          title={"Project Endorsement"}
          icon={<AiOutlineHeart size={"40px"} />}
          caption={
            "Our community will decide on the validity of your project by endorsing in favor or against the project."
          }
        />
        <SuccessCard
          title={"Private/Public Sale Options"}
          icon={<RiBitCoinLine size={"40px"} />}
          caption={
            "$DFP Token holders will be given priority access to the token sale before the public."
          }
        />
      </SuccessBox>
    </SuccesWrapper>
  );
};

export { ProjectSuccess };
