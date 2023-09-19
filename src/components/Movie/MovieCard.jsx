import React, { useState } from 'react';
import Stars from '../../Stars/Stars';
import ReviewList from '../../ReviewList/ReviewList';

// Define the MovieCard functional component
const MovieCard = ({ movie, updateRating, addReview }) => { // Removed extra }
  const [newReview, setNewReview] = useState(""); 

  const handleSubmit = (e) => {
    e.preventDefault(); 
    addReview(movie.imdbID, newReview); 
    setNewReview(""); 
  };

  return (
    <div className="movie" key={movie.imdbID}>
      <div>
        <p>{movie.Year}</p> {/* Added movie. */}
      </div>

      <div>
        <img src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400"} alt={movie.Title} /> {/* Added movie. */}
      </div>

      <div>
        <span>{movie.Type}</span> {/* Added movie. */}
        <h3>{movie.Title}</h3> {/* Added movie. */}
      </div>

      <Stars rating={movie.rating} onUpdate={(rating) => updateRating(movie.imdbID, rating)} /> 

      <div className="reviews">
        <h4>Reviews:</h4>
        {movie.reviews.length > 0 ? (
          movie.reviews.map((review, index) => <p key={index}>{review}</p>)
        ) : (
          <p>No reviews yet.</p>
        )}
      </div>
        <ReviewList reviews={movie.reviews} />
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

