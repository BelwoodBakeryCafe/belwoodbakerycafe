import 'react-hot-loader/patch';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore from './configureStore';
import Root from './components/Root';

const store = configureStore();
ReactDOM.render(
<AppContainer>
  <Root store={store} />
</AppContainer>,
document.getElementById('main'));

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const NextRoot = require('./components/Root').default;
    ReactDOM.render(
    <AppContainer>
      <NextRoot store={store} />
    </AppContainer>,
    document.getElementById('main'));
  });
}
