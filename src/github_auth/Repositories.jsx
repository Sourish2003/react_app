import React, { useEffect, useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';

const Repositories = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      if (!isAuthenticated) return;

      try {
        const token = await getAccessTokenSilently({
          audience: "https://dev-hrmgixm7udp8vimi.us.auth0.com/api/v2/",
          scope: "read:repo read:user repo"
        });

        const response = await axios.get('https://api.github.com/user/repos', {
          headers: {
            Accept: `application/vnd.github+json`,
            Authorization: `Bearer ${token}`
          }
        });

        setRepos(response.data);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [isAuthenticated, getAccessTokenSilently]);

  if (!isAuthenticated) {
    return <div className="mt-16 p-4">Please log in to view repositories</div>;
  }

  if (loading) {
    return <div className="mt-16 p-4">Loading repositories...</div>;
  }

  return (
    <div className="container mx-auto p-4 mt-16">
      <h2 className="text-2xl font-bold mb-4">Your GitHub Repositories</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {repos.map(repo => (
          <div key={repo.id} className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">
              <a 
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                {repo.name}
              </a>
            </h3>
            <p className="text-gray-600 mb-2">{repo.description || 'No description available'}</p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>⭐ {repo.stargazers_count}</span>
              <span>🔄 {repo.forks_count}</span>
              <span>{repo.language}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Repositories;