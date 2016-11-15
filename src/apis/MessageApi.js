import * as API from './lib'

export default {
  requestGetMessages: (x, y) => {
    return API.get(`get?x=${x}&y=${y}`)
  },
  
  requeestPostMessage: (data) => {
    return API.post(`post`, data)
  }
}
