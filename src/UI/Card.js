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
    background-image:url(${ (props) => props.BackGroundURL});
    background-repeat: no-repeat;
    background-size: 100% 100%;
`;
const EmptyDiv = {
    height: "90%",
    width: "100%",
    borderRadius: "7px",
}
const HoverDiv = styled.div`
    background-color : rgba(0,0,0,0.5); 
    height: 100%;
    width:100%;
    border-radius: 7px;
    box-shadow: 0 2px 5px #ccc;
    `
const Info = {
    position: "relative",
    fontSize: "30px",
    left: "80%",
    top: "2%",
    height: "30%",
    color: "white",
};
const IconAddPosition = {
    position: "relative",
    top: "20%",
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
const IMDBStyle = {
    top: '80%',
    textAlignItems: 'center',
    backgroundColor: "rgba(0,0,0,0.7)",
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
    const Hovering = (val) => {
        val.isHovering !== isHovering && setIsHovering(!isHovering);
    };
    const shouldShowOverlay = () => {
        if (isHovering) {
            return (
                <HoverDiv >
                    <div style={Info}> <InfoCircleFilled /></div>
                    <div >
                        <div onClick={EditValue}>
                            {
                                inVal === true ?
                                    <div style={IconAddPosition}><PlusCircleFilled addToList={props.addToList} /></div>
                                    :
                                    <div >
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
        <StyledCard onPointerEnter={Hovering} onMouseLeave={Hovering} BackGroundURL={props.BGURL}>
            <div style={EmptyDiv} > {shouldShowOverlay()}</div>
            <div style={IMDBStyle} >  <div style={IMDBPostion}> <IMDB rating={7.8} /></div></div>
            <div >Title {props.title} </div>
        </StyledCard >

    )

};

export default AppCard;