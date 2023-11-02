import { useState } from "react";
import Gallery from "./components/gallery.jsx";
import Background from "./assets/background/img2.jpg";
import styled, { createGlobalStyle } from "styled-components";
import Footer from "./components/footer.jsx";
import Inicio from "./components/header.jsx";
import { BrowserRouter, Router, Route, Routes, Link } from "react-router-dom";
import Middle from "./components/middle.jsx";
import Maps from './components/maps.jsx'
const GlobalCSS = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;


  /* Estilização da barra de rolagem */
  ::-webkit-scrollbar {
    width: 10px;
    opacity:0;
  }

  ::-webkit-scrollbar-track {
    border-radius: 10px;
    opacity:0;
  }
  
  ::-webkit-scrollbar-thumb {
    background: #916603; 
    border-radius: 10px;
    opacity:0;
  }

  ::-webkit-scrollbar-thumb:hover {
   
    opacity:0;
  }
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
        <main>
        <Routes>
       
          <Route path="/" element={<Middle />} />
          <Route path="/Maps" element={<Maps/>} />
          <Route path="/Gallery" element={<Gallery />} />
          
        </Routes>
        </main>
      </BrowserRouter>

      {/* RODAPÉ */}
      <Footer />
    </>
  );
}

export default App;
