import React from 'react'
import { Container } from './Style-page/style.jsx'
import { ModalTitulo } from './Style-page/style.jsx'
import { Div } from './Style-page/style.jsx'
import { Descricao } from './Style-page/style.jsx'
import { Botao } from './Style-page/style.jsx'
import { Videos } from './Style-page/style.jsx'
export default function ModalBoss({ isOpen, setIsOpen, selectedImage }) {

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
        <Container
          initial={{ opacity: 0, x: -1000 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Videos width="800" height="600" controls autoPlay>
            <source src={selectedImage.video} type="video/mp4" />
          </Videos>
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
          >{selectedImage.nome}</ModalTitulo>
            {selectedImage.descricao}</Descricao>
        </Container>

      </Div>
    </>
  )
}
