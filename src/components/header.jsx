import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import logo from '../assets/background/ER.png'
import { LinkStyle } from "./Style-page/style.jsx";
import { Menu } from "./Style-page/style.jsx";
import { Li } from "./Style-page/style.jsx";
import { SideBar } from "./Style-page/style.jsx";
import { Lista } from "./Style-page/style.jsx";
import { Logo } from "./Style-page/style.jsx";

// export const LinkStyle = styled(Link)`
//   text-decoration: none;
//   color: inherit;
// `;

//  export const Cabeçalho = styled.header`
//   z-index: 1;
//   height: 12vh;
//   width: 100%;
//   opacity: 0.5;
//   border: none;
//   display:flex;
//   align-items:center;
//   justify-content: space-around;
// `;
// export const Li = styled.li`
//   font-size: 1.3rem;
//   color: aliceblue;
//   cursor: pointer;
//   text-decoration: none;
//   transition:200ms;
//   &:hover {
//     color: #f9c906;
//     transition: 800ms;
//   }
//   &:active{
//     scale:1.25;
//     transition:600ms;
//     color:#f9c906;
//   }
// `;
// export const SideBar = styled.nav`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 40%;
// `;
// export const Lista = styled.ul`
//   display: flex;
//   align-items: center;
//   justify-content: space-around;
//   width: 100%;
//   gap: 20px;
// `;

// export const Logo = styled(motion.img)`
// width: 65%;

// `

export default function Inicio() {

  return (
    <>
      <Menu>
        <figure>
          <Logo
            initial={{ opacity: 0.6, scale: 1 }}
            animate={{ opacity: 1 }}
            transition={{
              repeat: Infinity,
              repeatType: 'reverse',
              duration: 3, delay: 5
            }}
            src={logo} alt="Logo escrito Elden Ring" />
        </figure>
        <SideBar>
          <Lista>
            <Li>
              <LinkStyle to="/Home">Home</LinkStyle>
            </Li>
            <Li>
              <LinkStyle to="/Gallery">Boss</LinkStyle>
            </Li>
            <Li><LinkStyle to="/Maps">Maps</LinkStyle></Li>
            <Li><LinkStyle to="/Castles">Castles</LinkStyle></Li>
            <Li><LinkStyle to="/Char">Characters</LinkStyle></Li>
          </Lista>
        </SideBar>



      </Menu>
    </>
  );
}


