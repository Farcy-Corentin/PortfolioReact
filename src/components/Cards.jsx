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
    margin-right: 10px;
    margin-bottom: 10px;
    height: 60vh;
    color: black;
    cursor: pointer;
    
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #fac76c;
    background-image: none;
    :hover {
    ${backgroundImage};
    }
`
    const H1 = styled.h1`
    color: #333333;
    font-size: 3em;
    margin-bottom: 10px;
`

    const DescriptionCards = styled.p`
    color: #a79797;
    font-size: 1.5em;
`

    const StatusProject = styled.p`
    ${StatusColor};
    font-size: 1.2em;    
`

    const Date = styled.div`
    color: white;
    font-size: 1em;
`

    const Technologies = styled.div`

`
    const Framework = styled.div`

`
    const cardElement = cardsData.map(({ name, title, description, status, date, url, statusColor, technologies, framework }, i) => (
        console.log(url),
        <Cards url={url}>
            <div>
                <H1>
                    {name}
                </H1>
            </div>
            <div>
                <h3>
                    {title}
                </h3>
                <DescriptionCards>
                    {description}
                </DescriptionCards>
                <Technologies>
                    <h4>
                        Technologies
                    </h4>
                    {technologies}
                </Technologies>
                <Framework>
                    <h4>
                        Framework
                    </h4>
                    {framework}
                </Framework>
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