import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";
import './App.css';
import About from './About.js';
import Home from './Home.js';
import Features from './Features.js';
import Pricing from './Pricing.js';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/">  {/* Link to the home page on click */}
            <h1 className="App-title">Orbit API</h1>  {/* Website name */}
          </Link>
          <nav>
            <Link to="/features">Features</Link>
            <Link to="/about">About</Link>
            <Link to="/pricing">Pricing</Link>
          </nav>
          <a
            href="https://github.com/Sourish2003/react_app"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            <FaGithub className="github-icon" /> {/* Include GitHub Icon */}
          </a>
        </header>
        <div className="App-body">
          <Routes>
            <Route path="/" element={<Home />} />  {/* Route for Home page component */}
            <Route path="/features" element={<Features />} />  {/* Route for Features page component */}
            <Route path="/about" element={<About />} />  {/* Route for About page component */}
            <Route path="/pricing" element={<Pricing />} />  {/* Route for Pricing page component */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

// Other page components can be similarly created for Features, About, and Pricing

export default App;