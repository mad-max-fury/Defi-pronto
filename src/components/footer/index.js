import React from "react";
import { colors } from "../../colors";

import { FaTwitter, FaTiktok } from "react-icons/fa";
import {
  RiDiscordFill,
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
  FooterMenu,
  MenuHeader,
  FooterIntroWrap,
  FooterCredit,
  FooterSocial,
  
} from "./style";

const Footer = () => {
  return (
       <Container>  
            <FooterWrapper>
    
                <FooterMenu>
                        <FooterLink to="/">
                            <img src={ defiProntoLogoText } alt="" />
                        </FooterLink>
                        <FooterIntro>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Odio imperdiet nibh at et neque. Sed adipiscing risus aenean neque imperdiet amet fermentum.  

                        </FooterIntro>
                </FooterMenu>


                <FooterIntroWrap>

                    <FooterMenu>
                        <MenuHeader> Company </MenuHeader>
                            <FooterLink to='/'>
                                <span>About</span>
                            </FooterLink>
                            <FooterLink to='/'>
                                <span>How it works</span>
                            </FooterLink>
                            <FooterLink to='/'>
                                <span>Projects</span>
                            </FooterLink>
                            <FooterLink to='/'>
                                <span>Staging</span>
                            </FooterLink>
                        
                    </FooterMenu>

                    <FooterMenu>
                        <MenuHeader> Support </MenuHeader>
                            <FooterLink to='/'>
                                <span>Documentation</span>
                            </FooterLink>
                            <FooterLink to='/'>
                                <span>Tutorials & Guide</span>
                            </FooterLink>
                            <FooterLink to='/'>
                                <span>FAQs</span>
                            </FooterLink>
                            <FooterLink to='/'>
                                <span>Apply</span>
                            </FooterLink>
                        
                    </FooterMenu>

                    <FooterMenu>
                        <MenuHeader> Social Media </MenuHeader>
                            <FooterLink to='/'>
                                <span>Telegram</span>
                            </FooterLink>
                            <FooterLink to='/'>
                                <span>Discord</span>
                            </FooterLink>
                            <FooterLink to='/'>
                                <span>Twitter</span>
                            </FooterLink>
                            <FooterLink to='/'>
                                <span>Github</span>
                            </FooterLink>
                        
                    </FooterMenu>
                </FooterIntroWrap>

                
            </FooterWrapper>
            <FooterCredit>
                <p>© 2021 Defipronto. All rights reserved.</p>
                
                <FooterSocial>

                <FooterLink to="/">
                    <RiDiscordFill size="25px" color= "#E74141"/>
                    
                </FooterLink>

                <FooterLink to="/">
                    <ImTelegram size="25px" color= "#E74141"/>
                </FooterLink>

                <FooterLink to="/">
                    <ImTwitter size="25px" color= "#E74141"/>
                </FooterLink>

                </FooterSocial>
            </FooterCredit>
        </Container>
  );
};

export { Footer };
