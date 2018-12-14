import React, { Component } from 'react';

class OldLife extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount = () => {
    document.title = `You clicked ${this.state.count} times`;
  };

  componentDidUpdate = () => {
    document.title = `You clicked ${this.state.count} times`;
  };

  increase = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <div>
        <h1>I am old lifecycle....{this.state.count}</h1>
        <button onClick={this.increase}>Click Me</button>
      </div>
    );
  }
}

export default OldLife;
