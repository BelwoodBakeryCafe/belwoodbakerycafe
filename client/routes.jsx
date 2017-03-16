import React from 'react';
import { IndexRoute, Route } from 'react-router';

import Home from './containers/Home';
// const errorLoading = (err) => {
//     console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
// };

// const loadModule = (cb) => (componentModule) => {
//     cb(null, componentModule.default);
// };

const routes = (
  <Route path="/" component={Home}>
    <IndexRoute path="" component={Home} />
  </Route>
);

export default routes;