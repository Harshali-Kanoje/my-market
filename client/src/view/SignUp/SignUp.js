import React, { useState ,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../../../src/index.css'
import './SignUp.css'
import Navbar from '../../component/Navbar/Navbar'

const SignUp = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [mobile, setMobile] = useState('')
  const [address, setAdress] = useState('')
  const [gender, setGender] = useState('female')

  const signup = async () => {
   if(!name)
   {
    alert("Name is required");
    return;
   }

   if(!email)
   {
    alert("Email is required");
    return;
   }

   if(!password)
   {
    alert("Password is required");
    return;
   }

   if(!mobile)
   {
    alert("Mobile is required");
    return;
   }

   if(!address)
   {
    alert("Adress is required");
    return;
   }

   if(!gender)
   {
    alert("Gender is required");
    return;
   }

   const response = await axios.post('/signup' , {
    name: name,
    email:email,
    password:password,
    mobile:mobile,
    address:address,
    gender:gender
   })

   alert(response?.data?.message)

   if(response?.data?.success)
   {
    window.location.href = '/login'
   }
  }

  useEffect(() => {
    const storeuser = JSON.parse(localStorage.getItem("user" || '{}'))
    if(storeuser?.email)
    {
      alert("You have already signup !")
      window.location.href = '/';
    }
},[])

  return (
    <div>
      <Navbar/>
    
    <div className='j-content-center'>
      <form className='form-container'>
        <h1 className='text-center'>SignUp</h1>
        <div className='form-input'>
          <label htmlFor='name'>Name : </label><br/>
          <input type='text'
           placeholder='Enter Your Name'
            id='name'
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }} />
        </div>

        <div className='form-input'>
          <label htmlFor='email'>Email : </label>
          <br/>
          <input  
          type='text'
          placeholder='Enter Your Email'
            id='email'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }} />
        </div>

        <div className='form-input'>
          <label htmlFor='password'>Password : </label>
          <br/>
          <input 
          placeholder='Enter Your Password'
          type='password'
            id='password'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}/>
        </div>

        <div className='form-input'>
          <label htmlFor='mobile'>Mobile : </label>
          <br/>
          <input 
           type='text'
          placeholder='Enter Your Mobile'
            id='mobile'
            value={mobile}
            onChange={(e) => {
              setMobile(e.target.value)
            }} />
        </div>

        <div className='form-input'>
          <label htmlFor='address'>Adress : </label>
          <br/>
          <input 
           type='text'
          placeholder='Enter Your Adress'
            id='address'
            value={address}
            onChange={(e) => {
              setAdress(e.target.value)
            }} />
        </div>

        <div>
          <input type='radio' name='gender' id='male' checked={gender === 'male'}
            onClick={() => {
              setGender('male')
            }} />
          <label>Male</label>

          <input type='radio' name='gender' id='female' checked={gender === 'female'}
            onClick={() => {
              setGender('female')
            }} />
          <label>Female</label>
        </div>

        <button type='button' onClick={signup} className='signup-btn'>SignUp</button>

        <p>
        <Link to={'/login'}>Already having an account</Link>
      </p>
      </form >
    </div >
    </div>
  )
}

export default SignUp;
