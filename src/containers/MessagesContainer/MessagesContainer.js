/* External Dependencies */
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

/* Internal Dependencies */
import styles from './MessagesContainer.scss'
import { MessageActions } from '../../actions'
import MessageList from '../../components/MessageList'
import ContentPanel from '../../components/ContentPanel'
import DSKEYS from '../../constants/DomStorageKeys'

class MessagesContainer extends React.Component {

  constructor() {
    super()
    this.handleClickPostMessage = this.handleClickPostMessage.bind(this)
  }

  componentWillMount() {
    let x = this.props.geolocation.x || parseFloat(window.sessionStorage.getItem(DSKEYS.X_COORD));
    let y = this.props.geolocation.y || parseFloat(window.sessionStorage.getItem(DSKEYS.Y_COORD));

    this.props.dispatch(MessageActions.getMessages({
      x: x,
      y: y
    }))
  }

  handleClickPostMessage(data) {
    this.props.router.push('/postMessage')
  }

  render() {
    let x = this.props.geolocation.x || parseFloat(window.sessionStorage.getItem(DSKEYS.X_COORD));
    let y = this.props.geolocation.y || parseFloat(window.sessionStorage.getItem(DSKEYS.Y_COORD));

    return (
      <ContentPanel
        handleClickPostMessage={this.handleClickPostMessage}
        showPostMessageBtn={true}>
        <MessageList messages={this.props.messages} x={x} y={y} />
      </ContentPanel>
    )
  }

}


const mapStateToProps = (state, props) => {
  return {
    geolocation: state.GeoReducer.geolocation,
    messages: state.MessagesReducer.messages,
    temp: props.location,
    state: state
  }
}

MessagesContainer = withRouter(MessagesContainer)
MessagesContainer = connect(mapStateToProps)(MessagesContainer)

export default MessagesContainer
