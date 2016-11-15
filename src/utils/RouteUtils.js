export default {
  geoCheck: (nextState, replace) => {
    let x = window.sessionStorage.getItem('vtag-geo-x')
    let y = window.sessionStorage.getItem('vtag-geo-y')

    if (!x || !y) {
      console.log('Geolocation check failed. Redirect to welcome page')
      replace('welcome')
    }
  }
}
