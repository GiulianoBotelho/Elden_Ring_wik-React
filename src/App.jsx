import { useState } from "react";
import Gallery from "./components/gallery.jsx";
import Background from "./assets/background/img2.jpg";
import styled, { createGlobalStyle } from "styled-components";
import Footer from "./components/footer.jsx";
import Inicio from "./components/header.jsx";
import { BrowserRouter, Router, Route, Routes, Link } from "react-router-dom";
import Maps from './components/maps.jsx'
import RingbearerFont from './assets/fonts/RingbearerMedium.woff';
import Boss from './components/gallery.jsx'
import Mainboss from "./components/mainboss.jsx";
import Castles from "./components/castles.jsx";
import Characters from "./components/characters.jsx";
import Home from "./components/home.jsx";
const GlobalCSS = createGlobalStyle`
*{
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
    border: solid #916603;
  }

  ::-webkit-scrollbar-thumb:hover {
  }
}

  @font-face {
    font-family: 'Ringbearer';
    src: url(${RingbearerFont}) format('woff');
    font-weight: normal;
    font-style: normal;
  }

`;

const BackgroundMain = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${Background});
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -1;
`;




function App() {
  return (
    <>
      <BackgroundMain />
      
        <GlobalCSS />
      <BrowserRouter>
        <Inicio />
        
        {/* CABEÇALHO */}

        {/* PRINCIPAL + CONTEUDO + ROTAS */}
        
        <Routes>
        <Route path="/Home" element={<Home />} />
         <Route path="/Maps" element={<Maps/>} />
         <Route path="/Gallery" element={<Boss/>}/>
         <Route path="/MainBoss" element={<Mainboss/>}/>
         <Route path="/Castles" element={<Castles/>}/>
         <Route path="/Char" element={<Characters/>}/>
       
        </Routes>
      </BrowserRouter>
      {/* RODAPÉ */}
      {/* <Footer /> */}
      <Footer/>
    </>
  );
}

export default App;
