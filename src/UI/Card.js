import React, { useState } from 'react';
import styled from "styled-components";
import { PlusCircleFilled, CheckCircleFilled, MinusCircleFilled, InfoCircleOutlined } from '@ant-design/icons'

const StyledCard = styled.div`
    width: 240px;
    height: 283px;
    border-radius: 7px;
    box-shadow: 0 2px 5px #ccc;
    margin: 15px 15px 15px 15px;
    float: left;
    background-image:url("https://images6.alphacoders.com/612/612531.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
`;
const IconAddPosition = {
    position: "relative",
    top: "20%",
    left: "38%",
    padding: "0",
    fontSize: "50px",
};
const IconPosition = {
    position: "relative",
    top: "20%",
    left: "38%",
    padding: "0",
    fontSize: "50px",
};
const Info = {
    position: "relative",
    fontSize: "20px",
    left: "90%",
    height: "30%"
};
const IconHeight = {
    height: "70%",
};

const AppCard = (props) => {
    const [inVal, exVal] = useState(true);
    const EditValue = (v) => {
        v.inVal !== inVal && exVal(!inVal);
    }
    return (
        <StyledCard >
            <div style={Info}> <InfoCircleOutlined /></div>
            <div style={IconHeight}>
                <div onClick={EditValue} >
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
            <div >Title {props.title} </div>
        </StyledCard>
    )
};

export default AppCard;