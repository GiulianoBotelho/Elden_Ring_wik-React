import React from 'react'
import { Div } from './Style-page/style.jsx'
import { Descricao } from './Style-page/style.jsx'
import { ModalTitulo } from './Style-page/style.jsx'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const CharModal = styled.img`
width: 70%;
height: 100%;
cursor: pointer;
    border-radius: 50px;
    &:hover{
      border: solid 1px #a08002;
    transition: 200ms;
    }
    @media (max-width:500px){
        margin-top: 30vh;
     border-radius: 50px;

    }
`
const Botao = styled.button`
margin-left: 56%;
width: 4vw;
background-color: #a08002;
transition: 500ms;
cursor: pointer;
@media (max-width:500px){
  width: 20%;
  margin-left: auto;
}
&:hover{
  background-color: #dcb106;
  transition: 500ms;
}`

const Container = styled(motion.article)`
text-align: center;
border-radius:6px;
background-color: rgb(0,0,0, 0.5);
width: 60%;
height: 60%;
overflow: auto;
border: solid 1px #a08002;
box-shadow: 1px 1px 1px 1px;
display: flex;
justify-content: center;
align-items: center;
@media (max-width: 500px){
  flex-direction: column;
  width: 100%;
  height: 80%;
}

`
export default function ModalChar({ isOpen, setIsOpen, selectedImage }) {
    if (!isOpen) {
        return null
    }

    return (
        <>
            <Div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            > <Botao onClick={() => setIsOpen(false)}>Fechar</Botao>

                <Container
                    initial={{ opacity: 0, x: -1000 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                ><CharModal src={selectedImage.stats} />
                    <Descricao
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2, delay: 2 }}
                    ><ModalTitulo initial={{ opacity: 0.1, scale: 1.1 }}
                        animate={{ opacity: 1, }}
                        transition={{
                            repeat: Infinity,
                            repeatType: 'reverse',
                            duration: 3
                        }}
                    >
                            {selectedImage.nome}</ModalTitulo>
                        {selectedImage.descricao}</Descricao>
                </Container>

            </Div>
        </>
    )
}
