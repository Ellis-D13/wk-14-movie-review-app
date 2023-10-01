// Import the React library for JSX and component creation
import React from 'react';
// ReviewList.js
import './ReviewList.css';
// Import the Review component, which will be used to display each review
import Review from '../../Review/Review';

// Define the ReviewList functional component
// It takes 'reviews' as a prop, an array of review objects
const ReviewList = ({ reviews }) => {

  // Map over the array of reviews, creating a Review component for each one
  const reviewItems = reviews.map((review, index) => {
    return (
      // Create a Review component for each review object
      // Pass the review data as props and give each a unique key
      <Review key={index} text={review.text} author={review.author} />
    );
  });

  return (
    // Start the JSX for the component
    <div className="review-list">

      {/* Display a header for the review list */}
      <h3>Reviews</h3>

      {/* Insert the array of Review components */}
      {reviewItems}

    </div>
  );
};

// Export the ReviewList component to make it available for import in other files
export default ReviewList;
