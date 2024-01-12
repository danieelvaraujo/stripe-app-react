"use client";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import CheckoutForm from "./checkout-form";
import UpdateCardForm from "./update-card-form";
import UpdatePaymentMethodForm from "./update-payment-form";

export default function Home() {
  const stripePromise = Promise.resolve(
    loadStripe(
      "pk_test_51OMZDRCr4SuU68rogt627NE7YAfWMRAUs0D7CjOF4StWjNXmy5gFBOclLo3dHXXsgMqw1UxSt1vkUxWqK9okxqY3001efRJ4YB"
    )
  );

  const options = {
    mode: "payment",
    amount: 10000,
    currency: "brl",
    setup_future_usage: "off_session",
    payment_method_types: ["card"],
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
      {/* <UpdateCardForm /> */}
      {/* <UpdatePaymentMethodForm /> */}
    </Elements>
  );
}
