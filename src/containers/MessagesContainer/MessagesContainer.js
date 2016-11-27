/* External Dependencies */
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

/* Internal Dependencies */
import styles from './MessagesContainer.scss'
import { MessageActions } from '../../actions'
import MessageList from '../../components/MessageList'
import ContentPanel from '../../components/ContentPanel'

class MessagesContainer extends React.Component {

  constructor() {
    super()
    this.handleClickPostMessage = this.handleClickPostMessage.bind(this)
  }
  
  componentWillMount() {
    const x = this.props.geolocation.x || window.sessionStorage.getItem('vtag-geo-x')
    const y = this.props.geolocation.y || window.sessionStorage.getItem('vtag-geo-y')

    this.props.dispatch(MessageActions.getMessages({
      x: x,
      y: y
    }))
  }
  
  handleClickPostMessage(data) {
    this.props.router.push('/postMessage')
  }

  render() {
    return (
      <ContentPanel
        handleClickPostMessage={this.handleClickPostMessage}
        showPostMessageBtn={true}>
        <MessageList
          messages={this.props.messages}/>
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
