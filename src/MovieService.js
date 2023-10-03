export default class MovieService {
    all() {
      // fetch from API
      // create movies.
      const url = "https://api.themoviedb.org/3/movie/550?api_key=67e875a180472dbead9a5f1b094df1eb";
  
    // Use fetch to get the data
    return fetch(url)
    .then(response => {
      // Check for errors
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      
      // Parse the JSON data from the response
      return response.json();
    })
    .then(data => {
      // Now, data is an array of movies
      // You can return it directly or manipulate it as needed
      return data;
    })
    .catch(error => {
      console.error(`Fetch operation failed: ${error}`);
      return [];
    });
  }
  
  
  getById(id) {
    // Construct the URL to fetch a specific movie by ID
    const url = `https://api.themoviedb.org/3/movie/550?api_key=67e875a180472dbead9a5f1b094df1eb=${id}`;
  
    // Use fetch to get the data
    return fetch(url)
      .then(response => {
        // Check for errors
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        
        // Parse the JSON data from the response
        return response.json();
      })
      .then(data => {
        // Now, data is an object representing the specific movie
        // You can return it directly or manipulate it as needed
        return data;
      })
      .catch(error => {
        console.error(`Fetch operation failed: ${error}`);
        return null;
      });
  }
  
  
  delete(id) {
    // Assuming the API endpoint for deleting a movie by ID is something like "http://www.omdbapi.com/movies/{id}"
    const url = `https://api.themoviedb.org/3/movie/550?api_key=67e875a180472dbead9a5f1b094df1eb${id}`;
  
    // Use fetch to send a DELETE request
    return fetch(url, {
      method: 'DELETE', // specify the method
    })
    .then(response => {
      // Check for errors
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      
      // Usually, DELETE endpoints return nothing or a confirmation message
      return response.json();
    })
    .then(data => {
      // Process the returned data if necessary
      return data;
    })
    .catch(error => {
      console.error(`Fetch operation failed: ${error}`);
      return [];
    });
  }
  
  create(movie) {
   
    const url = "https://api.themoviedb.org/3/movie/550?api_key=67e875a180472dbead9a5f1b094df1eb";
  
    // Use fetch to send a POST request
    return fetch(url, {
      method: 'POST', // specify the request method
      headers: {
        'Content-Type': 'application/json' // specify the data type
      },
      body: JSON.stringify(movie) // convert the movie object to JSON string
    })
    .then(response => {
      // Check for errors
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      
      // Parse the JSON data from the response
      return response.json();
    })
    .then(data => {
      // Process the returned data, which should be the newly created movie
      return data;
    })
    .catch(error => {
      console.error(`Fetch operation failed: ${error}`);
      return [];
    });
  }
  
  
  update(id, modifiedMovie) {
    
    const url = `https://api.themoviedb.org/3/movie/550?api_key=67e875a180472dbead9a5f1b094df1eb${id}`;
  
    // Use fetch to send a PUT request
    return fetch(url, {
      method: 'PUT', // specify the request method
      headers: {
        'Content-Type': 'application/json' // specify the data type
      },
      body: JSON.stringify(modifiedMovie) // convert the modified movie object to JSON string
    })
    .then(response => {
      // Check for errors
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      
      // Parse the JSON data from the response
      return response.json();
    })
    .then(data => {
      // Process the returned data, which should be the updated movie
      return data;
    })
    .catch(error => {
      console.error(`Fetch operation failed: ${error}`);
      return [];
    });
  }
  
  
  addReview(id, review) {
    // Assuming the API endpoint for adding a review to a movie by ID is "http://www.omdbapi.com/movies/{id}/reviews"
    const url = `https://api.themoviedb.org/3/movie/550?api_key=67e875a180472dbead9a5f1b094df1eb${id}/reviews`;
  
    // Use fetch to send a POST request
    return fetch(url, {
      method: 'POST', // specify the request method
      headers: {
        'Content-Type': 'application/json' // specify the data type
      },
      body: JSON.stringify(review) // convert the review object to JSON string
    })
    .then(response => {
      // Check for errors
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
  
      // Parse the JSON data from the response
      return response.json();
    })
    .then(data => {
      // Process the returned data, which should be the added review
      return data;
    })
    .catch(error => {
      console.error(`Fetch operation failed: ${error}`);
      return [];
    });
  }
  }