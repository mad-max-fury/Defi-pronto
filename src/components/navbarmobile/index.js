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
  NavHashLink,
  NavBtnLinkWrap,
  NavBtnLink,
} from "./style";
const NavBarMobile = ({
  toggle,
  isOpen,
  setWarning,
  Warning,
  setShowToast,
  showToast,
  setConnectWalletModal,
  connectWalletModal,
}) => {
  const scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <NavBarMobileContainer isOpen={isOpen}>
        <Icon>
          <CloseIcon onClick={toggle} />
        </Icon>
        <NavBarLinksWrapper>
          <NavLinks>
            <NavLink to="/about" onClick={toggle} activeStyle>
              <span>about</span>
            </NavLink>
            <NavHashLink
              to="/#features"
              activeStyle
              scroll={(el) => scrollWithOffset(el, -90)}
              onClick={toggle}
            >
              <span>Features</span>
            </NavHashLink>
            <NavHashLink
              to="/#how-it-work"
              activeStyle
              scroll={(el) => scrollWithOffset(el, -2850)}
              onClick={toggle}
            >
              <span>How it works</span>
            </NavHashLink>
            <NavLink
              to="#"
              onClick={(e) => {
                e.preventDefault();
                toggle();
                setWarning(!Warning);
                setShowToast(!showToast);
              }}
              activeStyle
            >
              <span>Projects</span>
            </NavLink>
            <NavLink
              to="#"
              onClick={(e) => {
                e.preventDefault();
                toggle();
                setWarning(!Warning);
                setShowToast(!showToast);
              }}
              activeStyle
            >
              <span>Staking</span>
            </NavLink>
          </NavLinks>
          <NavBtnLinkWrap>
            <NavBtnLink
              to="#"
              activeStyle
              onClick={(e) => {
                e.preventDefault();
                toggle();
                setConnectWalletModal(!connectWalletModal);
              }}
            >
              <Button filled={true} text={"Connect Wallet"} />
            </NavBtnLink>
          </NavBtnLinkWrap>
        </NavBarLinksWrapper>
      </NavBarMobileContainer>
    </>
  );
};

export { NavBarMobile };
