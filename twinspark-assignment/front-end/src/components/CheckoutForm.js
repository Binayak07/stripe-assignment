import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
export const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();
  const addedProducts = useSelector(state => state.productsInCart)
  let amount = 0;
  addedProducts.forEach(product => amount += product.price);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    console.log('==>', error)
    if (!error) {
      try {
        const { id } = paymentMethod;

        const response = await axios.post(
          "http://localhost:8080/stripe/charge",
          {
            amount: Math.round(amount, 0),
            id: id,
          },
        );

        console.log("Stripe 35 | data", response.data.success);
        if (response.data.success) {
         console.log('success')
        }
      } catch (error) {
        console.log('failed')
      }
    } else {
      console.log(error.message);
    }
  };

  return (

    <div className="container">
      <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
        <CardElement />
        <button className="btn btn-primary">Pay</button>
      </form>
      <br/>
      <br/>
      <button className="btn btn-warning" onClick={()=>history.push('/products')}>Home</button>
    </div>
  );
};