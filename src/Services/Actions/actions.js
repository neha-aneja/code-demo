import React from 'react';
import {Add_To_Cart} from '../constants';
import {Remove_From_Cart} from '../constants';

const addToCart = (data) => {
    console.log(data);
    return{
        type: Add_To_Cart,
        data: data
}
}

export const removeFromCart = (data) => {
    console.log(data);
    return{
        type: Remove_From_Cart,
        // data: data
}
}

export default addToCart;