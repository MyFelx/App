import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  PlusCircleFilled,
  CheckCircleFilled,
  MinusCircleFilled,
  InfoCircleFilled,
  PlusCircleOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";
import IMDbRating from "./IMDbRating";
import { Typography, Popover } from "antd";
import FadeIn from "react-fade-in";

const { Text } = Typography;

const MOVIE_STATE = {
  ADD: "add",
  REMOVE: "remove",
};
const PosterStyle = styled.img`
  height: auto;
  box-shadow: 0 2px 5px #000;
  width: 100%;
  height: 100%;
  border-radius: 7px;
  object-fit: cover;
`;
const HoverDiv = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  top: 0%;
  position: absolute;
  width: 100%;
  border-radius: 7px;
  box-shadow: 0 2px 5px #000;
`;
const TitleContainer = styled.div`
  margin-top: 10px;
  font-family: Roboto;
  width: 100%;
`;
const IMDBContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0%;
  width: 100%;
`;
const MainContainer = styled.div`
  position: relative;
  width: fit-content;
  margin: 15px;
  height: 320px;
  width: 200px;
  border-radius: 7px;
`;
const CardContainer = styled.div`
  width: 100%;
  border-radius: 7px;
  position: relative;
  box-shadow: 0 2px 5px #000;
  height: 95%;
`;
const ButtonsContainer = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: space-around;
  padding: 30%;
  align-items: center;
`;
const IconStyling = {
  fontSize: "60px",
  color: "white",
};
const StyledInfoIcon = styled(InfoCircleFilled)`
  position: absolute;
  font-size: 30px;
  right: 7%;
  top: 5%;
  color: white;
`;

const IconDiv = styled.div`
  border-radius: 50%;
`;

const MovieCard = (props) => {
  const [movieState, setMovieState] = useState(
    props.isInList ? MOVIE_STATE.ADD : MOVIE_STATE.REMOVE
  );
  let [isHovering, setIsHovering] = useState(false);
  const toggleHover = () => {
    setIsHovering(!isHovering);
  };
  //this is for plus hoverign
  let [isPlusHovering, setIsPlusHovering] = useState(false);
  const togglePlusHover = () => {
    setIsPlusHovering(!isPlusHovering);
  };
  //this is for minus hoverign
  let [isMinusHovering, setIsMinusHovering] = useState(false);
  const toggleMinusHover = () => {
    setIsMinusHovering(!isMinusHovering);
  };

  const hoverDiv = isHovering && (
    <HoverDiv>
      <StyledInfoIcon
        onClick={() => {
          props.showModal(23313);
        }}
      />
      <ButtonsContainer>
        {movieState === MOVIE_STATE.REMOVE ? (
          <FadeIn>
            <IconDiv>
              {isPlusHovering ? (
                <PlusCircleFilled
                  style={IconStyling}
                  onMouseLeave={togglePlusHover}
                  onClick={() => {
                    setMovieState(MOVIE_STATE.ADD);
                    props.addToList && props.addToList(props.id);
                  }}
                />
              ) : (
                <PlusCircleOutlined
                  style={IconStyling}
                  onMouseEnter={togglePlusHover}
                />
              )}
            </IconDiv>
          </FadeIn>
        ) : (
          [
            <FadeIn>
              <CheckCircleFilled style={IconStyling} />
            </FadeIn>,
            <FadeIn>
              {isMinusHovering ? (
                <MinusCircleFilled
                  onMouseLeave={toggleMinusHover}
                  style={IconStyling}
                  onClick={() => {
                    setMovieState(MOVIE_STATE.REMOVE);
                    props.removeFromList && props.removeFromList(props.id);
                  }}
                />
              ) : (
                <MinusCircleOutlined
                  onMouseEnter={toggleMinusHover}
                  style={IconStyling}
                  onClick={() => {
                    setMovieState(MOVIE_STATE.REMOVE);
                    props.removeFromList && props.removeFromList(props.id);
                  }}
                />
              )}
            </FadeIn>,
          ]
        )}
      </ButtonsContainer>
    </HoverDiv>
  );
  return (
    <div>
      <FadeIn>
        <MainContainer>
          <CardContainer onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
            <PosterStyle draggable={false} src={props.posterSrc} />
            {hoverDiv}
            <IMDBContainer>
              <IMDbRating rating={props.movieRating} />
            </IMDBContainer>
          </CardContainer>
          <TitleContainer>
            <Popover placement="bottom" content={props.title}>
              <Text
                ellipsis={true}
                style={{ width: "200px", color: "#c1c1c1" }}
              >
                {props.title}
              </Text>
            </Popover>
          </TitleContainer>
        </MainContainer>
      </FadeIn>
    </div>
  );
};
export default MovieCard;
