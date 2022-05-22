import React from "react";
import { SectionWrap, SecHeading, SecParagraph } from "./style";
const SectionIntroCards = ({ title, desc }) => {
  return (
    <SectionWrap>
      <SecHeading>{title}</SecHeading>
      <SecParagraph>{desc}</SecParagraph>
    </SectionWrap>
  );
};

export { SectionIntroCards };
