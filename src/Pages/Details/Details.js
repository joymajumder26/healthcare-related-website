import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { fakeData } from './Services';
import './Details.css'

const Details = () => {
    const { serviceId } = useParams();

    let services = [];

    services = fakeData

    let serviceDetails;
    services.map(service => {
        if (service.id ===  parseInt(serviceId)) {
            serviceDetails = service;
        }

    })

    return (
        <div className="details">

            <h3>Service Id:{serviceId}</h3>
            <h2>{serviceDetails.name}</h2>
            <img src={serviceDetails.img} alt="hi" />
            <p>{serviceDetails.description}</p>
            <h3>Special Doctor:{serviceDetails.doctor_name}</h3>

        </div>
    );
};

export default Details;