import React, { useEffect, useState } from 'react';

const Dash = () => {
    const [Dashboard, setDashboard] = useState([])
    // const [cart,setCart] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/places')
            .then(res => res.json())
            .then(data => setDashboard(data));

    }, [])
    // console.log(Dashboard)
    return (
        <div>
            
        </div>
    );
};

export default Dash;