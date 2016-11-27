import React from 'react'
import { connect } from 'react-redux'

/**/
import styles from './MainFrame.scss'
import MastheadContainer from '../../containers/MastheadContainer'
import GlobalFooterContainer from '../../containers/GlobalFooterContainer'

const MainFrame = (props) => {
  return (
    <div className={styles.wrapper}>
      <MastheadContainer/>
      <div className={styles.body}>
        {props.children}
      </div>
      <GlobalFooterContainer/>
    </div>
  )
}

export default MainFrame
