import styled from "styled-components";
import { colors } from "../../../../colors";

export const HeroSectionWrap = styled.section`
  height: calc(100vh - 110px);
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 10;
  font-family: "DM Sans", sans-serif;
  border: 1px solid ${colors.secondary};
  background-image: url({{ backgroundImage }});
`;
