import axios from 'axios'

export function fetchNews () {
  return axios.get('https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=fd7f7721de6249198d8a9fa730eb6447')
}
