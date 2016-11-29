/* External Dependencies */
import React from 'react'
import { Router, Route, Link, browserHistory, useRouterHistory, hashHistory, IndexRoute, IndexRedirect } from 'react-router'
import { createHashHistory } from 'history'

/* Intenral Dependencies */
import AppContainer from './containers/AppContainer'
import WelcomeContainer from './containers/WelcomeContainer'
import MessagesContainer from './containers/MessagesContainer'
import MainFrame from './components/MainFrame'
import WrongURL from './components/WrongURL'
import PostMessageContainer from './containers/PostMessageContainer'
import MessageContainer from './containers/MessageContainer'
import MapContainer from './containers/MapContainer'
import { RouteUtils } from './utils'


/************************************************************
 * Redux
 ************************************************************/
import { ReduxUtils } from './utils'
import { Provider } from 'react-redux'
const store = ReduxUtils.store()


/************************************************************
 * Router renders here
 ************************************************************/

export default (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer}>
        <IndexRedirect to="welcome"/>
        <Route path="welcome" component={WelcomeContainer}/>
        <Route
          component={MainFrame}
          onEnter={(nextState, replace, callback) => { RouteUtils.geoCheck(nextState, replace, callback) }}>
          <Route path="messages" component={MessagesContainer}/>
          <Route path="messages/:id" component={MessageContainer}/>
          <Route path="postMessage" component={PostMessageContainer}/>
          <Route path="map" component={MapContainer}/>
        </Route>
        <Route path="*" component={WrongURL}/>
      </Route>
    </Router>
  </Provider>
)


