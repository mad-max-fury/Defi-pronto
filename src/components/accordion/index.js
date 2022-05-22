import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { colors } from "../../colors";
import { FaAngleDown } from "react-icons/fa";
const Accordion = ({ heading, accordingContentFor }) => {
  const [Open, setOpen] = useState(false);
  return (
    <AccordionWrapper>
      <AccordionHeader onClick={() => setOpen(!Open)}>
        <TextHeading>{heading}</TextHeading>
        <HeadingIcon>
          <FaAngleDown />
        </HeadingIcon>
      </AccordionHeader>
      <AccordionContent active={Open}>
        <>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium
            diam dui ut tellus tortor tristique tellus egestas. Nullam nullam
            ullamcorper tortor mus. Donec quis vulputate congue malesuada urna
            arcu quis. Mauris elit leo quis rhoncus in vestibulum maecenas.
          </p>
          <p>
            In my free time I also play around some other things like Graphic
            Design, Optimized Content Creation and Social Media Management.
          </p>
        </>
      </AccordionContent>
    </AccordionWrapper>
  );
};

export { Accordion };

const AccordionWrapper = styled.div`
  height: fit-content;
  background: ${colors.general_bg};
  max-width: 41.81rem;
  margin: 0 auto;
  border-top: 1px solid ${colors.grey_text};
`;
const AccordionHeader = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% - 0rem);
  justify-content: space-between;
  // border:1px solid green;
  padding: 0.75rem 0rem;
  transition: all 0.4s ease;
  &:hover {
    cursor: pointer;
    background: ${colors.secondary};
    transition: all 0.4s ease;
  }
`;
const TextHeading = styled.div`
  color: ${colors.white};
  font-size: 24px;
  font-weight: semi-bold;
`;
const HeadingIcon = styled.h3``;
const AccordionContent = styled.div`
  display: flex;

  transition: all 0.4s ease;
  ${({ active }) =>
    active
      ? `
    transition:all 0.4s ease;
    flex-direction:column;
    gap:1rem;
    width:calc( 100% - 0rem);
    justify-content:space-between;
    padding:1rem 0rem;
    border-radius:10px;
    max-height:fit-content;
      & > p {
        color:#BDC2D4;
        text-align:start;
      }

`
      : `
    transition:all 0.4s cube-bezier(0,1,0,1);
    max-height:0;
    overflow:hidden;
`}
`;
