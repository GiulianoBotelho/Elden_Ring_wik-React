import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
const Artigo = styled(motion.article)`
text-align: center;
border-radius:6px;
background-color: rgb(0,0,0, 0.5);
width: 80%;
height: 60%;
overflow: auto;
border: solid 1px #a08002;
box-shadow: 1px 1px 1px 1px;
display: flex;
justify-content: center;
align-items: center;
`
const ModalTitulo = styled(motion.p)`
margin-left: 15%;
  color: aliceblue;
  width: 70%;
  text-align: center;
  font-size: 1.3rem;
  text-decoration: underline #a08002;
`
const Div = styled(motion.div)`
   z-index: 1;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Descricao = styled(motion.p)`
color:aliceblue;
text-align: center;
display: flex;
flex-direction: column;
`

const Botao = styled.button`
margin-left: 76%;
width: 4vw;
background-color: #a08002;
transition: 500ms;
cursor: pointer;
&:hover{
  background-color: #dcb106;
  transition: 500ms;
}
`
export default function Modal({ isOpen, setIsOpen, selectedImage }) {

  if (!isOpen) {
    return null
  }

  return (
    <>
      <Div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Botao onClick={() => setIsOpen(false)}>Fechar</Botao>
        <Artigo
        initial={{ opacity: 0, x:-1000 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        
        >
          <video width="800" height="600" controls autoPlay>
            <source src={selectedImage.video} type="video/mp4" />
          </video>
          <Descricao

          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:2, delay:2}}
          
          ><ModalTitulo initial={{opacity:0.1, scale:1.1}}
          animate={{opacity:1, }}
          transition={{
            repeat:Infinity,
            repeatType:'reverse',
            duration:3 }}
  
          >{selectedImage.nome}</ModalTitulo>
            {selectedImage.descricao}</Descricao>
        </Artigo>
        
      </Div>
    </>
  )
}
