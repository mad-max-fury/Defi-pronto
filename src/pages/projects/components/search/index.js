import React from "react";
import { BiSearch } from "react-icons/bi";
import styled from "styled-components";
import { colors } from "../../../../colors";
const Search = () => {
  return (
    <SearchWrap>
      <div>
        <BiSearch size={30} />
      </div>
      <div>
        <input placeholder="Search" />
      </div>
    </SearchWrap>
  );
};

export { Search };

const SearchWrap = styled.div`
  display: flex;
  border: 1px solid hsla(0, 1%, 32%, 1);
  border-radius: 5px;
  height: 50px;
  width: 362px;
  gap: 10px;
  & > div {
    height: 100%;
    &:first-child {
      width: 50px;
      align-items: center;
      display: flex;
      justify-content: center;
      font-size: 2rem;
      color: hsla(0, 1%, 32%, 1);
    }
    & > input {
      width: 90%;
      height: 100%;
      border: none;
      outline: none;
      background-color: transparent;
      font-size: 1.2rem;
      font-weight: 600;
      color: ${colors.secondary};
    }
  }
`;
