import http from '../http-common'

class UserDataService {
  create (data) {
    return http.post('/user', data)
  }

  postLogin (data) {
    return http.post('/user/login', data)
  }

  getAuth () {
    return http.get('/user/auth')
  }

  getLogout () {
    return http.get('/user/logout')
  }

  delete (id) {
    return http.delete(`/user/${id}`)
  }

  getAll () {
    return http.get('/user')
  }

  updateBanned (id, data) {
    return http.put(`/user/${id}`, data)
  }

  updateAdmin (id, data) {
    return http.put(`/user/admin/${id}`, data)
  }
}

export default new UserDataService()
