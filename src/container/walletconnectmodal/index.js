import React from "react";
import styled from "styled-components";
import { etherni, nami, typhoon } from "../../assets";
import { colors } from "../../colors";
const WalletConnectModal = () => {
  return (
    <WalletConnectWrap>
      <Text>
        <h4>Connect Wallet</h4>
        <div>
          <input type={"checkbox"} />
          <p>
            I have read and accept the <a href="#">Terms and Conditions</a>.
          </p>
        </div>
      </Text>
      <Connectorswrap>
        <Connector>
          <img src={nami} />
          <h6>Nami Wallet</h6>
          <input type="checkbox" />
        </Connector>
      </Connectorswrap>
      <Connectorswrap>
        <Connector>
          <img src={etherni} />
          <h6>Eternl Wallet</h6>
          <input type="checkbox" />
        </Connector>
      </Connectorswrap>
      <Connectorswrap>
        <Connector>
          <img src={typhoon} />
          <h6>Typhoon Wallet</h6>
          <input type="checkbox" />
        </Connector>
      </Connectorswrap>
    </WalletConnectWrap>
  );
};

export { WalletConnectModal };

const WalletConnectWrap = styled.div`
  position: absolute;
  width: 458px;
  height: 588px;
  z-index: 9;
  border-radius: 0.8rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 1.6rem;
  transition: all 0.5s;
  padding: 2.5rem 20px;
  background-color: rgba(36, 27, 35, 1);
  animation: showToast 0.5s ease-in;
  left: 50%;
  top: 80%;
  transform: translate(-50%, -80%);
  @keyframes showToast {
    0% {
      opacity: 0;
      transform: translate(-50%, 0%);
    }
    100% {
      opacity: 1;
      transform: translate(-50%, -80%);
    }
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  height: calc(100% - 75%);
  align-items: start;
  padding: 0.75rem 0;
  & h4 {
    font-weight: 500;
  }
  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    & > p {
      margin-left: 1rem;
      font-weight: 400;
      font-family: DM Sans;
      width: fit-content;
      a {
        font-family: inherit;
        font-size: inherit;
        font-weight: inherit;
        color: ${colors.secondary};
      }
    }
  }
`;

const Connectorswrap = styled.div`
  height: 70%;
  width: 100%;
`;

const Connector = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  background-color: rgba(47, 40, 46, 1);
  border-radius: 10px;
  & > img {
    width: 70px;
    height: 70px;
    object-fit: contain;
  }
  & > h6 {
    font-family: DM Sans;
    font-size: 20px;
    font-weight: 400;
    color: ${colors.white};
  }
  & > input {
    width: 15px;
    height: 15px;
    margin-right: 1rem;
    &:checked {
      background-color: ${colors.secondary} !important;
      color: ${colors.secondary} !important;
    }
  }
`;
