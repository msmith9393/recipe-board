import React, { Component } from 'react';
import Header from './header.js';
import Categories from './Categories.js';
class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Categories />
        <div>HELLO THIS IS MEGAMEGAN</div>
        {this.props.children}
      </div>
    )
  }
}

export default App;
