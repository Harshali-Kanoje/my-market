import React from 'react'
import { Link } from 'react-router-dom'
import './ProductCard.css'

const ProductCard = ({name, description, price, category, brand, image,_id}) => {
  return (
    <div className='product-container'>
              <p>name : {name}</p>
              <p>{description}</p>
              <img src={image}/>
              <p>{category}</p>
              <p>{brand}</p>
              <p>{price}</p>
              <Link to={`/buy/${_id}`}>Add To Cart</Link>
    </div>
  )
}

export default ProductCard
