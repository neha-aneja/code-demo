import Item from "../Menu/Menu2/Item";
import {connect} from 'react-redux';
import addToCart from '../../../Services/Actions/actions';
import {removeFromCart} from '../../../Services/Actions/actions';

const mapStateToProps = state => ({
    cardData : state
})

const mapDispatchToProps = dispatch => ({
    addToCartHandler: data => dispatch(addToCart(data)),
    removeFromCartHandler: data => dispatch(removeFromCart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Item);