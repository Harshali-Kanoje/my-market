import React from 'react'
import { Link } from 'react-router-dom'
import './ProductCard.css'

const ProductCard = ({name, description, price, category, brand, image,_id}) => {
  return (
    <div className='product-container'>
              <p className='text-center p-name'> {name}</p>
              <img src={image}/>
              <p>{description}</p>
              <p className='p-price'>₹{price}</p>
              <Link to={`/buy/${_id}`} className='p-btn'>Add To Cart</Link>
    </div>
  )
}

export default ProductCard
