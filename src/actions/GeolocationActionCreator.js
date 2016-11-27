import createAction from './createAction'
import AT from './ActionTypes'

export default {
  getGeolocation: () => (dispatch, getState) => {

    return new Promise(function(resolve, reject) {

      navigator.geolocation.getCurrentPosition(
        (position) => {
          const x  = position.coords.longitude;
          const y = position.coords.latitude;
          console.log('Geolocation', x, y)
          dispatch(createAction(AT.GET_GEOLOCATION, {x, y}))
          resolve({x, y})
        },
        () => {
          console.log('Geo location cannot be obtained. Error')
          reject()
        }
      )
    });


  }
}

