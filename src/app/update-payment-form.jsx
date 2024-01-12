import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

// React component to update payment method
const UpdatePaymentMethodForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const cardElementOptions = {
    // Add specific options for CardElement here if needed
    style: {
      base: {
        fontSize: "16px",
        color: "#424770",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
      invalid: {
        color: "#9e2146",
      },
    },
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Ensure Stripe and Elements are loaded
    if (!stripe || !elements) {
      return;
    }

    // Collect new card details
    const cardElement = elements.getElement(CardElement);

    // Create a PaymentMethod using the card details
    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.error(error);
      // Handle error, e.g., display an error message to the user
      return;
    }

    console.log(paymentMethod);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        margin: "5em",
      }}
    >
      <label>Card details</label>
      <CardElement options={cardElementOptions} style="padding: 2em" />
      <button type="submit" disabled={!stripe}>
        Update Payment Method
      </button>
    </form>
  );
};

export default UpdatePaymentMethodForm;
