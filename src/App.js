import React, { Component } from 'react';
import OldCounter from './components/OldCounter';
import Counter from './components/Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <OldCounter />
        <Counter />
      </div>
    );
  }
}

export default App;
