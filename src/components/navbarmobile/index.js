import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Button } from "../button";
import {
  NavBarMobileContainer,
  CloseIcon,
  Icon,
  NavBarLinksWrapper,
  NavLinks,
  NavLink,
  NavBtnLinkWrap,
  NavBtnLink,
} from "./style";
const NavBarMobile = ({ toggle, isOpen }) => {
  return (
    <>
      <NavBarMobileContainer isOpen={isOpen}>
        <Icon>
          <CloseIcon onClick={toggle} />
        </Icon>
        <NavBarLinksWrapper>
          <NavLinks>
            <NavLink to="/about" activeStyle>
              <span>about</span>
            </NavLink>
            <NavLink to="/features" activeStyle>
              <span>Features</span>
            </NavLink>
            <NavLink to="/how-it-works" activeStyle>
              <span>How it works</span>
            </NavLink>
            <NavLink to="/projects" activeStyle>
              <span>Projects</span>
            </NavLink>
            <NavLink to="/staking" activeStyle>
              <span>Staking</span>
            </NavLink>
          </NavLinks>
          <NavBtnLinkWrap>
            <NavBtnLink to="/connect" activeStyle>
              <Button filled={true} text={"Connect Wallet"} />
            </NavBtnLink>
          </NavBtnLinkWrap>
        </NavBarLinksWrapper>
      </NavBarMobileContainer>
    </>
  );
};

export { NavBarMobile };
