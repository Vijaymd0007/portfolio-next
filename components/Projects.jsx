import React, { useState } from 'react'
import styled from 'styled-components'
import projectDetails from "../configs/project.json"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../app/css/project.css"

const Projects = () => {
    const [loadMore, setLoadMore] = useState(false)
    const handleLoadMore = () => {
        setLoadMore(true)
    }
    return (

        <div className='pro-container'>
            <h2 className='pro-header'>Personal Project I have worked on </h2>
            < div key={projectDetails[0].id} className='card-container row '>
                <div className='img-container col-lg-6 col-sm-12'>
                    <img src={projectDetails[0].imgSrc} className='project-image' /></div>
                <div className='projectDescription col-lg-6 col-sm-12'><p className="legend">{projectDetails[0].name}</p>{projectDetails[0].discription}</div>
            </div>

            < div key={projectDetails[1].id} className='card-container row'>
                <div className='img-container col-lg-6 col-sm-12'>
                    <img src={projectDetails[1].imgSrc} className='project-image' /></div>
                <div className='projectDescription col-lg-6 col-sm-12'><p className="legend">{projectDetails[1].name}</p>{projectDetails[1].discription}</div>
            </div>



            {!loadMore && <div className='btn btn-dark pro-btn' onClick={handleLoadMore}>
                Load More
            </div>}

            {loadMore
                && <>
                    < div key={projectDetails[2].id} className='card-container row'>
                        <div className='img-container col-lg-6 col-sm-12'>
                            <img src={projectDetails[2].imgSrc} className='project-image' /></div>
                        <div className='projectDescription col-lg-6 col-sm-12'><p className="legend">{projectDetails[2].name}</p>{projectDetails[2].discription}</div>
                    </div>

                    < div key={projectDetails[3].id} className='card-container row'>
                        <div className='img-container col-lg-6 col-sm-12'>
                            <img src={projectDetails[3].imgSrc} className='project-image' /></div>
                        <div className='projectDescription col-lg-6 col-sm-12'><p className="legend">{projectDetails[3].name}</p>{projectDetails[3].discription}</div>
                    </div>

                    < div key={projectDetails[4].id} className='card-container row'>
                        <div className='img-container col-lg-6 col-sm-12'>
                            <img src={projectDetails[4].imgSrc} className='project-image' /></div>
                        <div className='projectDescription col-lg-6 col-sm-12'><p className="legend">{projectDetails[4].name}</p>{projectDetails[4].discription}</div>
                    </div>

                    < div key={projectDetails[5].id} className='card-container row'>
                        <div className='img-container col-lg-6 col-sm-12'>
                            <img src={projectDetails[5].imgSrc} className='project-image' /></div>
                        <div className='projectDescription col-lg-6 col-sm-12'><p className="legend">{projectDetails[5].name}</p>{projectDetails[5].discription}</div>
                    </div></>}

        </div>

    )
}

export default Projects



