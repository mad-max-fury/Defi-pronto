import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { RiMenu3Line } from "react-icons/ri";
import { colors } from "../../colors";
// import { Link as HashLink } from "react-scroll";
import { HashLink } from "react-router-hash-link";

export const Nav = styled.nav`
  height: 100px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1330px) / 2);
  z-index: 10;
  font-family: "DM Sans", sans-serif;
  position: sticky;
  top: 0;
  transition: all 0.3s ease-in-out;
  background-color: ${({ scrolled }) =>
    scrolled ? colors.primary : "transparent"};
  box-shadow: ${({ scrolled }) =>
    scrolled ? "0px 2px 4px rgba(0, 0, 0, 0.25)" : "none"};
`;
export const NavLink = styled(Link)`
  color: ${colors.white};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-family: "DM Sans", sans-serif;

  &:hover {
    color: ${colors.secondary};
    transition: all 0.3s ease-in-out;
  }
  &.active {
    color: ${colors.secondary};
    transition: all 0.3s ease-in-out;
  }

  & > img{
      width: 60px;
      height: 60px;

    @media screen and (max-width: 650px) {
      width: 50px;
      height: 50px;
      padding-left: 8px;
    }
  }
`;
export const NavHashLink = styled(HashLink)`
  color: ${colors.white};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-family: "DM Sans", sans-serif;

  &:hover {
    color: ${colors.secondary};
    transition: all 0.3s ease-in-out;
  }
  &.active {
    color: ${colors.secondary};
    transition: all 0.3s ease-in-out;
  }
`;
export const Bars = styled(RiMenu3Line)`
  display: none;
  color: ${colors.white};
  @media (max-width: 950px) {
    display: block;
    position: absolute;
    top: 14%;
    right: -1%;
    transform: translate(-100%, 75%);
    cursor: pointer;
    font-size: 1.8rem;
  }

  & > span{
    border: 3px solid red;
    @media (max-width: 950px) {
      display: block;
      position: absolute;
    }
  }
`;
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 30px;
  @media (max-width: 950px) {
    display: none;
  }
`;
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  font-family: "DM Sans", sans-serif;

  @media (max-width: 840px) {
    display: none;
  }
`;
export const NavBtnLink = styled(Link)`
  border-radius: 5px;
  width: fit-content;
  height: fit-content;
  text-decoration: none;
`;
