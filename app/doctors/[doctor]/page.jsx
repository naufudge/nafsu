'use client';

import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { notFound } from 'next/navigation';

const DoctorPage = ({params: {doctor_details, recommended_doctors}}) => {
    const [doctor, setDoctor] = useState()
    const path = usePathname()
    const doctorPath =  path.split("/").pop()

    useEffect(() => {
        const getDoctors = () => {
            const docs = JSON.parse(localStorage.getItem("doctors"))
            for (let doc in docs) {
                if (docs[doc].path.toLowerCase() === doctorPath.toLowerCase()) {
                    setDoctor(docs[doc])
                }
            }
        }

        try {
            if (!doctor) getDoctors();
        } catch (error) {
            console.log(error.message)
        }
    }, [doctor])


    return (
        <div className='mt-7 text-center'>
            { doctor && 
            <div className='card glass w-fit p-4 mx-auto'>
                <h1 className='font-bold'>{doctor.name}</h1>
                <span>{doctor.department}</span>
                <span>{doctor.designation}</span>
                
            </div> 
            }      
        </div>
    )
}

export default DoctorPage