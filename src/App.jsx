import React from 'react'
import About from './components/About'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from './components/Navigation';
import ContactUs from './components/ContactUs';
import Header from './components/Header';

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>

          <Route path='/' index element={<About />} />
          <Route path='/contact' element={<ContactUs />} />

        </Routes>
      <Navigation />
      </BrowserRouter>
    </>
  )
}

export default App
