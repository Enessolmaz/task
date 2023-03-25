import React, { useContext, useEffect, useState } from 'react'
import { BsFillCameraFill } from "react-icons/bs"
import { AiTwotoneDelete } from "react-icons/ai"
import styled from "../addtaskbutton.module.css";
import { DataContext } from '@/components/Context/Context';
import Link from 'next/link';


const Todo = () => {

    const [isPickerVisible, setPickerVisible] = useState(false)


    const { allDATA, setAllDATA } = useContext(DataContext)

    const deleteSelectedData = (selected) => {

        const newList = allDATA.filter((i) => i.id !== selected)
        setAllDATA(newList)
    }
   
    return (

        <>
            {

                allDATA?.map((item) => (
                    <div key={item?.id} className={styled.mainCard} style={{ borderLeft: `3px solid ${item?.color}`, borderRadius: "0px" }}>
                        <Link realdata={item} href={`tasks/${item?.id}`} className={styled.card}>
                            <div className={styled.emojiButtonVisible}>
                                <button onClick={() => setPickerVisible(!isPickerVisible)} className={styled.EmojiTodoButton}>
                                    {
                                        !item?.emoji ?
                                            <BsFillCameraFill className={styled.EmojiIcon} fill={"#333"} size={24} />
                                            :
                                            <h1 style={{ fontSize: 32 }}>{item?.emoji}</h1>
                                    }
                                </button>
                            </div>

                            <div className={styled.todoInfo}>
                                <h3>{item?.input}</h3>
                                <div>
                                    <span style={{ border: `1px solid ${item?.color}` }}>
                                        Bitiş Tarihi
                                    </span>
                                    <span style={{ border: `1px solid ${item?.color}` }}>
                                        Atamak
                                    </span>
                                    <span style={{ border: `1px solid ${item?.color}` }}>
                                        Etiket
                                    </span>
                                </div>
                            </div>
                        </Link>
                        <span className={styled.deleteICON} onClick={() => deleteSelectedData(item?.id)}>
                            <AiTwotoneDelete size={24} fill={"#ef5777"} />
                        </span>

                    </div>
                ))

            }


            {/* <div className={styled.card} style={{ borderLeft: "3px solid green", borderRadius: "0px" }}>
                <div className={styled.emojiButtonVisible}>
                    <button onClick={() => setPickerVisible(!isPickerVisible)} className={styled.EmojiTodoButton}>
                        {
                            !currentEmoji ?
                                <BsFillCameraFill className={styled.EmojiIcon} fill={"#333"} size={24} />
                                :
                                <h1 style={{ fontSize: 32 }}>{currentEmoji}</h1>
                        }
                    </button>
                </div>

                <div className={styled.todoInfo}>
                    <h3>Title</h3>
                    <div>
                        <span style={{ border: "1px solid rgb(64, 170, 90)" }}>
                            Bitiş Tarihi
                        </span>
                        <span style={{ border: "1px solid #e03f2a" }}>
                            Atamak
                        </span>
                        <span style={{ border: "1px solid rgb(64, 170, 90)" }}>
                            Etiket
                        </span>
                    </div>
                </div>
            </div> */}

        </>

    )
}

export default Todo