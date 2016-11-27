/* External Dependencies */
import React from 'react'
import { connect } from 'react-redux'
import {browserHistory} from 'react-router'

/* Internal Dependencies*/
import styles from './AppContainer.scss'
import { GeolocationActions } from '../../actions'

class AppContainer extends React.Component {

  constructor() {
    super()
  }
  
  componentDidMount() {
    this.props.dispatch(GeolocationActions.getGeolocation())
  }
  
  render() {
    return (
      <div className={styles.wrapper}>
        {this.props.children}
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    geolocation: state.GeoReducer.geolocation
  }
}

AppContainer = connect(mapStateToProps)(AppContainer)

export default AppContainer
