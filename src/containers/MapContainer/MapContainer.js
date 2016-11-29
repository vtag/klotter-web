/* External Dependencies */
import React from 'react'
import { connect } from 'react-redux'
import {browserHistory} from 'react-router'

/* Internal Dependencies*/
import styles from './MapContainer.scss'
import { GeolocationActions } from '../../actions'
import Map from '../../components/Map'
import ContentPanel from '../../components/ContentPanel'
import { MessageActions } from '../../actions'
import DSKEYS from '../../constants/DomStorageKeys'


class MapContainer extends React.Component {

  constructor() {
    super()
    this.handleClickPostMessage = this.handleClickPostMessage.bind(this)
    this.state = {
      markers: []
    }
  }
  
  componentWillMount() {
    let x = this.props.geolocation.x || parseFloat(window.sessionStorage.getItem(DSKEYS.X_COORD));
    let y = this.props.geolocation.y || parseFloat(window.sessionStorage.getItem(DSKEYS.Y_COORD));

    this.props.dispatch(MessageActions.getMessages({
      x: x,
      y: y
    }))
  }
  
  handleClickPostMessage() {
    this.props.router.push('/postMessage')
  }

  render() {
    return (
      <ContentPanel
        handleClickPostMessage={this.handleClickPostMessage}
        showPostMessageBtn={true}>
        <Map
          messages={this.props.messages}/>
      </ContentPanel>
    )
  }
  
}


const mapStateToProps = (state) => {
  return {
    messages: state.MessagesReducer.messages,
    geolocation: state.GeoReducer.geolocation
  }
}

MapContainer = connect(mapStateToProps)(MapContainer)

export default MapContainer


