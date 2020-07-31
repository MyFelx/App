import React, { Component } from "react";
import { Checkbox } from "antd";
import styled from "styled-components";

const FiltersDiv = styled.div`
  display: flex;
  height: 120px;
`;

const StyledCheckBox = styled(Checkbox)`
  color: white;
`;

const FlitersGroupDiv = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const CheckboxDiv = styled.div`
  margin: 5px;
  width: 120px;
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
      <CheckboxDiv key={i}>
        <StyledCheckBox value={element}>{element}</StyledCheckBox>
      </CheckboxDiv>
    );
  });

  render() {
    return (
      <div>
        <Checkbox.Group onChange={this.onChange}>
          <FiltersDiv>
            <FlitersGroupDiv>{this.genreFilters}</FlitersGroupDiv>
          </FiltersDiv>
        </Checkbox.Group>
      </div>
    );
  }
}
export default FiltersGroup;
