import Header from "../Menu/Menu2/Header";
import {connect} from 'react-redux';
import addToCart from '../../../Services/Actions/actions';

const mapStateToProps = state => ({
    cardData : state
})

const mapDispatchToProps = dispatch => ({
    // addToCartHandler: data => dispatch(addToCart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);