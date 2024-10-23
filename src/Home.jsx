import React from 'react';
import './App';

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between py-12 md:py-24 gap-8">
          {/* Left column - Text content */}
          <div className="flex-1 max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Instantly automate your API testing
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              No need to write test cases for APIs, just connect your repository and let the automated tests run!
            </p>
            <button className="bg-[#4554CB] hover:bg-[#3A46AC] text-white font-medium px-8 py-3 rounded-lg transition-colors">
              Get Started
            </button>
          </div>

          {/* Right column - Image */}
          <div className="flex-1">
            <div>
              <img 
                src={require('./assets/images/image.jpg')} 
                alt="API Testing Illustration" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Speed Test Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
          <div className="bg-gray-100 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-center text-black">
              Speed Test<br />
              API testing<br />
              using<br />
              Orbit API
            </h2>
          </div>
          <div className="bg-gray-100 rounded-2xl p-8">
            {/* Empty card as shown in the image */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;