import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner1 (1).jpg';
import banner2 from '../../../images/banner/banner2 (1).jpg';
import banner3 from '../../../images/banner/banner3 (1).jpg';
import './Banner.css';



const Banner = () => {
    return (
        <>
            <Carousel id="home">
                <Carousel.Item>

                    <img
                        className="d-block w-100 "
                        src={banner1}
                        alt="First slide"
                    />

                    <Carousel.Caption>
                        <h3>Hospital</h3>
                        <p>Hospitals are important to treat minor and serious diseases, illnesses and disorders of the body function of varying types and severity.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Hospital classification</h3>
                        <p>Hospitals are classified as general, specialty, or government depending on the sources of income received.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Services of a Hospital</h3>
                        <p>The basic services that hospitals offer include: short-term hospitalization. emergency room services. general and specialty surgical services.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;