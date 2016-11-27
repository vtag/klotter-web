/* External Dependencies */
import React from 'react'
import { connect } from 'react-redux'
import {browserHistory, withRouter} from 'react-router'

/* Internal Dependencies*/
import styles from './GlobalFooterContainer.scss'
import { MessageActions } from '../../actions'

class GlobalFooterContainer extends React.Component {

  constructor() {
    super()
    this.handleClickPostMsg = this.handleClickPostMsg.bind(this)
  }

  handleClickPostMsg() {
    const text = document.getElementById('vtag-post-message').value
    this.props.dispatch(MessageActions.postMessage({
      message: text,
      x: this.props.geolocation.x,
      y: this.props.geolocation.y
    }))
      .then(this.props.router.push('messages'))
  }
  
  willConvert() {
    const pathname = this.props.pathname.substring(1) || null
    if (pathname === 'postMessage') {
      return this.willConvertToPostMsgFooter()
    } else {
      return this.willConvertToTwo()
    }
  }
                                                                
  willConvertToPostMsgFooter() {
    return (
      <div className={styles.wrapper}>
        <button
          className={styles.postBtn}
          type="button"
          onClick={this.handleClickPostMsg}>
          Post Your Message
        </button>
      </div>
    )
  }
  
  willConvertToTwo() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.leftBtn}>
          left
        </div>
        <div className={styles.rightBtn}>
          right
        </div>
      </div>
    )
  }
  
  render() {
    return this.willConvert()
  }

}

const mapStateToProps = (state, props) => {
  return {
    pathname: props.location.pathname,
    geolocation: state.GeoReducer.geolocation
  }
}

GlobalFooterContainer = connect(mapStateToProps)(GlobalFooterContainer)
GlobalFooterContainer = withRouter(GlobalFooterContainer)

export default GlobalFooterContainer
