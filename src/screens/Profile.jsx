import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <div>Please log in to view profile</div>;
  }

  return (
    <div className="container mx-auto p-4 mt-16">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-4">
          <div className="flex items-center">
            <img 
              src={user.picture} 
              alt={user.name}
              className="w-20 h-20 rounded-full"
            />
            <div className="ml-4">
              <h2 className="text-2xl font-bold">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;