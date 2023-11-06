import React, { useEffect, useState } from 'react'
import Navbar from '../../component/Navbar/Navbar'

const Order = () => {

  const [user , setUser] = useState({})

  useEffect(() => {
    const storgeuser = JSON.parse(localStorage.getItem("user" || '{}'))
    if(storgeuser?.email)
    {
      setUser(storgeuser)
    }
    else{
      alert("You are not logged in")
      window.location.href = '/login'
    }
  },[])
  return (
    <div>
      <Navbar/>
    </div>
  )
}

export default Order
