"use client"
import React from 'react'
import styled from "./card.module.css"


const Main = () => {


  return (
    <div className={styled.card}>

      Yarın date picker yap
      <br />
      Atama ve Etiket kısımlarını yap
      <br />
      Local Storage kısmını yap

      <h3>Proje NextJS'i anlamak için geliştirilmiştir.</h3>
      <br />
      Projede Kullanılan teknolojiler.
      <div className={styled.technologies}>
        <span className={styled.nextjs}>
          NextJS
        </span>
        <span className={styled.Toastify}>
          React Toastify
        </span>
        <span className={styled.picker}>
          React Emoji-picker
        </span>
        <span className={styled.Material}>
          React Material-UI
        </span>
        <span className={styled.Components}>
          Styled Components
        </span>
        <span className={styled.Context}>
          React Context
        </span>
        <span className={styled.animate}>
          Auto-animate
        </span>
      </div>
    </div>
  )
}

export default Main