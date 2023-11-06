import React, { useState } from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import styled from 'styled-components'
import Limgrave from '../assets/maps/Limgrave.jpg'
import Liurnia from '../assets/maps/Liurnia.jpeg'
import Caelid from '../assets/maps/Caelid.jpeg'
import Plato from '../assets/maps/Plato.jpeg'
import Gelmir from '../assets/maps/Gelmir.jpg'
import SnowMap from '../assets/maps/Snow.jpeg'
import Azula from '../assets/maps/Azula.jpeg'
import MiquelaTree from '../assets/maps/miquela-tree.jpeg'
import Nokron from '../assets/maps/Nokron.jpeg'


const Mapas = styled(motion.section)`
  display: flex;
  height: 80%;
  width: 98%;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 15px;
  overflow: auto;
`;
const Imagens = styled.img`
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

const Figure = styled.figure`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 400px;
  height: 280px;
  border: none;
  object-fit: cover;
 
`;

export default function Maps() {
    
const [area, setArea] = useState([
    {Imagem: Limgrave,   nome: "Limgrave"},
    {Imagem:Liurnia, nome: "Liurnia of Lakes"  },
    {Imagem: Caelid, nome:"Caelid"},
    {Imagem: Plato, nome:"Platô Altus"},
    {Imagem: Gelmir, nome: "Gelmir Mountain"},
    {Imagem: SnowMap, nome:"Mountain Giants"},
    {Imagem: Azula, nome: "Farum Azula"},
    {Imagem: MiquelaTree, nome:"Elphael, brace of the Haligtree"},
    {Imagem: Nokron, nome: "Nokron, Eternal City"},

])

  return (
    <AnimatePresence>
    <Mapas
      initial={{ opacity: 0, x: 15}}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      {area.map((item) => (
        <ul key={item.nome}>
          <li>
            <Figure>
              <Imagens src={item.Imagem} alt={item.nome} />
              <Titulo>{item.nome}</Titulo>
            </Figure>
          </li>
        </ul>
      ))}
    </Mapas>
  </AnimatePresence>
  )
}
