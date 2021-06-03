import React from 'react';
import { NavLink } from 'react-router-dom';
import { Collapse } from 'antd';


const Home = () => {

    const { Panel } = Collapse;

    // const text =
    //     `A dog is a type of domesticated animal.
    //     Known for its loyalty and faithfulness,
    //     it can be found as a welcome guest in many households across the world.`;

    // const text = () => {
    //     return (
    //         <>
    //                         <p>React is a JavaScript library created by Facebook. 
    //                         React is a tool for building UI components.</p>
    //                         <NavLink to="/topics" className="btn btn-primary">
    //                             Click to Learn
    //                         </NavLink>
    //                         </>
    //     )
    // }

    return (
        <section>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row col-align">
                            <div className="col-md-6 pt-5 pt-lg-5">
                                <h1>Improve your skills</h1>
                                <div className="mt-3">
                                <NavLink to="/documentation" className="btn btn-primary">
                                        Explore Now
                                </NavLink>
                                </div>
                            </div>

                            <div className="col-lg-6 col-img">
                                <img src="Images/Skills.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-collapse">
                
                <Collapse accordion>
                <h3 style={{textAlign:"center"}}>abc</h3>
                    <Panel header="React" key="1">
                        {/* {text} */}
                        {
                            <>
                            <p>React is a JavaScript library created by Facebook. 
                            React is a tool for building UI components.</p>
                            <NavLink to="/topics" className="btn btn-primary">
                                Click to Learn
                            </NavLink>
                            </>
                        }
                    </Panel>
                    <Panel header="Bootstrap" key="2">
                        <p>{}</p>
                    </Panel>
                    <Panel header="Redux" key="3">
                        <p>{}</p>
                    </Panel>
                </Collapse>
                </div>
            </div>
        </section>
    )
}
export default Home;