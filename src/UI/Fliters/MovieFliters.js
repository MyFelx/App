import React, { Component } from "react";
import styled from "styled-components";
import FiltersGroup from "./FiltersGroup";

const FiltersDiv = styled.div`
  display: flex;
  padding: 10px 50px;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 28px;
  color: #c1c1c1;
`;

class MovieFilter extends Component {
  state = {
    allActiveFilters: {},
    activeGenreFilters: {},
    activeWatchedFilters: {},
  };

  concatActiveFilters = () => {
    this.setState(
      {
        allActiveFilters: {
          ...this.state.activeGenreFilters,
          ...this.state.activeWatchedFilters,
        },
      },
      () => {
        console.log(this.state.allActiveFilters);
      }
    );
  };

  onUpdateGenreFilter = (newActiveFilters) => {
    this.setState({ activeGenreFilters: newActiveFilters }, () => {
      this.props.onUpdateFilter({
        ...this.state.activeGenreFilters,
        ...this.state.activeWatchedFilters,
      });
    });
  };

  onUpdateWatchedFilter = (newActiveFilters) => {
    this.setState({ activeWatchedFilters: newActiveFilters }, () => {
      this.props.onUpdateFilter({
        ...this.state.activeGenreFilters,
        ...this.state.activeWatchedFilters,
      });
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
              "Sci-fi",
              "Thriller",
              "War",
              "Western",
            ]}
          />
        </div>

        <div>
          <Title>Watched</Title>

          <FiltersGroup
            style={{ float: "right" }}
            activeFilters={this.state.activeWatchedFilters}
            onUpdateFilter={this.onUpdateWatchedFilter}
            filters={["Watched", "Not Watched"]}
          />
        </div>
      </FiltersDiv>
    );
  }
}

export default MovieFilter;
