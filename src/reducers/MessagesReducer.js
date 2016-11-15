import AT from '../actions/ActionTypes'
import { browserHistory } from 'react-router'

const initialState = {

}

export default function(state = initialState, action) {
  console.log('_messages', state, action)

  switch (action.type) {

    case AT.GET_MESSAGES:
      return state

    case AT.POST_MESSAGES:
      return state

    default:
      return state
  }
}
