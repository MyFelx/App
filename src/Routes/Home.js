import React from "react";
import MovieCard from "../UI/MovieCard";
class Home extends React.Component {
  state = {};

  addToList = () => {
    console.log("hi");
  };
  removeFromList = () => {};
  toggleWtach = () => {};
  render() {
    return (
      <div>
        <MovieCard
          isInList={true}
          addToList={this.addToList}
          title={"HJello There"}
          movieRating={3}
          removeFromList={this.removeFromList}
          posterSrc={
            "https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg"
          }
          toggleWatch={this.toggleWtach}
        ></MovieCard>
      </div>
    );
  }
}

export default Home;
