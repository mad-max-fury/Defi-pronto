import React from "react";
import { ButtonWrapper } from "./style";
import { FiArrowUpRight } from "react-icons/fi";
const Button = ({ filled, bgColor, noIcon, reverse }) => {
  return (
    <ButtonWrapper filled={filled} bgColor={bgColor} reverse={reverse}>
      <span>Go To App</span>
      {!noIcon && <FiArrowUpRight />}
    </ButtonWrapper>
  );
};

export { Button };
