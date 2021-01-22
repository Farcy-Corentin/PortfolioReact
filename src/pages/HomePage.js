import React from 'react'
import styled from "@emotion/styled";

function HomePage() {
    const Content = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 250px;
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
    const Button = styled.button`
    width: 90px;
    height: 50px;
    margin-left: 250px;
    margin-top: 50px;
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
        </Content>
    )
}

export default HomePage