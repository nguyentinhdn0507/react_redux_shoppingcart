import React, { Component } from "react";
import * as Message from "../redux/constant/Message";
export class CartItem extends Component {
  
  render() {
    let { item } = this.props;
    console.log(item);
    let { quantity } = item;
    console.log(quantity);
    return (
      <tr>
        <th scope="row">
          <img
            src={item.product.image}
            alt={item.product.name}
            className="img-fluid z-depth-0"
          />
        </th>
        <td>
          <h5>
            <strong>{item.product.name}</strong>
          </h5>
        </td>
        <td>{item.product.price}$</td>
        <td className="center-on-small-only">
          <span className="qty">{quantity} </span>
          <div className="btn-group radio-group" data-toggle="buttons">
            <label
              onClick={() =>
                this.onUpdateQuantity(item.product, item.quantity - 1)
              }
              className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
            >
              <a>—</a>
            </label>
            <label
              onClick={() =>
                this.onUpdateQuantity(item.product, item.quantity + 1)
              }
              className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
            >
              <a>+</a>
            </label>
          </div>
        </td>
        <td>{this.showSubTotal(item.product.price, item.quantity)}$</td>
        <td>
          <button
            onClick={() => this.onDelete(item.product)}
            type="button"
            className="btn btn-sm btn-primary waves-effect waves-light"
            data-toggle="tooltip"
            data-placement="top"
            // title=""
            data-original-title="Remove item"
          >
            X
          </button>
        </td>
      </tr>
    );
  }
  onUpdateQuantity = (product, quantity) => {
    if (quantity > 0) {
      let { onUpdateProductInCart,onChangeMessage } = this.props;
      onUpdateProductInCart(product, quantity);
      onChangeMessage(Message.MGS_UPDATE_TO_CART_SUCCESS)
    }
  };
  showSubTotal = (price, quantity) => {
    return price * quantity;
  };
  onDelete = (product) => {
    console.log(product);
    let { onDeleteProductInCart, onChangeMessage } = this.props;
    onDeleteProductInCart(product);
    onChangeMessage(Message.MGS_DELETE_IN_CART_SUCCESS);
  };
}

export default CartItem;
