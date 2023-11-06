import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {

    const [user , setUser] = useState({})

    useEffect(() => {
        const storeuser = JSON.parse(localStorage.getItem("user" || '{}'))
        setUser(storeuser)
    },[])
    return (
        <div className='navbar'>
            <div>
                <Link to={'/'} className='nav-links'>My Market 🛒👜</Link>
            </div>

            <div>
                <Link to={'/signup'} className='nav-links'>SignUp</Link>
                <Link to={'/login'} className='nav-links'>Login</Link>
                <Link to={'/orders'} className='nav-links'>Orders</Link>
            </div>

            <div>
                <span> Hello , {user?.name || "User"}</span>
                {
                    user?.name ? <span onClick={() => {
                        localStorage.removeItem('user')
                        window.location.href = '/login'
                    }}
                    > Logout</span>:null
                }
                
            </div>
        </div>

    )
}

export default Navbar;
