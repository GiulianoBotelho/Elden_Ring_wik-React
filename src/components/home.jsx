import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components';
import varre from '../assets/background/varre.jpg'
import melina from '../assets/background/melina.jpg'
import torrent from '../assets/background/torrent.jpg'
export const Intro = styled(motion.section)`
  font-size: 1.5rem;
  width: 100%;
  background-color: rgb(0,0,0 0.8);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  font-family: 'Cormorant SC', serif;
 
  @media (max-width:600px){
    flex-wrap: wrap;
    width: 100%;
    height: 50%;
    background-color: rgb(0,0,0,0.7);
  }

`;

export const TitleHome = styled(motion.h1)`
  color: #a08002;
  background-color: rgb(0,0,0, 0.6);
  box-shadow: 1px, 1px, 1px, 1px;
  width: 95%;
  text-align: center;
  font-size: 3rem;
  opacity: 1;
  cursor: pointer;
`
export const P = styled(motion.p)`
text-decoration: underline #a08002;
color:whitesmoke;
font-size:1.5rem;
text-align: center;
width: 50%;
margin-top: 20px;
@media (max-width:600px){
    width: 90%;
}
`

export const CorTitulo = styled.article`
  width: 100%;
  text-align: center;
  @media (max-width:500px){
    width: 80%;
  }
`
const SectionVideo = styled.section`
display: flex;
align-items: center;
flex-wrap: wrap;
justify-content: center;

`

export const Video = styled(motion.iframe)`
margin-top: 30px;
width: 32vw;
height: 30vh;
border: solid 1px #a08002;

@media (max-width:600px){
    width: 70%;
    height: 30vh;
}
`

const Titulos = styled(motion.h2)`
font-size: 3rem;
color: #a08002;
@media (max-width:500px){
    width: 80%;
  }
`
const FundoTitulo = styled.div`
width: 100%;
background-color: rgb(0,0,0, 0.5);
display: flex;
justify-content: center;
text-align: center;
`

const HomeImg = styled(motion.img)`
 width:70vw;
 height: 70vh;
 border-radius: 10px;
 border: solid #a08002;
 @media (max-width:500px){
    width: 90%;
    height: 20%;
 }
`
const FigHomeImg = styled.figure`
display: flex;
align-items: center;
justify-content: center;
`
export default function Home() {
    return (
        <>

            <Intro
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >

                <CorTitulo>
                    <TitleHome
                       initial={{ opacity: 0.1, scale: 1.1 }}
                       animate={{ opacity: 1, }}
                       transition={{
                         repeat: Infinity,
                         repeatType: 'reverse',
                         duration: 3 }}
                    >Welcome Tarnished</TitleHome>
                </CorTitulo>
                <FundoTitulo>
                <P
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    Elden Ring takes place in the Lands Between, a fictional realm over which several demigods rule.
                    It was previously ruled over by the immortal Queen Marika, who acted as keeper of the Elden Ring,
                    a powerful force that manifested itself as the physical concept of order. When Marika shattered the Elden Ring and disappeared,
                    her demigod children began fighting over pieces of the Ring in an event called The Shattering.
                    Each demigod has a shard of the Ring called a Great Rune, which corrupts them with power. In the game,
                    the player character is a Tarnished, one of a group of exiles from the Lands Between who are summoned back after the Shattering.
                    The player must traverse the realm to repair the Elden Ring and become the Elden Lord.
                </P>
                </FundoTitulo>
                <SectionVideo>
                <Video
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    width="1000"
                    height="600"
                    src="https://www.youtube.com/embed/e5wwSxl0atc?si=PhKPyLwZGqx2cmps"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen>
                </Video>
                <Video
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 1.8 }}
                    width="1000"
                    height="600"
                    src="https://www.youtube.com/embed/E3Huy2cdih0?si=FckDgYH10SpiBbm8"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen>
                </Video>

                </SectionVideo>
                <FundoTitulo>
                <Titulos
                 initial={{ opacity: 0.1, scale: 1.1 }}
                 animate={{ opacity: 1, }}
                 transition={{
                   repeat: Infinity,
                   repeatType: 'reverse',
                   duration: 3 }}
                >Entering the World</Titulos>
                </FundoTitulo>
                <FundoTitulo>
                    <P>Elden Ring is an open-world action RPG developed by From Software. As a Tarnished, it’s your destiny to explore the Lands Between and become an Elden Lord.
                    
At the start of the game, you awaken in a tomb in the Lands Between, a place ruled by demigods following the shattering of the Elden Ring, the source of the Erdtree. The barrier between life and death no longer functions and people can no longer die.</P>
</FundoTitulo>
                <FigHomeImg>
                 <HomeImg  initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 1.5 }}
                     src={varre} alt="npc varre" />
                </FigHomeImg>
               <FundoTitulo>
                <P>After emerging in the initial area of Limgrave, you encounter Varré near the first Site of Grace. He informs you that your first destination should be Castle Stormveil. The light emanating from the Site of Grace points in the direction you should follow.

Resist the temptation to head straight for the castle. While this direction offers some essential upgrades, you’ll want to delay arriving at the castle for a few hours. Instead, take the time to understand how things work and strengthen your character.</P>
</FundoTitulo>
                <FundoTitulo>
                <Titulos  initial={{ opacity: 0.1, scale: 1.1 }}
                       animate={{ opacity: 1, }}
                       transition={{
                         repeat: Infinity,
                         repeatType: 'reverse',
                         duration: 3 }}
                >Getting to know Melina</Titulos>
                </FundoTitulo>
                <FigHomeImg>
                    <HomeImg  initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 1.5 }} 
                    src={melina} alt="npc melina e tarnished" />
                </FigHomeImg>
                <FundoTitulo>
                <P>
                Shortly after, you encounter Melina, who visits you near the Ruins of Gatefront. She allows you to level up. This is also the point where you obtain the horse, Torrent, which aids you in exploring the region in a faster and easier manner.
                </P>
                </FundoTitulo>
                <FundoTitulo>
                <Titulos  initial={{ opacity: 0.1, scale: 1.1 }}
                       animate={{ opacity: 1, }}
                       transition={{
                         repeat: Infinity,
                         repeatType: 'reverse',
                         duration: 3 }}
                >Time to explore!</Titulos>
                </FundoTitulo>
                <FigHomeImg>
                    <HomeImg  initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 1.5 }}
                     src={torrent} alt="cavalo torrent" />
                </FigHomeImg>
                <FundoTitulo>
                <P>
                One of the biggest new features in Elden Ring is the inclusion of Torrent, a horse that the player can use for combat and exploration. Torrent proves to be a handy way to negotiate the challenging terrain of the Lands Between. The verticality of the map is facilitated by Torrent’s ability to double jump, and he can even launch himself high into the air by jumping on specific points scattered across the land. Riding Torrent greatly speeds up exploration and can lead players to normally inaccessible locations with its vertically oriented set of moves.
                </P>
                </FundoTitulo>
            </Intro>
        </>
    )
}
