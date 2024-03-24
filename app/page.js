'use client'
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import Home from "@/components/Home";
import About from "@/components/About";
import styled from "styled-components";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "@/app/global.css"

const Index = () => {
 
  return (
    <>
    <Container>
    <div >
      <Navbar />
      <Home />
      <About/> 
      <Projects/>  
       <Skills/>
       <Experience/>
        
      <Contact/>
       
     
   </div>
   </Container> 
   </>
  );
};

export default Index;

const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Croissant+One&family=Protest+Riot&display=swap");

* {
    font-family: 'Croissant One', serif;
    font-family: 'Protest Riot', sans-serif;
 
}

`;