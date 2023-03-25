"use client"
import { createContext, useEffect, useRef, useState } from "react";
import autoAnimate from '@formkit/auto-animate'
const DataContext = createContext();



const DataProvider = ({ children }) => {

    const [colorData, setColorData] = useState("#54c4fa");
    const [emojiPickerData, setEmojiPickerData] = useState(null);
    const [inputData, setInputData] = useState("");
    const [allDATA, setAllDATA] = useState([]);
    const parent = useRef(null)

    const objectAllData =
    {
        color: colorData,
        emoji: emojiPickerData,
        input: inputData,
        id: Math.floor(Math.random() * 231432531) - allDATA.length,
    }

    useEffect(() => {
        parent.current && autoAnimate(parent.current)
    }, [parent])



    const data = {
        colorData,
        setColorData,
        setInputData,
        inputData,
        setEmojiPickerData,
        objectAllData,
        allDATA,
        setAllDATA
    }



    return <DataContext.Provider ref={parent} value={data}>
        {children}
    </DataContext.Provider>

}

export { DataContext, createContext, DataProvider }
