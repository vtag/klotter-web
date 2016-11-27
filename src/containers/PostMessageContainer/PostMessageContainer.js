/* External Dependencies */
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router' 

/* Internal Dependencies */
import styles from './PostMessageContainer.scss'
import { MessageActions } from '../../actions'
import PostMessageForm from '../../components/PostMessageForm'
import ContentPanel from '../../components/ContentPanel'


class PostMessageContainer extends React.Component {

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

PostMessageContainer = withRouter(PostMessageContainer)
PostMessageContainer = connect(mapStateToProps)(PostMessageContainer)

export default PostMessageContainer
