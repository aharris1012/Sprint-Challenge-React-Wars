import React, { useState, useEffect } from "react";
import styled from 'styled-components'

const StyledDiv = styled.div``;

// paragraph
const Styled = styled.p`
color: black;
font-weight: bold;
`;

// section
const StyledSection = styled.section`
display: inline-block;
padding: 3%;
background:#D67655 ;
width: 100%;
height: auto;
margin-bottom: 20px;
border: 2px dashed white;
`;

// headers h1 - h6
const StyledHead = styled.h2`
    font-size: 2rem;
    max-width: 100%;
    color:#6C6C6F;
    
    :hover {
        color: white;
    }
`;

// a
const StyledA = styled.a``;
export function StarPeople(props) {

    if (!props.person) return <h3>Loading...</h3>;

    return (
        <StyledDiv className="App">
            <StyledSection>
                <StyledHead className="characterName">{props.person.name}</StyledHead>
                <Styled> He? She? Or What?: {props.person.gender}</Styled>
                <Styled>{props.person.birth_year}</Styled>
            </StyledSection>
        </StyledDiv>
    );
} 







