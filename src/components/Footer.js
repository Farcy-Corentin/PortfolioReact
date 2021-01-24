import React from 'react';
import styled from "@emotion/styled";
import {AiFillGithub} from "react-icons/ai";

function Footer() {
const FooterContent = styled.div`
width: 100%;
background-color: lightsteelblue;
margin-left: -155px;
height: 400px;
margin-top: 70px;
`

    return (
        <FooterContent>
            <h2>Contact Me</h2>
            <p>0642406229</p>
            <a href="https://github.com/Farcy-Corentin">
                <AiFillGithub />
            </a>
        </FooterContent>
    )

}
export default Footer