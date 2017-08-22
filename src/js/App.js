import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/Store';
import {Provider} from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import{Switch, Route, BrowserRouter, Router} from 'react-router-dom';

import Main from "./components/Main";

import styles from "../scss/styles.scss";

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <Router history={createBrowserHistory()}>
        <Switch>
          <Route exact path="/" component={Main}/>
        </Switch>
      </Router>
    </BrowserRouter>
  </Provider>
), document.getElementById('app'));
