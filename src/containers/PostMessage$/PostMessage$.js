/* External Dependencies */
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router' 

/* Internal Dependencies */
import styles from './PostMessage$.scss'
import { MessageActions } from '../../actions'
import PostMessageForm from '../../components/PostMessageForm'
import ContentPanel from '../../components/ContentPanel'


class PostMessage$ extends React.Component {

  constructor() {
    super()
  }
  
  componentDidMount() {
  }

  render() {
    console.log(2, this.props.state)
    return (
      <ContentPanel>
        <PostMessageForm/>
      </ContentPanel>
    )
  }

}


const mapStateToProps = (state/*, props*/) => {
  return {
    geolocation: state.GeoReducer.geolocation,
    state: state
  }
}

const RoutedPostMessage$ = withRouter(PostMessage$)
const ConnectedPostMessage$ = connect(mapStateToProps)(RoutedPostMessage$)

export default ConnectedPostMessage$
