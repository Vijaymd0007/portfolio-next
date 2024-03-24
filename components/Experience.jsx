import React from 'react'
import "@/app/css/experience.css"
import 'bootstrap/dist/css/bootstrap.min.css';
const Experience = () => {

    return (
        <div className='exp-container row' id="exp-container">
            <h2 className='exp-header'>Education and Experience</h2>
            <div className="wrapper row">
                <div className='info-wrapper col-lg-6'>
                    <h1>B.E</h1>
                    <h3>Rajeev Institute of technology</h3>
                    <h3>2020 - 2022</h3>
                </div>
                <div className='expo-description col-lg-6'>
                    <ul>
                        <li>Designed and developed responsive user interfaces</li>
                        <li>Implemented UI features using HTML, CSS, and JavaScript</li>
                        <li>Collaborated with backend developers to integrate frontend with server-side logic</li>
                    </ul>
                </div>
            </div>

            <div className="wrapper row">
                <div className='expo-wrapper col-lg-6'>
                    <h1>Full Stack</h1>
                    <h3>QProfiles</h3>
                    <h3>2023 jan - 2023 may</h3>
                </div>
                <div className='expo-description col-lg-6'>
                    <ul>
                        <li>Designed and developed responsive user interfaces</li>
                        <li>Implemented UI features using HTML, CSS, and JavaScript</li>
                        <li>Collaborated with backend developers to integrate frontend with server-side logic</li>
                    </ul>
                </div>
            </div>

            <div className="wrapper row">
                <div className='expo-wrapper col-lg-6'>
                    <h1>Intern</h1>
                    <h3>Weberon Solutions Pvt Ltd</h3>
                    <h3>2023 oct - Present</h3>
                </div>
                <div className='expo-description col-lg-6'>
                    <ul>
                        <li>Gained hands-on experience in web development</li>
                        <li>Assisted in testing and debugging code</li>
                        <li>Participated in team meetings and brainstorming sessions</li>
                    </ul>
                </div></div>

        </div>
    )
}

export default Experience