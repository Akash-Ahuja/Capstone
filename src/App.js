import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  SignUp from './SignUp';
import  PublicForum from './PublicForum';
import AboutUs from './AboutUs';
import Footer from './Footer';
import Login from './Login'
import Profile from './Profile';
import Home from './Home'
import VerifyEmail from './VerifyEmail';
import Reset from './Reset';

function App() {

  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          
          <Route exact path='/'  element={<Home />} />
          <Route path='/sign-up' element={<SignUp /> } />
          <Route path='/reset' element={<Reset /> } />
          <Route path='/public-forum' element={<PublicForum />} />
          <Route path='/about-us' element={<AboutUs />} /> 
          <Route path ='/login' element={<Login />} />
          <Route path='/verify-email' element={<VerifyEmail/>} /> 
          <Route path='/profile' element={<Profile /> } />

          </Routes>
      <Footer />
      </Router>
    </>
  );
}

export default App;