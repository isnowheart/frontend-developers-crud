
import api from './developerApi'


export default {
  index:() => {
    return api.get('')
  },

  show:(id) => {
    return api.get(`/${id}`)
  },

  store:(body) => {
    return api.post('',body)
  },

  edit:(id, body) => {
    return api.put(`/${id}`, body)
  },

  delete:(id) => {
    return api.delete(`/${id}`)
  }
}