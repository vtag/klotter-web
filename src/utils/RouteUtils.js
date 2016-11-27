export default {
  geoCheck: (nextState, replace, callback) => {
    let x = window.sessionStorage.getItem('klotter-geo-x')
    let y = window.sessionStorage.getItem('klotter-geo-y')

    console.log('geocheck', x, y)

    if (!x || !y) {
      alert(`We didn't get your Geo-location. Did you allow the GPS ?`)
      replace('/welcome')
      callback()
    } {
      callback()
    }
  }
}
