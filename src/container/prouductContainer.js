import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from './../components/products';
import ProductsItem from './../components/proudctItem';
import PropTypes from 'prop-types';
import * as actions from './../actions/index';
class ProductsContainer extends Component {
    showProducts(product) {
        let elements = product.map((item, index) => {
            return <ProductsItem items={item} key={index} 
            addToCart={this.props.addToCart} 
            changMessAdd={this.props.changMessAdd}/>;
        });
        return elements;
    }
    render() {
        let { product } = this.props;
        return (
            <Product>
                {this.showProducts(product)}
            </Product>
        );
    }
}
ProductsContainer.propTypes = {
    product: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        })
    ).isRequired,
    addToCart:PropTypes.func.isRequired,
    changMessAdd: PropTypes.func.isRequired,
}
const mapStateToProps = (state) => {
    return {
        product: state.product,
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        addToCart: (item, quantity) => dispatch(actions.ADDCART(item, quantity)),
        changMessAdd:()=> dispatch(actions.CHANGE_ADD_CART())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
