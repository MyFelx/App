import React from "react";
import ExpandingDivider from "../UI/ExpandingDivider";
import BlurDiv from "../UI/BlurDiv";
import NavBar from "../UI/NavBar";
import MovieCard from "../UI/MovieCard";
import styled from "styled-components";
import MovieModal from "../UI/MovieModal";
import API from "../API/API";
import OnImagesLoaded from "react-on-images-loaded";
import FadeIn from "react-fade-in";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const LoadingSpinner = styled(Spin)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(calc(-50% - 0.5px), calc(-50%));
`;
const antIcon = (
  <LoadingOutlined
    style={{
      zIndex: 5,
      fontSize: 100,
      color: "#c1c1c1",
    }}
    spin
  />
);
class Home extends React.Component {
  state = {
    user: undefined,
    movieList: [],
    showModal: false,
    modalData: undefined,
    showMoviePosters: false,
    index: 0,
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  getFirstFiveNames(obj) {
    const castList = [];
    for (let i = 0; i < 5; i++) {
      castList.push(obj[i].name);
    }
    return castList.join(", ");
  }

  showModal = async (movieId) => {
    const movieDetails = await API.movieDetails(movieId);
    let movieData;
    setTimeout(() => {
      movieData = {
        movieTitle: movieDetails.data.title,
        poster:
          "https://image.tmdb.org/t/p/original/" +
          movieDetails.data.poster_path,
        IMDb: movieDetails.data.vote_average,
        runTime: movieDetails.data.runtime,
        genres: movieDetails.data.genres
          .map((each) => {
            return each.name;
          })
          .join(", "),
        releaseDate: movieDetails.data.release_date,
        cast: this.getFirstFiveNames(movieDetails.data.credits.cast),
        info: movieDetails.data.overview,
        trailerID: movieDetails.data.videos.results[0].key,
      };
      this.setState({ showModal: true, modalData: movieData });
    }, 1000);
  };

  async componentWillMount() {
    const isLoggedIn = await API.isLoggedIn();
    if (isLoggedIn) {
      if (!this.state.user) {
        this.setState({ user: JSON.parse(localStorage.getItem("user")) });
      }
    } else {
      this.props.history.push("/login");
    }
  }

  async onSearch(searchValue) {
    const res = await API.search(searchValue);
    if (res?.data)
      this.setState({
        movieList: res.data,
        showMoviePosters: false,
        index: this.state.index + 1,
        loading: true,
      });
  }
  renderMovieCards() {
    const movies = [];

    this.state.movieList.forEach((movie) => {
      movies.push(
        <MovieCard
          showModal={() => this.showModal(movie.id)}
          movieRating={movie.vote_average}
          posterSrc={"https://image.tmdb.org/t/p/original/" + movie.poster_path}
          title={movie.title}
          isInList={false}
        />
      );
    });
    return movies;
  }
  render() {
    return (
      <div>
        {this.state.loading ? <LoadingSpinner indicator={antIcon} /> : null}
        <BlurDiv blurDegree={this.state.showModal ? 10 : 0}>
          <NavBar
            onSearchbarChange={(searchValue) => this.onSearch(searchValue)}
            showLogOutButton={true}
            username={this.state.user?.username}
            showMyListIcon={true}
            showSearchBar={true}
          ></NavBar>
          <BlurDiv
            style={{ height: "100%" }}
            blurDegree={this.state.loading ? 3 : 0}
          >
            <ExpandingDivider
              lineColor={"#606060"}
              titleColor={"#dbdbdb"}
              fontSize={21}
              title={"Movies"}
            ></ExpandingDivider>
            <OnImagesLoaded
              key={this.state.index}
              onLoaded={() =>
                this.setState({ showMoviePosters: true, loading: false })
              }
              onTimeout={() =>
                this.setState({ showMoviePosters: true, loading: false })
              }
              timeout={300}
            >
              <FadeIn key={this.state.index}>
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

export default Home;
