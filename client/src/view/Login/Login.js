import axios from 'axios'
import React ,{useState} from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const login = async () => {
     const response = await axios.post('/login' , {
      email:email,
      password:password
     })

     alert(response?.data?.message)

    if(response?.data?.success)
    {
      localStorage.setItem("user",JSON.stringify(response?.data?.data));
      window.location.href = '/';
    }
  }

  return (
    <div className='j-content-center'>
    <form className='form-container'>
      <h1 className='text-center'>Login</h1>

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

      <button type='button' onClick={login} className='signup-btn'>Login</button>

      <p>
        <Link to={'/signup'}>Create An Account</Link>
      </p>
    </form >
  </div >
  )
}

export default Login;
