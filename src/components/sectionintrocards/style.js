import styled from "styled-components";

export const SectionWrap = styled.aside`
  max-width: 614px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  gap: 1rem;

  @media screen and (max-width: 450px) {
        width: 90%;
      }
`;
export const SecHeading = styled.h2`
  text-align: center;
  font-weight: 500;
  
  @media screen and (max-width: 450px) {
        font-size: 25px !important;
        /* border: 1px solid red; */
      }
`;
export const SecParagraph = styled.p`
  text-align: center;

  @media screen and (max-width: 450px) {
        font-size: 12.8px;
        line-height: 21px;
      }
`;
