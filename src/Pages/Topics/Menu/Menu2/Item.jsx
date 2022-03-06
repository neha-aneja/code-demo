import React from 'react';

const Item = (props) => {
    console.log(props);
    return (
        <>
        <div className="logo">
            <img width="150px" src="Images/Capture.PNG"/>
            <span> Logo </span>
            <span> Price:1000 </span>
            <button onClick={() => {
                props.addToCartHandler({
                    name: "logo",
                    price: 1000
                })
            }}> add to cart </button>
            <button onClick={() => {
                props.removeFromCartHandler()
            }}> remove from cart </button>
        </div>
        </>
    )
}

export default Item;
