import React from "react";
import {
  Container,
  Image,
  TextArea,
  Head,
  Heading,
  Paragraph,
  ProgressBar,
  ProgressBarFill,
  TextRow,
  InnerTextCol,
  BottomCol,
  FooterSocial,
  FooterLink,
} from "./style";
import { ImTelegram, ImTwitter } from "react-icons/im";
import { FaMedium } from "react-icons/fa";
const ProjectCard = ({
  progress,
  src,
  heading,
  paragraph,
  targetAmount,
  targetRaised,
}) => {
  return (
    <Container>
      <Image src={src} alt="image" />
      <TextArea>
        <Head>
          <Heading>{heading}</Heading>
          <Paragraph>{paragraph}</Paragraph>
        </Head>

        <BottomCol>
          {/* {**progressbar goes here**} */}
          <ProgressBar progress={progress}>
            <ProgressBarFill progress={progress}></ProgressBarFill>
          </ProgressBar>

          <TextRow>
            <InnerTextCol>
              <h5>Target Amount</h5>
              <h4 title={targetAmount === "TBA" && "To be announced"}>
                {targetAmount}
              </h4>
            </InnerTextCol>
            <InnerTextCol>
              <h5>Total Raised</h5>
              <h4 title={targetRaised === "TBA" && "To be announced"}>
                {targetRaised}
              </h4>
            </InnerTextCol>
          </TextRow>

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
        </BottomCol>
      </TextArea>
    </Container>
  );
};

export { ProjectCard };
