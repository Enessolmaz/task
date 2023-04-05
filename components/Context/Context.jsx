"use client"
import { createContext, useEffect, useRef, useState } from "react";
import autoAnimate from '@formkit/auto-animate'
import image4 from "../../app/tasks/[...id]/images/wp4.png"
import image5 from "../../app/tasks/[...id]/images/wp5.png"
import image6 from "../../app/tasks/[...id]/images/wp6.jpg"
import image7 from "../../app/tasks/[...id]/images/wp7.jpg"
import image8 from "../../app/tasks/[...id]/images/wp8.png"



const DataContext = createContext();



const DataProvider = ({ children }) => {

    const [colorData, setColorData] = useState("#54c4fa");
    const [emojiPickerData, setEmojiPickerData] = useState(null);
    const [inputData, setInputData] = useState("");
    const [allDATA, setAllDATA] = useState([]);
    const [getURL, setGetURL] = useState("");
    const [completed, setCompleted] = useState(false);
    const [save, setSave] = useState(false);
    const [localSTORAGE, setLocalSTORAGE] = useState();
    const [dataStatus, setDataStatus] = useState([])
    const parent = useRef(null)

    const backgroundIMAGES = [
        {
            image: image4.src
        },
        {
            image: image5.src
        },
        {
            image: image6.src
        },
        {
            image: image7.src
        },
        {
            image: image8.src
        },
    ]

    const objectAllData =
    {
        color: colorData,
        emoji: emojiPickerData,
        input: inputData,
        id: Math.floor(Math.random() * 1234567890) - allDATA.length,
        img: backgroundIMAGES[Math.floor(Math.random() * backgroundIMAGES.length)].image,
        completed: completed,
        textarea: "",
        save: save,
        date: null,
        status: [],
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
        setLocalSTORAGE,
        localSTORAGE,
        setSave,
        save,
        dataStatus,
        setDataStatus
    }



    return <DataContext.Provider ref={parent} value={data}>
        {children}
    </DataContext.Provider>

}

export { DataContext, createContext, DataProvider }