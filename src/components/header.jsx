import React, { useState,useRef,useEffect  } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {motion} from 'framer-motion';
import audioFile from "../assets/cutscene/main-soundtrack.mp3";
const LinkStyle = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Cabeçalho = styled.header`
  height: 11vh;
  width: 100%;
  background-color: black;
  opacity: 0.5;
  border: none;
  display:flex;
  align-items:center;
  justify-content: space-around;
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
export default function Inicio() {
  const audio = useRef();
  useEffect(() => {
    audio.current.volume = 0.5;
  }, []);
  
  const playAudio = () =>{
   audio.current.play();
  }
  
  return (
    <>
      <Cabeçalho>
        <SideBar>
          <Lista>
            <Li>
              <LinkStyle to="/">Home</LinkStyle>
            </Li>
            <Li>
              <LinkStyle to="/Gallery">Boss</LinkStyle>
            </Li>
            <Li><LinkStyle to="/Maps">Maps</LinkStyle></Li>
            <Li>Castles</Li>
            <Li>Characters</Li>
          </Lista>
        </SideBar>

  
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
      </Cabeçalho>
    </>
  );
}


