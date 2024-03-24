import React from 'react'
import "@/app/css/about.css"

const About = () => {
    return (
        <div className="about-container" id="about-container">

            <h1 className='about-header'>About</h1>
            <div className='about-field-container'>
                <p className='about-fields'>Name: Vijay M D</p>
                <p className='about-fields' >Email:<span style={{ color: "#ffd100" }}>vijay0007@gmail.com</span> </p>
                <p className='about-fields'>Phone: +91 9980123984</p>
                <p className='about-fields'>Date of Birth: 17 February 2001</p>
                <p className='about-fields'>Address: Hassan, Karnataka</p>
                <p className='about-fields'>Nationality: Indian</p>
            </div>
        </div>


    )
}

export default About