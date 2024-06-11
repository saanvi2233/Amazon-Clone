import React from 'react'
import './Product.css';
import { useStateValue } from '../services/StateProvider';


function Product({id,title,image,price,rating}) {
const[{basket},dispatch]=useStateValue();

console.log('this is basket',basket)
  const addToBasket=()=>{
    // dispatch the item into the data layer
    dispatch({
      type:"ADD_TO_BASKET",
      item:{
        id:id,
        title:title,
        image:image,
        price:price,
        rating:rating,
      },
    })
  }

  const addTheAmount=()=>{
    
  }


  return (
    <div className='product'>
      <div className="product-info">
        <p>{title}</p>
        <p className='product_price'>
            <small>$</small>
            <strong>{price}</strong>
        </p>

        <div className="product-rating">
        {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
          
        </div>
      </div>

      <img src={image} alt=''/>
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product
