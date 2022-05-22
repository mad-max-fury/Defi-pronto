import styled from "styled-components";
import { colors } from "../../colors";
import { Link } from "react-router-dom";
export const Container = styled.div`
  width: 24.69rem;
  height: 38.625rem;
  background-color: rgba(47, 40, 46, 1);
  border-radius: 10px;
  margin: 0 auto;
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  &:hover {
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    box-shadow: -10px 14px 34px 0px rgba(231, 65, 65, 0.2);
  }
  @media screen and (max-width: 400px) {
    width: 20rem;
    height: 34rem;
  }
`;
export const Image = styled.img`
  width: 100%;
  height: 37.7%;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
`;
export const TextArea = styled.div`
  width: 100%;
  height: calc(100% - 37.7%);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`;
export const BottomCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
`;
export const Head = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Heading = styled.h5`
  text-align: start;
`;
export const Paragraph = styled.p`
  text-align: start;
`;

export const ProgressBar = styled.div`
  height: 5px;
  border-radius: 3px;
  width: 100%;
  background-color: #000;
  display: ${({ progress }) => !progress && `none`};
`;
export const ProgressBarFill = styled.div`
  height: 100%;
  border-radius: inherit;
  width: ${(props) => props.progress}%;
  background-color: ${colors.secondary};
`;

export const TextRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const InnerTextCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  & > h5 {
    font-size: 1rem;
    color: ${colors.secondary};
    font-weight: 500;
  }
  & > h4 {
    font-size: 1.5rem;
    color: ${colors.white};
    font-weight: 500;
    text-align: start;
  }
`;

export const FooterSocial = styled.div`
  display: flex;
  max-width: 100%;
  width: 100%;
  align-items: center;
  padding: 0.5rem 0;
  border-top: 2px solid rgba(82, 82, 82, 1);
  gap: 1rem;
`;
export const FooterLink = styled(Link)`
  color: ${colors.white};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 0 11px 0;
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
