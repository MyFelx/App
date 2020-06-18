import React, { useState } from 'react';
import styled from "styled-components";
import { PlusCircleFilled, CheckCircleFilled, MinusCircleFilled, InfoCircleFilled } from '@ant-design/icons'
import IMDB from './IMDbRating'

const StyledCard = styled.div`
    width: 200px;
    height: 285.09px;
    border-radius: 7px;
    box-shadow: 0 2px 5px #ccc;
    margin: 15px 15px 15px 15px;
    float: left;
    background-image:url("https://m.media-amazon.com/images/M/MV5BZjNlZmUyYmMtNjNjMS00NzQ5LTlmYjktNDVkMmRjMTQyMmVjXkEyXkFqcGdeQXVyNzk0NTA5NQ@@._V1_SY1000_CR0,0,677,1000_AL_.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    &:hover {
        
    }
`;
const HoverDiv = styled.div`
    background-color : rgba(0,0,0,0.5);
    opacity:${(props) => props.opacity};
    height: 100%;
    width:100%;
    border-radius: 7px;
    box-shadow: 0 2px 5px #ccc;
`
const IconAddPosition = {
    position: "relative",
    top: "15%",
    left: "38%",
    padding: "0",
    fontSize: "60px",
    color: "white",
    marginTop: "10px",
};
const IconPosition = {
    position: "relative",
    top: "0%",
    left: "38%",
    padding: "0",
    fontSize: "60px",
    color: "white",
    marginTop: "10px",
};
const Info = {
    position: "relative",
    fontSize: "30px",
    left: "80%",
    top: "2%",
    height: "30%",
    color: "white",
};
const IconHeight = {
    height: "60%",
};
const IMDBStyle = {
    top: '80%',
    textAlignItems: 'center',
    backgroundColor: "rgba(0,0,0,0.7)",
}
const EmptyDiv = {
    height: "90%",
    width: "100%",
    borderRadius: "7px",
}
const IMDBPostion = {
    margin: "1px 1px 1px 30px",
}

const AppCard = (props) => {
    const [inVal, exVal] = useState(true);
    const EditValue = (v) => {
        v.inVal !== inVal && exVal(!inVal);
    };
    let [isHovering, setIsHovering] = useState(false);
    const [overLayOpacity, setOverlayOpacity] = useState(0)
    const Hovering = (val) => {
        val.isHovering !== isHovering && setIsHovering(!isHovering);
    };

    // const onHover = (val) => {
    //     setIsHovering(true);
    //     setInterval(() => {
    //         console.log("object")
    //         setOverlayOpacity(overLayOpacity + 0.6)
    //     }, 200);

    // }
    // const onExitHover = (val) => {
    //     setIsHovering(false);
    //     setOverlayOpacity(0);
    // }

    const shouldShowOverlay = () => {
        if (isHovering) {
            return (
                <HoverDiv >
                    <div style={Info}> <InfoCircleFilled /></div>
                    <div style={IconHeight}>
                        <div onClick={EditValue}>
                            {
                                inVal === true ?
                                    <PlusCircleFilled style={IconAddPosition} addToList={props.isInList} />
                                    :
                                    <div>
                                        <div><CheckCircleFilled style={IconPosition} isInList={props.isInList} /></div>
                                        <div><MinusCircleFilled style={IconPosition} removeFromList={props.removeFromList} /></div>
                                    </div>
                            }
                        </div>
                    </div>

                </HoverDiv>
            )
        }
    }

    return (
        <StyledCard onPointerEnter={Hovering} onMouseLeave={Hovering} opacity={overLayOpacity}>
            <div style={EmptyDiv} > {shouldShowOverlay()}</div>
            <div style={IMDBStyle} >  <div style={IMDBPostion}><IMDB rating={4} /></div></div>
            <div >Title is  {props.title} </div>
        </StyledCard>

    )

};

export default AppCard;