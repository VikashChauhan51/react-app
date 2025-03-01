import { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css'
import Home from './Home'
import About from './About'
import Navbar from './components/navbar'
import Footer from './components/footer'
import SignIn from './Auth/SignIn'
import SignUp from './Auth/SignUp'

function App() {
   

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
    <Footer />
    </BrowserRouter>

  )
}

export default App
