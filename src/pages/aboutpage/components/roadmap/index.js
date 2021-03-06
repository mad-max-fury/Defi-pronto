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
              <ItemHeading>Phase 1 - Launch Platform</ItemHeading>
              <ItemParagraph>
                DeFi Pronto Initial Announcement Defipronto Launchpad UI/UX
                Wireframing Website Release Onepager Release Partnerships &
                Integrations Private Seed Sale Community Building
              </ItemParagraph>
            </MiniCardWrap>
          </div>
        </div>
        <div>
          <div>
            <MiniCardWrap>
              <ItemHeading>Phase 2 - Launch Token</ItemHeading>
              <ItemParagraph>
                Defipronto Accelerator Program Initial Projects Selection
                Tokenomics & Information About Selected Projects To be Launched
                DFP Token Pre-Sale Exchange Listing CMC/Coin Gecko Listing
                Initial Defipronto IDO Registration
              </ItemParagraph>
            </MiniCardWrap>
          </div>
        </div>
        <div>
          <div>
            <MiniCardWrap>
              <ItemHeading>Phase 3 - Staking Begins</ItemHeading>
              <ItemParagraph>
                Project Team Token Lock As A Service Project Team Token Staking
                As A Service NFT Launchpad Defipronto NFT Launchpad
              </ItemParagraph>
            </MiniCardWrap>
          </div>
        </div>
        <div>
          <div>
            <MiniCardWrap>
              <ItemHeading>Phase 4 - Onboard Projects</ItemHeading>
              <ItemParagraph>
                Further Partnerships Defipronto Launchpad As A Service
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

  @media screen and (max-width: 650px) {
    width: 90%;
  }
`;

const Heading = styled.h2`
  font-size: 42px;
  font-weight: 500;
  margin: 0 auto;

  @media (max-width: 650px) {
    font-size: 25px;
  }
`;
const MapContainer = styled.section`
  display: flex;
  flex-direction: column;
  height: 70rem;
  padding: 6rem 0;
  gap: 2rem;
  & > div {
    width: 5px;
    height: 25rem;
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
      @media (max-width: 650px) {
        width: 140px;
      }
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
        @media screen and (max-width: 650px) {
          left: -135px;
        }
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

  @media (max-width: 650px) {
    max-width: 159px;
  }
  @media (max-width: 570px) {
    max-width: 100px;
  }
`;

export const ItemHeading = styled.h6`
  text-align: start !important;

  @media (max-width: 650px) {
    font-size: 15px;
  }
`;
export const ItemParagraph = styled.p`
  text-align: start;
  line-height: unset;
  font-size: 14px;
  font-weight: 500;
  line-height: 16.67px;
  @media (max-width: 650px) {
    font-size: 12.8px;
  }
`;
