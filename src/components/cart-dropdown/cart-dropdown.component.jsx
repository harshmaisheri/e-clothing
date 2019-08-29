import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import image from "../../assets/images/empty-cart.png";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItems } from "../../redux/cart/cart.selector";
import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";
import {
  CartDropdownContainer,
  CartDropDownImage,
  CartItemsContainer,
  EmptyContainer,
  EmptyMessage
} from "./cart-dropdown.styles";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyContainer>
            <CartDropDownImage src={image} alt="empty-cart" />
            <EmptyMessage>YOUR CART IS EMPTY</EmptyMessage>
          </EmptyContainer>
        )}
      </CartItemsContainer>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </CartDropdownContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
