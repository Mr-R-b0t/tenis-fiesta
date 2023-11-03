// Import the 'axios' library for making HTTP requests
import axios from 'axios'

// Export an instance of 'axios' configured with specific settings
export default axios.create({
  // Set the base URL for the API requests
  baseURL: 'http://localhost:8080/api',

  // Enable sending credentials with cross-origin requests
  withCredentials: true,

  // Define headers for HTTP requests
  headers: {
    'Content-type': 'application/json' // Specify the content type as JSON
    // You can uncomment and add an Authorization header with a token from local storage
    // 'Authorization': 'Bearer ' + localStorage.getItem('token'),
  }
})
