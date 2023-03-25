import React, { useContext, useEffect, useState } from 'react'
import styled from "./addtaskbutton.module.css"
import { DataContext } from '../Context/Context'
const ColorPicker = () => {

    const colorsData = [
        {
            color: "#54c4fa"
        },
        {
            color: "#fc8d8c"
        },
        {
            color: "#62e163"
        },
        {
            color: "#c89cff"
        },
        {
            color: "#e74c3c"
        },
        {
            color: "#ef5777"
        },
        {
            color: "#f9d600"
        },
        {
            color: "#f88f33"
        }
    ]
    const [defaultColor, setDefaultColor] = useState(colorsData[0].color)

    const { setColorData } = useContext(DataContext)

    const colorSelected = (selectedColor) => {
        setDefaultColor(selectedColor)
    }

    const newColor = colorsData.find((item) => item.color === defaultColor).color

    useEffect(() => (
        setColorData(newColor)
    ), [newColor])


    return (
        <div className={styled.colorPickerDiv}>
            <h5>RENK</h5>
            <div className={styled.colors}>
                {
                    colorsData.map((item, idx) => (
                        <span style={{
                            background: item.color,
                            width: 32,
                            height: 32,
                            boxShadow:
                                `${item.color === newColor ? newColor : "#212429"} 0px 5px 15px -3px`
                        }} key={idx} className={styled.imageColor}
                            onClick={() => colorSelected(item.color)}>
                        </span>
                    ))
                }
            </div>
        </div>
    )
}

export default ColorPicker