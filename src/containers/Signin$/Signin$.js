/* External Dependencies */
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router' 

/* Internal Dependencies */
import styles from './Signin$.scss'
import { userActions } from '../../actions'
import WelcomeBase from '../../components/Welcome/WelcomeBase'

class Signin$ extends React.Component {

  constructor() {
    super()
    this.nodes = {}
    this.handleClickSignin = this.handleClickSignin.bind(this)
    this.handleClickSignup = this.handleClickSignup.bind(this)
  }

  handleClickSignin(event) {
    const userInfo = {
      username: this.nodes.username.value,
      password: this.nodes.password.value
    }
    this.props.dispatch(userActions.signin(userInfo))
      // .then(this.props.router.push('/'))
      // .catch(error => {console.log(2, error)})

  }

  handleClickSignup() {
    this.props.router.push('/signup')
  }

  render() {
    return (
      <WelcomeBase>
      </WelcomeBase>
    )
  }

}


const mapStateToProps = (state/*, props*/) => {
  return {
    reduxState: state
  }
}

const RoutedSignin$ = withRouter(Signin$)
const ConnectedSignin$ = connect(mapStateToProps)(RoutedSignin$)

export default ConnectedSignin$
