// Import the React library for JSX and component creation
import React from 'react';

// Define the Review functional component
// It takes 'text' and 'author' as props
const Review = ({ text, author }) => {

  return (
    // Start the JSX for the component
    <div className="review">

      {/* Display the review text */}
      <p className="review-text">
        {text}
      </p>

      {/* Display the author of the review */}
      <p className="review-author">
        - {author}
      </p>

    </div>
  );
};

// Export the Review component to make it available for import in other files
export default Review;
