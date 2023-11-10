import Background from "./assets/background/img2.jpg";
import styled, { createGlobalStyle } from "styled-components";
import Footer from "./components/footer.jsx";
import Inicio from "./components/header.jsx";
import { BrowserRouter, Router, Route, Routes, Link } from "react-router-dom";
import Maps from './components/maps.jsx'
import Boss from './components/boss.jsx'
import Castles from "./components/castles.jsx";
import Characters from "./components/characters.jsx";
import Home from "./components/home.jsx";
import { GlobalCSS } from "./components/Style-page/style.jsx";

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
  @media (max-width:600px){
      background-position: center;
      opacity: 0.9;
}

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
          <Route path="/Maps" element={<Maps />} />
          <Route path="/Gallery" element={<Boss />} />
          <Route path="/Castles" element={<Castles />} />
          <Route path="/Char" element={<Characters />} />

        </Routes>
       
      </BrowserRouter>
      
      {/* RODAPÉ */}
      {/* <Footer /> */}
      <Footer />
    </>
  );
}

export default App;
