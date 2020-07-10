import React, { useState } from "react";
import MovieCard from "./MovieCard";
import styled from "styled-components";
import NoImage from "../No_Image_Available.png";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
const GridStyle = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const DivStyle = styled.div`
  display: flex;
  position: relative;
  left: 50%;
`;
const ButtonStyle = styled.button`
  border-radius: 19px;
  font-size: 21px;
`;
const IconStyling = {
  fontSize: "60px",
  color: "white",
  padding: "7px",
};
const Grid = (props) => {
  const [NumberOfMovies, ChangeNumberOfMovies] = useState([]);
  const [MovieCounter, ChangeMovieCounter] = useState(6);
  const [isLoadingClicked, ChangeLoadingClicked] = useState(true);
  const LoadingToggle = () => {
    ChangeLoadingClicked(!isLoadingClicked);
  };

  // const GridMovie = () => (
  //   <MovieCard
  //     id={props.ID ? props.ID : "..."}
  //     isInList={props.InTheList ? props.InTheList : false}
  //     posterSrc={props.ThePosterImage ? props.ThePosterImage : NoImage}
  //     movieRating={
  //       props.TheMovieRating ? props.TheMovieRating.toFixed(1) : null
  //     }
  //     title={props.MovieTitle ? props.MovieTitle : " ........... "}
  //     removeFromList={props.RemovingMovie ? props.RemovingMovie : null}
  //   />
  // );
  return (
    <div>
      {/* <MovieCard
        id={props.ID ? props.ID : "..."}
        isInList={props.InTheList ? props.InTheList : false}
        posterSrc={props.ThePosterImage ? props.ThePosterImage : NoImage}
        movieRating={
          props.TheMovieRating ? props.TheMovieRating.toFixed(1) : null
        }
        title={props.MovieTitle ? props.MovieTitle : " ........... "}
        removeFromList={props.RemovingMovie ? props.RemovingMovie : null}
      />
      <DivStyle>
        {isLoadingClicked ? (
          <ButtonStyle onClick={LoadingToggle}>Load More</ButtonStyle>
        ) : (
          <LoadingOutlined style={IconStyling} />
        )}
      </DivStyle> */}
      {props.movieList}
    </div>
  );
};

export default Grid;
