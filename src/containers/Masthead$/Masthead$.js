/* External Dependencies */
import React from 'react'
import { connect } from 'react-redux'

/* Internal Dependencies */
import styles from './Masthead$.scss'

class Masthead$ extends React.Component {

  constructor() {
    super()
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.geoLocation}>
          <span>
            Anam Station
          </span>
        </div>
        <div className={styles.logo}>
          <span>
            Vtag
          </span>
        </div>
      </div>
    )
  }

}

const mapStateToProps = (state/*, props*/) => {
  return {
    foo: state.foo
  }
}

const ConnectedMasthead$ = connect(mapStateToProps)(Masthead$)

export default ConnectedMasthead$
