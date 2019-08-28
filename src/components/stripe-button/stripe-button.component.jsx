import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publicableKey = "pk_test_tob8mHn5Fl1XwPhZElQeO0AP006GNxyIax";

  const onToken = token => {
    alert("Payment Successfull");
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
      locale="in"
      token={onToken}
    />
  );
};

export default StripeButton;
