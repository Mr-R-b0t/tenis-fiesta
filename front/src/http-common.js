import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:8008/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
    // Authorization: 'Bearer ' + localStorage.getItem('token')
  }
})

export default http
