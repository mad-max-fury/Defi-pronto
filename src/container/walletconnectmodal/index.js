import React from "react";
import styled from "styled-components";
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
      <Connectorswrap></Connectorswrap>
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
  border: 1px solid red;
  width: 100%;
`;
