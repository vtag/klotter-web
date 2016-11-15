import React from 'react'
import { connect } from 'react-redux'

/**/
import styles from './Message.scss'

const messageColors = ['#ff6666', '#6d72c4', '#a37aa2', '#73886e', '#ef9820']

function getMessageStyle() {

  const color = messageColors[Math.floor(Math.random() * messageColors.length)];
  return {backgroundColor: color}
}

const Message = (props) => {
  return (
    <div
      className={styles.wrapper}
      style={getMessageStyle()}>
      <div className={styles.msgContent}>
        {props.message.message}
      </div>
      <div className={styles.meta}>
        <span className={styles.time}>
          some time
        </span>
        <span>
          some place
        </span>
      </div>
    </div>
  )
}

export default Message
