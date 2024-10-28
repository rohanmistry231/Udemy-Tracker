// src/pages/AddNotes.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext'; // Import theme context

const AddNotes = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { theme } = useTheme(); // Use theme context
  const isDarkMode = theme === 'dark'; // Check if dark mode is enabled
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [courseName, setCourseName] = useState('');

  useEffect(() => {
    const fetchCourseName = async () => {
      try {
        const response = await fetch(`http://localhost:5000/courses/${id}`);
        const data = await response.json();
        setCourseName(data.name);
      } catch (error) {
        console.error('Error fetching course name:', error);
      }
    };

    fetchCourseName();
  }, [id]);

  const handleAddNote = async (e) => {
    e.preventDefault();
    try {
      await fetch(`http://localhost:5000/courses/${id}/notes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question, answer }), // Send both question and answer
      });
      navigate(`/courses/${id}/view`); // Redirect after adding the note
    } catch (error) {
      console.error('Error adding note:', error);
    }
  };

  return (
    <div className={`container mx-auto px-4 py-6 mt-10 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className={`shadow-md rounded-lg p-6 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
        <h2 className="text-2xl font-bold mb-4">Add Notes for {courseName}</h2>
        
        <form onSubmit={handleAddNote} className="space-y-4">
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className={`border p-2 w-full h-24 ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}
            placeholder="Enter your question..."
          />
          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className={`border p-2 w-full h-24 ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}
            placeholder="Enter your answer..."
          />

          {/* Button Container with Flexbox */}
          <div className="flex space-x-2">
            <button
              type="submit"
              className={`bg-green-500 text-white p-2 rounded hover:bg-green-600 ${isDarkMode ? 'hover:bg-green-400' : 'hover:bg-green-600'}`}
            >
              Add Note
            </button>
            <button
              onClick={() => navigate('/courses')} // Adjust the path as necessary
              className={`bg-blue-500 text-white p-2 rounded hover:bg-blue-600 ${isDarkMode ? 'hover:bg-blue-400' : 'hover:bg-blue-600'}`}
            >
              Back to Courses
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNotes;