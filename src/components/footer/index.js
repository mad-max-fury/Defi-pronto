import React, { useState } from "react";
import { colors } from "../../colors";

import { FaTwitter, FaTiktok } from "react-icons/fa";
import {
  RiDiscordLine,
  RiRedditFill,
  RiInstagramLine,
  RiGoogleFill,
  RiYoutubeFill,
} from "react-icons/ri";

import { ImTelegram, ImTwitter } from "react-icons/im";

import { defiProntoLogoText } from "../../assets";

import {
  Container,
  FooterWrapper,
  FooterIntro,
  FooterLink,
  IntroContainer,
  FooterLogoLink,
  FooterMenu,
  MenuHeader,
  FooterIntroWrap,
  FooterCreditCont,
  FooterCredit,
  FooterSocial,
  FooterSocialLink,
} from "./style";
import { Toast } from "../toast";

const Footer = ({ setConnectWalletModal, connectWalletModal }) => {
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
      <Container>
        <Toast
          icon
          info
          showToast={showToast}
          setShowToast={setShowToast}
          message="Page  is  Coming  soon"
        />
        <FooterWrapper>
          <IntroContainer>
            <FooterLogoLink to="/">
              <img src={defiProntoLogoText} alt="" />
            </FooterLogoLink>
            <FooterIntro>
              Decentralized Incubation and launchpad for cardano.
            </FooterIntro>
          </IntroContainer>

          <FooterIntroWrap>
            <FooterMenu>
              <MenuHeader> Company </MenuHeader>
              <FooterLink to="/about">About</FooterLink>
              <FooterLink
                to="/#how-it-work"
                activeStyle
                scroll={(el) => scrollWithOffset(el, -2850)}
                onClick={toggle}
              >
                How it works
              </FooterLink>
              <FooterLink
                to="#"
                onClick={(e) => {
                  e.preventDefault();
                  toggle();
                  setWarning(!Warning);
                  setShowToast(!showToast);
                }}
                activeStyle
              >
                Projects
              </FooterLink>
              <FooterLink
                to="#"
                onClick={(e) => {
                  e.preventDefault();
                  toggle();
                  setWarning(!Warning);
                  setShowToast(!showToast);
                }}
                activeStyle
              >
                Staking
              </FooterLink>
              <FooterLink
                to="#"
                onClick={(e) => {
                  e.preventDefault();
                  toggle();
                  setWarning(!Warning);
                  setShowToast(!showToast);
                }}
                activeStyle
              >
                Resources
              </FooterLink>
            </FooterMenu>

            <FooterMenu>
              <MenuHeader> Support </MenuHeader>
              <FooterLink to="/">Documentation</FooterLink>
              <FooterLink to="/">Tutorials & Guide</FooterLink>
              <FooterLink to="/">FAQs</FooterLink>
              <FooterLink to="/">Apply</FooterLink>
            </FooterMenu>

            <FooterMenu>
              <MenuHeader> Social Media </MenuHeader>
              <FooterLink to="/">Telegram</FooterLink>
              <FooterLink to="/">Discord</FooterLink>
              <FooterLink to="/">Twitter</FooterLink>
              <FooterLink to="/">Github</FooterLink>
            </FooterMenu>
          </FooterIntroWrap>
        </FooterWrapper>
        <FooterCreditCont>
          <FooterCredit>© 2021 Defipronto. All rights reserved</FooterCredit>

          <FooterSocial>
            <FooterSocialLink to="/">
              <ImTelegram size="30px" />
            </FooterSocialLink>

            <FooterSocialLink to="/">
              <RiDiscordLine size="30px" />
            </FooterSocialLink>

            <FooterSocialLink to="/">
              <ImTwitter size="30px" />
            </FooterSocialLink>
          </FooterSocial>
        </FooterCreditCont>
      </Container>
    </>
  );
};

export { Footer };
