import { loadStripe } from "@stripe/stripe-js";
import React, { useContext, useState } from "react";
import { CartContext } from "../../App";
import ReactDOM from "react-dom";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./../../firebase.init";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [carts, setCarts] = useContext(CartContext);
  const [user, loading, error] = useAuthState(auth);
  const [loadingTrx, setLoadingTrx] = useState(false);

  const totalPrice = carts.reduce(
    (acc, cart) => acc + cart.selectedQnt * cart.price,
    0
  );

  //  if(loading){
  //   return <Loading></Loading>
  //  }

  useEffect(() => {
    if (totalPrice > 0) {
      fetch("http://localhost:5000/create-payment-intent", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ totalPrice }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            setClientSecret(data.clientSecret);
          }
        });
    }
  }, [totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const address = form.address.value;
    const price = form.price.value;

    // if (elements == null) {
    //   return;
    // }
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    setCardError(error?.message || "");
    setSuccess("");

    //confirm card payment
    //paymentIntent means details about the transaction

    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: email,
          },
        },
      });

    if (intentError) {
      setCardError(intentError?.message);
    } else {
      setCardError("");
      setTransactionId(paymentIntent.id);
      setLoadingTrx(true);

      const orderInfo = {
        name,
        email,
        address,
        transactionId: paymentIntent.id,
        price,
        status: "Pending",
      };

      fetch("http://localhost:5000/orderInfo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setSuccess("congrats! your payment is completed");
            // handleReset()
            form.reset();

            // setLoad(!load);
          } else {
            toast.error("Something went wrong. Please try again");
          }
        })
        .catch((error) => {
          // Handle error
        });
    }
  };

  return (
    <>
      <div>
        <h3 className="text-xl mr-20 mt-10">Payment Information</h3>
        <div className="modal-box w-full ">
          <form onSubmit={handleSubmit}>
            <label className="label">
              <span className="label-text font-bold">Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              placeholder="Name"
              className="input input-bordered w-full "
            />

            <label className="label">
              <span className="label-text font-bold">Email</span>
            </label>
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              placeholder="Email"
              className="input input-bordered w-full "
            />

            <label className="label">
              <span className="label-text font-bold">Total Price</span>
            </label>
            <input
              type="text"
              defaultValue={totalPrice}
              name="price"
              placeholder="Total Price"
              className="input input-bordered w-full "
            />
            <label className="label">
              <span className="label-text font-bold">Address</span>
            </label>
            <input
              type="text"
              name="address"
              placeholder="Address"
              className="input input-bordered w-full "
            />

            <div className="mb-4">
              <label
                className="block mb-2 font-bold text-gray-700"
                htmlFor="card-element"
              >
                Card Information
              </label>
              <div className="p-2 border border-gray-300 rounded-lg">
                <CardElement
                  id="card-element"
                  className="w-full"
                  options={{}}
                />
              </div>
            </div>
            {/* <CardElement
          options={{
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
          }}
        /> */}
            <button
              className="btn btn-sm mt-4 btn-success"
              type="submit"
              disabled={!stripe || !clientSecret}
            >
              Order Confirm
            </button>
          </form>
        </div>
      </div>
      {<p className="text-red-500">{cardError}</p>}

      {success && (
        <div className="text-green-500">
          <p>{success}</p>
          <p>
            Your transactionId:{" "}
            <span className="text-orange-500 font-bold">{transactionId}</span>
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
