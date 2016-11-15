/* External Dependencies */
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router' 

/* Internal Dependencies */
import styles from './Messages$.scss'
import { MessageActions } from '../../actions'

class Messages$ extends React.Component {

  constructor() {
    super()
  }
  
  componentWillMount() {
    // this.props.dispatch(MessageActions.getMessages({
    //   x: this.props.geolocation.x,
    //   y: this.props.geolocation.y
    // }))

  }

  render() {
    console.log(2, this.props.state)
    return (
      <div className={styles.wrapper}>
        <div className={styles.main}>
          
        </div>
      </div>
    )
  }

}


const mapStateToProps = (state/*, props*/) => {
  return {
    geolocation: state.GeoReducer.geolocation,
    state: state
  }
}

const RoutedMessages$ = withRouter(Messages$)
const ConnectedMessages$ = connect(mapStateToProps)(RoutedMessages$)

export default ConnectedMessages$
