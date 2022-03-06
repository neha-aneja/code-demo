import React from 'react';

const Header = (props) => {
    console.log(props);
    return (
        <>
        <div className="cart">
            <h1>cart:{props.cardData?.cardItems.length}</h1>
        </div>
        </>
    )
}

export default Header;
