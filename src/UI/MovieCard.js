import React, { useState } from 'react';
import styled from "styled-components";
import { PlusCircleFilled, CheckCircleFilled, MinusCircleFilled, InfoCircleFilled } from '@ant-design/icons'
import IMDB from './IMDbRating'
import { Typography, Popover } from 'antd';
const { Text } = Typography;
const MOVIE_STATE = {
    ADD: 'add',
    REMOVE: 'remove'
}
const PosterStyle = styled.img`
    height: auto;
    box-shadow: 0 2px 5px #ccc;
    width: 100%;
    height: 100%;
    border-radius: 7px;
    object-fit: cover;
`
const HoverDiv = styled.div`
    background-color : rgba(0,0,0,0.7);
    /* opacity: ${(props) => props.opacity};  */
    height: 100%;
    top: 0%;
    position: absolute;
    width:100%;
    border-radius: 7px;
    box-shadow: 0 2px 5px #ccc;
    `
const TitleContainer = styled.div`
    margin-top: 10px;
    font-family: Roboto;
    width: 100%;
`
const IMDBContainer = styled.div`
    background-color: rgba(0,0,0,0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0%;
    width: 100%;
`
const MainContainer = styled.div`

    position: relative;
    width: fit-content;
    margin: 15px;
    height: 320px;
    width: 200px;
    border-radius: 7px;
`
const CardContainer = styled.div`
    width: 100%;
    border-radius: 7px;
    position: relative;
    box-shadow: 0 2px 5px #ccc;
    height: 95%;
`
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
`
const IconStyling = {
    fontSize: '60px',
    color: 'white'
}
const StyledInfoIcon = styled(InfoCircleFilled)`
    position: absolute;
    font-size: 30px;
    right: 7%;
    top: 5%;
    color: white;
`
const MovieCard = (props) => {
    const [movieState, setMovieState] = useState(props.isInList ? MOVIE_STATE.ADD : MOVIE_STATE.REMOVE)
    const [hoverOpacity, setHoverOpacity] = useState(0);
    let [isHovering, setIsHovering] = useState(false);
    const toggleHover = () => {
        setIsHovering(!isHovering)
    }
    const hoverDiv = isHovering &&
        <HoverDiv opacity={isHovering} >
            <StyledInfoIcon />
            <ButtonsContainer >
                {movieState === MOVIE_STATE.REMOVE ?
                    <PlusCircleFilled style={IconStyling} onClick={() => {
                        setMovieState(MOVIE_STATE.ADD)
                        props.addToList && props.addToList(props.id)
                    }} /> :
                    [
                        <CheckCircleFilled style={IconStyling} />,
                        <MinusCircleFilled style={IconStyling} onClick={() => {
                            setMovieState(MOVIE_STATE.REMOVE)
                            props.removeFromList && props.removeFromList(props.id)
                        }} />
                    ]
                }
            </ButtonsContainer>
        </HoverDiv>
    return (
        <MainContainer>
            <CardContainer onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
                <PosterStyle draggable={false} src={props.posterSrc} />
                {hoverDiv}
                <IMDBContainer> <IMDB rating={props.moveiRating} /></IMDBContainer>
            </CardContainer>
            <TitleContainer > <Popover placement="bottom" content={props.title}><Text ellipsis={true} style={{ width: '200px' }}>Title: {props.title} </Text></Popover></TitleContainer>
        </MainContainer>
    )
};
export default MovieCard