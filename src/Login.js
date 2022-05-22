import React, {useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
//import './forms.css'
import './login.css'
//import {auth} from './config/fire'
import {auth,logInWithEmailAndPassword,signInWithGoogle} from "./config/fire";
//import {useAuthValue} from './AuthContext'
import {useAuthState} from "react-firebase-hooks/auth";


function Login(){

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('') 
  const [user, loading,error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if(loading) {
      //maybe trigger a loading screen
      return;
    }
    if(user) navigate("/profile");
  }, [user, loading]);

  return(
    <div className='center'>
      <div className='login'>
        <div className='login__container'>
          <h1>Log in</h1>
            <input 
              type="email"
              className="login__textbox" 
              value={email}
              required
              placeholder="Enter your email"
              onChange={e => setEmail(e.target.value)}/>

            <input 
              type='password'
              className="login__textbox"
              value={password}
              required
              placeholder='Enter your password'
              onChange={e => setPassword(e.target.value)}/>

            {/* Login Button */}
            <button 
              type="submit"
              className="login_btn"
              onClick={() => logInWithEmailAndPassword(email,password)}
            >
              Login
            </button>

            {/* Sign In with Google Button */}
            <button 
              type='submit'
              className="login_btn"
              onClick={signInWithGoogle}
            >
              Login with Google
            </button>

            {/* Forgot Password */}
            <div>
              <Link to="/reset">Forgot Password</Link>
            </div>
            {/* Button to create an account */}
            <div>
              Don't have an account? <Link to='/sign-up'>Register</Link> now.
            </div>
        </div>
      </div>
    </div>
  )
}

export default Login; 