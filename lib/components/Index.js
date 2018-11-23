import React, { Component } from 'react';
// we need reactDOM as we are interfacing with the browser
import ReactDOM from 'react-dom';

class App extends Component {
  state = {
    answer: 42
  };
  // asyncFunc = () => {
  //   return Promise.resolve(37);
  // };
  // async componentDidMount() {
  //   this.setState({
  //     answer: await this.asyncFunc()
  //   });
  // }
  render() {
    return <h2>Hello Class Components ! {this.state.answer}</h2>;
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
