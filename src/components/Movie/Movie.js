// Import React library for JSX and component creation
import React from 'react';
// Import the Stars and ReviewList components
import Stars from './Stars';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';

// Define the Movie functional component
// It takes 'movie' as a prop, which contains information about a single movie
const Movie = ({ movie }) => {
  return (
    // Start the JSX for the component
    <div className="movie">

      {/* Display the movie's title */}
      <h2>{movie.title}</h2>

      {/* Display the movie's image */}
      <img src={movie.imageUrl} alt={movie.title} />

      {/* Display the movie's synopsis */}
      <p>{movie.synopsis}</p>

      {/* Include the Stars component for rating */}
      <Stars rating={movie.rating} />

      {/* Include the ReviewList component for displaying reviews */}
      <ReviewList reviews={movie.reviews} />

      {/* Include the ReviewForm component for submitting new reviews */}
      <ReviewForm />

    </div>
  );
};

// Export the Movie component to make it available for import in other files
export default Movie;
