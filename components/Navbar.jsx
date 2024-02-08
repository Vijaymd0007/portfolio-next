"use client"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react";

const Navbar = () => {
  const [show,setShow]=useState(false)
  const handleClick=()=>{
    console.log("clicked")
    setShow(!show)
  }
  return (
    <>
    <div className="container" >   
    <div onClick={handleClick}><img src="images/menu.gif" className="menuBar" alt="Example GIF" /></div>
      <span className={show?"displayMenu":"hideMenu"}>
 
        <div className="navlist">portfolio</div>
        <div className="navlist">projects</div>
        <div className="navlist">skills</div>
        <div className="navlist"> contact</div>
    </span>
      
      </div>
    </>
  );
};

export default Navbar;
