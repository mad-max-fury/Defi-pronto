import React from "react";
import { ButtonWrapper } from "./style";
import { FiArrowUpRight } from "react-icons/fi";
const Button = ({ filled, bgColor, noIcon, reverse, text, Icon }) => {
  //filled controls the background fill, it takes in boolean values[true, false]
  //reverse just inverts the flex direction
  //bgColor is used for passing color to the components
  //noIcon removes the icon entirely
  //Icon is for overiding the default icon
  return (
    <ButtonWrapper filled={filled} bgColor={bgColor} reverse={reverse}>
      <span>{text}</span>
      {!noIcon && (
        <span className="last-span">
          {Icon ? <Icon /> : <FiArrowUpRight />}
        </span>
      )}
    </ButtonWrapper>
  );
};

export { Button };
