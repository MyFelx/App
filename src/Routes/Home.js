import React from "react";
import styled from "styled-components";
import OnImagesLoaded from "react-on-images-loaded";
import FadeIn from "react-fade-in";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import API from "../API/API";
import Helper from "../Helper";
import LoadingSpinner from "../UI/LoadingSpinner";
import ExpandingDivider from "../UI/ExpandingDivider";
import BlurDiv from "../UI/BlurDiv";
import NavBar from "../UI/NavBar";
import MovieCard from "../UI/MovieCard";
import MovieModal from "../UI/MovieModal";

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

  showModal = async (movieId) => {
    const movieDetails = await API.movieDetails(movieId);
    const movieData = Helper.movieTransformer(movieDetails.data);
    this.setState({ showModal: true, modalData: movieData });
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
          posterSrc={
            movie.poster_path
              ? "https://image.tmdb.org/t/p/original/" + movie.poster_path
              : null
          }
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
        {this.state.loading ? <LoadingSpinner /> : null}
        <BlurDiv blurDegree={this.state.showModal ? 10 : 0}>
          <NavBar
            onSearchbarChange={(searchValue) => this.onSearch(searchValue)}
            showLogOutButton={true}
            username={this.state.user?.username}
            showMyListIcon={true}
            showSearchBar={true}
          ></NavBar>
          <BlurDiv blurDegree={this.state.loading ? 3 : 0}>
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
              // onTimeout={() =>
              //   this.setState({ showMoviePosters: true, loading: false })
              // }
              // timeout={7000}
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

export default Home;
