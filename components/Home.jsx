'use client'
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import profileImg from '@/public/images/myImg.jpg';
import bulb from '@/public/images/lightbulb-on.png';
import Image from 'next/image';
import styled from 'styled-components';
import "@/app/css/home.css"

const Home = () => {

  return (
    <>

      <div className='home-text-container'>
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

      <Image src={profileImg} alt='image' className='viji' />

    </>
  );
};

export default Home;

