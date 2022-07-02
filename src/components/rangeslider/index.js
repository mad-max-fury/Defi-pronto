import React from "react";
import styled from "styled-components";

import {
  Container,
  RangeContainer,
  RangeInput,
  
} from "./style";

import { allocationChart } from "../../assets";
import { SectionIntroCards } from "../sectionintrocards";

const RangeSlider = () => {
  return (
    <Container>
      <RangeContainer>
      <RangeInput />
      </RangeContainer>
    </Container>
  );
};

export { RangeSlider };
