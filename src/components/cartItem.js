import React, { Component } from 'react';

class CartItem extends Component {

  showSubTotal = (price, quantity) => {
    return price * quantity;
  }
  onDeleteCart = (id) => {
    this.props.onDeleteCart(id);
    this.props.onMessageDeleteCart();
  }
  onUpdateQuantity = (id, quantity) => {
    this.props.onUpdateCart(id, quantity);
    this.props.onMessageUpdateCart();
  }
  render() {
    let { cartItem } = this.props;
    let quantity = cartItem.quantity;
    if (!cartItem.product) return '';
    return (
      <tr>
        <th scope="row">
          <img src={cartItem.product.img} alt="" className="img-fluid z-depth-0" />
        </th>
        <td>
          <h5>
            <strong>{cartItem.product.name}</strong>
          </h5>
        </td>
        <td>{cartItem.product.price}$</td>
        <td className="center-on-small-only">
          <span className="qty">{quantity}</span>
          <div className="btn-group radio-group" data-toggle="buttons">
            <label onClick={() => { this.onUpdateQuantity(cartItem.product.id, quantity - 1) }} className="btn btn-sm btn-primary
                                                btn-rounded waves-effect waves-light">
              <a href="/#">—</a>
            </label>
            <label onClick={() => { this.onUpdateQuantity(cartItem.product.id, quantity + 1) }} className="btn btn-sm btn-primary
                                                btn-rounded waves-effect waves-light">
              <a href="/#" >+</a>
            </label>
          </div>
        </td>
        <td>{this.showSubTotal(cartItem.product.price, cartItem.quantity)}$</td>
        <td>
          <button type="button" onClick={() => { this.onDeleteCart(cartItem.product.id) }} className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top" title data-original-title="Remove item">
            X
          </button>
        </td>
      </tr>

    );
  }
}

export default CartItem;
