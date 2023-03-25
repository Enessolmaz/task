import React, { useContext, useEffect, useState } from 'react'
import styled from "./addtaskbutton.module.css"
import { BsFillEmojiSmileFill } from "react-icons/bs"
import { DataContext } from '../Context/Context'

const PopUpInput = () => {

    const { setInputData } = useContext(DataContext)




    return (
        <div className={styled.popUpInput}>
            <h5>BASLIK</h5>
            <input onChange={(e) => setInputData(e.target.value)} placeholder="Ex Acme or Acme Marketing" type="text" />
            <span><BsFillEmojiSmileFill fill="#646a75" size={16} /></span>
        </div>
    )
}

export default PopUpInput