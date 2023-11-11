import styled, { createGlobalStyle } from "styled-components";
import { motion } from 'framer-motion'
import { Link } from "react-router-dom";

//CONFIGURAÇÕES GLOBAIS
export const GlobalCSS = createGlobalStyle`
*{
    font-family: 'Cormorant SC', serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  font-family: 'Ringbearer';

  /* Estilização da barra de rolagem */
  ::-webkit-scrollbar {
    width: 10px;
    opacity:0;
    background-color: black;
    
  }

  ::-webkit-scrollbar-track {
    border-radius: 10px;
   
  }
  
  ::-webkit-scrollbar-thumb { 
    border-radius: 10px;
    background-color: black;
    opacity: 0;
    border: solid #AB966F;
  }

  ::-webkit-scrollbar-thumb:hover {
  }
}

`;
//CABEÇALHO
export const LinkStyle = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

 export const Menu = styled.header`
  z-index: 1;
  height: 12vh;
  width: 100%;
  opacity: 0.5;
  border: none;
  display:flex;
  align-items:center;
  justify-content: space-around;
  @media (max-width:600px){
    flex-wrap: wrap;
    height: 20vh;
    background-color: rgb(0,0,0, 0.7);
}
`;
export const Li = styled.li`
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
  @media (max-width:600px){
   color:1px, 1px 1px;

}
`;
export const SideBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
`;
export const Lista = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  gap: 20px;
`;

export const Logo = styled(motion.img)`
width: 65%;
@media (max-width:600px){
    margin-left: 16%;
}
`
 //ESTILO PRINCIPAL DOS CARDS
export const Galeria = styled(motion.section)`
  display: flex;
  height: 80%;
  width: 98%;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 15px;
  @media (max-width: 600px){
      background-color: rgb(0,0,0,0.7);
      width: 100%;
    }
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
  @media (max-width:600){
    
  }
`;

// ESTILO PERSONAGENS

export const ImgChar = styled.img`
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
`
export const FigChar = styled.figure`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 280px;
  height: 400px;
  border: none;
  object-fit: cover;
`;
// ESTILOS MODAL 

export const Container = styled(motion.article)`
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
export const ModalTitulo = styled(motion.p)`
  margin-left: 15%;
  color: aliceblue;
  width: 70%;
  text-align: center;
  font-size: 1.3rem;
  text-decoration: underline #a08002;
`
export const Div = styled(motion.div)`
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
export const Descricao = styled(motion.article)`
color:aliceblue;
text-align: center;
display: flex;
flex-direction: column;
`
export const Botao = styled.button`
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
//RODAPE, MIDIAS
export const Rodape = styled.footer`
  z-index: 1;
  display: flex;
  height: 6vh;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  color: 0.2px #a08002;
  @media (max-width:600px){
    background-color: rgb(0,0,0,0.7);
    display: flex;
    align-items: center;
    height: 12vh;
  }
`;

export const FigLogo = styled.figure`

display: flex;
justify-content: space-evenly;
align-items: center;
width: 10vw;
cursor: pointer;
@media (max-width:600px){
    width: 20vw;
    padding-right: 10px;

}

`