import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import {useState, useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  SignUp from './SignUp';
import  PublicForum from './PublicForum';
import AboutUs from './AboutUs';
import Footer from './Footer';
import Login from './Login'
import PrivateRoute from './PrivateRoute'
import {onAuthStateChanged} from 'firebase/auth'
import {auth} from './config/fire'
import {AuthProvider} from './AuthContext'
import Profile from './Profile';
import Home from './Home'
import VerifyEmail from './VerifyEmail';

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [timeActive, setTimeActive] = useState(false)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
  }, [])

  return (
    <>
      <Router>
      <Navbar />
        <AuthProvider value={{currentUser, timeActive, setTimeActive}}>
          <Routes>
            <Route exact path='/profile' element={
              <PrivateRoute>
                {<Profile/>}
              </PrivateRoute>
            }/>
            <Route exact path='/'  element={<Home />} />
            <Route path='/sign-up' element={<SignUp /> } />
            <Route path='/public-forum' element={<PublicForum />} />
            <Route path='/about-us' element={<AboutUs />} /> 
            <Route path ='/login' element={<Login />} />
            <Route path='/verify-email' element={<VerifyEmail/>} /> 
          </Routes>
        </AuthProvider>
      <Footer />
      </Router>
    </>
  );
}

export default App;