import React, { useState } from "react";
import { NavBarMobile } from "../navbarmobile";
import { defiProntoLogo } from "../../assets";
import { Nav, NavLink, Bars, NavMenu, NavBtnLink } from "./style";
import { Button } from "../button";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [scrolled, setScrolled] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.scrollY > 1) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });
  return (
    <>
      <Nav scrolled={scrolled}>
        <NavLink to="/">
          <img src={defiProntoLogo} alt="logo" />
        </NavLink>
        <Bars onClick={toggle} />
        <NavMenu>
          <NavLink to="/about" activeStyle>
            <span>About</span>
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
          <NavBtnLink to="/connect" activeStyle>
            <Button filled={true} text={"Connect Wallet"} />
          </NavBtnLink>
        </NavMenu>
        <NavBarMobile toggle={toggle} isOpen={isOpen} />
      </Nav>
    </>
  );
};

export { Navbar };
