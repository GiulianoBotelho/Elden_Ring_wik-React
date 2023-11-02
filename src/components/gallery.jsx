import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import margitImage from "../assets/boss/margit.jpeg";
import godrickImage from "../assets//boss/godrick.jpeg";
import rennalaImage from "../assets/boss/rennala.jpeg";
import radahnImage from "../assets/boss/radahn.jpeg";
import rykardImage from "../assets/boss/rykard.jpeg";
import moghTheOmen from "../assets/boss/mogh_the_omen.jpeg";
import godfreyGoldenShadeImage from "../assets/boss/godfrey_golden_shade.jpeg";
import morgottImage from "../assets/boss/morgott.jpeg";
import fireGiantImage from "../assets/boss/fire_giant.jpeg";
import dragonLordImage from "../assets/boss/dragonlord_placidusax.jpeg";
import malikethImage from "../assets/boss/maliketh.jpeg";
import moghBlood from "../assets/boss/mohg_the_lord_of_blood.jpeg";
import maleniaImage from "../assets/boss/malenia.jpg";
import gideonImage from "../assets/boss/gideon.jpeg";
import hoarahLouxImage from "../assets/boss/hoarah_loux.jpeg";
import radagonImage from "../assets/boss/radagon.jpeg";
import eldenBeastImage from "../assets/boss/elden_beast.jpeg";

const Galeria = styled(motion.section)`
  display: flex;
  height: 80%;
  width: 98%;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 15px;
  overflow: auto;
`;
const Imagem = styled.img`
  width: 350px;
  height: 200px;
  opacity: 1;

    box-shadow:
    0 0 20px black,
    0 0 2px black,
    0 0 2px black;
    border: solid 3px black;
    object-fit: cover;
    cursor: pointer;
    border-radius: 25px;
    &:hover{
      border: solid #a08002;
  box-shadow:
    0 0 20px #a08000,
    0 0 2px #947703,
    0 0 2px white;
    transition: 500ms;
    }
    
`;
const Titulo = styled.figcaption`
  font-size: 1.8rem;
  border: solid #a08002;
  background-color: black;
  opacity: 0.9;
  border-radius:13px;
  box-shadow:
    0 0 20px #a08000,
    0 0 2px #947703,
    0 0 2px white;
    cursor:pointer;

  text-align: center;
  color: #a08002;
  text-shadow:
    0 0 5px #a08000,
    0 0 6px #947703,
    0 0 10px white;
  font-family: "Lancelot", serif;
  &:hover{
    transition: 500ms;
    background-color: #a08002;
    color: aliceblue;
  }
  
`;

const Figura = styled.figure`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 400px;
  height: 280px;
  border: none;
  object-fit: cover;
 
`;

export default function Gallery() {
  const [boss, setBoss] = useState([
    { imagem: margitImage, nome: "Margit, the Fell Omen" },
    { imagem: godrickImage, nome: "Godrick, the grafted" },
    { imagem: rennalaImage, nome: "Rennala, Queen of the full Moon" },
    { imagem: radahnImage, nome: "Starscourge Radahn" },
    { imagem: rykardImage, nome: "Rykard, Lord of Blasphemy" },
    { imagem: moghTheOmen, nome: "Mogh, the Omen" },
    { imagem: godfreyGoldenShadeImage, nome: "Godfrey, Golden Shade" },
    { imagem: morgottImage, nome: "Morgott, the Omen King" },
    { imagem: fireGiantImage, nome: "Fire Giant" },
    { imagem: dragonLordImage, nome: "Dragon Lord, Placidusax" },
    { imagem: malikethImage, nome: "Maliketh The Black Blade" },
    { imagem: moghBlood, nome: "Mogh the Lord of Blood" },
    { imagem: maleniaImage, nome: "Malenia, blade of Miquella" },
    { imagem: gideonImage, nome: "Sir Gideon Ofnir the All Knowing" },
    { imagem: hoarahLouxImage, nome: "Hoarah Loux" },
    { imagem: radagonImage, nome: "Radagon of the Golden Order" },
    { imagem: eldenBeastImage, nome: "Elden Beast" },
  ]);

  return (
    <>
      <AnimatePresence>
        <Galeria
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {boss.map((item, index) => (
            <ul>
              <li key={index}>
                <Figura>
                  <Imagem src={item.imagem} alt={item.nome} />
                  <Titulo>{item.nome}</Titulo>
                </Figura>
              </li>
            </ul>
          ))}
        </Galeria>
      </AnimatePresence>
    </>
  );
}
