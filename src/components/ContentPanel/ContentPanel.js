import React from 'react'
import { connect } from 'react-redux'

/**/
import styles from './ContentPanel.scss'

function renderPostMessageBtn(props) {
  if (props.showPostMessageBtn) {
    return (
      <div className={styles.postMessageBtn}>
        <button
          type="button"
          onClick={props.handleClickPostMessage}>
          <i className="fa fa-plus" aria-hidden="true"/>
        </button>
      </div>
    )
  }

}

const ContentPanel = (props) => {
  return (
    <div className={styles.wrapper}>
      {props.children}
      {renderPostMessageBtn(props)}
    </div>
  )
}

export default ContentPanel
