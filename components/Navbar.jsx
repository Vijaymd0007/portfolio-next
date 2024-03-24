"use client"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image";
import { useState } from "react";
import "@/app/css/navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {

  return (
    <>

      <div className="nav-container" >
        <div className="navlist-container">
          <div className="navlist"><a href="#">Portfolio</a></div>
          <div className="navlist"><a href="#pro-container">Projects</a></div>
          <div className="navlist"><a href="#skills-container">Skills</a></div>
          <div className="navlist"><a href="#contact-container">Contact</a></div>
          <div className="navlist"><a href="#about-container">About</a></div>
          <div className="navlist"><a href="#exp-container">Experience</a></div>
          <div className="navlist"><a href="#resume-container">Resume</a></div>
        </div>

      </div >

    </>
  );
};

export default Navbar;


