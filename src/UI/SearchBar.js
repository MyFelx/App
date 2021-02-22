import React from "react";
import styled from "styled-components";
import { SearchOutlined } from "@ant-design/icons";

const searchIconStyling = {
  color: "#c1c1c1",
  fontSize: "14px",
  marginRight: "8px",
  marginLeft: "4px",
};

const StyledInput = styled.input`
  background-color: ${(props) =>
    props.border === undefined ? "rgba(0,0,0,0)" : props.backgroundColor};
  color: #c1c1c1;
  width: 200px;
  border: none;
  outline: none;
  font-size: 14px;
`;

const OuterDiv = styled.div`
  background-color: ${(props) =>
    props.backgroundColor === undefined
      ? "rgba(0,0,0,0)"
      : props.backgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
  border-radius: 8px;
  width: 255px;
  height: fit-content;
  margin: 10px;
`;

const SearchBar = (props) => {
  let searchValue = "";
  const setSearchValue = (event) => {
    searchValue = event.target.value;
  };

  return (
    <OuterDiv backgroundColor={props.backgroundColor}>
      <SearchOutlined style={searchIconStyling} />

      <StyledInput
        backgroundColor={props.backgroundColor}
        placeholder="Search"
        type="text"
        onChange={(event) => {
          props.onInputChange(event.target.value);
        }}
      />
    </OuterDiv>
  );
};

export default SearchBar;
