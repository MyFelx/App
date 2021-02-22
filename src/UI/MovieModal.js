import React from "react";
import styled from "styled-components";
import YouTube from "react-youtube";
import Modal from "./Modal";
import IMDbRating from "./IMDbRating";
import AppButton from "./Button";

const OuterDiv = styled.div`
  display: flex;
  width: 1060px;
  height: 680px;
  margin: -15px 0px;
`;
const AllInfoDiv = styled.div`
  width: 100%;
  padding: 10px;
  padding-top: 15px;
`;
const AddAndIMDbDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 35px;
`;
const IMDbInfoDiv = styled.div`
  height: 280px;
  color: #c1c1c1;
  font-size: 18px;
  padding-top: 10px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background: #303030;
    border-radius: 3px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
const StaffInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #828282;
  font-size: 14px;
  margin: 10px;
`;
const VideoDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;
const StyledPoster = styled.img`
  align-self: center;
  margin: 10px;
`;

const MovieModal = (props) => {
  const opts = {
    height: "230",
    width: "409",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  const _onReady = (event) => {
    event.target.pauseVideo();
  };

  return (
    <Modal closable={true} closeModal={props.closeModal}>
      <OuterDiv>
        <StyledPoster
          src={props.poster}
          alt="oops"
          width="auto"
          height="632px"
        />
        <AllInfoDiv>
          <h1
            style={{ color: "#c1c1c1", marginBottom: "0px", fontSize: "32px" }}
          >
            {props.movieTitle}
          </h1>
          <AddAndIMDbDiv>
            <IMDbRating
              rating={props.IMDb}
              iconHeight={"26px"}
              textHeight={"20px"}
            />
            {/* {movieState === MOVIE_STATE.REMOVE ? (
              <AppButton
                text={"Add to List"}
                height={"40px"}
                width={"130px"}
                color={"#c1c1c1"}
                fontSize={"20px"}
                backgroundColor={"#303030"}
                onClick={() => {
                  API.addMovieToMyList(props.movieID)
                    .then((res) => {
                      message.success("You Added This Movie To Your List");
                      setMovieState(MOVIE_STATE.ADD);
                    })
                    .catch((e) => {
                      message.error("Failed To Add This Movie To Your List");
                    });
                }}
              />
            ) : (
              <AppButton
                text={"In List"}
                height={"40px"}
                width={"130px"}
                color={"#c1c1c1"}
                fontSize={"20px"}
                backgroundColor={"#303030"}
                onClick={() => {
                  API.removeMovieFromMyList(props.movieID)
                    .then((res) => {
                      message.success("You Removed This Movie From Your List");
                      setMovieState(MOVIE_STATE.REMOVE);
                    })
                    .catch((e) =>
                      message.success("You Removed This Movie From Your List")
                    );
                }}
              />
            )} */}
          </AddAndIMDbDiv>
          <IMDbInfoDiv>
            <div style={{ textAlign: "center" }}>
              {props.runTime} minutes | {props.genres} | {props.releaseDate}
            </div>
            <StaffInfoDiv>
              <div
                style={{
                  marginLeft: "23px",
                }}
              >
                Cast: {props.cast}
              </div>
            </StaffInfoDiv>
            <div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
              {props.info}
            </div>
          </IMDbInfoDiv>
          <VideoDiv>
            <YouTube
              style={{ position: "relative" }}
              videoId={props.trailerID}
              opts={opts}
              onReady={_onReady}
            />
          </VideoDiv>
        </AllInfoDiv>
      </OuterDiv>
    </Modal>
  );
};

export default MovieModal;
