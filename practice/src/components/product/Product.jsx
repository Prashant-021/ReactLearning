import React from 'react'
import './product.css'
const Product = (props) => {
  return (
    <div className='product'>
        <h3>{props.title}</h3>
        <p>{props.amount}</p>
        <p>{props.date}</p>
    </div>
  )
}

export default Product