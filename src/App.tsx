import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Portfolio } from './pages/Portfolio';
import { Visuals } from './pages/Visuals';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/visuals" element={<Visuals />} />
      </Routes>
    </Router>
  );
}

export default App;
