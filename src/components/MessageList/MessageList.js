/* External Dependencies */
import React from 'react'
import { connect } from 'react-redux'

/* Internal Dependencies */
import styles from './MessageList.scss'
import Message from '../Message'

function renderMessages(messages = [], x, y) {
  return messages.map((elem, idx) => {
    return (
      <Message
        key={elem.id}
        message={elem}
        x={x}
        y={y} />
    )
  })
}

const MessageList = (props) => {
  return (
    <div className={styles.wrapper}>
      {renderMessages(props.messages, props.x, props.y)}
    </div>
  )
}

export default MessageList
