import styled, { createGlobalStyle } from "styled-components";
import { colors } from "./colors";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap');


    * {
        margin: 0;
        font-size: 16px;
        box-sizing: border-box;
        font-family: 'Orbitron', DM Sans;
        scroll-behavior: smooth;
        

    }
    body{
        background-color: ${colors.primary};
    }
     &::-webkit-scrollbar {
        background-color: #333;
        
    }  
    &::-webkit-scrollbar-thumb {
        background-color: ${colors.secondary};
        border-radius: 15px;
        box-shadow:  0 15px 6px ${colors.primary};
        cursor: pointer;
    }
    h1, h2, h3, h4, h5, h6 {

    }

    h1, h2, h3, h4, h5, h6, p {
        margin: 0;
        padding: 0;
    }


    h1 {
    font-size: 3.9rem;
        color: ${colors.white};
        font-weight: 600;
        font-family: Orbitron, sans-serif;
        @media screen and (max-width: 600px) {
          font-size: 1.6rem;
        }
    }

    h2 {
        font-size: 3.9rem;
        color: ${colors.white};
        font-weight: 400;
        font-family: Orbitron, sans-serif;
        @media screen and (max-width: 600px) {
          font-size: 1.6rem;
        }
    }

    h3 {
        font-size: 2.44125rem;
        color: ${colors.white};
        font-weight: 400;
        font-family: Orbitron, sans-serif;
        @media screen and (max-width: 600px) {
          font-size: 1.6rem;
        }

    }

    h4 {
        font-size: 1.95rem;
        color: ${colors.white};
        font-weight: 400;
        font-family: Orbitron, sans-serif;
        @media screen and (max-width: 600px) {
          font-size: 1.6rem;
        }
    }

    h5 {
        font-size:1.5625rem;
        font-style: normal;
        color: ${colors.white};
        font-weight: 400;
        font-family: Orbitron, sans-serif;
        @media screen and (max-width: 600px) {
          font-size: 1.6rem;
        }
    }

    h6 {
        font-size: 1.25rem;
        font-weight: 400;
        font-family: Orbitron, sans-serif;
        color: ${colors.white};

    }

    p {
        font-size: 1rem;
        font-weight: 400;
        font-family: DM Sans, sans-serif;
        color: ${colors.grey_text};
        line-height: 2;
    }

`;
