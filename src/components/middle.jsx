import React from "react";
import styled from "styled-components";
import { motion, reverseEasing } from "framer-motion";
import audioFile from "../assets/cutscene/main-soundtrack.mp3"
import {useState, useRef, useEffect} from 'react';

const Container = styled.main`
  height: 80vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Intro = styled(motion.section)`
  border: solid black;
  box-shadow: 1px 1px 1px 1px;
  background-color: rgb(0, 0, 0, 0.6);
  font-size: 2rem;
  color: #a08002;
  width: 50%;
  
`;
const TitleHome = styled.h1`
  color: aliceblue;
  box-shadow: 1px, 1px, 1px, 1px;
  width: 100%;
  height:50%;
  border: solid black 2px;
  background-color: rgb(0, 0, 26, 0.5);
`;
const ButtonTrailer = styled(motion.button)`
width:6vw;
height:4vh;
background-color: rgb(173, 110, 0);
border-radius: 20px;
font-size:1rem;
font-weight:500;
cursor:pointer;
border:none;
opacity:1;
&:active{
  scale:1.1;
  background-color:#a08002;
  box-shadow:
    0 0 5px rgb(173, 110, 0),
    0 0 6px rgb(173, 110, 0),
    0 0 10px white;
    transition: 100ms;

}
`


export default function Middle() {
  const audio = useRef();
  useEffect(() => {
    audio.current.volume = 0.5;
  }, []);
  
  const playAudio = () =>{
   audio.current.play();
  }
  
 
  return (
    <>
      <Container>
        <Intro
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <TitleHome>Welcome</TitleHome>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
            minus recusandae tempora facilis in repellendus, ipsa vero
            consequatur placeat velit non libero eligendi, delectus dolor
            ratione quam? Provident, cum corporis.
          </p>
          
          <ButtonTrailer
          onClick={playAudio}
          initial={{opacity:0.8, scale:1}}
          animate={{opacity:1, scale:1.08}}
          transition={{
            repeat:Infinity,
            repeatType:'reverse',
            duration:1
          }}
          
          >Play Intro</ButtonTrailer>
            <audio ref={audio} src={audioFile} loop />
        </Intro>
      </Container>
    </>
  );
}
