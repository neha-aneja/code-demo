import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <section>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-5">
                                <h1>Improve your skills</h1>
                            </div>
                            <div className="mt-3">
                                <NavLink to="/" className="btn btn-primary">
                                    Explore Now
                                </NavLink>
                            </div>
                            <div className="col-lg-6 col-img">
                                <img src="Images/Skills.jpg"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Home;