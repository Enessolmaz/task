import React, { useContext, useEffect, useState } from 'react'
import { BsFillCameraFill } from "react-icons/bs"
import { AiTwotoneDelete } from "react-icons/ai"
import styled from "../addtaskbutton.module.css";
import { DataContext } from '@/components/Context/Context';
import Link from 'next/link';



const Todo = () => {
    const { allDATA, setAllDATA, localSTORAGE, setLocalSTORAGE } = useContext(DataContext)
    const [completed, setCompleted] = useState(false)

    const deleteSelectedData = (selected) => {
        const newList = allDATA.filter((i) => i.id !== selected)
        setAllDATA(newList)
    }

    const selectedCompleted = (selected) => {
        setCompleted(selected.completed = !completed)
    }

    return (
        <>
            {

                allDATA?.map((item) => (
                    <div key={item?.id} className={styled.mainCard} style={{ borderLeft: `3px solid ${item?.color}`, borderRadius: "0px" }}>
                        <Link href={`tasks/${item?.id}`} className={styled.card}>
                            <div className={styled.emojiButtonVisible}>
                                <button className={styled.EmojiTodoButton}>
                                    {
                                        !item?.emoji ?
                                            <BsFillCameraFill className={styled.EmojiIcon} fill={"#333"} size={24} />
                                            :
                                            <h1 style={{ fontSize: 32 }}>{item?.emoji}</h1>
                                    }
                                </button>
                            </div>
                        </Link>
                        <span className={styled.todoInfo}>
                            <h3>{item?.input}</h3>
                            <div className={styled.INFO}>
                                <span style={{ border: `1px solid ${item?.color}` }}>
                                    Tarih Ekle
                                </span>
                                <span style={{ border: `1px solid ${item?.color}` }}>
                                    Atama Yap
                                </span>
                                <span style={{ border: `1px solid ${item?.color}` }}>
                                    Etiket
                                </span>
                            </div>
                        </span>
                        <div className={styled.absolute}>
                            <span className={styled.completed}
                                onClick={() => selectedCompleted(item)}
                                style={{ transition: "300ms", background: item.completed === false ? "#ef5777" : "#44cf03" }}>
                                {item.completed === false ? "Not Completed" : "Completed"}
                            </span>
                            <span className={styled.deleteICON} onClick={() => deleteSelectedData(item?.id)}>
                                <AiTwotoneDelete size={24} fill={"#ef5777"} />
                            </span>
                        </div>


                    </div>
                ))
            }
        </>

    )
}

export default Todo