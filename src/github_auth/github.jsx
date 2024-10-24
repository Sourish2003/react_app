import axios from 'axios';

// Function to fetch GitHub repositories using the access token
export const fetchGitHubRepositories = async (accessToken) => {
  try {
    const response = await axios.get('https://api.github.com/user/repos', {
      headers: {
        Authorization: `token ${accessToken}`, // Use the GitHub access token
      },
    });
    return response.data; // Return the repositories data
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);
    throw error;
  }
};
