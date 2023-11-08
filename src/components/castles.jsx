import React, { useState } from 'react'
import stormVeil from '../assets/castle/stormveil.jpeg'
import castleMorne from '../assets/castle/castle-morne.jpeg'
import caria from '../assets/castle/caria.jpeg'
import rayaLucaria from '../assets/castle/raya-lucaria.jpeg'
import redmane from '../assets/castle/redmane.jpeg'
import volcano from '../assets/castle/volcano.jpeg'
import leyendell from '../assets/castle/leyendell.jpeg'
import sun from '../assets/castle/sun.jpeg'
import { Figura } from './Style-page/style.jsx'
import { Imagem } from './Style-page/style.jsx'
import { Titulo } from './Style-page/style.jsx'
import { Galeria } from './Style-page/style.jsx'

export default function Castles() {
const[castle,setCastle] = useState
([
    {imagem:stormVeil, nome:"Stormveil"},
    {imagem:castleMorne, nome:"Castle Morne"},
    {imagem:caria, nome:"Carian Mansion"},
    {imagem:rayaLucaria, nome:"Raya Lucaria"},
    {imagem:redmane, nome:"Redmane Castle"},
    {imagem:volcano, nome:"Volcano Mansion"},
    {imagem:leyendell, nome:"Leyendell"},
    {imagem:sun, nome:"Sun Castle"}
])

    return (
        <>
        <main>
            <Galeria
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            >
       {castle.map((item) => (
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
        </>
    )
}
