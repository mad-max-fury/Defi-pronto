import React, { useState } from "react";
import { NavBarMobile } from "../navbarmobile";
import { defiProntoLogo } from "../../assets";
import { Nav, NavLink, Bars, NavMenu, NavBtnLink, NavHashLink } from "./style";
import { Button } from "../button";
import { Toast } from "../toast";
const Navbar = ({ connectWalletModal, setConnectWalletModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [scrolled, setScrolled] = useState(false);
  const [Warning, setWarning] = useState(false);
  const [showToast, setShowToast] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.scrollY > 1) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  const scrollWithOffset = (el, offset) => {
    const elementPos = el.offsetTop + offset + 200;

    window.scroll({
      top: elementPos,
      left: 0,
      behavior: "smooth",
    });
  };

  // useEffect(() => {
  //   first;

  //   return () => {
  //     second;
  //   };
  // }, []);

  return (
    <>
      <Nav scrolled={scrolled}>
        <Toast
          icon
          info
          showToast={showToast}
          setShowToast={setShowToast}
          message="Page  is  Coming  soon"
        />

        <NavLink to="/">
          <img src={defiProntoLogo} alt="logo" />
        </NavLink>
        <Bars onClick={toggle} />
        <NavMenu>
          <NavLink to="/about" activeStyle>
            <span>About</span>
          </NavLink>
          <NavHashLink
            to="/#features"
            // scroll={(el) => scrollWithOffset(el, 900)}
            activeStyle
          >
            <span>Features</span>
          </NavHashLink>
          <NavHashLink
            to="/#how-it-works"
            // scroll={(el) => scrollWithOffset(el, 120)}
            activeStyle
          >
            <span>How it works</span>
          </NavHashLink>
          <NavLink
            to="#"
            activeStyle
            onClick={(e) => {
              e.preventDefault();
              setWarning(true);
              setShowToast(true);
            }}
          >
            <span>Projects</span>
          </NavLink>
          <NavLink
            to="#"
            activeStyle
            onClick={(e) => {
              e.preventDefault();

              setWarning(!Warning);
              setShowToast(!showToast);
            }}
          >
            <span>Staking</span>
          </NavLink>
          <NavBtnLink
            id="connect-wallet"
            to="#"
            activeStyle
            onClick={(e) => {
              setConnectWalletModal(!connectWalletModal);
            }}
          >
            <Button filled={true} text={"Connect Wallet"} />
          </NavBtnLink>
        </NavMenu>
        <NavBarMobile toggle={toggle} isOpen={isOpen} />
      </Nav>
    </>
  );
};

export { Navbar };
