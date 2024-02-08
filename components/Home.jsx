'use client'
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './Home.css';
import profileImg from '@/public/images/Viji.jpg';
import bulb from '@/public/images/lightbulb-on.png';
import Image from 'next/image';

const Home = () => {
  const textControls = useAnimation();
  const imageControls = useAnimation();

  useEffect(() => {
    // Animation for text
    textControls.start({
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    });

    // Animation for image
    imageControls.start({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.2, ease: 'easeOut' },
    });
  }, [textControls, imageControls]);

  return (
    <>
      <div className='Intro-contianer'>
        <div className='left-container'>
          <motion.h1 initial={{ opacity: 0, x: -50 }} animate={textControls}>
            Hi,
          </motion.h1>
          <motion.h1 initial={{ opacity: 0, x: -50 }} animate={textControls}>
            I am Vijay,
          </motion.h1>
          <motion.h1 initial={{ opacity: 0, x: -50 }} animate={textControls}>
            I am a Web Developer
          </motion.h1>
        </div>
        <div className='right-container'>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={imageControls}
          >
            <Image src={profileImg} alt='image' className='viji' />
          </motion.div>
        </div>
        <div className='right-container'>
          <Image src={bulb} alt='image' className='bulb' />

        </div>
      </div>
    </>
  );
};

export default Home;
