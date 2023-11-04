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
import godskinDuo from "../assets/boss/godskin.jpeg"
import malikethImage from "../assets/boss/maliketh.jpeg";
import moghBlood from "../assets/boss/mohg_the_lord_of_blood.jpeg";
import maleniaImage from "../assets/boss/malenia.jpeg";
import gideonImage from "../assets/boss/gideon.jpeg";
import hoarahLouxImage from "../assets/boss/hoarah_loux.jpeg";
import radagonImage from "../assets/boss/radagon.jpeg";
import eldenBeastImage from "../assets/boss/elden_beast.jpeg";
import { Link, Routes, BrowserRouter, Route } from "react-router-dom"
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
font-family: 'Ringbearer';
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

const Li = styled.li`
  font-size: 1.3rem;
  color: aliceblue;
  cursor: pointer;
  text-decoration: none;
  transition:200ms;
  &:hover {
    color: #f9c906;
    transition: 800ms;
  }
  &:active{
    scale:1.25;
    transition:600ms;
    color:#f9c906;
  }
`;
const SideBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
`;
const Lista = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  gap: 20px;
`;

const LinkStyle = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export default function Boss() {
  const [boss, setBoss] = useState([
    { imagem: margitImage, nome: "Margit, the Fell Omen", type: "mandatory" },
    { imagem: godrickImage, nome: "Godrick, the grafted", type: "mandatory" },
    { imagem: rennalaImage, nome: "Rennala, Queen of the full Moon", type: "mandatory" },
    { imagem: radahnImage, nome: "Starscourge Radahn" },
    { imagem: rykardImage, nome: "Rykard, Lord of Blasphemy" },
    { imagem: moghTheOmen, nome: "Mogh, the Omen" },
    { imagem: godfreyGoldenShadeImage, nome: "Godfrey, Golden Shade", type: "mandatory" },
    { imagem: morgottImage, nome: "Morgott, the Omen King", type: "mandatory" },
    { imagem: fireGiantImage, nome: "Fire Giant", type: "mandatory" },
    { imagem: dragonLordImage, nome: "Dragon Lord, Placidusax" },
    { imagem: godskinDuo, nome: "Godskin Duo", type: "mandatory" },
    { imagem: malikethImage, nome: "Maliketh The Black Blade", type: "mandatory" },
    { imagem: moghBlood, nome: "Mogh the Lord of Blood" },
    { imagem: maleniaImage, nome: "Malenia, blade of Miquella" },
    { imagem: gideonImage, nome: "Sir Gideon Ofnir the All Knowing", type: "mandatory" },
    { imagem: hoarahLouxImage, nome: "Hoarah Loux", type: "mandatory" },
    { imagem: radagonImage, nome: "Radagon of the Golden Order", type: "mandatory" },
    { imagem: eldenBeastImage, nome: "Elden Beast", type: "mandatory" },
  ]);

  return (
    <>
      <AnimatePresence>
        <main>
          <Galeria
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            {boss.map((item) => (
              <ul key={item.nome}>
                <li>
                  <Figura>
                    <Imagem src={item.imagem} alt={item.nome} />
                    <Titulo>{item.nome}</Titulo>
                  </Figura>
                </li>
              </ul>
            ))}
          </Galeria>
        </main>
      </AnimatePresence>
    </>
  );
}


