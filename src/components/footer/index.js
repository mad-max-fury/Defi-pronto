import React from "react";
import { colors } from "../../colors";

import { FaTwitter, FaTiktok } from "react-icons/fa";
import {
    RiDiscordLine,
    RiRedditFill,
    RiInstagramLine,
    RiGoogleFill,
    RiYoutubeFill,
} from "react-icons/ri";

import {
    ImTelegram,
    ImTwitter,
} from "react-icons/im"

import{
    defiProntoLogoText,
    
} from "../../assets"

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

const Footer = () => {
  return (
       <Container>  
            <FooterWrapper>
    
                <IntroContainer>
                        <FooterLogoLink to="/">
                            <img src={ defiProntoLogoText } alt="" />
                        </FooterLogoLink>
                        <FooterIntro>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Odio imperdiet nibh at et neque. Sed adipiscing risus aenean neque imperdiet amet fermentum.  

                        </FooterIntro>
                </IntroContainer>


                <FooterIntroWrap>

                    <FooterMenu>
                        <MenuHeader> Company </MenuHeader>
                            <FooterLink to='/'>
                                About
                            </FooterLink>
                            <FooterLink to='/'>
                                How it works
                            </FooterLink>
                            <FooterLink to='/'>
                                Projects
                            </FooterLink>
                            <FooterLink to='/'>
                                Staking
                            </FooterLink>
                        
                    </FooterMenu>

                    <FooterMenu>
                        <MenuHeader> Support </MenuHeader>
                            <FooterLink to='/'>
                                Documentation
                            </FooterLink>
                            <FooterLink to='/'>
                                Tutorials & Guide
                            </FooterLink>
                            <FooterLink to='/'>
                                FAQs
                            </FooterLink>
                            <FooterLink to='/'>
                                Apply
                            </FooterLink>
                        
                    </FooterMenu>

                    <FooterMenu>
                        <MenuHeader> Social Media </MenuHeader>
                            <FooterLink to='/'>
                                Telegram
                            </FooterLink>
                            <FooterLink to='/'>
                                Discord
                            </FooterLink>
                            <FooterLink to='/'>
                                Twitter
                            </FooterLink>
                            <FooterLink to='/'>
                                Github
                            </FooterLink>
                        
                    </FooterMenu>
                </FooterIntroWrap>

                
            </FooterWrapper>
            <FooterCreditCont>


                <FooterCredit>
                © 2021 Defipronto. All rights reserved

                </FooterCredit>
                
                
                <FooterSocial>

                    <FooterSocialLink to="/">
                        <ImTelegram size="30px" />
                    </FooterSocialLink>

                    <FooterSocialLink to="/">
                        <RiDiscordLine size="30px"/>
                        
                    </FooterSocialLink>

                    <FooterSocialLink to="/">
                        <ImTwitter size="30px"/>
                    </FooterSocialLink>

                </FooterSocial>
            </FooterCreditCont>
        </Container>
  );
};

export { Footer };
