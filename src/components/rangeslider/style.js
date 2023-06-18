import styled from "styled-components";

import { defiPronto } from "../../assets";
import { colors } from "../../colors";

export const Container = styled.div`
  width: 100%;
  /* padding: 0.5rem calc((100vw - 1300px) / 2); */
  padding-top: 15rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  &:before {
    content: "";
    width: 100%;
    height: 10rem;
    top: 0%;
    left: 0;
    position: absolute;
    background-image: url(${defiPronto});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;

    @media screen and (max-width: 650px) {
    }
  }

  @media screen and (max-width: 650px) {
    padding-top: 6.5rem;
  }

  & > aside {
    & > h2 {
      font-size: 45px;
    }
  }
`;

export const RangeContainer = styled.div`
    margin: 0 auto;
    background-color: aliceblue;
    width: 80%;
`;

export const RangeInput = styled.input.attrs({ type: 'range' })`
    -webkit-appearance: none;
  -moz-appearance: none;
  outline: 0;
  height: 12px;
  width: 100%;
  border-radius: 40px;
  background-color: #2F282E;
  /* background: ${(props) =>
    `linear-gradient(to right, #ff9800 0%, #ff9800 ${props.value}%, #fff ${props.value}%, #fff 100%);`}; */
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 80px;
    height: 40px;
    background-color: #E74141;
    /* background-image: radial-gradient(circle, red 40%, #ff9800 45%); */
    border-radius: 5px;
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.5);
  }

  ::-moz-range-thumb {
    width: 80px;
    height: 40px;
    -moz-appearance: none;
    /* background-image: radial-gradient(circle, #f7f7fc 40%, #ff9800 45%); */
    border-radius: 50%;
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.5);
  }
`;