import React from "react";

export default function CheckoutSteps(props) {
  return (
    <div className="row checkout-steps">
      <div className={props.step1 ? "active" : ""}>Sign-In</div>
      <div className={props.step2 ? "Shipping" : ""}>Shipping</div>
      <div className={props.step3 ? "Payment" : ""}>Payment</div>
      <div className={props.step4 ? "Place Order" : ""}>Place Order</div>
    </div>
  );
}
