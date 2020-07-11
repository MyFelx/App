import React, { Component } from "react";
import MovieFliters from "../UI/Fliters/MovieFliters";

class Home extends Component {
  state = {
    activeFilters: {},
  };

  onFilterUpdate = (newActiveFilters) => {
    this.setState({ activeFilters: newActiveFilters }, () => {
      console.log(this.state.activeFilters);
    });
  };

  render() {
    return (
      <MovieFliters
        onUpdateFilter={(newActiveFilters) =>
          this.onFilterUpdate(newActiveFilters)
        }
      />
    );
  }
}

export default Home;
