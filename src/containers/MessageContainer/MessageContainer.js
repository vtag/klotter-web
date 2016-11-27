/* External Dependencies */
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

/* Internal Dependencies */
import styles from './MessageContainer.scss'
import { MessageActions } from '../../actions'
import MessageList from '../../components/MessageList'
import ContentPanel from '../../components/ContentPanel'

class MessageContainer extends React.Component {

  constructor() {
    super()
  }

  render() {
    return (
      <div>
      Message
      </div>
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

MessageContainer = withRouter(MessageContainer)
MessageContainer = connect(mapStateToProps)(MessageContainer)

export default MessageContainer
