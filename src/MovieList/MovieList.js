// Import React library for JSX and component creation
import React from 'react';
// Import the Movie component to use within MovieList
import Movie from './Movie';
// Import the mock data from the data.js file
import data from '../data';

// Define the MovieList functional component
const MovieList = () => {
  return (
    // Start the JSX for the component
    <div className="movie-list">
      {
        // Use the JavaScript map function to iterate over each movie in the data array
        // For each movie, create a Movie component
        // The 'key' helps React identify each component uniquely
        // 'movie' is a prop sent to each Movie component
        data.map((movie, index) => (
          <Movie key={index} movie={movie} />
        ))
      }
    </div>
  );
};

// Export the MovieList component to make it available for import in other files
export default MovieList;
