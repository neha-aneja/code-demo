import React from 'react';

const Home = () => {
    return (

        <div className="container">
            <div className="row">
                <div className="col-sm-4 mx-auto pt-3">
                <label className="grid">Email</label><br/>
                <input type="text" className="grid"/>
                </div>
                <div className="col-sm-4 mx-auto">
                <label className="grid">Password</label><br/>
                <input type="text" className="grid"/>
                </div>
                <div className="col-sm-4 mx-auto">
                <button className="button">Submit</button>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-true mx-auto pt-3">
                <label className="grid">Email</label><br/>
                <input type="text" className="grid"/>
                </div>
                <div className="col-sm-true mx-auto">
                <label className="grid">Password</label><br/>
                <input type="text" className="grid"/>
                </div>
                <div className="col-sm-true mx-auto ">
                <button className="button">Submit</button>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-true mx-auto pt-3">
                <label className="grid">Email</label><br/>
                <input type="text" className="grid"/>
                </div>
                <div className="col-sm-true mx-auto">
                <label className="grid">Password</label><br/>
                <input type="text" className="grid"/>
                </div>
                <div className="col-sm-true mx-auto ">
                <button className="button">Submit</button>
                </div>
            </div>
        </div>
    )
}
export default Home;