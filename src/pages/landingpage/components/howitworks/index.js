import React from "react";
import {
  HowItWorksWraps,
  Heading,
  ItemsRow,
  Item,
  SpanNum,
  ItemHeading,
  ItemParagraph,
} from "./style";
const HowItWorks = () => {
  return (
    <HowItWorksWraps>
      <Heading>How It Works</Heading>
      <ItemsRow>
        <Item>
          <SpanNum>
            <h5>1</h5>
          </SpanNum>
          <ItemHeading>Apply for incubation</ItemHeading>
          <ItemParagraph>
            Fill our application form and upload your project
          </ItemParagraph>
        </Item>
        <Item>
          <SpanNum>
            <h5>2</h5>
          </SpanNum>
          <ItemHeading>Project Vetting</ItemHeading>
          <ItemParagraph>
            The project is thoroughly vetted by the team
          </ItemParagraph>
        </Item>
        <Item>
          <SpanNum>
            <h5>3</h5>
          </SpanNum>
          <ItemHeading>Support System</ItemHeading>
          <ItemParagraph>
            We provide the necessary support to ensure the project is launch
            ready
          </ItemParagraph>
        </Item>
        <Item>
          <SpanNum>
            <h5>4</h5>
          </SpanNum>
          <ItemHeading>IDO Launched</ItemHeading>
          <ItemParagraph>
            Your project is launched on our platform
          </ItemParagraph>
        </Item>
      </ItemsRow>
    </HowItWorksWraps>
  );
};

export { HowItWorks };
