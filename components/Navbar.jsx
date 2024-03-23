"use client"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";

const Navbar = () => {
  const [show, setShow] = useState(false)
  const handleClick = () => {
    console.log("clicked")
    setShow(!show)
  }
  return (
    <>
      <Container>
        <div className="container" >
          <div onClick={handleClick}><Image src="/images/menu.gif" width={100} height={100} className="menuBar" alt="Example GIF" /></div>
          <div className={show ? "displayMenu" : "hideMenu"}>
            <div className="navlist" >portfolio</div>
            <div className="navlist">projects</div>
            <div className="navlist">skills</div>
            <div className="navlist"> contact</div>
          </div>

        </div>
      </Container>
    </>
  );
};

export default Navbar;

const Container = styled.div`
  .displayMenu {
    display: flex;
    justify-content: center;
    flex-direction: row;
    /* margin:20px; */
    gap: 10%;
}

.hideMenu {
    display: block;
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 10%;
}

.container div {
    font-family: 'Croissant One', serif;
    font-family: 'Protest Riot', sans-serif;
    font-size: 35px;
}

.menuBar {
    display: none;
    width: 40px;
    height: 40px;
}

@media only screen and (max-width:630px) {
    .displayMenu {
        flex-direction: column;
        position: fixed;
        width: 100%;
        background-color: white;
        color: black;
        z-index: 1;
        padding-bottom: 30px;
        margin-top: 35px;
    }



    .navlist:first-child {
        margin-top: 70px;
    }

    .navlist {
        margin-top: 50px;
        padding-left: 30%;
    }

    .menuBar {
        display: block;
        float: right;
        position: fixed;
        top: 30px;
        right: 30px;
    }

    .hideMenu {
        display: none;
    }
}
`
