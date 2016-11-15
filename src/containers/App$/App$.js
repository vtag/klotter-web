/* External Dependencies */
import React from 'react'
import { connect } from 'react-redux'
import {browserHistory} from 'react-router'

/* Internal Dependencies*/
import styles from './App$.scss'
import { GeolocationActions } from '../../actions'

class App$ extends React.Component {

  constructor() {
    super()
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

const ConnectedApp$ = connect(mapStateToProps)(App$)

export default ConnectedApp$
