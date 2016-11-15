/**/
import React from 'react'
import { Router, Route, Link, browserHistory, useRouterHistory, hashHistory, IndexRoute, IndexRedirect } from 'react-router'
import { createHashHistory } from 'history'

/* */
import App$ from './containers/App$'
import Welcome$ from './containers/Welcome$'
import Messages$ from './containers/Messages$'
import MainFrame from './components/MainFrame'



/************************************************************
 * Redux
 ************************************************************/
import { reduxUtils } from './utils'
import { Provider } from 'react-redux'



/************************************************************
 * Router renders here
 ************************************************************/

export default (
  <Provider store={reduxUtils.store()}>
    <Router history={browserHistory}>
      <Route path="/" component={App$}>
        <IndexRedirect to="welcome"/>
        <Route path="welcome" component={Welcome$}/>
        <Route component={MainFrame}>
          <Route path="messages" component={Messages$}/>
        </Route>
      </Route>
    </Router>
  </Provider>
)


