import Home from "../components/home";
import { connect } from 'react-redux'
import { addToCart, removeToCart } from '../services/actions/action';

const mapStateToProps = state => ({
    data: state.cardItems,
});

const mapDispatchToProps = dispatch => ({
    addToCartHandler: data => dispatch(addToCart(data)),
    removeToCartHandler: data => dispatch(removeToCart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);