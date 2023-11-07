import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
const Artigo = styled(motion.article)`
border-radius:6px;
background-color: rgb(0,0,0, 0.5);
width: 70%;
height: 60%;
overflow: auto;
border: solid 1px #a08002;
box-shadow: 1px 1px 1px 1px;
display: flex;
flex-direction: column;
align-items: center;
`
const ModalTitulo = styled(motion.h1)`
  color: aliceblue;
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

const Descricao = styled.p`
color:aliceblue;
text-align: center;
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
        <ModalTitulo initial={{opacity:0.1, scale:1.1}}
        animate={{opacity:1, }}
        transition={{
          repeat:Infinity,
          repeatType:'reverse',
          duration:3 }}

        >{selectedImage.nome}</ModalTitulo>
        <Artigo
        initial={{ opacity: 0, x:-1000 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        
        >
          <video width="800" height="600" controls autoPlay>
            <source src={selectedImage.video} type="video/mp4" />
          </video>
          <Descricao>{selectedImage.descricao}</Descricao>
        </Artigo>
        <button onClick={() => setIsOpen(false)}>Fechar</button>
      </Div>
    </>
  )
}
