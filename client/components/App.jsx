import React, { Component } from 'react';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import Home from './Home';
import Navbar from './Navbar';


import createHistory from 'history/createBrowserHistory'

class App extends Component {
  render() {
    return (
      <div className="mainApp">
        <Router hitstory={createHistory}>
          <Route path="/" component={Navbar}>
            <IndexRoute component={Home} />
            <Route path="/home" component={Home} />
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;
