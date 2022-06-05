import React, { useState } from "react";
import { NavBarMobile } from "../navbarmobile";
import { defiProntoLogo } from "../../assets";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtnLink,
  NavHashLink,
  NavNormalLink,
} from "./style";
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
    const elementPosition = el.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Nav scrolled={scrolled}>
        <Toast
          icon
          info
          showToast={showToast}
          setShowToast={setShowToast}
          message="Page  is  coming  soon"
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
            activeStyle
            scroll={(el) => scrollWithOffset(el, -90)}
          >
            <span>Features</span>
          </NavHashLink>
          <NavHashLink
            to="/#how-it-work"
            activeStyle
            scroll={(el) => scrollWithOffset(el, -2150)}
          >
            <span>How it works</span>
          </NavHashLink>
          <NavLink
            to="#"
            style={{ color: "#fff" }}
            onClick={(e) => {
              e.preventDefault();
              setWarning(true);
              setShowToast(true);
            }}
          >
            <span>Projects</span>
          </NavLink>
          <NavLink
            style={{ color: "#fff" }}
            to="#"
            onClick={(e) => {
              e.preventDefault();

              setWarning(!Warning);
              setShowToast(!showToast);
            }}
          >
            <span>Staking</span>
          </NavLink>

          <NavNormalLink
            style={{ color: "#fff" }}
            href="https://docs.defipronto.com/"
            onClick={(e) => {}}
          >
            <span>Docs</span>
          </NavNormalLink>
          <NavBtnLink
            id="connect-wallet"
            to="#"
            onClick={(e) => {
              setConnectWalletModal(!connectWalletModal);
            }}
          >
            <Button filled={true} text={"Connect Wallet"} />
          </NavBtnLink>
        </NavMenu>
        <NavBarMobile
          toggle={toggle}
          isOpen={isOpen}
          setShowToast={setShowToast}
          showToast={showToast}
          setWarning={setWarning}
          Warning={Warning}
          setConnectWalletModal={setConnectWalletModal}
          connectWalletModal={connectWalletModal}
        />
      </Nav>
    </>
  );
};

export { Navbar };
