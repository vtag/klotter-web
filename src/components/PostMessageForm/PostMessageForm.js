import React from 'react'
import { connect } from 'react-redux'

/**/
import styles from './PostMessageForm.scss'

const PostMessageForm = (props) => {
  return (
    <div className={styles.wrapper}>
      <textarea
        id="vtag-post-message"
        className={styles.textarea}
        placeholder="Type your Messages!">
      </textarea>
    </div>
  )
}

export default PostMessageForm
