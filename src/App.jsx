import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './screens/About.jsx';
import Home from './screens/Home.jsx';
import Features from './screens/Features.jsx';
import Pricing from './screens/Pricing.jsx';
import Navbar from './NavBar/Navbar.jsx';

function App() {
  return (
    <Router>

      <div className="App">
        {/* <header className="App-header">
        </header> */}
        <div className="App-body">
          <Navbar />
          <main className="main-content" />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;