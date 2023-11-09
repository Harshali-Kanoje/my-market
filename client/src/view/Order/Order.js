import React, { useEffect, useState } from 'react'
import Navbar from '../../component/Navbar/Navbar'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './Order.css'

const Order = () => {

  const [user, setUser] = useState({})
  const [orders, setOrders] = useState([])

  const loadOrders = async () => {
    const userId = user._id;

    if (!userId) {
      return;
    }

    const response = await axios.get(`/order/user/${userId}`);
    setOrders(response?.data?.data)
  }

  useEffect(() => {
    loadOrders();
  }, [user])

  useEffect(() => {
    const storgeuser = JSON.parse(localStorage.getItem("user" || '{}'))
    if (storgeuser?.email) {
      setUser(storgeuser)
    }
    else {
      alert("You are not logged in")
      window.location.href = '/login'
    }
  }, [])

  const BADGE_Color = {
   "shipped" : "bg-orange",
   "delivered" : "bg-success",
   "pending" : "bg-warning"
  }

  return (
    <div>
      <Navbar />
      {
        orders?.map((order, index) => {
        const {product , quantity, status, deliverCharges} = order;

        return(
          <div>
            <Link to={`/buy/${product._id}`}>{product.name}</Link>
            <p>{product.price} X {quantity} = {product.price * quantity}</p>
            <p className={`${BADGE_Color[status]}`}>{status}</p>
            <p>Delivery Charges : {deliverCharges}</p>
          </div>
        )
        })
      }
    </div>
  )
}

export default Order;
