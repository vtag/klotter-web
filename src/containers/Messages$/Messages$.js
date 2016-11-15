/* External Dependencies */
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router' 

/* Internal Dependencies */
import styles from './Messages$.scss'
import { MessageActions } from '../../actions'
import MessageList from '../../components/MessageList'


let dummy = [
  {message: 'power'},
  {message: 'foo'},
  {message: 'bar'},
  {message: 'simon is tall'},
  {message: 'where is korea?'},
]

class Messages$ extends React.Component {

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
    console.log(22)
    this.props.router.push('postMessage')
  }

  render() {
    console.log(2, this.props.state)
    return (
      <MessageList 
        messages={dummy}
        handleClickPostMessage={this.handleClickPostMessage}/>
    )
  }

}


const mapStateToProps = (state/*, props*/) => {
  return {
    geolocation: state.GeoReducer.geolocation,
    state: state
  }
}

const RoutedMessages$ = withRouter(Messages$)
const ConnectedMessages$ = connect(mapStateToProps)(RoutedMessages$)

export default ConnectedMessages$
