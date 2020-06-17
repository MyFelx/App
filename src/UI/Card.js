import React, { useState } from 'react';
import styled from "styled-components";
import { PlusCircleFilled, CheckCircleFilled, MinusCircleFilled, InfoCircleFilled } from '@ant-design/icons'

const StyledCard = styled.div`
    width: 200px;
    height: 285.09px;
    border-radius: 7px;
    box-shadow: 0 2px 5px #ccc;
    margin: 15px 15px 15px 15px;
    float: left;
    background-image:url("https://m.media-amazon.com/images/M/MV5BODY1NWE2OTctOTU5MC00NTlmLWI2MzktMmYzMTUzYjk4YjEzXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_SY1000_CR0,0,701,1000_AL_.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    &:hover {
        
    }
`;
const HoverDiv = styled.div`
background-color : rgba(0,0,0,0.5);
height: 100%;
width:100%;
`
const IconPosition = {
    position: "relative",
    top: "20%",
    left: "38%",
    padding: "0",
    fontSize: "50px",
    color: "white",
};
const Info = {
    position: "relative",
    fontSize: "20px",
    left: "90%",
    height: "30%",
    color: "white",
};
const IconHeight = {
    height: "60%",
};
const IMDB = styled.div`
    width: 50%;
    background-image:url("https://images6.alphacoders.com/612/612531.jpg");
`;


const AppCard = (props) => {
    const [inVal, exVal] = useState(true);
    const EditValue = (v) => {
        v.inVal !== inVal && exVal(!inVal);
    };
    let [inOnHover, exOnHover] = useState(true);
    const Hovering = (val) => {
        val.inOnHover !== inOnHover && exOnHover(!inOnHover);
    };
    const isWork = () => {
        return (
            <div onClick={EditValue}>
                {
                    inVal === true ?
                        <PlusCircleFilled style={IconPosition} addToList={props.isInList} />
                        :
                        <div>
                            <div><CheckCircleFilled style={IconPosition} isInList={props.isInList} /></div>
                            <div><MinusCircleFilled style={IconPosition} removeFromList={props.removeFromList} /></div>
                        </div>
                }
            </div>
        )
    }
    const OnHover = () => {
        if (inOnHover) {
            return (
                <HoverDiv>
                    <div style={Info}> <InfoCircleFilled /></div>
                    <div style={IconHeight}>
                        {isWork()}
                    </div>
                    <div > <IMDB /> IMDB</div>
                </HoverDiv>
            )
        }
        else {
            return (
                <div></div>
            )
        }
    }

    return (
        <StyledCard onMouseOver={Hovering} onmouseleave={Hovering}>
            {OnHover()}

            <div >Title {props.title} </div>
        </StyledCard>

    )

};

export default AppCard;