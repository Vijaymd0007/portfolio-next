import React from "react";
import "@/app/css/skills.css"
import { motion } from 'framer-motion';

export default function Skills() {


    return (
        <div className="skills-container" id="skills-container">
            <h2 className="skills-header">Technologies I can work on </h2>
            <h6 className="skills-description">As a MERN stack developer, I specialize in crafting full-stack web applications using MongoDB, Express.js, React, and Node.js. With expertise in both frontend and backend technologies, I seamlessly integrate user interfaces with server-side functionalities to deliver dynamic and engaging digital experiences. Leveraging my proficiency in JavaScript and its associated frameworks</h6>
            <div className="skills-img-container  ">
                <motion.img src="/images/html-5.png" className="card p-3 bg-dark" whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }} />
                <motion.img src="/images/css-3.png" className=" card p-3 bg-dark " whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }} />
                <motion.img src="/images/js.png" className=" card p-3 bg-dark" whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }} />
                <motion.img src="/images/react.png" className=" card p-3 bg-dark" whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }} />
                <motion.img src="/images/next-js.svg" className=" card p-3 bg-dark" whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }} />
                <motion.img src="/images/nodejs.png" className=" card p-3 bg-dark" whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }} />
                <motion.img src="/images/express.png" className=" card p-3 bg-dark" whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }} />
                <motion.img src="/images/mongodb.png" className=" card p-3 bg-dark" whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }} />
                <motion.img src="/images/mysql.png" className=" card p-3 bg-dark" whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }} />
                <motion.img src="/images/jquery.png" className=" card p-3 bg-dark" whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }} />
                <motion.img src="/images/github.png" className=" card p-3 bg-dark" whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }} />

            </div>
        </div>
    );
}
