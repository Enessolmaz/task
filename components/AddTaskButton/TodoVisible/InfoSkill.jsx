import React, { useContext } from 'react'
import styled from "../addtaskbutton.module.css";
import { AiFillTag } from "react-icons/ai"
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { DataContext } from '@/components/Context/Context';


const conditionStatus = [
    'Hata',
    'Bug',
    'Not',
];


const InfoSkill = ({ item }) => {

    const { allDATA, setDataStatus, } = useContext(DataContext)

    const handleFunction = (value) => {
        setDataStatus(allDATA.find((ai) => ai.id.toString() === item.id.toString()).status = value)
    };



    return (
        <>
            {/* <span className={styled.infoSpan} style={{ border: `1px solid ${item?.color}` }}>
                <AiOutlineUserAdd fill={item?.color} size={14} /> &nbsp;Atama Yap
            </span> */}
            <span className={styled.infoSpan} style={{ border: `1px solid ${item?.color}` }}>
                <AiFillTag fill={item?.color} />

                <span style={{ position: "relative", left: 15 }}>
                    {
                        item?.status?.length === 0 ? "Durum" : null
                    }
                </span>
                <FormControl sx={{ m: 1, cursor: "pointer", width: "max-content" }}>
                    <Select
                        sx={{
                            "& fieldset": { border: 'none' },
                        }}
                        // onChange={handleChange}
                        onChange={(e) => handleFunction(e.target.value)}
                        multiple
                        value={item?.status}
                        renderValue={() => {
                            return (
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, }}>
                                    {item?.status?.map((value) => (
                                        <Chip key={value} label={value} style={{
                                            background: value === "Hata" ? "#c24b3e" :
                                                value === "Bug" ? "#f88f33c1" :
                                                    value === "Not" ? "#6270f0" : null,
                                            borderRadius: 4,
                                            fontFamily: "Inter"
                                        }} />
                                    ))}
                                </Box>
                            )
                        }}
                    >

                        {conditionStatus.map((name) => (
                            <MenuItem
                                key={name}
                                value={name}
                            >
                                {name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </span>
        </>
    )
}

export default InfoSkill