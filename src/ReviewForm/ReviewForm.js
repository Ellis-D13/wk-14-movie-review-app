// Import the React library and useState for managing form state
import React, { useState } from 'react';

// Define the ReviewForm functional component
const ReviewForm = ({ addReview }) => {

  // Create state variables for the review text and author
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');

  // Define the function that will handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Call the addReview function, passing in the text and author
    addReview({ text, author });

    // Reset the form fields
    setText('');
    setAuthor('');
  };

  return (
    // Create the form element
    <form onSubmit={handleSubmit}>

      {/* Textarea for review text */}
      <textarea
        placeholder="Your review..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>

      {/* Input field for the author's name */}
      <input
        type="text"
        placeholder="Your name"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />

      {/* Submit button */}
      <button type="submit">Submit</button>

    </form>
  );
};

// Export the ReviewForm component
export default ReviewForm;
