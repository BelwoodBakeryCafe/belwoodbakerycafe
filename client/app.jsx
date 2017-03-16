import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';
import createSelectLocationState from './selectors';
import Root from './containers/Root';
import configureStore from './store';
// Load the favicon, the manifest.json file and the .htaccess file
/* eslint-disable import/no-webpack-loader-syntax */
// import '!file-loader?name=[name].[ext]!./favicon.ico';
// import '!file-loader?name=[name].[ext]!./manifest.json';
// import 'file-loader?name=[name].[ext]!./.htaccess'; // eslint-disable-line import/extensions
/* eslint-enable import/no-webpack-loader-syntax */
const initialState = {};
// For syncing browser history with store. Must set selectLocationState when using immutable redux
const store = configureStore(initialState, browserHistory);
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: createSelectLocationState() });

ReactDOM.render(<AppContainer><Root store={store} history={history} /> </AppContainer>, document.getElementById('main'));

if (module.hot) {
  module.hot.accept('./containers/Home', () => {
    ReactDOM.render(<AppContainer><Root store={store} history={history} /></AppContainer>, document.getElementById('main'));
  });
}