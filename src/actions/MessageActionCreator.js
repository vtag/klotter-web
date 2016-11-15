import { MessageApi } from '../apis'
import createAction from './createAction'
import AT from './ActionTypes'

export default {
  getMessages: (arg) => (dispatch, getState) => {
    return MessageApi.requestGetMessages(arg.x, arg.y)
      .then(res => dispatch(createAction(AT.GET_MESSAGES, res))
    )
  },

  postMessage: (arg) => (dispatch, getState) => {
    const data = {
      message: arg.message,
      x: arg.x,
      y: arg.y
    }
    return MessageApi.requestPostMessage(data)
      .then(res => dispatch(createAction(AT.POST_MESSAGE, res)))
  }
}

