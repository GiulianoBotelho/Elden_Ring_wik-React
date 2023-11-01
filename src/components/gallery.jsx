import React, { useState } from 'react';
import styled, { createGlobalStyle } from "styled-components"
import Middle from './middle.jsx'
import {AnimatePresence, motion} from 'framer-motion'
import margitImage from '../assets/margit.jpeg'
import godrickImage from '../assets/godrick.jpeg';
import rennalaImage from '../assets/rennala.jpeg';
import radahnImage from '../assets/radahn.jpeg';
import rykardImage from '../assets/rykard.jpeg';
import moghTheOmen from '../assets/mogh_the_omen.jpeg';
import godfreyGoldenShadeImage from '../assets/godfrey_golden_shade.jpeg'
import morgottImage from '../assets/morgott.jpeg'
import fireGiantImage from '../assets/fire_giant.jpeg'
import dragonLordImage from '../assets/dragonlord_placidusax.jpeg'
import malikethImage from '../assets/maliketh.jpeg'
import moghBlood from '../assets/mohg_the_lord_of_blood.jpeg'
import maleniaImage from '../assets/malenia.jpeg'
import gideonImage from '../assets/gideon.jpeg'
import hoarahLouxImage from '../assets/hoarah_loux.jpeg'
import radagonImage from '../assets/radagon.jpeg'
import eldenBeastImage from '../assets/elden_beast.jpeg'





const Galeria = styled(motion.section)`
background-color: rgb(0,0,0, 0.5);
border: none;
height: 80vh;
width: 80vw;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
gap: 20px;
overflow: auto;

`
const Imagem = styled.img`
width: 400px;
height: 200px;
flex: 1 0 21%; 
margin: 1%;
object-fit: cover;
opacity: 1;
border: solid #a08002;
box-shadow: 0 0 20px #a08000,
0 0 2px #947703,
0 0 2px white;
opacity: 0.7;
`
const Titulo = styled.figcaption`
font-size: 2rem;
border: solid #a08002;
box-shadow: 0 0 20px #a08000,
0 0 2px #947703,
0 0 2px white;

text-align: center;
color: #a08002;
text-shadow: 0 0 5px #a08000,
0 0 6px #947703,
0 0 10px white,
;
font-family: 'Lancelot', serif;
`

const Figura = styled.figure `
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 520px;
height: 320px;
border: none;


`

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
    { imagem: eldenBeastImage, nome: "Elden Beast" }

  ]);

  const [showGallery, setShowGallery] = useState(false)

  return (
    <>
      
      <AnimatePresence>
      
      <Galeria
        initial={{opacity:0}}
        animate={{opacity:1, x:100}}
        transition={{duration:2}}
        exit={{opacity:0, x:-100, delay:1}}
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
