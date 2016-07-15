import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/app.js';
import Categories from './components/categories.js';
import reducer from './reducers/rootReducer.js';

const middleware = [];

const finalCreateStore = compose(applyMiddleware(...middleware))(createStore);

const store = finalCreateStore(reducer, window.devToolsExtension ? window.devToolsExtension() : undefined);

const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={Categories} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
