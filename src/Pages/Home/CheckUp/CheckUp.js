import React from 'react';
import { Link } from 'react-router-dom';
import './CheckUp.css';

const CheckUp = () => {
    return (
        <div className="picture" id="appointment">
            <h4>Need a Doctor for Check-up?</h4>
            <h1>Just Make An Appointment & You're Done!</h1>
            <Link to="/registration"><button className="btn btn-warning">Make Appoinment</button></Link>
        </div>
    );
};

export default CheckUp;