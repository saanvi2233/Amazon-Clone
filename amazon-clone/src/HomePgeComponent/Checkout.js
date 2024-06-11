import React from 'react';
import './Checkout.css';
import oil from './productPictures/oil add.webp';
import Subtotal from './Subtotal';
import { useStateValue } from '../services/StateProvider';
import CheckOutProduct from './CheckOutProduct';
import emptyCartImage from './pictures/empty-cart.png'; // Import the empty-cart image

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className='checkout'>
      <div className="checkout_left">
        <img className='checkout_ad' src={oil} alt="Checkout Ad"/>

        <div>
          <h3>Hello, {user ? user.email : "Guest"}</h3>
          <h2 className="checkout_title">Your Shopping Basket</h2>

          {/* Conditionally render the empty-cart image and the added items */}
          {basket.length === 0 ? (
            <img className="empty-cart-image" src={emptyCartImage} alt="Empty Cart" />
          ) : (
            <div className="added-items">
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
          )}
        </div>
      </div>

      <div className="checkout_right">
        {basket.length > 0 && <Subtotal />}
      </div>
    </div>
  );
}

export default Checkout;
