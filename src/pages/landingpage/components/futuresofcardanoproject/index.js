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
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      src: people,
      headingtext: "Community",
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      src: rocket,
      headingtext: "Launch Pad",
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      src: speaker,
      headingtext: "Marketing",
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <SecContainer>
      <span>
        <LoadMoreBtn>Load More</LoadMoreBtn>
      </span>
      <div>
        <Intro>
          <SectionIntroCards
            title={"The Future of Cardano Projects"}
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio imperdiet nibh at et neque. Sed adipiscing risus aenean neque imperdiet amet fermentum."
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
        <div className="divider"></div>
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
    padding-bottom: 10rem;
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
  margin-left: 30px;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  transition: all 0.2s ease-in-out;
  border: 2px solid ${colors.secondary};
  color: ${colors.white};

  &:hover {
    background-color: unset;
    border: 2px solid ${colors.white};
    color: ${colors.white};
    transition: all 0.2s ease-in-out;
  }
`;
const Intro = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;
  & > span {
    width: 90%;
    display: flex;
    margin: 0 auto;
  }
`;
