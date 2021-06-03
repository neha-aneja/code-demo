import React from 'react';
import Card from './Card';

const Documentation = () => {

    const arr = [
        {
            img: "Images/react.png",
            title: "React",
            desc: "React is a JavaScript library for building user interfaces. Learn what React is all about on our homepage.",
            link: "https://reactjs.org/docs/getting-started.html"
        },
        {
            img: "Images/bootstrap.png",
            title: "Bootstrap",
            desc: "Bootstrap, the world’s most popular framework for building responsive, mobile-first sites, with jsDelivr and a template starter page.",
            link: "https://getbootstrap.com/docs/4.1/getting-started/introduction/"
        },
        {
            img: "Images/redux.jpg",
            title: "Redux",
            desc: "Redux, A predictable state container for JS apps.",
            link: "https://redux.js.org/"
        }
    ]


    return (

        <>
            <h1 style={{ textAlign: "center" }}>Demo</h1> <br />


            <div className="container">
            {/* <div className="wrap-mid"> */}
                <div className="row justify-content-evenly">
                    {
                        arr.map((val) => (
                            <div className="col-lg-3 col-12">
                                <Card
                                    img={val.img}
                                    title={val.title}
                                    desc={val.desc}
                                    link={val.link}
                                />
                            </div>
                        ))
                    }
                    </div>
                </div>
                {/* </div> */}
        </>
    )
}
export default Documentation;