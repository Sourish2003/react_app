import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

// import Repositories from 'github_auth/Repositories.jsx';

const management_token = process.env.REACT_APP_AUTH0_MANAGEMENT_API;

// Function to fetch GitHub repositories using the access token
export const fetchGithubAccessToken = async (user) => {
  try {
    const user_id = user["sub"].split("|")[1];
    console.log("user: ", user_id);

    const response = await axios.get(
      "https://dev-hrmgixm7udp8vimi.us.auth0.com/api/v2/users",
      {
        headers: {
          Accept: `application/vnd.github+json`,
          Authorization: `Bearer ${management_token}`,
        },
      }
    );
    console.log("Users data:", response.data);

    const users = response.data;

    for (let userObj of users) {
      const identities = userObj["identities"];

      // Check if this user has a GitHub identity and matches the user_id
      const githubIdentity = identities.find(
        (identity) =>
          identity.provider === "github" && identity.user_id === user_id
      );

      if (githubIdentity) {
        const githubToken = githubIdentity.access_token;

        // Store the GitHub token in local storage
        if (githubToken) {
          localStorage.setItem("github_access_token", githubToken);
          console.log("GitHub token saved to local storage.");
          break;
        }
      }
    }
  } catch (error) {
    console.error("Error fetching GitHub repositories:", error);
    throw error;
  }
};

export const fetchGithubRepositories = async () => {
  const github_access_token = localStorage.getItem("github_access_token");

  const data = await axios.get("https://api.github.com/user/repos", {
    headers: {
      Accept: `application/vnd.github+json`,
      Authorization: `Bearer ${github_access_token}`,
    },
  });
  console.log(data);

  return data;
};
