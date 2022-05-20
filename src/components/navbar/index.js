import React from "react";
import { NavBarMobile } from "../navbarmobile";
import { FiArrowUpRight } from "react-icons/fi";
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from "./style";
import { Button } from "../button";
const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <Nav>
        <NavLink to="/">
          <span>logo</span>
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
            <Button filled={true} />
          </NavBtnLink>
        </NavMenu>
        <NavBarMobile toggle={toggle} isOpen={isOpen} />
      </Nav>
    </>
  );
};

export { Navbar };
