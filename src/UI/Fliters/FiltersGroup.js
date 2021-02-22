import React, { Component } from "react";
import { Checkbox } from "antd";
import styled from "styled-components";

const Group = Checkbox;
const StyledCheckBox = styled(Checkbox)`
  color: white;
  margin: 5px;
`;

const FlitersGroupDiv = styled.div`
  display: flex;
  height: 120px;

  padding: 10px;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
`;
const StyledFilterGroup = styled(Group)`
  display: flex;
  height: 120px;

  padding: 10px;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

class FiltersGroup extends Component {
  state = {
    activeFilters: {},
  };

  filters = this.props.filters;

  onChange = (newStuff) => {
    const newActiveFilters = {};
    for (const filter of newStuff) {
      newActiveFilters[filter] = true;
    }
    this.props.onUpdateFilter(newActiveFilters);
  };

  genreFilters = this.filters.map((element, i) => {
    return (
      <StyledCheckBox key={i} value={element}>
        {element}
      </StyledCheckBox>
    );
  });

  render() {
    return (
      <Checkbox.Group onChange={this.onChange}>
        <FlitersGroupDiv>{this.genreFilters}</FlitersGroupDiv>
      </Checkbox.Group>
    );
  }
}
export default FiltersGroup;
