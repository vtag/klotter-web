import AT from '../actions/ActionTypes'

const initialState = {
  ui: {}
}

export default function(state = initialState, action) {
  // console.log('_ui', state, action)

  switch (action.type) {
    
    case AT.SHOW_POST_MESSAGE:

      return {
        ...state,
        ui: state.ui['postMessage'] = true
      }

    case AT.SHOW_MESSAGES:

      return {
        ...state,
        ui: state.ui['postMessage'] = false
      }

    default:
      return state
  }
}
