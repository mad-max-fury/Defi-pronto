import React, { useRef, useState } from "react";
import styled from "styled-components";
import { etherni, nami, typhoon } from "../../assets";
import { colors } from "../../colors";
const WalletConnectModal = ({ isOpen, setIsOpen }) => {
  const modalRef = useRef(null);

  const handleClose = (e) => {
    if (modalRef.current.contains(e.target)) {
      return;
    }
    setIsOpen(false);
  };

  return (
    <WalletContainer onClick={handleClose} isOpen={isOpen}>
      <WalletConnectWrap isOpen={isOpen} ref={modalRef}>
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
    </WalletContainer>
  );
};

export { WalletConnectModal };

const WalletContainer = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: ${(props) => (props.isOpen ? "9999" : "-4")};
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  pointer-events: ${({ isOpen }) => (isOpen ? "all" : "none")};
`;
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
  left: ${(props) => (props.isOpen ? "50%" : "50%")};
  top: ${(props) => (props.isOpen ? "50%" : "-100%")};
  transform: ${(props) =>
    props.isOpen ? "translate(-50%, -50%)" : "translate(-50%, -100%)"};
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
