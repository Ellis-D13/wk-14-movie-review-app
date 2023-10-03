// Import necessary modules from React and other component files
import React, { useState, useEffect } from 'react';
import MovieCard from "./components/Movie/MovieCard";
import "./App.css";



// Main App component
const App = () => {
  // State for search term entered by the user
  const [searchTerm, setSearchTerm] = useState("");
  
  // State for holding list of movies from API
  const [movies, setMovies] = useState([]);

  // Function to update rating of a movie
  const updateRating = (imdbID, newRating) => {
    // Update the rating of the movie with the matching IMDb ID
    const updatedMovies = movies.map(movie =>
      movie.imdbID === imdbID ? { ...movie, rating: newRating } : movie
    );
    setMovies(updatedMovies);
  };

  // Function to add a new review to a movie
  const addReview = (imdbID, review) => {
    // Add the review to the movie with the matching IMDb ID
    const updatedMovies = movies.map(movie =>
      movie.imdbID === imdbID ? { ...movie, reviews: [...movie.reviews, review] } : movie
    );
    setMovies(updatedMovies);
  };

  // useEffect to fetch data after component mounts
  useEffect(() => {
    searchMovies("Goonies");
  }, []);

  // Function to fetch movies based on the search term
  const searchMovies = async (title) => {
    const response = await fetch(`http://www.omdbapi.com/?s=${title}&apikey=3cc777dc`);
    const data = await response.json();
    
    // Check if 'Search' exists in response before mapping
    if (data && data.Search) {
      const enrichedMovies = data.Search.map(movie => ({
        ...movie,
        reviews: [],
        rating: 0
      }));
      setMovies(enrichedMovies);
    }
  };

  // Render JSX
  return (
    <div className="app">
      <h1>Movie Library</h1>
      <div className="search">
      <input
        type="text"
        placeholder="Search for a movie..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <button onClick={() => searchMovies(searchTerm)}>
        Search
      </button>
    
      </div>

      {/* Bootstrap container-fluid for full-width */}
      <div className="container-fluid">

        {/* Bootstrap row with custom styles for horizontal scrolling */}
        <div className="row flex-row flex-nowrap" style={{ overflowX: "auto" }}>

          {/* Loop through movies */}
          {movies.length > 0 ? (
            movies.map((movie) => (
              // Bootstrap column class
              <div className="col-3" key={movie.imdbID}>
                <MovieCard 
                  movie={movie}
                  updateRating={updateRating}
                  addReview={addReview}
                />
              </div>
            ))
          ) : (
            <div className="empty">
              <h2>No movies found</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


export default App;