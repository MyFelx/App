import React, { Component } from "react";
import { Radio } from "antd";
import styled from "styled-components";

const StyledRadio = styled(Radio)`
  color: white;
  margin: 5px;
  width: 130px;
`;

const FlitersGroupDiv = styled.div`
  display: flex;
  height: 120px;
  padding: 10px;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

class RadioFilters extends Component {
  state = {
    activeFilter: this.props.defaultValue,
  };

  filters = this.props.filters;

  onChange = (picked) => {
    this.setState({ activeFilter: picked.target.value });
    this.props.onUpdateFilter(picked.target.value);
  };

  genreFilters = this.filters.map((element, i) => {
    return (
      <StyledRadio key={i} value={element}>
        {element}
      </StyledRadio>
    );
  });

  render() {
    return (
      <Radio.Group onChange={this.onChange} value={this.state.activeFilter}>
        <FlitersGroupDiv>{this.genreFilters}</FlitersGroupDiv>
      </Radio.Group>
    );
  }
}
export default RadioFilters;
