// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
// import Navbar from './components/Navbar';
// import Dashboard from './dashboard/dashboard';
import Home from './screens/Home';
import Features from './screens/Features';
import About from './screens/About';
import Pricing from './screens/Pricing';
import Navbar from './NavBar/Navbar';

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="pt-[var(--navbar-height)]"> {/* Adjust content for navbar height */}
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