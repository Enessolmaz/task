"use client"
import { DataContext } from '@/components/Context/Context'
import React, { useContext, useEffect } from 'react'
import image1 from "./images/wp1.jpg"
import image2 from "./images/wp2.jpg"
import image3 from "./images/wp3.jpg"
import styled from "./page.module.css"
import { BsFillCameraFill, BsFillTrashFill } from "react-icons/bs"

const page = ({ params }) => {


    const { allDATA, setAllDATA } = useContext(DataContext)




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



    const randomImage = backgroundIMAGES[Math.floor(Math.random() * backgroundIMAGES.length)]

    console.log(allDATA)

    return (

        <div className={styled.wallpaperContent}>

            <div className={styled.imageCollapse}>
                <img className={styled.image} src={randomImage.image} alt="" />
                <button className={styled.EmojiButton}>
                    {


                        <>
                            <h1 style={{ fontSize: 32 }}>{allDATA[0]?.emoji}</h1>

                        </>
                    }
                </button>
            </div>

            <div className={styled.card}>

            </div>



            {/* {
                allDATA.map((item) => (
                    <span className={styled.EmojiPageIcon}>
                        <button className={styled.EmojiButton}>
                            {
                                !item.emoji ?
                                    <BsFillCameraFill className={styled.EmojiIcon} fill={"#333"} size={24} />
                                    :
                                    <>
                                        <h1 style={{ fontSize: 24 }}>{item.emoji}</h1>
                                    </>
                            }
                        </button>
                    </span>
                ))
            } */}

            {/* <span className={styled.EmojiPageIcon}>
                <button className={styled.EmojiButton}>
                    {
                        !item.emoji ?
                            <BsFillCameraFill className={styled.EmojiIcon} fill={"#333"} size={24} />
                            :
                            <>
                                <h1 style={{ fontSize: 32 }}>{currentEmoji}</h1>
                                {
                                    <span className={styled.spanTrash} onClick={spanTrashClicker}>
                                        <BsFillTrashFill size={20} />
                                    </span>
                                }
                            </>
                    }
                </button>
            </span> */}


        </div>

    )
}

export default page