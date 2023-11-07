import React, { useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import margitImage from "../assets/boss/margit.jpeg";
import godrickImage from "../assets//boss/godrick.jpeg";
import rennalaImage from "../assets/boss/rennala.jpeg";
import radahnImage from "../assets/boss/radahn.jpeg";
import rykardImage from "../assets/boss/rykard.jpeg";
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
import { Link } from "react-router-dom"
import Modal from "./modal.jsx";
import videomargit from '../assets/cutscene/Margit.mp4'
import videogodrick from '../assets/cutscene/godrick.mp4'
import videorennala from '../assets/cutscene/Rennala.mp4'
import videoradahn from '../assets/cutscene/Radahn.mp4'
import videoshade from '../assets/cutscene/Shade.mp4'
import videomaliketh from '../assets/cutscene/Maliketh.mp4'
import videoplacidusax from '../assets/cutscene/Placidusax.mp4'
import videomohg from '../assets/cutscene/Mohg.mp4'
import videorykard from '../assets/cutscene/Rykard.mp4'
import videogiant from '../assets/cutscene/Giant.mp4'
import videomorgott from '../assets/cutscene/Morgott.mp4'
import videogodskin from '../assets/cutscene/Godskin.mp4'
import videomalenia from '../assets/cutscene/Malenia.mp4'
import videogideon from '../assets/cutscene/Gideon.mp4'
import videogodfrey from '../assets/cutscene/Godfrey.mp4'
import videoradagon from '../assets/cutscene/Radagon.mp4'
import videoelden from '../assets/cutscene/EldenBeast.mp4'
export const Galeria = styled(motion.section)`
  display: flex;
  height: 80%;
  width: 98%;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 15px;
`;
export const Imagem = styled.img`
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
export const Titulo = styled.figcaption`
font-family: 'Ringbearer';
  font-size: 1.6rem;
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
  font-family: "Lancelot", serif;
  &:hover{
    transition: 500ms;
    background-color: #a08002;
    color: aliceblue;
  }
  
`;

export const Figura = styled.figure`
transition:800ms;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 400px;
  height: 280px;
  border: none;
  object-fit: cover;
  &:hover{
    scale:1.1;
    transition:1200ms;
  }
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
  const [isOpen, setIsOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const [boss, setBoss] = useState([
    { imagem: margitImage, nome: "Margit, the Fell Omen", video: videomargit, descricao: "Margit is an Omen who gained notoriety during The Shattering, in which he slaughtered countless champions who harbored ambitions for Lordship, stacking high their corpses during the Second Defense of Leyndell. He is encountered by the Tarnished at the gates of Stormveil Castle, where he makes clear his disdain towards the Tarnished, and attempts to put an end to their quest for Lordship. Although he is defeated, Margit's voice is heard as he disappears." },
    {
      imagem: godrickImage, nome: "Godrick, the grafted", video: videogodrick,
      descricao: "Godrick is a descendant of the Golden Lineage, the bloodline which began with Queen Marika the Eternal and her first consort Godfrey. Only a distant relation of Marika's line, his divine blood was sorely diluted, and he was viewed as the runt of the litter.After the Elden Ring was shattered, Godrick inherited the Great Rune from the centre of the Elden Ring, referred to as the anchor ring. During The Shattering, Godrick was hounded from the Leyndell, Royal Capital. He claimed a multitude of treasures, including the Mimic's Veil, and then hid amongst the womenfolk to flee the city."
    },
    {
      imagem: rennalaImage, nome: "Rennala, Queen of the full Moon", video: videorennala,
      descricao: "As a young astrologer who gazed at the night sky and always chased the stars, Rennala would encounter an enchanting full moon that would one day bewitch the Academy of Raya Lucaria. In her youth, she was a prominent champion who charmed the academy with her lunar magic, becoming its master. She established the house of Caria as royalty, and also led the Glintstone Knights. These Carian Knights were heroes of the highest honors, anointed by the Lunar Queen, and despite numbering fewer then twenty, their power made them a match for even the champions of gold in battle."
    },
    {
      imagem: radahnImage, nome: "Starscourge Radahn", video: videoradahn,
      descricao: "Radahn was the son of Queen Rennala and Radagon, and became a demigod stepchild after his father's marriage to Queen Marika. He is regarded as the mightiest hero of the demigods, and was one of the strongest participants of the Shattering. Radahn was born the son of Radagon, a champion of the Erdtree, and Queen Rennala, head of both the Carian Royal Family and Academy of Raya Lucaria. He had two siblings, Rykard and Ranni. Radahn inherited his father's flaming red hair, and was fond of its heroic implications.[3] From a young age, he was enamored with the Elden Lord Godfrey. Attempting to emulate his idol, Radahn adorned his armor with lions, the symbol of Godfrey."
    },
    {
      imagem: rykardImage, nome: "Rykard, Lord of Blasphemy", video: videorykard,
      descricao: "Rykard was born the son of Radagon, a champion of the Erdtree, and Queen Rennala, head of both the Carian Royal Family and the Academy of Raya Lucaria. He had two siblings, Radahn and Ranni. At some point, the first Elden Lord, Godfrey, was robbed of grace and hounded from the Lands Between. Rykard's father, Radagon, left Rennala to become Queen Marika's new consort and the second Elden Lord. Rykard and his siblings were thus raised to demigods by their new step-mother, Marika."
    },
    {
      imagem: dragonLordImage, nome: "Dragon Lord, Placidusax", video: videoplacidusax,
      descricao: "In the prehistoric era before the age of the Erdtree, the world was ruled by the Ancient Dragons. Above them all was Placidusax, a many-headed Ancient Dragon who ruled as Elden Lord from the royal city of Farum Azula. When Placidusax's god fled, the Dragonlord resolved to await its return, withdrawing to his seat at the heart of the storm beyond time. Farum Azula became a mausoleum enshrining Placidusax, guarded by chosen Beastmen. In his absence, the age of the Erdtree began under the rule of Queen Marika the Eternal, and the descendants of the Ancient Dragons became enfeebled, weak to the primeval lightning wielded by their forebears. Placidusax's Gravel Stone Scales were disseminated throughout the world, used as smithing stones said to allow for the creation of god-slaying weapons by lightly twisting time."
    },
    {
      imagem: maleniaImage, nome: "Malenia, blade of Miquella", video: videomalenia,
      descricao: "Malenia was born the child of Queen Marika the Eternal and her second husband, the Elden Lord Radagon. She had an elder twin brother by the name of Miquella. Both Malenia and Miquella were Empyreans, meaning they had the potential to one day replace their mother as a new god of a coming age. But since Radagon and Marika were in fact the same person, Malenia and Miquella were born afflicted. Malenia was afflicted with the Scarlet Rot, which ravaged her from within and would cost her several limbs, while Miquella was afflicted with eternal childhood, unable to ever grow into adulthood. "
    },
    {
      imagem: moghBlood, nome: "Mogh the Lord of Blood", video: videomohg,
      descricao: "Mohg, also known as the Lord of Blood, was born of the Golden Lineage, the offspring of the first Elden Lord, Godfrey and Queen Marika, and was the twin brother of Morgott. The twins were both born as accursed Omen, and as a result were confined to the Subterranean Shunning Grounds below Leyndell. Because they were born of royalty, their horns were not excised. Unlike his brother Morgott, Mohg would embrace his Omen blood. Deep underground, Mohg made contact with an Outer God known as the Formless Mother. The Formless Mother ignited his accursed blood with fire, prompting him to develop powerful bloodflame magic."
    },
    {
      imagem: godfreyGoldenShadeImage, nome: "Godfrey, Golden Shade", video: videoshade,
      descricao: "The Golden Shade is an illusion cast by Morgott"
    },
    {
      imagem: morgottImage, nome: "Morgott, the Omen King", video: videomorgott,
      descricao: "Morgott was born of the Golden Lineage, the offspring of the first Elden Lord, Godfrey and Queen Marika, and was the twin brother of Mohg. The twins were both born as accursed Omen, and as a result were confined to the Subterranean Shunning Grounds below the capital. Because they were born of royalty, their horns were not excised. Unlike his brother, Morgott would renounce his accursed blood and seal it away within a blade, which was in turn concealed within a wooden staff he carried."
    },
    {
      imagem: fireGiantImage, nome: "Fire Giant", video: videogiant,
      descricao: "Fire Giant is a Legend Boss in Elden Ring. The last known survivor of the war against the giants, this massive humanoid has a face on its chest and is found in the Mountaintops of the Giants. This is not an optional boss as players must defeat this foe in order to advance in Elden Ring.  The Fire Giant is a survivor of the War against the Giants. 'Upon realizing the flames of their forge would never die, Queen Marika marked him with a curse.'"
    },
    {
      imagem: godskinDuo, nome: "Godskin Duo", video: videogodskin,
      descricao: "Godskin Duo is boss battle against a Godskin Apostle and Godskin Noble at the same time in Elden Ring, found in Crumbling Farum Azula. This is not an optional boss as the encounter must be defeated to advance further in Crumbling Farum Azula. Owing to the bosses' ability to ressurect the other, being reused enemies, and accusations of their movesets not fairly complementing the other, fans often rank the Godskin Duo as one of the worst bosses in FromSoftware history. "
    },
    {
      imagem: malikethImage, nome: "Maliketh The Black Blade", video: videomaliketh,
      descricao: "Maliketh is the loyal Shadowbound Beast and half-brother of Queen Marika the Eternal, an Empyrean of Numen descent,] who would become the vessel of the Elden Ring. Maliketh fought and defeated the Gloam-Eyed Queen, the leader of the Godskin Apostles. On Marika's orders, Maliketh sealed away the Rune of Death, binding it within his blade, causing the true power of the god-slaying black flame to be lost. When the Rune of Death was plucked from the Elden Ring, and confined, the Golden Order was created, with Queen Marika as its one true god. Marika's offspring were granted a form of immortality owing to the removal of their fated deaths from the Elden Ring, however there was not one Demigod who did not fear Maliketh and his blade imbued with death. He was a beast of such terrifying ferocity that his name came to mean Death of the Demigods. He also led the Black Blade Kindred, living gargoyles who wielded weapons held together by blackened corpse wax."
    },
    {
      imagem: gideonImage, nome: "Sir Gideon Ofnir the All Knowing", video: videogideon,
      descricao: "Gideon Ofnir is the Tarnished leader of Roundtable Hold and the adoptive father of Nepheli Loux. Called to the Lands Between by the guidance of Grace, Gideon wishes to become Elden Lord. To this end he accumulates information on the Shardbearers, employing a network of spies to aid in his hunt for knowledge. Initially, he is apprehensive of the Tarnished, but after they have claimed a Great Rune he becomes willing to share his knowledge of the remaining shardbearers. "
    },
    {
      imagem: hoarahLouxImage, nome: "Hoarah Loux", video: videogodfrey,
      descricao: "Godfrey is regarded as the first Elden Lord of the Golden Order, and the former consort of Queen Marika the Eternal. Godfrey was once a ferocious warrior, but when he vowed to become a lord he took upon his back the lion Serosh, the Lord of Beasts, to suppress his ceaseless lust for battle. On Marika's orders, Godfrey led the War Against the Giants, putting the Giants to the sword and confining their flame upon the Mountaintops of the Giants. This war marked the birth of the Erdtree, an epoch which would be ruled over by Queen Marika and her Elden Lord. "
    },
    {
      imagem: radagonImage, nome: "Radagon of the Golden Order", video: videoradagon,
      descricao: "Radagon first rose to prominence during the Liurnian Wars, when he joined the heroes' ranks. A great champion with flowing red locks, he arrived in Liurnia at the head of a golden host, where he met Queen Rennala in battle. Although two wars would be fought between them, the First Liurnian War, and the Second, no victor would emerge from either. Radagon eventually repented his territorial aggressions by cleansing himself with Celestial Dew, and swore his love to Rennala. He became husband to the Carian Queen, wedding her at the Church of Vows. Rennala bequeathed him a greatsword, bestowed by Carian queen upon her spouse to honor long-standing tradition. After entering into marriage with Rennala and joining the Carian line, he ordered the Carian magic preceptors to don masks of confidence, to make it clear that all of their matters were to be kept strictly private. "
    },
    {
      imagem: eldenBeastImage, nome: "Elden Beast", video: videoelden,
      descricao: "Long ago, the Greater Will sent a golden star bearing a beast into the Lands Between, which would later became the Elden Ring. It was the vassal beast of the Greater Will and the living incarnation of the concept of Order. Marika, a Numen Empyrean, would became a goddess and the vessel of the Elden Ring and would establish the Golden Order and rule over the Lands Between as the one true god.However, Marika would eventually shatter the Elden Ring, leading to her imprisonment inside the Erdtree."
    },
  ]);

  const Click = (item) => {
    setSelectedImage(item)
    setIsOpen(true)
  }

  return (
    <>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} selectedImage={selectedImage} />
      <AnimatePresence>
        <main>
          <Galeria
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            {boss.map((item) => (
              <ul key={item.nome}>
                <li onClick={() => Click(item)}>
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

