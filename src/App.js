import React, { Component } from 'react';
import OldCounter from './components/OldCounter';
import Counter from './components/Counter';
import OldLife from './components/OldLife';
import NewLife from './components/NewLife';
import Reducer from './Reducer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <OldCounter />
        <Counter />
        <OldLife />
        <NewLife />
        <Reducer />
      </div>
    );
  }
}

export default App;
