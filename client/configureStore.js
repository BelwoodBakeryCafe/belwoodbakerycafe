import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { loadState, saveState } from './localStorage/localStorage';
import rootReducer from './reducers'; // Or wherever you keep your reducers

export default function configureStore() {
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const persistedState = loadState();
  const store = createStore(rootReducer, persistedState, composeEnhancers(applyMiddleware(thunk)));
  /* eslint-enable */

  store.subscribe(() => {
    // only make sure to store the favorites list and nothing that has to do with UI state
    saveState({
      favoritesList: store.getState().favoritesList,
      recentSearches: store.getState().recentSearches,
    });
  });

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers/index');
      store.replaceReducer(nextReducer);
    });
  }
  return store;
}
