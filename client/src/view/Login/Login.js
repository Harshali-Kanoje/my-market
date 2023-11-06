import axios from 'axios'
import React ,{useState , useEffect} from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../component/Navbar/Navbar'

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

  // const [user , setUser] = useState({})

    useEffect(() => {
        const storeuser = JSON.parse(localStorage.getItem("user" || '{}'))
        if(storeuser?.email)
        {
          alert("You have already logged in!")
          window.location.href = '/';
        }
    },[])

  return (
    <div>
    <Navbar/>
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
  </div>
  )
}

export default Login;
