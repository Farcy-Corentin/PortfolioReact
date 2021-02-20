import React from 'react';
import cardsData from '../data/CardData'
import styled from "@emotion/styled";
import { css } from "@emotion/react";

function cards() {

    const backgroundImage = props =>
        css`
        background-image: url(${props.url});
`
    const StatusColor = props =>
        css`
        color: ${props.color};
`
    console.log(backgroundImage)
    const Container = styled.div`
    display: flex;
    flex-flow: row wrap;
    flex-direction: row;
    justify-content: center;
    @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    }
`
    const Cards = styled.div`
    display: flex;
    flex: 1 1 350px;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    margin: 15px 15px 0 0;
    width: 350px;
    height: 400px;
    color: black;
    ${backgroundImage};
    background-repeat: no-repeat;
    background-size: cover;
    :hover {
    background-color: #fac76c;
    background-image: none;
    }
`
    const H1 = styled.h1`
    color: black;
    font-size: 4em;
    margin-bottom: 10px;
`

    const Separator = styled.hr`
    width: 70px;
    height: 4px;
    background-color: red;
    border: none;
    margin-left: 260px;
    margin-bottom: 15px;
`

    const DescriptionCards = styled.p`
    color: white;
    font-size: 2em;
`

    const StatusProject = styled.p`
    ${StatusColor};
    font-size: 1.6em;    
`

    const Date = styled.div`
    color: white;
    font-size: 1.8em;
`

    const cardElement = cardsData.map(({ name, title, description, status, date, url, statusColor }, i) => (
        console.log(url),
        <Cards url={url}>
            <div>
                <H1>
                    {name}
                </H1>
            </div>
            <Separator />
            <div>
                <h3>
                    {title}
                </h3>
                <DescriptionCards>
                    {description}
                </DescriptionCards>
                <StatusProject color={statusColor}>
                    {status}
                </StatusProject>
            </div>
            <div>
                <Date>
                    {date}
                </Date>
            </div>
        </Cards>

        ));

    return(
        <Container>
            {cardElement}
        </Container>
    );
}

export default cards;