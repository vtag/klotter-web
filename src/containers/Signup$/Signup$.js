/* External Dependencies */
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

/* Internal Dependencies */
import styles from './Signup$.scss'
import WelcomeBase from '../../components/Welcome/WelcomeBase'
import { userActions } from '../../actions'

class Signup$ extends React.Component {

  constructor() {
    super()
    this.handleClickSignup = this.handleClickSignup.bind(this)
  }

  handleClickSignup(event) {
    const inputs = document.querySelectorAll('#signup-form input, #signup-form select')
    let arr = [], ret = {}

    arr.forEach.call(inputs, function(elem) {
      ret[elem.name] = elem.value
    })

    console.log(2, ret)
    this.props.dispatch(userActions.signup(ret))
      .then(this.props.router.push('/signin'))
  }

  render() {
    return (
      <WelcomeBase>
        <div className={styles.wrapper}>
          <form id="signup-form" className={styles.content}>
            <div className={styles.inputContainer}>
              <div>
                <span>email</span>
                <input type="text" name="email"/>
              </div>
              <div>
                <span>password</span>
                <input type="password" name="pw"/>
              </div>
              <div>
                <span>re-enter password</span>
                <input type="password" name="rePw"/>
              </div>
              <div>
                <span>name</span>
                <input type="text" name="name"/>
              </div>
              <div>
                <span>tel</span>
                <input type="tel" name="tel"/>
              </div>
              <div>
                <span>남</span>
                <input type="radio" name="gender" value="male"/>
                <span>여</span>
                <input type="radio" name="gender" value="female"/>
              </div>
            </div>
            <div className={styles.buttonContainer}>
              <button
                type="button"
                onClick={this.handleClickSignup}>
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </WelcomeBase>

    )
  }

}

const RoutedSignup$ = withRouter(Signup$)
const ConnectedSignup$ = connect()(RoutedSignup$)

export default ConnectedSignup$
