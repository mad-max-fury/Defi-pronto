import styled from "styled-components";
import { colors } from "../../colors";

export const ButtonWrapper = styled.button`
  border-radius: 5px;
  padding: 15px 32px;
  background-color: ${({ filled, bgColor }) =>
    !filled && !bgColor
      ? "transparent"
      : filled && bgColor
      ? bgColor
      : colors.secondary};
  color: ${({ filled, bgColor }) =>
    !filled && !bgColor
      ? colors.white
      : filled && !bgColor
      ? colors.white
      : filled && bgColor
      ? colors.secondary
      : colors.secondary};
  font-family: "DM Sans", sans-serif;
  border: none;
  outline: none;
  margin-left: 30px;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  transition: all 0.2s ease-in-out;
  border: 2px solid
    ${({ filled, bgColor }) => (filled && bgColor ? bgColor : colors.secondary)};
  & > span:last-of-type {
    margin-left: 5px;
    display: flex;
    align-items: center;
  }
  &:hover {
    background-color: unset;
    border: 2px solid ${colors.secondary};
    color: ${colors.secondary};
    transition: all 0.2s ease-in-out;
  }
`;
