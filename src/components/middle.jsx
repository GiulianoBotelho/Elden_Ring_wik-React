import React from "react";
import styled from "styled-components";
import { motion, reverseEasing } from "framer-motion";

const Container = styled.main`
  height: 80vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Intro = styled(motion.section)`
  border: solid black;
  box-shadow: 1px 1px 1px 1px;
  background-color: rgb(0, 0, 0, 0.6);
  font-size: 2rem;
  color: #a08002;
  width: 50%;
`;
const TitleHome = styled.h1`
  color: aliceblue;
  box-shadow: 1px, 1px, 1px, 1px;
  width: 100%;
  height:50%;
  border: solid black 2px;
  background-color: rgb(0, 0, 26, 0.5);
`;



export default function Middle() {
 
  return (
    <>
      <Container>
        <Intro
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <TitleHome>Welcome</TitleHome>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
            minus recusandae tempora facilis in repellendus, ipsa vero
            consequatur placeat velit non libero eligendi, delectus dolor
            ratione quam? Provident, cum corporis.
          </p>
          
       
        </Intro>
      </Container>
    </>
  );
}
