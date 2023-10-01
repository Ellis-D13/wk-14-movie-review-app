import React, { useState } from 'react';
import Stars from '../../Stars/Stars';
import ReviewList from '../ReviewList/ReviewList';
import MovieService from '../../MovieService';

const service = new MovieService();

// Define the MovieCard functional component
const MovieCard = ({ movie, updateRating, addReview }) => {
  // Local state to handle new reviews
  const [newReview, setNewReview] = useState("");

  // Function to handle review submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the review through service and update the component state
    service.addReview(movie.imdbID, newReview).then(() => {
      addReview(movie.imdbID, newReview);
      setNewReview("");
    });

    // Alternatively, you can use the addReview function passed as a prop
    // addReview(movie.imdbID, newReview);
    // setNewReview("");
  };

  return (
    <div className="movie" key={movie.imdbID}>
      <div>
        <p>{movie.Year}</p>
      </div>
      <div>
      <img 
  src={movie.Poster !== "N/A" ? movie.Poster : "/Not found.png"} 
  alt={movie.Title} 
  style={{ width: '300px', height: '400px' }}
/>
      </div>
      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>

      {/* Star rating component */}
      <Stars rating={movie.rating} onUpdate={(rating) => updateRating(movie.imdbID, rating)} /> 

      {/* Reviews section */}
      <div className="reviews">
        <h4>Reviews:</h4>
        {movie.reviews.length > 0 ? (
          movie.reviews.map((review, index) => <p key={index}>{review}</p>)
        ) : (
          <p>No reviews yet.</p>
        )}
      </div>

      {/* Existing reviews list */}
      <ReviewList reviews={movie.reviews} />

      {/* Form to add a new review */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
          placeholder="Add your review"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MovieCard;

