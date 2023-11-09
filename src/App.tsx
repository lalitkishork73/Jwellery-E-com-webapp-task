import React from 'react';
import './App.css';
import { Header, Footer } from './components';
import {Home,AboutUs,Contactus,PrivacyPollicy,Search,Earrings,Rings,Necklaces,Cart} from './Pages';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/contactus' element={<Contactus />} />
        <Route path='/privacypolicy' element={<PrivacyPollicy />} />
        <Route path='/search' element={<Search />} />
        <Route path='/earrings' element={<Earrings />} />
        <Route path='/rings' element={<Rings />} />
        <Route path='/necklaces' element={<Necklaces />} />
        <Route path='/cart' element={<Cart />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
