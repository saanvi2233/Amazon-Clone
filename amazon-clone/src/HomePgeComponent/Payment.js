import React, { useState } from 'react';
import './Payment.css';
import { useStateValue } from '../services/StateProvider';
import CheckOutProduct from './CheckOutProduct';
import empty_cart from './pictures/empty-cart.png';

const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const [paymentCompleted, setPaymentCompleted] = useState(false); // State to track if payment is completed

  const handleOrderNow = () => {
    window.alert('Hey! Your order is successfully placed');
    // Dispatch an action to clear the basket
    dispatch({ type: 'CLEAR_BASKET' }); // Assuming you have a CLEAR_BASKET action type in your reducer
    setPaymentCompleted(true); // Update state to indicate payment completed
  };

  // Render the payment content based on whether payment is completed or not
  return (
    <div className='payment'>
      {!paymentCompleted ? ( // Render payment page if payment is not completed
        <>
          <h1>CheckOut ({basket?.length} items)</h1>
          <div className="payment_container">
            <div className="payment_section">
              <div className="payment_title">
                <h3>Delivery Address</h3>
              </div>
              <div className="payment_address">
                <p>{user?.email}</p>
                <p>123 React Lane</p>
                <p>Pratap Nagar</p>
              </div>
            </div>

            <div className="payment_section">
              <div className="payment_title">
                <h3>Review Items and Delivery</h3>
              </div>
              <div className="payment_items">
                {basket.map((item, index) => (
                  <CheckOutProduct
                    key={index}
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                  />
                ))}
              </div>
            </div>

            <div className="payment_section">
              <div className="payment_title">
                <h3>Payment Method</h3>
              </div>
              <div className="payment_details">
                <label className="payment_option">
                  <input type='checkbox' /> Card
                </label>
                <label className="payment_option">
                  <input type='checkbox' /> UPI
                </label>
                <label className="payment_option">
                  <input type='checkbox' /> Cash On Delivery
                </label>
              </div>
              <button onClick={handleOrderNow} className="buy_now_button">Buy Now</button>
            </div>
            {/* {basket?.length === 0 && <img className="mx-auto w-1/2 mt-12" src={bangle} alt="empty" />} */}
          </div>
        </>
      ) : (
        // Render a message or component indicating payment completion
        <div>
          <h1>Thank you for your purchase!</h1>
          <img className="empty-cart-image" src={empty_cart} alt="Empty Cart" />
          {/* You can add additional content here */}
        </div>
      )}
    </div>
  );
};

export default Payment;
