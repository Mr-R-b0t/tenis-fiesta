// Import the 'http' module from the '../http-common' file
import http from '../http-common'

// Create a class called 'UserDataService' to manage user-related data
class UserDataService {
  // Method to create a new user
  create (data) {
    // Send a POST request to the '/user' endpoint with the provided data
    return http.post('/user', data)
  }

  // Method to post user login information
  postLogin (data) {
    // Send a POST request to the '/user/login' endpoint with the provided data
    return http.post('/user/login', data)
  }

  // Method to get user authentication information
  getAuth () {
    // Send a GET request to the '/user/auth' endpoint
    return http.get('/user/auth')
  }

  // Method to get user logout information
  getLogout () {
    // Send a GET request to the '/user/logout' endpoint
    return http.get('/user/logout')
  }
}

// Export an instance of the 'UserDataService' class
export default new UserDataService()
