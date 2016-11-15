import AT from '../actions/ActionTypes'

const initialState = {
  geolocation: {}
}

export default function(state = initialState, action) {
  console.log('_geo', state, action)

  switch (action.type) {
    
    case AT.GET_GEOLOCATION:
      return {
        ...state,
        geolocation: {
          x: action.payload.x,
          y: action.payload.y,
        }
      }

    default:
      return state
  }
}
