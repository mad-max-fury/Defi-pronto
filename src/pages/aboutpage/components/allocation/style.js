import styled from "styled-components";
import { colors } from "../../../../colors";

export const Container = styled.div`
  width: 100%;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &>aside{

    &>h2{
      font-size: 45px;
      
    }
  }
`;

export const AllocationChartImg = styled.img`
  max-width: 400px;
  max-height: 400px;
  width: 80%;
  height: 80%;
  margin: 0 auto;
  padding: 40px 0 20px;
`;

export const ChartInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  margin: 0 auto;
  max-width: 1000px;
  width: 50%;
  column-gap: 2rem;

  @media (max-width: 450px) {
    width: 80%;
  };
  
`;

export const ChartInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  width: fit-content;

  @media (max-width: 450px) {
    
  };
  
  /* padding-top: 20px; */
`;

export const Purple = styled.div`
  width: 29px;
  height: 29px;
  border-radius: 50%;
  background-color: ${colors.purple};
  /* margin-right: 20px; */

`;

export const Blue = styled.div`
  width: 29px;
  height: 29px;
  border-radius: 50%;
  background-color: ${colors.blue};

`;

export const Yellow = styled.div`
  width: 29px;
  height: 29px;
  border-radius: 50%;
  background-color: ${colors.yellow};

`;

export const Red = styled.div`
  width: 29px;
  height: 29px;
  border-radius: 50%;
  background-color: ${colors.secondary};

`;

export const Lemon = styled.div`
  width: 29px;
  height: 29px;
  border-radius: 50%;
  background-color: ${colors.lemon};

`;

export const ChartText = styled.p`
  font-family: 'Monument Extended' DM Sans;
  margin-left: 20px;
`;