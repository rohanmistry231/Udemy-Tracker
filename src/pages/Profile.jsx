// src/pages/Profile.js
import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';

const Profile = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  const [user, setUser] = useState({
    name: '',
    email: '',
    bio: '',
    avatarUrl: '', // Placeholder for user avatar
    socialLinks: {
      portfolio: '', // Default empty string to avoid undefined errors
      linkedin: '',
      github: '',
    },
  });

  useEffect(() => {
    // Simulate fetching user data (replace with actual API call)
    const userData = {
      name: 'Rohan Mistry',
      email: 'rohanmistry231@gmail.com',
      bio: 'A passionate learner exploring the world of technology.',
      avatarUrl: 'profile.jpg', // Example avatar URL
      socialLinks: {
        portfolio: 'https://irohanportfolio.netlify.app',
        linkedin: 'https://linkedin.com/in/rohan-mistry-493987202',
        github: 'https://github.com/rohanmistry231',
      },
    };
    setUser(userData);
  }, []);

  return (
    <div
      className={`min-h-screen p-6 mt-12 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}
    >
      {/* Profile Card */}
      <div
        className={`max-w-8xl mx-auto rounded-lg shadow-lg p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
      >
        {/* Profile Header */}
        <div className="flex items-center space-x-4">
            <img src={user.avatarUrl} alt="User Avatar" className="w-24 h-24 rounded-full object-cover" />
          <div>
            <h1 className="text-3xl font-semibold">{user.name}</h1>
            <a href='mailto:rohanmistry231@gmail.com' className="text-sm text-gray-500">{user.email}</a>
          </div>
        </div>

        {/* Bio Section */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Bio</h2>
          <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mt-2`}>
            {user.bio}
          </p>
        </div>

        {/* Additional Information Section */}
        <div className="mt-6 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">Progress Overview</h3>
            <Link to="/progress">
              <button
                className="px-4 py-2 rounded-md bg-blue-500 text-white"
              >
                View Full Progress
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {/* Add any relevant sections like course stats or other metrics */}
            <div className={`p-4 rounded-md shadow-md ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <h4 className="text-lg font-medium">Total Courses</h4>
              <p className="text-2xl font-semibold mt-2">120</p>
            </div>

            <div className={`p-4 rounded-md shadow-md ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <h4 className="text-lg font-medium">Completed Courses</h4>
              <p className="text-2xl font-semibold mt-2">85</p>
            </div>

            <div className={`p-4 rounded-md shadow-md ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <h4 className="text-lg font-medium">Certificates</h4>
              <p className="text-2xl font-semibold mt-2">25</p>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-6 space-y-4">
          <h3 className="text-lg font-medium">Social Media Links</h3>
          <div className="space-x-4">
            <a
              href={user.socialLinks.portfolio || '#'}
              className={`text-xl ${isDarkMode ? 'text-blue-300' : 'text-blue-600'}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Portfolio
            </a>
            <a
              href={user.socialLinks.linkedin || '#'}
              className={`text-xl ${isDarkMode ? 'text-blue-300' : 'text-blue-600'}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href={user.socialLinks.github || '#'}
              className={`text-xl ${isDarkMode ? 'text-blue-300' : 'text-blue-600'}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
