import React from "react";

import { FaTwitter, FaTiktok } from "react-icons/fa";
import {
  RiDiscordFill,
  RiRedditFill,
  RiInstagramLine,
  RiGoogleFill,
  RiYoutubeFill,
} from "react-icons/ri";

import {
  Container,
  FooterWrapper,
  FooterIntro,
  FooterLogo,
  FooterIntroText,
  FooterCommunity,
  FooterCommunityText,
  FooterSocials,
  SocialIcons,
  FooterLinks,
  MarketplaceContainer,
  MarketplaceHeader,
  MarketplaceItems,
  MarketplaceListItems,
} from "./style";

const Footer = () => {
  return (
    <Container>
      <FooterWrapper>
        <FooterIntro>
          <FooterLogo>
            <img src={octasea} alt="logo" />
          </FooterLogo>
          <FooterIntroText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            turpis et quis turpis elementum.
          </FooterIntroText>
          <FooterCommunity>
            <FooterCommunityText>Join our community</FooterCommunityText>

            <FooterSocials>
              <FaTwitter size="23px" />
              <RiRedditFill size="23px" />
              <RiDiscordFill size="23px" />
              <RiInstagramLine size="23px" />
              <FaTiktok size="23px" />
              <RiGoogleFill size="23px" />
              <RiYoutubeFill size="23px" />
            </FooterSocials>
          </FooterCommunity>
        </FooterIntro>
        <FooterLinks>
          <MarketplaceContainer>
            <MarketplaceHeader>Marketplace</MarketplaceHeader>

            <MarketplaceItems>
              <MarketplaceListItems>Explore</MarketplaceListItems>
              <MarketplaceListItems>All NFTs</MarketplaceListItems>
              <MarketplaceListItems>Ranking</MarketplaceListItems>
              <MarketplaceListItems>Arts</MarketplaceListItems>
              <MarketplaceListItems>Collectibles</MarketplaceListItems>
              <MarketplaceListItems>GiftCards</MarketplaceListItems>
            </MarketplaceItems>
          </MarketplaceContainer>

          <MarketplaceContainer>
            <MarketplaceHeader>My Account</MarketplaceHeader>

            <MarketplaceItems>
              <MarketplaceListItems>Profile</MarketplaceListItems>
              <MarketplaceListItems>Favorites</MarketplaceListItems>
              <MarketplaceListItems>Bids</MarketplaceListItems>
              <MarketplaceListItems>My Collections</MarketplaceListItems>
              <MarketplaceListItems>Sales</MarketplaceListItems>
            </MarketplaceItems>
          </MarketplaceContainer>

          <MarketplaceContainer>
            <MarketplaceHeader>Learn</MarketplaceHeader>

            <MarketplaceItems>
              <MarketplaceListItems>What is Web3?</MarketplaceListItems>
              <MarketplaceListItems>Defi</MarketplaceListItems>
              <MarketplaceListItems>What are NFTs?</MarketplaceListItems>
              <MarketplaceListItems>How to create NFTs</MarketplaceListItems>
              <MarketplaceListItems>Blockchain</MarketplaceListItems>
            </MarketplaceItems>
          </MarketplaceContainer>

          <MarketplaceContainer>
            <MarketplaceHeader>Company</MarketplaceHeader>

            <MarketplaceItems>
              <MarketplaceListItems>About Us</MarketplaceListItems>
              <MarketplaceListItems>Certification</MarketplaceListItems>
              <MarketplaceListItems>Community</MarketplaceListItems>
              <MarketplaceListItems>Help Center</MarketplaceListItems>
            </MarketplaceItems>
          </MarketplaceContainer>
        </FooterLinks>
      </FooterWrapper>
    </Container>
  );
};

export { Footer };
