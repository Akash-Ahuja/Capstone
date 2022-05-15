import React,{useEffect, useState} from 'react'
import './signup.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import {auth, registerWithEmailAndPassword,signInWithGoogle} from './config/fire'
import {useNavigate, Link} from 'react-router-dom'

function SignUp() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const register = () => {
    if(!name) alert ("Please enter name");
    registerWithEmailAndPassword(name,email,password);
  };
  useEffect(() => {
    if(loading) {
      //maybe trigger a loading screen
      return;
    }
    if(user) navigate("/profile");
  }, [user, loading]);



  return (
    <div className='center'>
      <div className='signup'>
        <div className='signup__container'>
            <h1>Register</h1>
            <input
              type="text"
              className="signup__textbox"
              value={name}
              required
              placeholder="Full Name"
              onChange={e => setName(e.target.value)}
              
            />
            <input 
              type="email"
              className="signup__textbox"
              value={email}
              required
              placeholder="Enter your email"
              onChange={e => setEmail(e.target.value)}
              
            />
            <input 
              type='password'
              className='signup__textbox'
              value={password} 
              required
              placeholder='Enter your password'
              
              onChange={e => setPassword(e.target.value)}
              
            />

            {/* SignUp Button */}
            <button 
              type='submit'
              onClick={register}
              className="button"
            >
              Sign Up
            </button>

            {/* Sign Up with Google Button */}
            <button 
              type='submit'
              onClick={signInWithGoogle}
              className="button"
            >
              Sign Up with Google
            </button>

            {/* Button to login an account */}
            <div>
                Already have an account? <Link to='/login'>Login</Link> now.
            </div>

          </div>
      </div>
    </div>
  )
}

export default SignUp;