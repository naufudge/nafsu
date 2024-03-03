import React from 'react'
import { useRouter } from 'next/navigation';
import Card from './Card';

const DoctorsView = ({doctors}) => {
    if (!doctors) return null;
    
    const firstDoc = doctors[0]
    const secondDoc = doctors[1]
    const thirdDoc = doctors[2]
    const fourthDoc = doctors[3]

    const router = useRouter()

    const formatDoctorName = (name) => {
        let result = name.replace(".", "");
        result = result.replaceAll(" ", "_");
        console.log(result);
        
        return result;
    }
    
    return (
        <div className='doctors-view mt-2'>
            <h3 className="doc-view-title font-bold text-lg mb-4">Recommended Doctors</h3>
            <div className='doctors-cards grid grid-cols-2 mb-5 gap-4 h-full'>
                <Card doc={firstDoc} />
                <Card doc={secondDoc} />
                <Card doc={thirdDoc} /> 
                <Card doc={fourthDoc} /> 
            </div>
        </div>
    )
}

export default DoctorsView