import styled from "styled-components";
import { colors } from "../../colors";

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 20px;
  max-width: 1100px;
  margin: 0 auto;
  @media (max-width: 1000px) {
    flex-wrap: wrap;
    align-items: center;
    justify-content: start;
    gap: 1rem;
  }
`;
export const Container = styled.div`
  width: 100%;
`;

export const FooterIntro = styled.div`
  display: flex;
  flex-direction: column;
  width: 333px;
`;

export const FooterLogo = styled.p`
  font-weight: 700;
  font-size: 4.8rem;
  color: ${colors.white};
`;

export const FooterIntroText = styled.div`
  font-size: 1.4rem;
  line-height: 23px;
  color: ${colors.white};
`;

export const FooterCommunity = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
`;

export const FooterCommunityText = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${colors.white};
`;

export const FooterSocials = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 10px;
`;

export const SocialIcons = styled.img`
  cursor: pointer;
`;

export const FooterLinks = styled.div`
  display: flex;
  justify-content: space-between;
  // align-items: center;
  flex: 1;
  padding-left: 40px;

  @media (max-width: 500px) {
    flex-wrap: wrap;
    padding-left: 0px;
    // padding-top: 20px;
  }

  @media (min-width: 501px) and (max-width: 816px) {
    padding-left: 0px;
  }
`;

export const MarketplaceContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 500px) {
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 20px;
  }
`;

export const MarketplaceHeader = styled.p`
  font-size: 1.8rem;
  font-weight: 700;
  color: #fff;
`;

export const MarketplaceItems = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 16px;
`;

export const MarketplaceListItems = styled.li`
  color: #eee;
  font-size: 1.5rem;
  font-weight: normal;
  list-style: none;
  margin: 8px 0;
  cursor: pointer;
  width: fit-content;
`;
