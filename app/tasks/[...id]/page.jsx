"use client"
import { DataContext } from '@/components/Context/Context'
import PageComp from '@/components/PageComp/Params';
import React, { useContext, useEffect, useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';




const page = ({ params }) => {
    const params_id = params.id.toString()
    
    return (
        <>
            <PageComp paramsID={params_id} />
        </>
    )

}
export default page

