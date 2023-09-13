// Import React library for JSX and component creation
import React from 'react';

// Define the Stars functional component
// It takes 'rating' as a prop to represent the number of filled stars
const Stars = ({ rating }) => {

  // Create an array with 5 elements for 5 stars
  // Then map each element to either a filled star (★) or an empty star (☆) based on the rating
  const stars = Array.from({ length: 5 }, (v, i) => {
    return i < rating ? "★" : "☆";
  }).join(" "); // Join the array elements into a string separated by spaces

  return (
    // Start the JSX for the component
    <div className="stars">

      {/* Display the stars as a string */}
      {stars}

    </div>
  );
};

// Export the Stars component to make it available for import in other files
export default Stars;
