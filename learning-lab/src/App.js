import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Phonics from './components/phonics';
import CVC from './components/cvc';
import Stories from './components/stories';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/phonics" element={<Phonics />} />
        <Route path="/cvc" element={<CVC />} />
        <Route path="/stories" element={<Stories />} />
      </Routes>
    </Router>
  );
}

export default App;
