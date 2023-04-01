"use client"
import React from 'react'
import styled from "./projects.module.css"
import image from "./images/setting.png"

const PROJECT_PAGE = () => {
    return (
        <div className={styled.main} onClick={() => console.log(image)}>
            <img src={image.src} />
        </div>
    )
}

export default PROJECT_PAGE