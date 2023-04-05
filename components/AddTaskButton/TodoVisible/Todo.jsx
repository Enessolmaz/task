import React, { useContext, useEffect, useState } from 'react'
import { BsFillCameraFill } from "react-icons/bs"
import { AiTwotoneDelete } from "react-icons/ai"
import styled from "../addtaskbutton.module.css";
import { DataContext } from '@/components/Context/Context';
import Link from 'next/link';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AiFillTag, AiOutlineUserAdd, AiOutlineHistory } from "react-icons/ai"
import InfoSkill from './InfoSkill';

const Todo = () => {
    const { allDATA, setAllDATA } = useContext(DataContext)
    const [completed, setCompleted] = useState(false)
    const [startDate, setStartDate] = useState();

    const deleteSelectedData = (selected) => {
        const newList = allDATA.filter((i) => i.id !== selected)
        setAllDATA(newList)
    }

    const selectedCompleted = (selected) => {
        setCompleted(selected.completed = !completed)
    }


    const dateFunction = (date, itemID) => {
        setStartDate(allDATA.find((item) => item.id.toString() === itemID.toString()).date = date)
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
                                <span className={styled.infoSpan} style={{
                                    border: `1px solid ${item?.color}`
                                }}
                                >

                                    <span>
                                        <AiOutlineHistory fill={item?.color} size={14} style={{ marginTop: 2 }} />
                                    </span>

                                    &nbsp;
                                    <DatePicker
                                        style={{ color: "#fff" }}
                                        placeholderText="Tarih Ata"
                                        selected={item.date} onChange={(date) => dateFunction(date, item.id)} />
                                </span>
                                <InfoSkill item={item} />
                            </div>


                        </span >
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


                    </div >
                ))
            }
        </>

    )
}

export default Todo