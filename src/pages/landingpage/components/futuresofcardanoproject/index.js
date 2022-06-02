import React from "react";
import styled from "styled-components";
import { people, rocket, speaker, star, topology } from "../../../../assets";
import { colors } from "../../../../colors";
import {
  IntroWrap,
  MiniFutureCard,
  SectionIntroCards,
} from "../../../../components";
import { HowItWorks } from "../howitworks";
const FutureOfCardanoIntroSection = () => {
  const data = [
    {
      src: star,
      headingtext: "Vetted Projects",
      paragraph:
        "We only accept and incubate vetted projects with unique use cases and utilities.",
    },
    {
      src: people,
      headingtext: "Community",
      paragraph:
        "Enagage with the Defipronto community in AMA and Q&A sessions.",
    },
    {
      src: rocket,
      headingtext: "Launch Pad",
      paragraph:
        "Launch On Defipronto Launchpad with priority access given to $DFP token holders.",
    },
    {
      src: speaker,
      headingtext: "Marketing",
      paragraph: "We also support projects with after launch marketing.",
    },
  ];

  return (
    <SecContainer id="features">
      <span>
        <LoadMoreBtn>
          <span>Load More</span>
        </LoadMoreBtn>
      </span>
      <div>
        <Intro>
          <SectionIntroCards
            title={"Be Part Of The Future Of Cardano Ecosystem"}
            desc="Join the Defipronto community and take part in a Bright, Unique, and Engaging IDO platform on Cardano to empower the most innovative projects."
          />
          <span>
            {data.map(({ src, headingtext, paragraph }) => (
              <MiniFutureCard
                src={src}
                headingtext={headingtext}
                paragraph={paragraph}
              />
            ))}
          </span>
        </Intro>
        <div className="divider" id={"how-it-work"}></div>
        <Intro>
          <HowItWorks />
        </Intro>
      </div>
    </SecContainer>
  );
};

export { FutureOfCardanoIntroSection };

const SecContainer = styled.section`
  height: fit-content;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  flex-direction: column;
  position: relative;
  background-image: url(${topology});
  background-image: contain;
  background-repeat: no-repeat;
  padding-top: 5rem;
  & > span {
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 5rem;
  }
  & > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 7rem;
    padding-bottom: 5rem;
    & > div.divider {
      height: 1.1px;
      width: 40%;
      background-color: #606060;
      margin: 0 auto;
    }
  }
`;

const LoadMoreBtn = styled.button`
  border-radius: 5px;
  padding: 15px 20%;
  background-color: transparent;
  font-family: "DM Sans", sans-serif;
  border: none;
  outline: none;
  /* margin-left: 30px; */
  cursor: pointer;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  transition: all 0.2s ease-in-out;
  border: 2px solid ${colors.secondary};
  color: ${colors.white};
  span {
    font-family: inherit;
  }
  &:hover {
    background-color: unset;
    border: 2px solid ${colors.white};
    color: ${colors.white};
    transition: all 0.2s ease-in-out;
  }
  @media (max-width: 400px) {
    width: 90%;
    display: flex;
    margin: 0;
    padding: 15px unset;
    text-align: center;
    align-items: center;
    justify-content: center;
  }
`;
const Intro = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;

  & > aside {
    & > h2 {
      font-size: 42px;
      font-weight: 500;
      line-height: 52px;
    }
  }

  & > span {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    height: fit-content;
    align-items: start;

    margin: 0 auto;
    @media screen and (max-width: 700px) {
      width: 90%;
      margin: 0 auto;
    }
  }
`;
