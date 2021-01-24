import React from 'react'
import styled from "@emotion/styled";

function About() {

    const AboutContent = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 75px;
    margin-left: 100px;
`
    const Title = styled.h1`
    font-size: 2.375rem;
    margin-bottom: 75px;
    
`
    const SubTitle = styled.h2`
    font-size: 1.750rem;
    margin-left: 110px;
    margin-bottom: 25px;
    font-family: 'lato';
`
    const TextContent = styled.b`
    margin-left: 110px;
    margin-bottom: 15px;
    font-family: 'lato';
    color: lightsteelblue;
`
    const ParagraphContent = styled.p`
    margin-left: 110px;
    margin-bottom: 15px;
`
    const Button = styled.button`
    width: 90px;
    height: 50px;
    margin-left: 110px;
    margin-top: 30px;
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
        <AboutContent>
            <Title>About</Title>
            <SubTitle>Who I am</SubTitle>
            <ParagraphContent>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br/>
                Accusantium amet, aut doloremque dolores, error eum hic laborum laudantium magni <br/>minus necessitatibus nesciunt odit officiis quas repudiandae sunt ullam voluptas voluptatibus!</ParagraphContent>
            <TextContent>quality1 quality2 quality3</TextContent>
            <SubTitle>Softwares </SubTitle>
            <TextContent>PhpStorm  WebStorm VisualStudio code Figma</TextContent>
            <SubTitle>Languages</SubTitle>
            <TextContent>HTML CSS Javascrip PHP </TextContent>
            <SubTitle>Frameworks</SubTitle>
            <TextContent>Bootstrap React CodeIgniter</TextContent>
            <Button>cv</Button>
        </AboutContent>
    )
}

export default About