import http from '../http-common'

class UserDataService {
  create (data) {
    return http.post('/users', data)
  }

  postLogin (data) {
    return http.post('/users/', data)
  }

  getAuth () {
    return http.get('/users/auth')
  }

  getLogout () {
    return http.get('/users/logout')
  }

  delete (id) {
    return http.delete(`/users/${id}`)
  }

  getAll () {
    return http.get('/users')
  }

  updateBanned (id, data) {
    return http.put(`/users/${id}`, data)
  }

  updateAdmin (id, data) {
    return http.put(`/users/admin/${id}`, data)
  }
}

export default new UserDataService()
