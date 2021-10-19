import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import CheckUp from '../CheckUp/CheckUp';
import Services from '../Services/Services';
import Specialists from '../Specialists/Specialists';



const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Specialists></Specialists>
            <CheckUp></CheckUp>


        </div>
    );
};

export default Home;