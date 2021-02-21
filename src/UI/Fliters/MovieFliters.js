import React, { Component } from "react";
import styled from "styled-components";
import FiltersGroup from "./FiltersGroup";
import RadioFilters from "./RadioFilters";

const FiltersDiv = styled.div`
  display: flex;
  padding: 10px 50px;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 22px;
  color: #c1c1c1;
`;

const DividerLine = styled.hr`
  height: 100%;
  width: 2px;
  margin: 5px;
  color: ${(props) => props.color};
`;

class MovieFilters extends Component {
  state = {
    activeGenreFilters: {},
    activeWatchedFilters: {},
  };

  onUpdateGenreFilter = (newActiveFilters) => {
    this.setState({ activeGenreFilters: newActiveFilters }, () => {
      this.props.onUpdateGenreFilter(this.state.activeGenreFilters);
    });
  };

  onUpdateWatchedFilter = (newActiveFilters) => {
    this.setState({ activeWatchedFilters: newActiveFilters }, () => {
      this.props.onUpdateWatchedFilter(this.state.activeWatchedFilters);
    });
  };

  render() {
    return (
      <FiltersDiv>
        <div>
          <Title>Genres</Title>
          <FiltersGroup
            activeFilters={this.state.activeGenreFilters}
            onUpdateFilter={this.onUpdateGenreFilter}
            filters={[
              "Action",
              "Adventure",
              "Animation",
              "Comedy",
              "Crime",
              "Documentary",
              "Drama",
              "Family",
              "Fantasy",
              "History",
              "Horror",
              "Music",
              "Mystery",
              "Romance",
              "Science Fiction",
              "Thriller",
              "War",
              "Western",
            ]}
          />
        </div>
        <div style={{ height: "100px" }}>
          <DividerLine color={"#505050"} />
        </div>

        <div style={{ float: "right" }}>
          <Title>Watched</Title>

          <RadioFilters
            activeFilters={this.state.activeWatchedFilters}
            onUpdateFilter={this.onUpdateWatchedFilter}
            filters={["All", "Watched", "Not Watched"]}
            defaultValue={"All"}
          />
        </div>
      </FiltersDiv>
    );
  }
}

export default MovieFilters;
