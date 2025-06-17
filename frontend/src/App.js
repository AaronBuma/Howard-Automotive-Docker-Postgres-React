import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navigation from './Navigation';
import HomePage from './HomePage';
import CarsPage from './CarsPage';
import EventsPage from './EventsPage';
import SponsorsPage from './SponsorsPage';
import ServicesPage from './ServicesPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cars" element={<CarsPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/sponsors" element={<SponsorsPage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
