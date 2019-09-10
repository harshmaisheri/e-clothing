import React from "react";
import { Link } from "react-router-dom";
import {
  OrderPageContainer,
  SpanContainer,
  TextContainer
} from "./placed-order.styles";

const PlacedOrder = () => {
  return (
    <OrderPageContainer>
      <TextContainer> Order Placed Successfully</TextContainer>
      <Link to="/">
        <SpanContainer>Continue Shopping</SpanContainer>
      </Link>
    </OrderPageContainer>
  );
};

export default PlacedOrder;
