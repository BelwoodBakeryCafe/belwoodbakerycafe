import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';

const App = () => {
  return (
    <div className="mainApp">
      <Home />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('main'));


