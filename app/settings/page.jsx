"use client"
import React from 'react'
import image from "./images/setting.png"
import styled from "./settings.module.css"

const Settings = () => {



    return (
        <div className={styled.main} onClick={() => console.log(image)}>
            <img src={image.src} />
        </div>
    )
}

export default Settings