import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
import Modal from './modal.jsx'
import { Imagem } from './Style-page/style.jsx'


const Mapas = styled(motion.section)`
  display: flex;
  height: 80%;
  width: 98%;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 15px;
  @media (max-width:500px){
    flex-direction: column;
  width: 100%;
  }
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
  font-family: 'Ringbearer';
  font-size: 1.6rem;
  background-color: black;
  opacity: 0.9;
  border-radius:10px;
  box-shadow:
    0 0 20px #a08000,
    0 0 2px #947703,
    0 0 2px white;
    cursor:pointer;
  text-align: center;
  color: #a08002;
  font-family: "Lancelot", serif;
  &:hover{
    transition: 500ms;
    background-color: #a08002;
    color: aliceblue;
  }
  
`

const Figure = styled.figure`
transition: 800ms;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 400px;
  height: 280px;
  border: none;
  object-fit: cover;
  &:hover{
    scale:1.05;
    transition:1200ms;
  }
 
`;

export default function Maps() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  const [area, setArea] = useState([
    { Imagem: Limgrave, nome: "Limgrave", descricao: "Limgrave is a Location and Region in Elden Ring. The Limgrave region is the first accessible area of the game. Players, will emerge from one of the underground dwellings, and be treated to Limgrave's lush environments. Limgrave is a lush, expansive section of the Tenebrae Demesne. Golden trees and tall grass and bushes provide plenty of sustenance for the local wildlife, that features boars, sheep, goat and rodents in addition to flying creatures such as eagles and owls. More sinister and aggressive wildlife also exists, and those venturing forth should be prepared to combat them." },
    { Imagem: Liurnia, nome: "Liurnia of Lakes", descricao: "Liurnia of the Lakes is one of the major continental areas in the world of Elden Ring. Found northwest of the starting area of Limgrave, this region has been the common backdrop of pre-launch images of the game, notably due to the prominent placement of The Academy of Raya Lucaria overlooking the misty lake below. It can be initially accessed via the passage beneath Godrick the Grafted's throne room in Stormveil Castle, or by following a narrow cliffside path around the east edge of the castle in northern Stormhill. With its shallow waters and vast wetlands, the region of Liurnia is beset with the gradual sinking of most of its landmass. With its forests perpetually blanketed in fog, eerie sounds of bells can be heard in the distance." },
    { Imagem: Caelid, nome: "Caelid", descricao: "Caelid is a Location and Region in Elden Ring. The Caelid region is located east of Limgrave. It's mainly defined by its red, corrupt environment and a great amount of undead roaming the open fields. Caelid, known as the locale of the last battle between General Radahn and Malenia, Blade of Miquella, is a vast land consummately marred by scarlet rot." },
    { Imagem: Plato, nome: "Platô Altus", descricao: "Altus Plateau is a Location in Elden Ring. The Altus Plateau region can be accessed either by: The Grand Lift of Dectus The Ruin-Strewn Precipice (after making your way through the Ravine-veiled Village, the Miner's Caves and Ruin-Strewn Precipice and defeating the Magma Wyrm) A third, secret route can be utilized to reach the Altus Plateau region by being intentionally swallowed and killed by the Abductor Virgin at the bottom of the Raya Lucaria waterwheel. Doing so will take you to an area in the Volcano Manor where the Altus Plateau can be reached after the Abductor Virgins boss fight." },
    { Imagem: Gelmir, nome: "Gelmir Mountain", descricao: "Mt. Gelmir is a Location in Elden Ring. Mt. Gelmir is a volcanic region found north of Liurnia and west of Altus Plateau. The mountain proper can be accessed by either: Reaching Altus Plateau by way of either the Ruin-Strewn Precipice or the Grand Lift of Dectus and then  heading north through the valley towards a bridge. Look to the right for a Spiritspring that will get you up to the cliffs and then cross over to the west to reach the Bridge of Iniquity site of grace. From here, continue heading west while hugging the cliffs until you see a rope ladder to reach the First Mt. Gelmir Campsite site of grace. Do Rya's questline, then reach Altus Plateau and meet her there. She will take you to Volcano Manor, from the manor go outside from manor's main entrance door to reach Mt. Gelmir. Getting abducted by the Abductor Virgin at the bottom of Raya Lucaria Academy as suggested by Patches to travel to Volcano Manor, then defeating Abductor Virgins to unlock access to both Mt. Gelmir and Altus Plateau. (while it is possible to parkour your way to the entrance of the manor this way without defeating Abductor Virgins, the manor's main entrance door that connects to Mt. Gelmir is closed and cannot be opened from inside - this door is open normally if you come to the manor using the two other ways above)." },
    { Imagem: SnowMap, nome: "Mountain Giants", descricao: "Consecrated Snowfield is a Location in Elden Ring. The Consecrated Snowfield region is a secret area on the lower plains of the Mountaintops of the Giants, that can only be accessed by those that collect both parts of the Haligtree Secret Medallion. Haligtree Secret Medallion (Right) is found in Liurnia of the Lakes. Haligtree Secret Medallion (Left) is found in Mountaintops of the Giants. Once you have both pieces of the medallion, go to the Grand Lift of Rold and select Hoist secret medallion (make sure your action is Hoist secret medallion and not Hoist medallion) to brandish your secret one. The route through this land, crossed east to west by a frozen river, leads to Miquella's Haligtree. This is the path taken by those unchosen, though it is a trial all the same." },
    { Imagem: Azula, nome: "Farum Azula", descricao: "Crumbling Farum Azula is a Legacy Dungeon in Elden Ring. Crumbling Farum Azula may also be considered a very small region, which can be reached through the Site of Grace at the Forge of the Giants in Mountaintops of the Giants, either by talking to Melina or listening to the flame, depending on your prior decisions in the game. A smaller portion of the area can be reached through one of the waygates in The Four Belfries. In this part, you can find the Pearldrake Talisman on a corpse after dropping down a few ledges." },
    { Imagem: MiquelaTree, nome: "Elphael, brace of the Haligtree", descricao: "Miquella's Haligtree is a Legacy Dungeon in Elden Ring. Miquella's Haligtree is found far to the north of the Consecrated Snowfield and the entire Lands Between. You'll find yourself on the canopy of a great branching tree, fighting against deadly foes. If you're looking for the castle area situated within Miquella's Haligtree, visit Elphael, Brace of the Haligtree." },
    { Imagem: Nokron, nome: "Nokron, Eternal City", descricao: "Nokron, Eternal City is a Location in Elden Ring. The Nokron, Eternal City region is a sprawling city ruin located a level above the Siofra River. Much like the Siofra River, this underground region has features that you could mistake for an overland area - the fauna, growing vegetation, and a sky seemingly filled with stars. You can reach this area by going down Starfall Crater in southern Mistwood created by a falling star after you've defeated Starscourge Radahn. See below for the location the meteor falls on your map. Technically, using the Nokron, Eternal City Waygate found at The Four Belfries in  Liurnia of the Lakes takes you to Nokron. Elden Ring Interactive Map Link (This requires a Imbued Sword Key). However, note that the Nokron, Eternal City Waygate just sends you to a small part of the map with an optional battle against a Lesser Crucible Knight. The full map is only accessible after defeating Starscourge Radahn." },

  ])

  const Click = (item) => {
    setIsOpen(true)
    setSelectedImage(item)
  }

  return (
    <AnimatePresence>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} selectedImage={selectedImage} />
      <Mapas
        initial={{ opacity: 0, x: 15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        {area.map((item) => (
          <ul key={item}>
            <li onClick={() => Click(item)}>
              <Figure>
                <Imagem src={item.Imagem} alt={item.nome} />
                <Titulo>{item.nome}</Titulo>
              </Figure>
            </li>
          </ul>
        ))}
      </Mapas>
    </AnimatePresence>
  )
}
