import React, { useState } from 'react'
import astrologer from '../assets/characters/Astrologer.jpeg'
import bandit from '../assets/characters/bandit.jpeg'
import confessor from '../assets/characters/confessor.jpeg'
import hero from '../assets/characters/hero.jpeg'
import prisoner from '../assets/characters/prisioner.jpeg'
import prophet from '../assets/characters/prophet.jpeg'
import samurai from '../assets/characters/samurai.jpeg'
import vagabond from '../assets/characters/vagabond.jpeg'
import warrior from '../assets/characters/Warrior.jpeg'
import wretch from '../assets/characters/wretch.jpeg'
import { Titulo } from './Style-page/style.jsx'
import { Galeria } from './Style-page/style.jsx'
import { FigChar } from './Style-page/style.jsx'
import { ImgChar } from './Style-page/style.jsx'
import ModalChar from './modal-char.jsx'
import astrologerStats from '../assets/charstats/Astrologer.jpg'
import banditStats from '../assets/charstats/Bandit.jpg'
import confessorStats from '../assets/charstats/Confessor.jpg'
import heroStats from '../assets/charstats/Hero.jpeg'
import prisionerStats from '../assets/charstats/Prisioner.jpg'
import prophetStats from '../assets/charstats/Prophet.jpg'
import samuraiStats from '../assets/charstats/Samurai.jpg'
import vagabondStats from '../assets/charstats/Vagabond.jpg'
import warriorStats from '../assets/charstats/Warrior.jpg'
import wretchStats from '../assets/charstats/Wretch.jpg'
export default function Characters() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const [char, setChar] = useState
    ([
      { imagem: astrologer, nome: "Astrologer", stats: astrologerStats, descricao: "Astrologer is a starting Class in Elden Ring. The Astrologer has high Intelligence and Mind and some Dexterity. It starts the game level 6, with a Staff, a sword and small shield. The Classes only determine the starting Stats and Equipment of the player, but as the game progresses, players can freely change their build to their preferred playstyle. There are 10 Classes in Elden Ring that the player can begin the game with." },
      { imagem: bandit, nome: "Bandit", stats: banditStats, descricao: "Bandit is a starting Class in Elden Ring. The Bandit has High Arcane and Dexterity. It starts the game level 5, with a dagger, parrying shield, bow and arrows. The Classes only determine the starting Stats and Equipment of the player, but as the game progresses, players can freely change their build to their preferred playstyle. There are 10 Classes in Elden Ring that the player can begin the game with." },
      { imagem: confessor, nome: "Confessor", stats: confessorStats, descricao: "Confessor is a starting Class in Elden Ring. The Confessor has high Faith and medium physical stats. It starts the game level 10 with a broadsword, a kite shield and a finger seal. The Classes only determine the starting Stats and Equipment of the player, but as the game progresses, players can freely change their build to their preferred playstyle. There are 10 Classes in Elden Ring that the player can begin the game with." },
      { imagem: hero, nome: "Hero", stats: heroStats, descricao: "Hero is a starting Class in Elden Ring. The Hero has high Strength and Vigor with some arcane. It starts the game level 7, with a battle axe and leather shield. The Classes of Elden Ring only determine the starting Stats and Equipment of the player, but as the game progresses, players can freely change their build to their preferred playstyle. The Hero is a Strength-based class that begins the game with an axe." },
      { imagem: prisoner, nome: "Prisoner", stats: prisionerStats, descricao: "Prisoner is a starting Class in Elden Ring. The Prisoner has high Intelligence and Dexterity, and medium physical stats. It starts the game level 9, with an estoc, a staff and shield. The Classes only determine the starting Stats and Equipment of the player, but as the game progresses, players can freely change their build to their preferred playstyle. There are 10 Classes in Elden Ring that the player can begin the game with." },
      { imagem: prophet, nome: "Prophet", stats: prophetStats, descricao: "Prophet is a starting Class in Elden Ring. The Prophet has high Faith and mind and some arcane and strength. It starts level 7, with a spear, a finger seal and a small shield. The Classes only determine the starting Stats and Equipment of the player, but as the game progresses, players can freely change their build to their preferred playstyle." },
      { imagem: samurai, nome: "Samurai", stats: samuraiStats, descricao: "Samurai is a starting Class in Elden Ring. The Samurai has high Dexterity, Medium strength, endurance, mind and vigor. It starts the game level 9 with a katana, bow, arrows (flaming arrows too!) and a shield. The Classes only determine the starting Stats and Equipment of the player, but as the game progresses, players can freely change their build to their preferred playstyle. There are 10 Classes in Elden Ring that the player can begin the game with." },
      { imagem: vagabond, nome: "Vagabond", stats: vagabondStats, descricao: "Samurai is a starting Class in Elden Ring. The Samurai has high Dexterity, Medium strength, endurance, mind and vigor. It starts the game level 9 with a katana, bow, arrows (flaming arrows too!) and a shield. The Classes only determine the starting Stats and Equipment of the player, but as the game progresses, players can freely change their build to their preferred playstyle. There are 10 Classes in Elden Ring that the player can begin the game with." },
      { imagem: warrior, nome: "Warrior", stats: warriorStats, descricao: "Warrior is a starting Class in Elden Ring. The Warrior has High Dex and medium physical stats. It starts the game level 8, with two scimitars and a light shield. The Classes only determine the starting Stats and Equipment of the player, but as the game progresses, players can freely change their build to their preferred playstyle." },
      { imagem: wretch, nome: "Wretch", stats: wretchStats, descricao: "Wretch is a starting Class in Elden Ring. The Wretch is the “deprived” of the game. It starts at level 1 with 10 on all stats and just a club for weapons. It is the weakest starting Class in Elden Ring, and should be selected by those who want an added challenge in the earlier parts of the game. The Classes only determine the starting Stats and Equipment of the player, but as the game progresses, players can freely change their build to their preferred playstyle." },
    ])
  const Click = (item) => {
    setSelectedImage(item)
    setIsOpen(true)
  }
  return (
    <>
      <ModalChar isOpen={isOpen} setIsOpen={setIsOpen} selectedImage={selectedImage} />
      <Galeria
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        {char.map((item) => (
          <ul key={item.nome}>
            <li onClick={() => Click(item)}>
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
