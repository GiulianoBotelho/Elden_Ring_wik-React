import React, { useState } from 'react'
import styled from 'styled-components'
import {Link } from 'react-router-dom'

const LinkStyle = styled(Link) `
text-decoration: none;
color: inherit;
`

const Cabeçalho = styled.header`
height: 11vh;
width: 100%;
background-color: black;
opacity: 0.5;
border: none;
`
const Li = styled.li`
font-size: 1.3rem;
color: aliceblue;
cursor: pointer;
text-decoration: none;
&:hover{
    color: #f9c906;
    transition: 2;
    scale: 1.01;
    
    
}
`
const SideBar = styled.nav `
display: flex;
align-items: center;
justify-content: center;
`
const Lista = styled.ul`
display: flex;
align-items: center;
justify-content: space-around;
width: 18vw;
`
export default function Inicio() {

   
    return (
        <>
        <Cabeçalho>
            <SideBar>
                <Lista>
                    <Li><LinkStyle to='/Main'>Home</LinkStyle></Li>
                    <Li><LinkStyle to="/">Boss</LinkStyle></Li>
                    <Li>Maps</Li>
                    <Li>Characters</Li>
                </Lista>
            </SideBar>
            </Cabeçalho>
        </>
    )
}
