import React from "react";
import logo from '../assets/background/ER.png'
import { LinkStyle } from "./Style-page/style.jsx";
import { Menu } from "./Style-page/style.jsx";
import { Li } from "./Style-page/style.jsx";
import { SideBar } from "./Style-page/style.jsx";
import { Lista } from "./Style-page/style.jsx";
import { Logo } from "./Style-page/style.jsx";


export default function Inicio() {

  return (
    <>
      <Menu>
        <figure>
          <Logo
            initial={{ opacity: 0.6, scale: 1 }}
            animate={{ opacity: 1 }}
            transition={{
              repeat: Infinity,
              repeatType: 'reverse',
              duration: 3, delay: 5
            }}
            src={logo} alt="Logo escrito Elden Ring" />
        </figure>
        <SideBar>
          <Lista>
            <Li>
              <LinkStyle to="/">Home</LinkStyle>
            </Li>
            <Li>
              <LinkStyle to="/Gallery">Boss</LinkStyle>
            </Li>
            <Li><LinkStyle to="/Maps">Maps</LinkStyle></Li>
            <Li><LinkStyle to="/Castles">Castles</LinkStyle></Li>
            <Li><LinkStyle to="/Char">Characters</LinkStyle></Li>
          </Lista>
        </SideBar>



      </Menu>
    </>
  );
}


