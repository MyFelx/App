import React, { Component } from "react";
import styled from "styled-components";
import MovieCard from "../UI/MovieCard";
import BlurDiv from "../UI/BlurDiv";
import MovieModal from "../UI/MovieModal";
import NavBar from "../UI/NavBar";
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

class MyList extends Component {
  state = {
    showModal: false,
    modalData: undefined,
    loading: false,
    text: "Hi",
    number: 0,
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  showModal = (movieId) => {
    let movieData;
    this.setState({ loading: true });
    setTimeout(() => {
      movieData = {
        movieTitle: "Spider-Man: Into the Spider-Verse",
        poster:
          "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        IMDb: 8.4,
        appropriateAudiance: "PG",
        runTime: "1h 57min",
        genres: "Animation, Action, Adventure",
        releaseDate: "14 December 2018 (USA)",
        directors: "Peter Ramsey, Bob Persichetti, Rodney Rothman",
        cast: "Shameik Moore, Jake Johnson, Hailee Steinfeld",
        info:
          "Miles Morales is a New York teen struggling with school, friends and, on top of that, being the new Spider-Man. When he comes across Peter Parker, the erstwhile saviour of New York, in the multiverse, Miles must train to become the new protector of his city.Miles Morales is a New York teen struggling with school, friends and, on top of that, being the new Spider-Man. When he comes across Peter Parker, the erstwhile saviour of New York, in the multiverse, Miles must train to become the new protector of his city.",
        trailerID: "tg52up16eq0",
      };
      this.setState({ loading: false, showModal: true, modalData: movieData });
    }, 1000);
  };
  render() {
    return (
      <div style={{ height: "100%" }}>
        <NavBar
          username={"Fady"}
          showMyListIcon={true}
          showSearchbar={true}
          showLoginButton={false}
          showSignUpButton={false}
          showLogOutButton={true}
        />
        {this.state.loading ? <LoadingSpinner indicator={antIcon} /> : null}
        <BlurDiv
          style={{ height: "100%" }}
          blurDegree={this.state.loading || this.state.showModal ? 3 : 0}
        >
          <MovieCard
            showModal={this.showModal}
            movieRating={8.4}
            posterSrc={
              "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
            }
            title="Spider-Man: Into the Spider-Verse"
            isInList={false}
          />
          <MovieCard
            showModal={this.showModal}
            movieRating={8.4}
            posterSrc={
              "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
            }
            title="Spider-Man: Into the Spider-Verse"
            isInList={false}
          />{" "}
          <MovieCard
            showModal={this.showModal}
            movieRating={8.4}
            posterSrc={
              "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
            }
            title="Spider-Man: Into the Spider-Verse"
            isInList={false}
          />
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
