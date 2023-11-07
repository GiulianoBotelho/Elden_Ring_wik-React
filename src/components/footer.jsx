import React from "react";
import styled from "styled-components";
import linkedin from '../assets/background/linkedin.png'
import github from '../assets/background/github.png'
import { motion } from 'framer-motion'
import Modal from "./modal.jsx";

const Rodape = styled.footer`
  display: flex;
  height: 6vh;
  width: 100%;
  justify-content: flex-end;
  color: 0.2px #a08002;
`;

const FigLogo = styled.figure`
display: flex;
justify-content: space-evenly;
align-items: center;
width: 10vw;
cursor: pointer;
`

export default function Footer() {
  return (
    <>
      <Rodape>
        <nav>
        <Modal/>
          <FigLogo>
            <a href="https://www.linkedin.com/in/giuliano-botelho/" target="_blank">
              <motion.img
                initial={{ x: 0 }}
                animate={{ rotate: [0, 300, 360] }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 10
                }}
                src={linkedin} alt="Logo linkedin" />
            </a>
          <a href="https://github.com/GiulianoBotelho" target="_blank"> <motion.img
                initial={{ x: 0 }}
                animate={{ rotate: [0, 300, 360], }}
                transition={{
                  opacity: 1,
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 10
                }} src={github} alt="Logo github" />
                      </a> 
          </FigLogo>
        </nav> 

       </Rodape>
    </>
  );
}
