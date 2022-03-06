import React from 'react';
import Cart from './Cart';
import ItemContainer from '../../Container/ItemContainer';
import HeaderContainer from '../../Container/HeaderContainer';
import Radialbar from './Radiabar';

const Menu2 = () => {
    return (
        <div>
        {/* <Cart/> */}
        <HeaderContainer/>
        <ItemContainer/>
        <Radialbar/>
        </div>
    )
}

// const mapStateToProps = state => ({
//     cardData : state
// })

// const mapDispatchToProps = dispatch => ({
//     addToCartHandler: data => dispatch(addToCart(data))
// })

// export default connect(mapStateToProps, mapDispatchToProps)(Item);

export default Menu2;