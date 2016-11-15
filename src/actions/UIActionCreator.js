import createAction from './createAction'
import AT from './ActionTypes'

export default {
  showPostMessage: () => createAction(AT.SHOW_POST_MESSAGE)
}

