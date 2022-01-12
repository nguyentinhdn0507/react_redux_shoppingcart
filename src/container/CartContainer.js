import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Cart from "././../components/Cart";
import CartItem from "./../components/CartItem";
import CartResult from "../components/CartResult";
import * as Message from "./../redux/constant/Message";
import {
  actRemoveProductInCart,
  actChangeMessage,
  actUpdateProductInCart
} from "./../redux/actions/index";

export class CartContainer extends Component {
  render() {
    let { cart } = this.props;
    // console.log(cart);
    return (
      <Cart>
        {this.showCartItem(cart)}
        {this.showTotalProduct(cart)}
      </Cart>
    );
  }
  showCartItem = (cart) => {
    let { onDeleteProductInCart,onChangeMessage,onUpdateProductInCart } = this.props;
    let result = (
      <tr>
        <td>{Message.MGS_CART_EMPTY}</td>
      </tr>
    );
    if (cart.length > 0) {
      result = cart.map((item, index) => {
        return (
          <CartItem
            key={index}
            item={item}
            onDeleteProductInCart={onDeleteProductInCart}
            onChangeMessage = {onChangeMessage}
            onUpdateProductInCart = {onUpdateProductInCart}
          />
        );
      });
    }
    return result;
  };
  showTotalProduct = (cart) => {
    let result = null;
    if (cart.length > 0) {
      result = <CartResult cart={cart} />;
    }
    return result;
  };
}
CartContainer.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        inventory: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
      }).isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  onDeleteProductInCart : PropTypes.func.isRequired,
  onChangeMessage : PropTypes.func.isRequired,
  onUpdateProductInCart : PropTypes.func.isRequired,
};
const mapStateToProps = (state) => {
  return {
    // gọi lên trên store
    cart: state.cart, //  ở trên reducer index
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onDeleteProductInCart: (product) => {
      dispatch(actRemoveProductInCart(product));
    },
    onChangeMessage: (message) => {
      dispatch(actChangeMessage(message));
    },
    onUpdateProductInCart : (product,quantity) => {
      dispatch(actUpdateProductInCart(product,quantity))
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
