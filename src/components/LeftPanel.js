import React from 'react';
import styled from 'styled-components';

const LeftPanel = ({ card }) => {



    return (
        <Left>
            <h2>Results:</h2>
        </Left>
    )
}

export default LeftPanel

const Left = styled.div`

position: fixed;
height: 100vh;
width: 15vw;
background-color: lightgray;
z-index: 999999;

`
