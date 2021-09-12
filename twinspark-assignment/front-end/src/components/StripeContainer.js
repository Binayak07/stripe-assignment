import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { CheckoutForm } from "./CheckoutForm";

const PUBLIC_KEY = "pk_test_51JYoeaSGa0hdZOGndof4ZYnc2CIypnXIsIDoz6V4WJfTBEe2ZpgPZdcPa75qWSiv1xlKJaqzkZ9QvuSDazt38Wl500EQ5dPyR4";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Stripe;
