import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Specialist.css'


const Specialists = (data) => {
    const { _id } = data;
    const [instructor, setInstructor] = useState([]);
    // data load
    useEffect(() => {
        fetch('./Doctor.json')
            .then(res => res.json())
            .then(data => setInstructor(data))
    }, [])
    return (
        <section className="container my-5 " id="Question">

            <h2 className="text-primary mt-5">Specialist Doctors</h2>



            {/* mapping data */}
            {
                instructor.map(data => {
                    return (

                        <div id="specialist" className="teacher" style={{ display: 'inline-block' }}>

                            <div className='image'>
                                <img src={data.img} alt="" />
                            </div>
                            <div >
                                <h4 className="text-primary fw-bold">{data.name}</h4>
                                <div>
                                    <p className="fw-lighter">{data.specialist}</p>
                                    <p>Rating: {data.rating}</p>

                                    <a class="btn btn-dark btn-social mx-1 rounded-circle" href="#!"><i class="fab fa-twitter"></i></a>
                                    <a class="btn btn-dark btn-social mx-1 rounded-circle" href="#!"><i
                                        class="fab fa-facebook-f"></i></a>
                                    <a class="btn btn-dark btn-social mx-1 rounded-circle" href="#!"><i
                                        class="fab fa-linkedin-in"></i></a>


                                </div>
                                <Link to={`/doctorDetail/ ${_id}`}>
                                    <button className="mt-2 btn btn-warning">Details</button></Link>
                            </div>
                        </div>
                    )
                })
            }

        </section>


    );
};

export default Specialists;