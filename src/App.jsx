import { useState, useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import { About, Services, Home, Contact } from './components/pages/'
import ScrollToTop from './components/pages/ScrollToTop'
import Footer from './components/pages/Footer'


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,     
      offset: 100,    
    });
  }, []);
  return (
    <>
     <div className='App'>
     <ScrollToTop />
      <Navbar />
      
      <Routes>
      <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<Contact />} />
        <Route path='/services' element={<Services />} />
      </Routes>
     <Footer />
     </div>
    </>
  )
}

export default App
