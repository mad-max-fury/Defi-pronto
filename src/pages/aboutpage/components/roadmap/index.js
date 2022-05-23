import React from "react";
import styled from "styled-components";
import { looperGroup } from "../../../../assets";
import { colors } from "../../../../colors";
const RoadMap = () => {
  return (
    <RoadMapContainer>
      <div className="image-bg"></div>
      <Heading>Our Road Map</Heading>
      <MapContainer>
        <div>
          <div>
            <MiniCardWrap>
              <ItemHeading>Q1 - Launch Platform</ItemHeading>
              <ItemParagraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
                imperdiet nibh at et neque.
              </ItemParagraph>
            </MiniCardWrap>
          </div>
        </div>
        <div>
          <div>
            <MiniCardWrap>
              <ItemHeading>Q2 - Launch Token</ItemHeading>
              <ItemParagraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
                imperdiet nibh at et neque.
              </ItemParagraph>
            </MiniCardWrap>
          </div>
        </div>
        <div>
          <div>
            <MiniCardWrap>
              <ItemHeading>Q3 - Staking Begins</ItemHeading>
              <ItemParagraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
                imperdiet nibh at et neque.
              </ItemParagraph>
            </MiniCardWrap>
          </div>
        </div>
        <div>
          <div>
            <MiniCardWrap>
              <ItemHeading>Q4 - Onboard Projects</ItemHeading>
              <ItemParagraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
                imperdiet nibh at et neque.
              </ItemParagraph>
            </MiniCardWrap>
          </div>
        </div>
      </MapContainer>
    </RoadMapContainer>
  );
};

export { RoadMap };

const RoadMapContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto;
  align-items: center;
  width: 90%;
  position: relative;
  padding: 1rem calc((100vw - 1300px) / 2);
  height: fit-content;
  position: relative;
  margin-top: 4rem;
  & > div {
    position: absolute;
    height: calc(100% + 100px);
    width: 100%;
    top: 0;
    background: url(${looperGroup});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    z-index: -1;
  }
`;

const Heading = styled.h2`
  font-size: 42px;
  font-weight: 500;
  margin: 0 auto;
`;
const MapContainer = styled.section`
  display: flex;
  flex-direction: column;
  height: 60rem;
  padding: 6rem;
  gap: 2rem;
  & > div {
    width: 5px;
    height: 20rem;
    position: relative;
    &:before {
      content: "";
      width: 30px;
      height: 3px;
      position: absolute;
      right: -250%;
      top: -10%;
      background-color: ${colors.secondary};
    }
    & > div {
      position: absolute;
      height: 100%;
      width: 20rem;
      top: 0;
      border-left: 6px dashed #333;
      border-right: unset;
      border-bottom: unset;
      border-top: unset;
    }
    &:nth-of-type(even) {
      & > div {
        border: 1px solid green;
        left: -19.5rem;
        border-right: 6px dashed #333;
        border-left: unset;
        border-bottom: unset;
        border-top: unset;
        display: flex;
        & > div {
          right: 9%;
          left: unset;
          & > h6 {
            text-align: end !important;
          }
          & > p {
            text-align: end !important;
          }
        }
      }
    }
  }
`;

const MiniCardWrap = styled.div`
  max-width: 199px;
  margin: 0 auto;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  margin-top: 1.5rem;
  position: absolute;
  top: -25%;
  left: 9%;
  /* padding: 0 1.5rem; */
`;

export const ItemHeading = styled.h6`
  text-align: start !important;
`;
export const ItemParagraph = styled.p`
  text-align: start;
  line-height: unset;
`;
