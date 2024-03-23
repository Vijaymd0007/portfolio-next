'use client'
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import profileImg from '@/public/images/Viji.jpg';
import bulb from '@/public/images/lightbulb-on.png';
import Image from 'next/image';
import styled from 'styled-components';

const Home = () => {

  return (
    <>
      <Container>
        <div className="Intro-contianer">
          <div className='left-container'>
            <h1 >
              Hi,
            </h1>
            <h1 >
              I am Vijay,
            </h1>
            <h1 >
              I am a Web Developer
            </h1>
          </div>
          <div className='right-container'>

            <Image src={profileImg} alt='image' className='viji' />

          </div>

        </div>
      </Container>
    </>
  );
};

export default Home;

const Container = styled.div`
  .Intro-contianer {
    font-size: 30px;
    padding-left: 10%;
    margin-top: 10%;
    display: flex;
    flex-direction: row;
    gap: 10%;
    height: 80vh;
}

.left-container {
    text-wrap: nowrap;
}

.right-container {
    margin-right: 10%;
}

.dark-mode {

    background-color: black;
    color: white;
}



.viji {
    width: 400px;
    height: 500px;
    mix-blend-mode: multiply;

}

.bulb {
    width: 50px;
    height: 50px;
}

@media only screen and (max-width:630px) {
    .Intro-contianer {
        font-size: 18px;
        padding-left: 5%;
        margin-top: 30%;
        flex-direction: column;
    }

    .viji {
        width: 300px;
        height: 400px;
    }

}
`