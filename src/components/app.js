import React, { Component } from 'react';

class App extends Component {

  render() {
    return (
      <div>
        <div>HELLO THIS IS MEGAMEGAN</div>
        {this.props.children}
      </div>
    )
  }
}

export default App;
