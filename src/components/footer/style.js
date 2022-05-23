import styled from "styled-components";
import { colors } from "../../colors";
import { Link } from "react-router-dom"

export const Container = styled.div`
  width: 100%;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  margin: 0 auto;
`;

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
  width: calc(100% - 0px);
  padding: 50px 0;
  margin: 0 auto;
  background-color: ${colors.primary };
  color: ${colors.white};

  @media (max-width: 550px){
    flex-direction: column-reverse;
    padding: 40px 0;
  }

  @media (min-width: 551px) and (max-width: 899px) {
    flex-wrap: wrap;
    align-items: center;
    justify-content: start;
    gap: 1rem;
    flex-direction: column-reverse;
  }

  @media (min-width: 900px) and (max-width: 1315px){
    padding-left: 20px;
    align-items: end;
  }
`;

export const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;

  @media (max-width: 550px){
    padding: 0px 20px;
  }

  @media (min: 551px) and (max-width: 899px){
    padding: 50px 90px;
  }
`;

export const FooterLogoLink = styled(Link)`
  padding: 40px 20px 5px 0px;
  color: #A4A4A4;
  width: max-content;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-family: "DM Sans", sans-serif;

  &:hover {
    color: ${colors.white};
    transition: all 0.3s ease-in-out;
  }

`;

export const FooterIntroWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 447px){
    flex-wrap: wrap;
    padding: 0 20px;
  }

  @media (min-width: 447px) and (max-width: 899px) {
    padding: 0 20px;
    flex-wrap: wrap;
  }

`;

export const FooterIntro = styled.p`
  max-width: 20.9rem;  
  width: fit-content;
  padding-top: 8px;
  text-align: start;
  line-height: 25.89px;

  @media(max-width: 550px){
    max-width: max-content;  
    width: fit-content;
  }

  @media (min-width: 551px) and (max-width: 899px) {
    max-width: max-content;  
    width: fit-content;
    padding: 0 20px;
  }
`;

export const FooterLink = styled(Link)`
  color: ${colors.white};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 0 11px 0;
  color: #A4A4A4;
  width: max-content;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-family: "DM Sans", sans-serif !important;

  &:hover {
    color: ${colors.secondary};
    transition: all 0.3s ease-in-out;
  }
  &.active {
    color: ${colors.secondary};
    transition: all 0.3s ease-in-out;
  }

  &:span{
    font-family: "DM Sans", sans-serif !important;
  }
`;


export const FooterMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  margin-right: 80px;

  @media (max-width: 447px){
    padding-top: 20px;
    margin-right: 30px;
  }

  @media (min-width: 447px) and (max-width: 596px) {
    padding-top: 20px;
    margin-right: 80px;
  }

  @media (min-width: 597px) and (max-width: 899px) {
    padding-top: 20px;
    margin-right: 165px;
  }
`;

export const MenuHeader = styled.p`
  padding-bottom: 1rem;
  font-size: 1rem;
  font-weight: 500;
  font-family: 'Orbitron', montserrat;
  color: ${colors.white};
  width: max-content;
`;

export const FooterCreditCont = styled.div`
  display: flex;
  padding: 20px 0px 60px;
  justify-content: space-between;
  color: ${colors.grey_text};
  font-family: 'DM Sans';

  @media (max-width: 550px){
    flex-direction: column;
    // flex-wrap: wrap;  
    justify-content: flex-start;
    padding: 0px 20px 40px;
    
  }

  @media (max-width: 1315px){
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const FooterCredit = styled.p`
  text-align: start;
`;

export const FooterSocial = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 10%;
  width: 100%;

  @media (max-width: 550px){
    padding-top: 40px;
    max-width: 45% !important;
  }

  @media (max-width: 930px){
    max-width: 15%;
  }
`;

export const FooterSocialLink = styled(Link)`
  color: ${colors.secondary};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 0px 11px 0;
  width: max-content;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${colors.light_grey};
    transition: all 0.3s ease-in-out;
  }
`;


