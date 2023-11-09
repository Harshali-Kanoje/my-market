import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../../component/Navbar/Navbar';
import './BuyProduct.css'

const BuyProduct = () => {

  const { _id } = useParams();

  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [shippingAdress, setShippingAdress] = useState('');

  const loadProduct = async () => {
    const response = await axios.get(`/product/${_id}`)
    setProduct(response?.data?.data);
  }

  const increaseQuantity = () => {
    setQuantity(quantity+1);
  }

  const decreaseQuantity = () => {
    if(quantity== 1)
    {
      return;
    }
    setQuantity(quantity-1);
  }

  useEffect(() => {
    loadProduct();
  }, [])

  const placeOrder = async () => {
     const currentUser = JSON.parse(localStorage.getItem('user') || '{}')

     const orderDetails = {
      user:currentUser._id,
      product:_id,
      quantity:quantity,
      shippingAdress:shippingAdress
    }

    const response = await axios.post('/order',orderDetails)

    alert(response?.data?.message)

    if(response?.data?.success)
    {
      window.location.href = '/orders'
    }
  }

  return (
    <div>
      <Navbar />
      <div className='product-detail'>
        <div>
          <img src={product.image} />
        </div>

        <div>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <div>
            <button onClick={decreaseQuantity}>-</button>
            <span>{quantity}</span>
            <button onClick={increaseQuantity}>+</button>
          </div>
          <input type='text' placeholder='Enter shipping Adress' value={shippingAdress} onChange={(e) => {
            setShippingAdress(e.target.value)
          }} />
        </div>
      </div>
      <button onClick={placeOrder}>Place Order</button>
    </div>
  )
}

export default BuyProduct;
