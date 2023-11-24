import React from "react";
import linkedin from '../assets/background/linkedin.png'
import github from '../assets/background/github.png'
import { motion } from 'framer-motion'
import Modal from "./modal-boss.jsx";
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
                src={linkedin} alt="Logo linkedin" />
            </a>
            <a href="https://github.com/GiulianoBotelho" target="_blank"> <motion.img

              src={github} alt="Logo github" />
            </a>
          </FigLogo>
        </nav>
      </Rodape>
    </>
  );
}
