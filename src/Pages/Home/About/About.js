import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
    return (
        <section className="container my-5 " id="Question">

            <div id="about" className="row my-5 about">

                <div className="col-lg-8 col-sm-6 q-img d-flex ">
                    <div >
                        <img className="ms-5" src="https://radiustheme.com/demo/wordpress/themes/medilink/wp-content/uploads/2019/02/about.png" style={{ width: "300px", height: "400px" }} alt="" />
                    </div>
                    <div>
                        <h1 className="my-5 text-success">Welcome To MediLink.
                            Central Hospital</h1>
                        <p> The best-known type of hospital is the general hospital, which typically has an emergency department to treat urgent health problems ranging from fire and accident victims to a sudden illness.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12 my-5 activity">

                    <Link to="/registration"><div >
                        <h4 className="text-primary "><i className="fas fa-book"></i>Request Appointment</h4>

                    </div></Link>
                    <Link to="/registration">
                        <div>
                            <h4 className="text-primary"><i class="fas fa-user-md"></i> Find Doctor</h4>

                        </div></Link>
                    <Link to="/registration">
                        <div>
                            <h4 className="text-primary"><i class="fas fa-search-location"></i> Find Location</h4>

                        </div>
                    </Link>
                    <Link to="/registration">
                        <div>
                            <h4 className="text-primary"><i class="fas fa-phone-volume"></i> Emergency Contact</h4>
                        </div>
                    </Link>

                </div>


            </div>




        </section>
    );
};

export default About;