import React from "react";
import styled from "styled-components";
import linkedin from '../assets/background/linkedin.png'
import github from '../assets/background/github.png'
import { motion } from 'framer-motion'
import Modal from "./modal.jsx";
import { Rodape } from "./Style-page/style.jsx";
import { FigLogo } from "./Style-page/style.jsx";

export default function Footer() {
  return (
    <>
      <Rodape>
        <nav>
          <Modal />
          <FigLogo>
            <a href="https://www.linkedin.com/in/giuliano-botelho/" target="_blank">
              <motion.img
                initial={{ x: 0 }}
                animate={{ rotate: [0, 300, 360] }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 3,
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
                repeatDelay: 3,
              }} src={github} alt="Logo github" />
            </a>
          </FigLogo>
        </nav>
      </Rodape>
    </>
  );
}
