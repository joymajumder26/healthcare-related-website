import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'


const Service = ({ service }) => {
    const { id, name, description, img, doctor_name } = service;
    return (
        <div className="service pb-3">
            <img src={img} alt="" />
            <h3>{name}</h3>

            <p className="px-3">{description}</p>
            {/* <Link to={`/detail/ ${id} ${name} ${description} ${doctor_name}`}> */}
            <Link to={`/detail/${id}`}>
                <button className="btn btn-warning">Details {name.toLowerCase()}</button></Link>
        </div>
    );
};

export default Service;