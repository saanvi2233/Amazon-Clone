import React from 'react';
import './Subtotal.css';
import { useStateValue } from '../services/StateProvider';
import { useNavigate } from 'react-router-dom';

function Subtotal() {
  // const itemCount = 0; // Replace with the actual item count
  // const subtotalValue = 0; // Replace with the actual subtotal value


  const navigate=useNavigate();
  const [{basket},dispatch]=useStateValue();
  const subtotalValue=basket?.reduce((amount,item)=>item.price + amount,0);

    // Format the value as currency
    const formattedValue = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'USD',
    }).format(subtotalValue);
  

  return (
    <div className="subtotal">
      <p>
        Subtotal ({basket?.length} items): 
        <strong>{formattedValue}</strong>
      </p>
      <small className='subtotal-gifts'>
        <input type="checkbox" />
        This order contains a gift
      </small>

      <button onClick={e=>navigate('/payment')}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
