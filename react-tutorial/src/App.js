import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { Home } from './components/Home';
import { About } from './components/About';
import { OrderSummary } from './components/OrderSummary';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="order-summary" element={<OrderSummary />} />
        </Routes>
      </Navbar>
    </>
  )
}

export default App;



