// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { useState } from 'react'
import Navbar from './components/Navbar';
import EventPage from './components/EventPage';
import Landing from './components/Landing';
import Sponsor from './components/Sponsor';
import Register from './components/Register';
import Contact from './components/Contact';
import Footer from './components/Footer';
const Events = EventPage

function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <Events/>
      <Sponsor />
      <Register />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
