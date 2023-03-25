import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import styles from "../../app/tasks/page.module.css";
import style from "./addtaskbutton.module.css"
import "./style.css"
import { BsFillCameraFill, BsFillTrashFill } from "react-icons/bs"
import Picker from '@emoji-mart/react'
import data from '@emoji-mart/data'
import PopUpInput from "./PopUpInput";
import ColorPicker from "./ColorPicker";
import { DataContext } from "../Context/Context";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
        padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
        padding: theme.spacing(1),
    },
}));

function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2, background: "black" }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: "absolute",
                        right: 8,
                        top: 8,
                        background: "black",
                        color: "white",
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
}

const AddTaskButton = () => {
    const [isPickerVisible, setPickerVisible] = useState(false)
    const [currentEmoji, setCurrentEmoji] = useState(null)

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const spanTrashClicker = () => {
        setCurrentEmoji(null);
        setEmojiPickerData(null);

    }

    const { colorData, inputData, setInputData, setEmojiPickerData, objectAllData, allDATA, setAllDATA } = useContext(DataContext)

    const handleClose = () => {

        if (!inputData.trim()) {
            alert("input boş olamaz")
        }
        else {
            setAllDATA([...allDATA, objectAllData])
            setEmojiPickerData(null)
            setCurrentEmoji(null)
            setInputData("")
            setOpen(false);
        }
    };

    const closeDialog = () => {
        setOpen(false);
    }

    return (
        <>
            <Button className={styles.addTaskButton} onClick={handleClickOpen}>
                Yeni Dosya
            </Button>
            <BootstrapDialog className={style.popUpDialog} onClose={handleClose} open={open}>
                <BootstrapDialogTitle
                    onClose={closeDialog}
                    sx={{ background: "#212429", border: "none", color: "white" }}
                >
                    <div className={style.contentPopUp}>
                        <h3>Emoji Ekle</h3>
                        <button onClick={() => setPickerVisible(!isPickerVisible)} className={style.EmojiButton}>
                            {
                                !currentEmoji ?
                                    <BsFillCameraFill className={style.EmojiIcon} fill={"#333"} size={24} />
                                    :
                                    <>
                                        <h1 style={{ fontSize: 32 }}>{currentEmoji}</h1>
                                        {
                                            <span className={style.spanTrash} onClick={spanTrashClicker}>
                                                <BsFillTrashFill size={20} />
                                            </span>
                                        }
                                    </>
                            }
                        </button>
                        {
                            isPickerVisible && <Picker
                                data={data}
                                onEmojiSelect={(e) => {
                                    setCurrentEmoji(e.native);
                                    setPickerVisible(!isPickerVisible)
                                    setEmojiPickerData(e.native)

                                }} />
                        }
                    </div>
                </BootstrapDialogTitle>

                <PopUpInput />
                <ColorPicker />
                <DialogActions>
                    <button className={style.dialogAddButton} style={{ background: colorData }} onClick={handleClose}>
                        Dosya Oluşturun
                    </button>

                </DialogActions>
            </BootstrapDialog>
        </>
    );
};

export default AddTaskButton;
