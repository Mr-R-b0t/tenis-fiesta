import axios from 'axios'
export default axios.create({
  baseURL: 'https://api.toxicsed.fr/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
    // Authorization: 'Bearer ' + localStorage.getItem('token')
  }
})
