import React from 'react';


const Card = (props) => {

    return (

        <div className="card common_card" style={{ width: "18rem" }}>
            <div className="wrap_img"><img src={props.img} className="card-img-top" alt="..." /></div>
            <div className="card-body">
                <h5 className="card-title edu_title"> {props.title} </h5>
                <p className="card-text edu_text"> {props.desc} </p>
                <a href={props.link} className="btn btn-primary">Get Started</a>
            </div>
        </div>

    )
}
export default Card;