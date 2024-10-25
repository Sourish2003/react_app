import "../App";
import React, { useState, useEffect } from "react";
import { fetchGithubAccessToken } from "../github_auth/github.jsx"; // Make sure this import is correct
import "../App.css";

function Home() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
              No need to write test cases for APIs, just connect your repository
              and let the automated tests run!
            </p>
            <button className="bg-[#4554CB] hover:bg-[#3A46AC] text-white font-medium px-8 py-3 rounded-lg transition-colors">
              Get Started
            </button>
          </div>

          {/* Right column - Image */}
          <div className="flex-1">
            <div>
              <img
                src={require("../assets/images/image.jpg")}
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
              Speed Test
              <br />
              API testing
              <br />
              using
              <br />
              Orbit API
            </h2>
          </div>
          <div className="bg-gray-100 rounded-2xl p-8">
            {/* Empty card as shown in the image */}
          </div>
        </div>

        {/* Repositories Section */}
        {loading && <p className="text-center">Loading repositories...</p>}
        {error && <p className="text-red-500 text-center">{error}</p>}
        {repos.length > 0 && (
          <div className="py-8">
            <h2 className="text-2xl font-bold mb-4">
              Your GitHub Repositories:
            </h2>
            <ul className="space-y-4">
              {repos.map((repo) => (
                <li
                  key={repo.id}
                  className="border p-4 rounded-lg shadow hover:shadow-lg transition-shadow"
                >
                  <h3 className="font-semibold text-lg">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      {repo.name}
                    </a>
                  </h3>
                  <p className="text-gray-600">
                    {repo.description || "No description available"}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>⭐ {repo.stargazers_count}</span>
                    <span>🔄 {repo.forks_count}</span>
                    <span>{repo.language}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
