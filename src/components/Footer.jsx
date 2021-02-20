import React from 'react';
import styled from "@emotion/styled";
import { ImGithub,ImLinkedin } from 'react-icons/im';
import { FaDiscord } from 'react-icons/fa';

function Footer() {

    const Footer = styled.div`
    font-size: 3em;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 70px;
    `

    const SocialLink = styled.a`
    margin-right: 50px;
    transition: 0.5s;
    color: #14191E;
    :hover {
    color: black;
    }
    :nth-child(2) {
    color: #0174B5;
    :hover {
    color: black;
    }
    }
    :nth-child(3) {
    color: #8A9CFE;
    :hover {
    color: black;
    }
    }
`

    return (
        <Footer>
            <SocialLink href="https://github.com/Farcy-Corentin">
                <ImGithub />
            </SocialLink>
            <SocialLink href='#'>
                <ImLinkedin />
            </SocialLink>
            <SocialLink>
                <FaDiscord />
            </SocialLink>
        </Footer>
    )

}
export default Footer