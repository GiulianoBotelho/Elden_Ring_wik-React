import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components';
export const Intro = styled(motion.section)`
  font-size: 1.5rem;
  width: 100%;
  background-color: rgb(0,0,0 0.8);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  @media (max-width:600px){
    flex-wrap: wrap;
    width: 100%;
    height: 50%;
    background-color: rgb(0,0,0,0.7);
  }

`;

export const TitleHome = styled(motion.h1)`
  color: aliceblue;
  border: solid 2px #AB966F; 
  background-color: rgb(0,0,0, 1);
  box-shadow: 1px, 1px, 1px, 1px;
  width: 99%;
  text-align: center;
  opacity: 1;
  cursor: pointer;
`
export const P = styled(motion.p)`
color:aliceblue;
font-size:1.2rem;
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
`

export const Video = styled(motion.iframe)`
margin-top: 30px;
width: 32vw;
height: 30vh;

@media (max-width:600px){
    width: 70%;
    height: 30vh;
}
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
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >Welcome Tarnished</TitleHome>
                </CorTitulo>

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
            </Intro>
        </>
    )
}
