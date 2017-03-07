import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class App extends Component {
  render() {
    return (
      <div className="mainApp">
        <div>Hello World</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
