"use client"
import { createContext, useEffect, useRef, useState } from "react";
import autoAnimate from '@formkit/auto-animate'
import image1 from "../../app/tasks/[...id]/images/wp1.jpg"
import image2 from "../../app/tasks/[...id]/images/wp2.jpg"
import image3 from "../../app/tasks/[...id]/images/wp3.jpg"

const DataContext = createContext();



const DataProvider = ({ children }) => {

    const [colorData, setColorData] = useState("#54c4fa");
    const [emojiPickerData, setEmojiPickerData] = useState(null);
    const [inputData, setInputData] = useState("");
    const [allDATA, setAllDATA] = useState([]);
    const [getURL, setGetURL] = useState("");
    const [completed, setCompleted] = useState(false);
    const parent = useRef(null)

    const backgroundIMAGES = [
        {
            image: image1.src
        },
        {
            image: image2.src
        },
        {
            image: image3.src
        },
    ]

    const objectAllData =
    {
        color: colorData,
        emoji: emojiPickerData,
        input: inputData,
        id: Math.floor(Math.random() * 231432531) - allDATA.length,
        img: backgroundIMAGES[Math.floor(Math.random() * backgroundIMAGES.length)].image,
        completed: completed
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
        setAllDATA,
        setGetURL,
        getURL,
        completed,
        setCompleted,
    }



    return <DataContext.Provider ref={parent} value={data}>
        {children}
    </DataContext.Provider>

}

export { DataContext, createContext, DataProvider }