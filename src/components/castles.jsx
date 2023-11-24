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
import ModalCastle from './modal-castle.jsx'

export default function Castles() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const [castle, setCastle] = useState
    ([
      { Imagem: stormVeil, nome: "Stormveil", descricao: "Stormveil Castle is a Legacy Dungeon in Elden Ring. A castle that lies on the cliffs of Stormhill, a stronghold of Godrick the Grafted. Be wary of this location since there are hordes of soldiers and hostile creatures that will stop anything and anyone who tries to infiltrate the area. Players entering Stormveil Castle should beware that it's a challenging dungeon with groups of numerous enemies with traps and ballistas as well as mini-bosses. This area does not allow riding." },
      { Imagem: castleMorne, nome: "Castle Morne", descricao: "Castle Morne is a Location in Elden Ring. It is found on the southernmost tip of the Weeping Peninsula. Players would find the castle hard to miss, as the road leads directly to it, and going for the Map (Weeping Peninsula) would bring them into its ruined outer bailey." },
      { Imagem: caria, nome: "Carian Mansion", descricao: "A large estate in the north-west of Liurnia. The manor was once the home of the Carian Royal Family, who ruled over Liurnia and governed the Academy of Raya Lucaria. After the Academy turned on the Carians, the Cuckoo Knights launched an assault on the manor, catching the Carian Knights off guard. However, the Cuckoos were caught in a magic snare which keeps their souls trapped within the manor. In recent times, there have been rumours of vassals of the royal family gathering in the manor's grounds, possibly including the secretive Ranni the Witch." },
      { Imagem: rayaLucaria, nome: "Raya Lucaria", descricao: "The Academy of Raya Lucaria is a Legacy Dungeon in Elden Ring. Quite a different area as it has a variety of blue hues, compared to the green open spaces of Limgrave, covered in crystals not only in its environment but also the creatures that inhabit it. These range from snails to more vicious animals to the underwater crustaceans such as crabs and are heavily guarded by the academy's scholars." },
      { Imagem: redmane, nome: "Redmane Castle", descricao: "Redmane Castle is a Location in Elden Ring. The Redmane Castle is found in Caelid. It can be reached by crossing the bridge in-front of the Impassable Greatbridge site of grace. Follow the path upwards to the castle gate. Circle behind the castle using the path on the right hand side. After disposing of some enemies, there is a gap that you must jump across, it is recommended to use your mount for this section. There will be a small series of stairs leading to a shortcut, a door that can be opened only from the other side. To access the castle itself, you must climb up the ladder near said shortcut." },
      { Imagem: volcano, nome: "Volcano Mansion", descricao: "Volcano Manor is a Legacy Dungeon in Elden Ring. Volcano Manor is unique in that much of its progression, if you so choose, can be done outside of the manor itself. You will be tasked with assassinating Tarnished from other worlds, rebelling against the Fingers and the Erdtree itself. There is another way to beat the dungeon, however, if this band of dissenters and their tasks do not appeal to you. You'll find guides for both the assassination questline and the dungeon area here for a complete run of this Legacy Dungeon." },
      { Imagem: leyendell, nome: "Leyendell", descricao: "Leyndell, Royal Capital is a Location in Elden Ring. The Leyndell, Royal Capital northeastern gate is accessible to players who have gathered two Great Runes, but cannot be accessed without visiting the Roundtable Hold.  For a detailed walkthrough, please visit the walkthrough page for Leyndell, Royal Capital Legacy Dungeon. The Capital City, located at the foot of the Erdtree. Despite being partially destroyed by the dragon Gransax, it still holds strong to this day. It houses many strong foes, along with the mysterious Veiled Monarch, Morgott." },
      { Imagem: sun, nome: "Sun Castle", descricao: "Castle Sol is a Location in Elden Ring. The Castle Sol is found in Mountaintops of the Giants in the northeast. Players can reach this location by crossing the northern bridge from Stargazer's Ruins or from the Minor Erdtree (Mountaintops East)." }
    ])
  const Click = (item) => {
    setSelectedImage(item)
    setIsOpen(true)
  }

  return (
    <>
      <ModalCastle isOpen={isOpen} setIsOpen={setIsOpen} selectedImage={selectedImage} />
      <main>
        <Galeria
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {castle.map((item) => (
            <ul key={item.nome}>
              <li onClick={() => Click(item)}>
                <Figura>
                  <Imagem src={item.Imagem} alt={item.nome} />
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
