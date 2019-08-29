import React from "react";
import { CartImageContainer, CartItemContainer, CartItemDetailsContainer, CartNameContainer, CartPriceContainer } from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <CartItemContainer>
      <CartImageContainer src={imageUrl} alt="item" />
      <CartItemDetailsContainer>
        <CartNameContainer>{name}</CartNameContainer>
        <CartPriceContainer>
          <b>Qty:</b> {quantity} x ${price}
        </CartPriceContainer>
        <CartPriceContainer>
          <b>Total:</b> ${quantity * price}
        </CartPriceContainer>
      </CartItemDetailsContainer>
    </CartItemContainer>
  );
};

export default CartItem;
