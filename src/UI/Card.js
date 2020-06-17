import React, { useState } from 'react';
import styled from "styled-components";
import { PlusCircleFilled, CheckCircleFilled, MinusCircleFilled } from '@ant-design/icons'

const StyledCard = styled.div`
    width: 240px;
    height: 283px;
    border-radius: 7px;
    box-shadow: 0 2px 5px #ccc;
    margin: 15px 15px 1px 15px;
    float: left;
    background-image:url("https://images6.alphacoders.com/612/612531.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
`;
const DIV = styled.div`
    position: relative;
    top: 27%;
    left: 38%;
    padding: 0;
    font-size: 50px;
`;
const Title = styled.p`
    height: 100%;
`;

const AppCard = (props) => {
    const [inVal, exVal] = useState(true);
    const EditValue = (v) => {
        v.inVal !== inVal && exVal(!inVal);
    }
    return (
        <tr>
            <StyledCard>
                <DIV onClick={EditValue}>
                    <tr>
                        {
                            inVal === true ?
                                <tr><PlusCircleFilled addToList={props.isInList} /></tr>
                                :
                                <tr>
                                    <tr><CheckCircleFilled isInList={props.isInList} /></tr>
                                    <tr><MinusCircleFilled removeFromList={props.removeFromList} /></tr>
                                </tr>
                        }
                    </tr>
                </DIV>
            </StyledCard>
            <tr>
                <Title> Title {props.title} </Title>
            </tr>
        </tr>
    )
};

export default AppCard;