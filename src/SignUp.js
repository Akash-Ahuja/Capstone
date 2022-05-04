import React,{useEffect, useState} from 'react'
//import './forms.css'
import './signup.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import {auth, registerWithEmailAndPassword,signInWithGoogle} from './config/fire'
import {useNavigate, Link} from 'react-router-dom'
//import {createUserWithEmailAndPassword, sendEmailVerification} from 'firebase/auth'
//import {useAuthValue} from './AuthContext'

function SignUp() {

 /*  const [fname, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const {setTimeActive} = useAuthValue()

  const validatePassword = () => {
    let isValid = true
    if (password !== '' && confirmPassword !== ''){
      if (password !== confirmPassword) {
        isValid = false
        setError('Passwords does not match')
      }
    }
    return isValid
  }

  const register = e => {
    e.preventDefault()
    setError('')
    if(validatePassword()) {
      // Create a new user with email and password using firebase
        createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          sendEmailVerification(auth.currentUser)   
          .then(() => {
            setTimeActive(true)
            navigate('/verify-email')
          }).catch((err) => alert(err.message))
        })
        .catch(err => setError(err.message))
    }
    setEmail('')
    setPassword('')
    setConfirmPassword('')
  }
 */
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
      <div className='register'>
      <div className='register__container'>
          <h1>Register</h1>
          <input
            type='text'
            className="register__textBox"
            value={name}
            required
            placeholder='Full Name'
            onChange={e => setName(e.target.value)}
            
          />
          <input 
            type='email' 
            className="register__textBox"
            value={email}
            required
            placeholder="Enter your email"
            onChange={e => setEmail(e.target.value)}
            
          />
          <input 
            type='password'
            className="register__textBox"
            value={password} 
            required
            placeholder='Enter your password'
            
            onChange={e => setPassword(e.target.value)}
            
          />

          {/* <input 
            type='password'
            value={confirmPassword} 
            required
            placeholder='Confirm password'
            onChange={e => setConfirmPassword(e.target.value)}/> */}
            
          {/* SignUp Button */}
          <button 
            type='submit'
            onClick={register}
          >
            Sign Up
          </button>

          {/* Sign Up with Google Button */}
          <button 
            type='submit'
            onClick={signInWithGoogle}
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