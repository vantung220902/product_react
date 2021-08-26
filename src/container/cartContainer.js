import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Carts from './../components/carts';
import CartItem from './../components/cartItem';
import CartResult from '../components/cartResult';
import * as MESSAGES from './../constants/message';
import * as actions from './../actions/index';
class cartContainer extends Component {
    showCart = (carts) => {
        let resualt = [];
        let message = MESSAGES.MSG_CART_EMPTY;
        resualt = carts.map((item, i) => {
            return <CartItem cartItem={item}
             key={i} 
             onDeleteCart={this.props.onDeleteCart}
             onMessageDeleteCart={this.props.onMessageDeleteCart}
             onUpdateCart = {this.props.onUpdateCart}
             onMessageUpdateCart = {this.props.onMessageUpdateCart}
             />;
        })
        return resualt.length > 0 ? resualt : message;
    }
    showTotals = (carts) => {
        let resualt = 0;
        if (carts.length > 0) {
                resualt = carts.reduce((acc, item) => {
                    return acc + item.product.price * item.quantity;
                }, 0);
        }
        return <CartResult result={resualt > 0 ? resualt : 0} />;
    }
    render() {
        let { carts } = this.props;
        return (
            <Carts>
                {this.showCart(carts)}
                {this.showTotals(carts)}
            </Carts>
        );
    }
}
cartContainer.propTypes = {
    carts: PropTypes.arrayOf(
        PropTypes.shape({
            product: PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                img: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                inventory: PropTypes.number.isRequired,
            }),
            quantity: PropTypes.number.isRequired,
        })
    ).isRequired,
    onDeleteCart: PropTypes.func.isRequired,
    onMessageDeleteCart:PropTypes.func.isRequired,
    onUpdateCart:PropTypes.func.isRequired,
    onMessageUpdateCart: PropTypes.func.isRequired,

}
const mapStateToProps = (state) => {
    return {
        carts: state.carts
    }
}
const mapDispatchToProps = (dispatch,props) => {
    return{
        onDeleteCart:(id) => dispatch(actions.DELETE_ADD_CART(id)),
        onMessageDeleteCart:() => dispatch(actions.DELETE_MESSAGE_CART()),
        onUpdateCart:(id,quantity) => dispatch(actions.UPDATE_CART(id,quantity)),
        onMessageUpdateCart:() => dispatch(actions.UPDATE_MESSAGE_CART())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(cartContainer);
