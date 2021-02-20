import './App.css';
import React from "react";
import Cards from "./components/Cards.jsx";
import styled from "@emotion/styled";
import Footer from "./components/Footer";
function App() {

    const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 150px;
    margin-left: 150px;
    margin-top: 100px;
    @media (max-width: 720px) {
    margin-right: 75px;
    margin-left: 75px;
    margin-top: 50px;
    }
`
    const Header = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
`
    const H1 = styled.h1`
    font-size: 3.5em;
    line-height: 44px;
    text-align: center;
    margin-bottom: 5px;
    
    @media (max-width: 720px) {
    font-size: 2.7em;
    text-align: center;
    }
`
    const Description = styled.p`
    font-size: 1.8em;
    font-weight: 400;
    line-height: 1.5em;
    text-align: center;
    
    @media (max-width: 720px) {
    font-size: 1.4em;
    }
    `

    const Span = styled.span`
    color: #61DAFB;
    :nth-child(3) {
    color: #1A171B;
    }
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
                            When I'm not working I read à lot of book or article about marketing, economy and lifestyle <br />
                            or I'm playing table tennis.
                        </Description>
                    </Header>
                    <div>
                        <h2>Project</h2>
                        <Cards />
                    </div>
                        <Footer />
            </Container>
        </div>
  );
}

export default App;
