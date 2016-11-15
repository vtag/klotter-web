/* External Dependencies */
import React from 'react'
import { connect } from 'react-redux'

/* Internal Dependencies */
import styles from './MessageList.scss'
import Message from '../Message'

function renderMessages(messages = []) {
  return messages.map((elem, idx) => {
    return (
      <Message
        key={idx}
        message={elem}/>
    )
  })
}

const MessageList = (props) => {
  return (
    <div className={styles.wrapper}>
      {renderMessages(props.messages)}
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

export default MessageList
