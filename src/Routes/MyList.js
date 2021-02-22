import React, { Component } from "react";
import OnImagesLoaded from "react-on-images-loaded";
import FadeIn from "react-fade-in";
import Helper from "../Helper";
import MovieCard from "../UI/MovieCard";
import BlurDiv from "../UI/BlurDiv";
import MovieModal from "../UI/MovieModal";
import NavBar from "../UI/NavBar";
import ExpandingDivider from "../UI/ExpandingDivider";
import LoadingSpinner from "../UI/LoadingSpinner";
import MovieFilters from "../UI/Fliters/MovieFliters";
import API from "../API/API";

class MyList extends Component {
  state = {
    activeGenreFilters: {},
    activeWatchedFilter: "All",
    movieList: [],
    showModal: false,
    modalData: undefined,
    mylistCount: 0,
  };

  async componentWillMount() {
    const isLoggedIn = await API.isLoggedIn();
    if (isLoggedIn) {
      if (!this.state.user) {
        this.setState({
          user: JSON.parse(localStorage.getItem("user")),
        });
      }
      this.updateList();
    } else {
      this.props.history.push("/login");
    }
  }

  updateGenreFilters = (newFilters) => {
    this.setState({ activeGenreFilters: newFilters }, () => {
      console.log(this.state.activeGenreFilters);
    });
  };

  updateWatchedFilters = (newFilters) => {
    this.setState({ activeWatchedFilter: newFilters }, () => {
      console.log(this.state.activeWatchedFilter);
    });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  showModal = async (movieId) => {
    const movieDetails = await API.movieDetails(movieId);

    const transformedMovie = Helper.movieTransformer(movieDetails.data);

    this.setState({ showModal: true, modalData: transformedMovie });
  };

  filterbyGenre = (movieList) => {
    let filteredMovies = [];
    movieList.forEach((movie) => {
      let count = 0;
      movie.genres.forEach((genre) => {
        if (this.state.activeGenreFilters[genre.name]) {
          count++;
        }
      });
      if (count === Object.keys(this.state.activeGenreFilters).length) {
        filteredMovies.push(movie);
      }
    });
    return filteredMovies;
  };
  updateList = async () => {
    const myList = await API.getMyList();
    this.setState({ mylistCount: myList.data.length, movieList: myList.data });
  };

  filterbyWatched = (movieList) => {
    let filteredMovies = [];

    if (this.state.activeWatchedFilter === "All") {
      filteredMovies = movieList;
    } else {
      if (this.state.activeWatchedFilter === "Watched") {
        movieList.forEach((movie) => {
          if (movie.watched) {
            filteredMovies.push(movie);
          }
        });
      } else {
        if (this.state.activeWatchedFilter === "Not Watched") {
          movieList.forEach((movie) => {
            if (!movie.watched) {
              filteredMovies.push(movie);
            }
          });
        }
      }
    }
    return filteredMovies;
  };

  renderMovieCards() {
    let movies = [];
    movies = this.filterbyGenre(this.state.movieList);
    movies = this.filterbyWatched(movies);

    const movieCards = movies.map((movie) => {
      return (
        <MovieCard
          key={movie.id}
          movieID={movie.id}
          showModal={() => this.showModal(movie.id)}
          movieRating={movie.vote_average}
          posterPath={movie.poster_path}
          title={movie.title}
          updateOnChange={false}
          isInList={true}
          isWatched={movie.watched}
          updateList={this.updateList}
        />
      );
    });

    return movieCards;
  }

  render() {
    return (
      <div>
        <BlurDiv
          blurDegree={this.state.showModal ? 10 : 0}
          isBlur={this.state.showModal}
        >
          <NavBar
            showLogOutButton={true}
            username={this.state.user?.username}
            showMyListIcon={true}
            listCount={this.state.mylistCount}
          />
          <BlurDiv blurDegree={this.state.loading ? 3 : 0}>
            <ExpandingDivider
              lineColor={"#606060"}
              titleColor={"#dbdbdb"}
              openable={true}
              fontSize={21}
              title={"Filters"}
            >
              <MovieFilters
                onUpdateGenreFilter={(newFilters) =>
                  this.updateGenreFilters(newFilters)
                }
                onUpdateWatchedFilter={(newFilters) =>
                  this.updateWatchedFilters(newFilters)
                }
              />
            </ExpandingDivider>
            <OnImagesLoaded
              key={this.state.index}
              onLoaded={() =>
                this.setState({ showMoviePosters: true, loading: false })
              }
              onTimeout={() =>
                this.setState({ showMoviePosters: true, loading: false })
              }
              timeout={1000}
            >
              <FadeIn>
                <div
                  style={{
                    display: this.state.showMoviePosters ? "flex" : "none",
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  {this.renderMovieCards()}
                </div>
              </FadeIn>
            </OnImagesLoaded>
          </BlurDiv>
        </BlurDiv>
        {this.state.showModal ? (
          this.state.loading ? null : (
            <MovieModal
              closeModal={this.closeModal}
              {...this.state.modalData}
            />
          )
        ) : null}
      </div>
    );
  }
}
export default MyList;
