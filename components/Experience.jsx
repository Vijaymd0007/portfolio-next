import React from 'react'
import "@/app/css/experience.css"
const Experience = () => {

    return (
        <div className='exp-container'>
            <h2 className='exp-header'>Education and Experience</h2>
            <div className='line'>|</div>
            <div className='wrapper'>
                <h1>B.E</h1>
                <h3>Rajeev Institute of technology</h3>
                <h3>2022</h3>
            </div>
            <div className='wrapper'>
                <h1>Full Stack</h1>
                <h3>QProfiles</h3>
                <h3>2023 jan - 2023 may</h3>
            </div>
            <div className='wrapper'>
                <h1>Intern</h1>
                <h3>Weberon Solutions Pvt Ltd</h3>
                <h3>2023 oct - Present</h3>
            </div>
        </div>
    )
}

export default Experience