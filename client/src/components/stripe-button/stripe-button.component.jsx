import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import { clearCart } from "../../redux/cart/cart.actions";

const StripeCheckoutButton = ({ price, history, clearCart }) => {
  const priceForStripe = price * 100;
  const publicableKey = "pk_test_tob8mHn5Fl1XwPhZElQeO0AP006GNxyIax";

  const onToken = token => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token: token
      }
    })
      .then(response => {
        alert("Payment Was Successful");
        clearCart();
        history.push("/placed-order");
      })
      .catch(error => {
        console.log("Payment Error " + error);
        alert(
          "There was an issue with payment. Please make sure you use the provided credit card."
        );
      });
  };

  return (
    <StripeCheckout
      lable="Pay Now"
      name="Crwn-Clothing Ltd."
      billingAddress
      shippingAddress
      image="http://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      stripeKey={publicableKey}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
    />
  );
};

const mapDispatchToProps = dispatch => ({
  clearCart: () => dispatch(clearCart())
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(StripeCheckoutButton)
);
