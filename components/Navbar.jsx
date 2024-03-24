"use client"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image";
import { useState } from "react";
import "@/app/css/navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [clicked, setClicked] = useState(false)
  const handleMenuClick = () => {
    console.log("clicked")
    setClicked(!clicked)
  }
  return (
    <>

      <div className={clicked ? "nav-container" : "nav-container hideMenu-container"} >
        <div onClick={handleMenuClick} className="menu-btn"> <FontAwesomeIcon icon={faBars} ></FontAwesomeIcon></div>
        <div className={clicked ? "navlist-container" : "navlist-container hideMenu"}>
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


