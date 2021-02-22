import './App.css';
import React from "react";
import Cards from "./components/Cards.jsx";
import styled from "@emotion/styled";
import Footer from "./components/Footer";
function App() {

    const Container = styled.div`
    display: flex;
    flex-direction: column;
    
`
    const Header = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
`
    const H1 = styled.h1`
    font-size: 2.7em;
    line-height: 44px;
    text-align: center;
    margin-bottom: 4vh;
`
    const Description = styled.p`
    font-size: 1.2em;
    font-weight: 400;
    line-height: 1.7em;
    text-align: center;
    `

    const Span = styled.span`
    color: #61DAFB;
    :nth-child(3) {
    color: #1A171B;
    }
`
    const Section = styled.section`
    display: flex;
    flex-direction: column;
`

    const Title = styled.h2`
    font-size: 1.8em;
    margin-bottom: 2vh;
    color: #333333;
`
  return (
        <div className="App">
            <Container>
                    <Header>
                        <H1>
                           Hi ! I'm Corentin Farcy
                        </H1>
                        <Description>
                            I'm French web developer, I learn web development since 2020 and I enjoy it ! <br />
                            Recently, I've been learning <Span>React.js</Span> and <Span>Symfony</Span>. <br />
                            When I'm not working I read a lot of book or article about marketing, economy and lifestyle <br />
                            or I'm playing table tennis.
                        </Description>
                    </Header>
                    <Section>
                        <Title>
                            Project
                        </Title>
                        <Cards />
                    </Section>
                        <Footer />
            </Container>
        </div>
  );
}

export default App;
