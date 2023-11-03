// Import the 'http' module from the '../http-common' file
import http from '../http-common'

// Create a class called 'CheckOutDataService' to manage checkout-related data
class CheckOutDataService {
  // Method to retrieve all checkout data
  getAll () {
    // Send a GET request to the '/checkout' endpoint
    return http.get('/checkout')
  }

  // Method to create a new checkout entry
  create (data) {
    // Send a POST request to the '/checkout' endpoint with the provided data
    return http.post('/checkout', data)
  }

  // Method to retrieve checkout data by a specific ID
  get (id) {
    // Send a GET request to the '/checkout/{id}' endpoint
    return http.get(`/checkout/${id}`)
  }

  // Method to update a checkout entry by a specific ID
  update (id, data) {
    // Send a PUT request to the '/checkout/{id}' endpoint with the provided data
    return http.put(`/checkout/${id}`, data)
  }

  // Method to delete a checkout entry by a specific ID
  delete (id) {
    // Send a DELETE request to the '/checkout/{id}' endpoint
    return http.delete(`/checkout/${id}`)
  }
}

// Export an instance of the 'CheckOutDataService' class
export default new CheckOutDataService()
