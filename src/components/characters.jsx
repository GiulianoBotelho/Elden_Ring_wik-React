import React, { useState } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import astrologer from '../assets/characters/Astrologer.jpeg'
import bandit from '../assets/characters/bandit.jpeg'
import confessor from '../assets/characters/confessor.jpeg'
import hero from '../assets/characters/hero.jpeg'
import prisioner from '../assets/characters/prisioner.jpeg'
import prophet from '../assets/characters/prophet.jpeg'
import samurai from '../assets/characters/samurai.jpeg'
import vagabond from '../assets/characters/vagabond.jpeg'
import warrior from '../assets/characters/Warrior.jpeg'
import wretch from '../assets/characters/wretch.jpeg'
import { Titulo } from './gallery'
import { Galeria } from './gallery'


const Imagem = styled.img`
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
`
const Figura = styled.figure`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 280px;
  height: 400px;
  border: none;
  object-fit: cover;
`;


export default function Characters() {
  const [char, setChar] = useState
    ([
      { imagem: astrologer, nome: "Astrologer" },
      { imagem: bandit, nome: "Bandit" },
      { imagem: confessor, nome: "Confessor" },
      { imagem: hero, nome: "Hero" },
      { imagem: prisioner, nome: "Prisioner" },
      { imagem: prophet, nome: "Prophet" },
      { imagem: samurai, nome: "Samurai" },
      { imagem: vagabond, nome: "Vagabond" },
      { imagem: warrior, nome: "Warrior" },
      { imagem: wretch, nome: "Wretch" },
    ])
  return (
    <>
      <Galeria
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        {char.map((item) => (
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
    </>
  )
}
