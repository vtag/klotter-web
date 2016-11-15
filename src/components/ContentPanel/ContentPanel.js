import React from 'react'
import { connect } from 'react-redux'

/**/
import styles from './ContentPanel.scss'
import Masthead from '../../containers/Masthead$'

const ContentPanel = (props) => {
  return (
    <div className={styles.wrapper}>
      {props.children}
      <div className={styles.postMessageBtn}>
        <button
          type="button"
          onClick={props.handleClickPostMessage}>
          <i className="fa fa-plus" aria-hidden="true"/>
        </button>
      </div>
    </div>
  )
}

export default ContentPanel
