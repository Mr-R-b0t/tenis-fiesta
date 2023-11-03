// Import the 'http' module from the '../http-common' file
import http from '../http-common'

// Create a class called 'ProductDataService' to manage product-related data
class ProductDataService {
  // Method to retrieve all product data
  getAll () {
    // Send a GET request to the '/product' endpoint
    return http.get('/product')
  }

  // Method to create a new product entry
  create (data) {
    // Send a POST request to the '/product' endpoint with the provided data
    return http.post('/product', data)
  }

  // Method to retrieve product data by a specific ID
  get (id) {
    // Send a GET request to the '/product/{id}' endpoint
    return http.get(`/product/${id}`)
  }

  // Method to update a product entry by a specific ID
  update (id, data) {
    // Send a PUT request to the '/product/{id}' endpoint with the provided data
    return http.put(`/product/${id}`, data)
  }

  // Method to delete a product entry by a specific ID
  delete (id) {
    // Send a DELETE request to the '/product/{id}' endpoint
    return http.delete(`/product/${id}`)
  }
}

// Export an instance of the 'ProductDataService' class
export default new ProductDataService()
