import styled from "styled-components";
import { colors } from "../../colors";

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 20px;
  max-width: 1300px;
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
export const FooterIntro = styled.div`
  
`;

