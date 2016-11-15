import createAction from './createAction'
import AT from './ActionTypes'

export default {
  getGeolocation: (arg) => (dispatch, getState) => {

    var promise = new Promise(function(resolve, reject) {

      navigator.geolocation.getCurrentPosition(
        (position) => {
          const x  = position.coords.latitude;
          const y = position.coords.longitude;
          console.log('Geo', x, y)

          resolve({x, y})

          // return dispatch(createAction(AT.GET_GEOLOCATION, {x, y}))
        },
        () => {
          console.log('Geo location cannot be obtained. Error')
          reject()
        }
      )
    });

    return promise

  }
}

