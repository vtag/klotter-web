import React from 'react'
import { connect } from 'react-redux'

/**/
import styles from './Message.scss'

const Message = (props) => {
  return (
    <div className={styles.wrapper}>
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
