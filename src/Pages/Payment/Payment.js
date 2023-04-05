import React from "react";

import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
const Payment = () => {
  const stripePromise = loadStripe(
    "pk_test_51MqWDPKMd3XJzt1dEcfhJpeA7FxtNgu3xd6OJOWUWnIetbeTDlyK9WpTIaAaWlif3UVjMwEqvqQxyyS0hqf9tGIf00J649pu2d"
  );
  return (
    <div className="flex flex-col justify-center items-center">
     
      <div className="w-96 ">
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
