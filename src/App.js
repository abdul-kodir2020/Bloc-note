import React, { useState } from 'react';
import './style.css';
import BlocNote from './BlocNote';
import Header from './Header';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <div className="corps w-100">
        <Routes>
          <Route path="/bloc-note" element={<BlocNote />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
