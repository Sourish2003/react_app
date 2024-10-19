import React from 'react';
import './App'

// Home page component
function Home() {
  return (
    <div className="home-container">
      <div className="description-container">
        <h2>Instantly automate your API testing</h2>
        <p>
          No need to write test cases for APIs, just connect your repository and let the automated tests run!
        </p>
        <button>Get Started</button>
      </div>
      <div className="image-container">
        <img src="E:\Development\GitHub\travel_world_frontend\lib\assets\image1.jpg" alt="HeroImage" /> {/* Replace "..." with your image source */}
      </div>
    </div>
  );
}
export default Home;