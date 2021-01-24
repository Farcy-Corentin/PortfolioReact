import React from 'react';
import styled from "@emotion/styled";
import {NavLink} from "react-router-dom";
function NavBar () {
    const Nav = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 50px;
    margin-top: 25px;
    `

    const Logo = styled.span`
    color: lightsteelblue;
    display: flex;
    align-items: center;
    font-size: 3rem;
    margin-right: 25px;
    `

    const NavMenu = styled.div`
    
    `

    return (
            <Nav>
                <Logo>
                    CF
                </Logo>
                <NavMenu>
                    <NavLink to="/">
                        Home
                    </NavLink>
                    <NavLink to="works">
                        Works
                    </NavLink>
                    <NavLink to="skills">
                        Skills
                    </NavLink>
                    <a href='https://github.com/Farcy-Corentin'>
                        github
                    </a>
                    <a href='https://www.linkedin.com/in/corentin-farcy-0a1a01201/'>
                        linkedin
                    </a>
                </NavMenu>
            </Nav>
    )
}

export default NavBar