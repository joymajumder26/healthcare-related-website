import React from 'react';
import { useParams } from 'react-router';

const DoctorDetails = () => {
    const {doctorId} = useParams();
    return (
        <div>
            <h2>Service Id:{doctorId}</h2>
        </div>
    );
};

export default DoctorDetails;