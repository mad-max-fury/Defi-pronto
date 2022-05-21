import styled from "styled-components";
import { colors } from "../../colors";
import { Link } from "react-router-dom"

export const Container = styled.div`
  width: 100%;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  margin: 0 auto;
  border: 1px solid red;
`;

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: calc(100% - 0px);
  padding: 50px 0;
  border: 1px solid red;
  margin: 0 auto;
  background-color: ${colors.primary };
  color: ${colors.white};

  @media (max-width: 1000px) {
    flex-wrap: wrap;
    align-items: center;
    justify-content: start;
    gap: 1rem;
  }
`;

export const FooterIntroWrap = styled.div`
  display: flex;
  flex-direction: row;
  border: 2px solid red;
`;

export const FooterIntro = styled.p`
  max-width: 20.9rem;  
  width: fit-content;
  text-align: start;
`;

export const FooterLink = styled(Link)`
  color: ${colors.white};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 0 11px 0;
  color: #A4A4A4;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-family: "DM Sans", sans-serif;

  &:hover {
    color: ${colors.secondary};
    transition: all 0.3s ease-in-out;
  }
  &.active {
    color: ${colors.secondary};
    transition: all 0.3s ease-in-out;
  }
`;

export const FooterMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  margin-right: 30px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const MenuHeader = styled.p`
  padding-bottom: 1rem;
  font-size: 1rem;
  font-weight: 400;
`;

export const FooterCredit = styled.div`
  display: flex;
  padding: 20px 0px;
  justify-content: space-between;
  color: #A4A4A4;
  font-family: 'DM Sans';
`;

export const FooterSocial = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 7%;
  width: 100%;
`;



