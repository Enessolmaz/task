"use client"
import { DataContext } from '@/components/Context/Context'
import React, { useContext, useEffect, useState } from 'react'

import styled from "./page.module.css"


const page = ({ params }) => {

    const { allDATA, completed, setCompleted, setCheckingDATA } = useContext(DataContext)
    const [textAreaData, setTextAreaData] = useState("");


    const params_id = params.id.toString()
    const mapData = allDATA.filter((item) => item.id.toString() === params_id)



    return (
        <>
            {
                mapData.map((item) => (
                    <div key={item.id} className={styled.wallpaperContent} >
                        <div className={styled.imageCollapse}>
                            <img className={styled.image} alt="" src={item?.img} />
                            <button className={styled.EmojiButton}>
                                {
                                    <>
                                        <h1 style={{ fontSize: 32 }}>{item?.emoji}</h1>
                                    </>
                                }
                            </button>
                        </div>

                        <div className={styled.card}>
                            <div className={styled.cardSection}>

                                <div className={styled.title_Completed}>
                                    <h2>{item?.input} Title</h2>
                                    <span className={styled.completed} style={{
                                        background: item.completed === false ? "#ef5777" : "#44cf03"
                                    }}>
                                        {
                                            item.completed === false ? "Not Completed" : "Completed"
                                        }
                                    </span>
                                </div>
                                <textarea onChange={(e) => setTextAreaData(e.target.value)} placeholder='Görev Tanımı'>
                                </textarea>

                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )



}
export default page