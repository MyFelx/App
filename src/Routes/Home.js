import React from "react";
import OnImagesLoaded from "react-on-images-loaded";
import FadeIn from "react-fade-in";
import API from "../API/API";
import Helper from "../Helper";
import LoadingSpinner from "../UI/LoadingSpinner";
import ExpandingDivider from "../UI/ExpandingDivider";
import BlurDiv from "../UI/BlurDiv";
import NavBar from "../UI/NavBar";
import MovieCard from "../UI/MovieCard";
import MovieModal from "../UI/MovieModal";
import { message } from "antd";
import InfiniteScroll from 'react-infinite-scroll-component';

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.lastMovie = React.createRef()

  }
  state = {
    user: undefined,
    movieList: [],
    showModal: false,
    modalData: undefined,
    showMoviePosters: false,
    index: 0,
    searchValue: "",
    mylistCount: 0,
    currentPage: 1,
  };
  closeModal = () => {
    this.setState({ showModal: false });
  };

  showModal = async (movieId) => {
    const movieDetails = await API.movieDetails(movieId);
    const transformedMovie = Helper.movieTransformer(
      movieDetails.data,
      movieId
    );
    this.setState({ showModal: true, modalData: transformedMovie });
  };

  updateList = async () => {
    const myList = await API.getMyList();
    if (myList) {
      this.setState({ mylistCount: myList.data.length });
    }
  };
  componentDidMount() {
    document.getElementById('mainContainer').addEventListener('scroll', (e) => {
      console.log(e)
      console.log(e.target.scrollTop)
      // console.log(this.state.movieList[this.state.movieList.length - 1])
      var viewportOffset = this.lastMovie.current.getBoundingClientRect();
      // these are relative to the viewport, i.e. the window
      var top = viewportOffset.bottom;
      console.log(top)
      console.log(window.innerHeight)
      if (Math.abs(top - window.innerHeight) < 50 && !this.state.loading) {
        console.log('load')
        this.loadNextPage()
      }
    })
  }
  async componentWillMount() {
    message.config({
      top: 60,
      duration: 0.85,
    });
    const isLoggedIn = await API.isLoggedIn();
    if (isLoggedIn) {
      if (!this.state.user) {
        this.setState({
          user: JSON.parse(localStorage.getItem("user")),
        });
      }
      this.updateList();
      this.getRecommendations();
    } else {
      this.props.history.push("/login");
    }
  }

  async onSearch(searchValue) {
    if (this.state.searchValue === "") {
      this.getRecommendations();
    } else {
      const res = await API.search(searchValue);
      if (res?.data && this.state.searchValue !== "") {
        this.setState({
          movieList: res.data,
          showMoviePosters: false,
          index: this.state.index + 1,
          loading: true,
        });
      }
    }
  }
  async getRecommendations(page) {
    this.setState({
      loading: true,
    });
    const popularMovies = await API.getRecommendations(page);
    if (popularMovies?.data) {
      if (this.state.currentPage > 1) {
        this.setState({
          movieList: this.state.movieList.concat(popularMovies.data),
          // showMoviePosters: false,
          // index: this.state.index + 1,
          loading: false,
        });
      } else {
        this.setState({
          movieList: this.state.movieList.concat(popularMovies.data),
          showMoviePosters: false,
          index: this.state.index + 1,
          loading: true,
        });
      }

    }
  }
  async loadNextPage(page) {
    if (!this.state.loading) {
      this.setState({
        currentPage: this.state.currentPage + 1
      }, () => {
        this.getRecommendations(this.state.currentPage)
      })

    }
  }
  renderMovieCards() {
    const movies = [];
    if (Array.isArray(this.state.movieList)) {
      this.state.movieList.forEach((movie) => {

        movies.push(
          <div ref={this.lastMovie}
          >
            <MovieCard
              movieID={movie.id}
              showModal={() => this.showModal(movie.id)}
              movieRating={movie.vote_average}
              posterPath={movie.poster_path}
              title={movie.title}
              isInList={movie.isAdded}
              isWatched={movie.watched}
              updateOnChange={true}
              updateList={this.updateList}
            />
          </div>

        );
      });
      return movies;
    }
  }

  render() {
    return (
      <div >
        {this.state.loading ? <LoadingSpinner /> : null}
        <BlurDiv
          blurDegree={this.state.showModal ? 10 : 0}
          isBlur={this.state.showModal}
        >
          <NavBar
            onSearchbarChange={(searchValue) => {
              this.setState(
                {
                  searchValue: searchValue,
                },
                () => {
                  this.onSearch(searchValue);
                }
              );
            }}
            showLogOutButton={true}
            username={this.state.user?.username}
            showMyListIcon={true}
            showSearchBar={true}
            listCount={this.state.mylistCount}
          ></NavBar>
          <BlurDiv blurDegree={this.state.loading ? 3 : 0}>
            <ExpandingDivider
              lineColor={"#606060"}
              titleColor={"#dbdbdb"}
              fontSize={21}
              title={
                this.state.searchValue === "" ? "Recommendations" : "Resulsts"
              }
            ></ExpandingDivider>
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

export default Home;
