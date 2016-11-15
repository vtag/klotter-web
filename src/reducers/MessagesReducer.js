import AT from '../actions/ActionTypes'
import { browserHistory } from 'react-router'

const initialState = {
  messages: new Array()
}

export default function(state = initialState, action) {
  console.log('_messages', state, action)

  switch (action.type) {

    case AT.GET_MESSAGES:
      return {
        ...state,
        messages: action.payload
      }

    case AT.POST_MESSAGES:
      return state

    default:
      return state
  }
}
