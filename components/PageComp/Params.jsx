"use client"
import { DataContext } from '../Context/Context';
import React, { useContext, useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from "./params.module.css"



const PageComp = ({ paramsID }) => {
    const { allDATA, setAllDATA } = useContext(DataContext)
    const mapData = allDATA.filter((item) => item.id.toString() === paramsID)
    const [textAreaState, setTextAreaState] = useState("");
    const successNotify = (description) => toast.success(description);
    const errNotify = (description) => toast.error(description);


    const addLOCALSTORAGE = (value) => {
        if (!textAreaState.trim()) {
            errNotify("Lütfen Görev Yazınız")
        }
        else {
            successNotify("Kaydedildi")
            mapData.find((item) => item.id.toString() === value.id.toString()).textarea = textAreaState
            mapData.find((item) => item.id.toString() === value.id.toString()).save = true
        }
    }

    useEffect(() => (
        setTextAreaState(mapData.find((item) => item.id.toString() === paramsID)?.textarea)

    ), [allDATA])


    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={400}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                theme="dark"
            />

            {
                mapData.map((item) => (
                    <div key={item.id} className={styled.wallpaperContent} >
                        <div className={styled.imageCollapse}>
                            <img className={styled.image} alt="img" src={item.img} />
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
                                    <h2>{item?.input}</h2>
                                    <div className={styled.info}>
                                        <span className={styled.completed} style={{
                                            background: item.completed === false ? "#ef5777" : "#44cf03"
                                        }}>
                                            {
                                                item.completed === false ? "Not Completed" : "Completed"
                                            }
                                        </span>
                                        <span className={styled.completed} style={{
                                            background: item.save === false ? "#ef5777" : "#44cf03"
                                        }}>
                                            {
                                                item.save === false ? "Not Saved" : "Saved"
                                            }
                                        </span>
                                    </div>
                                </div>

                                <textarea
                                    defaultValue={item.textarea}
                                    onChange={(e) => setTextAreaState(e.target.value)}
                                    placeholder='Görev Tanımı' />
                            </div>
                            <button onClick={() => addLOCALSTORAGE(item)} className={styled.button}>Kaydet</button>
                        </div>
                    </div>
                ))
            }
        </>
    )

}
export default PageComp

