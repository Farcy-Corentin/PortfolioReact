import React from 'react'
import styled from "@emotion/styled";
import {NavLink} from "react-router-dom";


function HomePage() {
    const Content = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 175px;
    margin-left: 300px;
`
    const H1 = styled.h1`
    font-size: 5.625rem;
`
    const H2 = styled.h2`
    font-size: 2.25rem;
    margin: 10px 0px 15px 90px;
`
    const Citation = styled.p`
    font-size: 1.125rem;
    margin: 0px 0px 15px 130px;
`
    const ButtonLink = styled(NavLink)`
    width: 90px;
    height: 50px;
    margin-bottom: 220px;
`
    const Button = styled.button`
    width: 90px;
    height: 50px;
    margin-left: 225px;
    margin-top: 50px;
    border: none;
    color: white;
    border: 3px solid lightsteelblue;
    background-color: black;
    position: relative;
    z-index: 1;
    &:hover {
    color: black;
    cursor: pointer;
    }
    &:before {
    
    position: absolute;
    top: -5%;
    left: 90%;
    right: 80%;
    bottom: -5%;
    content: "";
    background-color: lightsteelblue;
    }
    &:hover:before {
    
    left: -2%;
    right: -5%;
    opacity: 1;
    z-index: -1;   
    }   
`

    return (
        <Content>
            <H1>
                Hello, welcome
            </H1>
            <H2>
                My name is <span>Corentin Farcy</span>
            </H2>
                <Citation>
                    everything is <span>difficult</span> before being <span>simple</span>
                </Citation>
            <ButtonLink to="/about">
                <Button>
                About
                </Button>
            </ButtonLink>
        </Content>
    )
}

export default HomePage