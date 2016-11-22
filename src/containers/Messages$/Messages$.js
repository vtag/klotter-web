/* External Dependencies */
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

/* Internal Dependencies */
import styles from './Messages$.scss'
import { MessageActions } from '../../actions'
import MessageList from '../../components/MessageList'
import ContentPanel from '../../components/ContentPanel'

class Messages$ extends React.Component {

  constructor(props) {
    super()
    this.state = {
      x: props.geolocation.x || parseFloat(window.sessionStorage.getItem('vtag-geo-x')),
      y: props.geolocation.y || parseFloat(window.sessionStorage.getItem('vtag-geo-y')),
    }
    this.handleClickPostMessage = this.handleClickPostMessage.bind(this)
  }

  componentWillMount() {
    console.log("current: "+ this.state.x);
    console.log("current: "+ this.state.y);

    this.props.dispatch(MessageActions.getMessages({
      x: this.state.x,
      y: this.state.y
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
        <MessageList messages={this.props.messages} x={this.state.x} y={this.state.y} />
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

const RoutedMessages$ = withRouter(Messages$)
const ConnectedMessages$ = connect(mapStateToProps)(RoutedMessages$)

export default ConnectedMessages$
