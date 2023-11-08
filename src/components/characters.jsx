import React, { useState } from 'react'
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
import { Titulo } from './Style-page/style.jsx'
import { Galeria } from './Style-page/style.jsx'
import { FigChar } from './Style-page/style.jsx'
import { ImgChar } from './Style-page/style.jsx'

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
              <FigChar>
                <ImgChar src={item.imagem} alt={item.nome} />
                <Titulo>{item.nome}</Titulo>
              </FigChar>
            </li>
          </ul>
        ))}
      </Galeria>
    </>
  )
}
