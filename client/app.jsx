import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Home from './containers/Home';
// Load the favicon, the manifest.json file and the .htaccess file
/* eslint-disable import/no-webpack-loader-syntax */
// import '!file-loader?name=[name].[ext]!./favicon.ico';
// import '!file-loader?name=[name].[ext]!./manifest.json';
// import 'file-loader?name=[name].[ext]!./.htaccess'; // eslint-disable-line import/extensions
/* eslint-enable import/no-webpack-loader-syntax */

import configureStore from './store';
// Import routes
import createRoutes from './router';

const initialState = {};
const createSelectLocationState = () => {
  let prevRoutingState, prevRoutingStateJS;
  return (state) => {
    const routingState = state.get('routing'); // or state.routing 
    if (typeof prevRoutingState === 'undefined' || prevRoutingState !== routingState) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }
    return prevRoutingStateJS;
  };
};

const App = () => {
  const store = configureStore(initialState, browserHistory);

  const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: createSelectLocationState() });

  const rootRoute = {
    component: Home,
    path: '/',
    childRoutes: createRoutes(store),
  };
  return (
  <Provider store={store}>
    <Router
      history={history}
      routes={rootRoute}
    />
  </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('main'));
