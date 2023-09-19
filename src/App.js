// Import necessary modules from React and your component files
import React, { useState, useEffect } from 'react';
import MovieCard from "./components/Movie/MovieCard";
import "./App.css";

// App functional component
const App = () => {
  // State for storing the search term input by the user
  const [searchTerm, setSearchTerm] = useState("");
  // State for storing the list of movies fetched from the API
  const [movies, setMovies] = useState([]);

  // Function to update the movie rating
  const updateRating = (imdbID, newRating) => {
    // Map through the list of movies and update the rating of the movie with the matching IMDb ID
    const updatedMovies = movies.map(movie =>
      movie.imdbID === imdbID ? { ...movie, rating: newRating } : movie
    );
    // Update the movies state with the new ratings
    setMovies(updatedMovies);
  };

  // Function to add a new review
  const addReview = (imdbID, review) => {
    // Map through the list of movies and add the review to the movie with the matching IMDb ID
    const updatedMovies = movies.map(movie =>
      movie.imdbID === imdbID ? { ...movie, reviews: [...movie.reviews, review] } : movie
    );
    // Update the movies state with the new reviews
    setMovies(updatedMovies);
  };

  // useEffect hook to run code after the component mounts
  useEffect(() => {
    // Fetch movies initially based on a default search term "Goonies"
    searchMovies("Goonies");
  }, []);

  // Function to fetch movies based on a search term
  const searchMovies = async (title) => {
    // Fetch movie data from the API
    const response = await fetch(`http://www.omdbapi.com/?apikey=3CC777dc&s=${title}`);
    const data = await response.json();
    
    // Enrich the movie data by adding 'reviews' and 'rating' properties
    const enrichedMovies = data.Search.map(movie => ({
      ...movie,
      reviews: [],
      rating: 0
    }));

    // Update the movies state
    setMovies(enrichedMovies);
  };

  // JSX for rendering the component
  return (
    <div className="app">
      <h1>Movie Library</h1>
      <div className="search">
        {/* Input box for searching movies */}
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        {/* Button to trigger movie search */}
        <button onClick={() => searchMovies(searchTerm)}>Search</button>
      </div>
      {/* Display movies or show a message if no movies are found */}
      {movies?.length > 0 ? (
        <div className="container">
          {/* Map through the list of movies and render a MovieCard for each */}
          {movies.map((movie) => (
            <MovieCard 
              key={movie.imdbID} 
              movie={movie} 
              updateRating={updateRating}
              addReview={addReview} 
            />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
