import React, { Component } from 'react';
require('./../../styles/main.css');

class Category extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<div className="category">{this.props.cat}</div>);
  }
}

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: ['Main Course', 'Sides', 'Dessert', 'Pasta']
    }
  }
  render() {
    return (
      <div className="categories-container">
        {this.state.categories.map((cat, ind) => {
          return (<Category key={ind} cat={cat} />);
        })}
      </div>
    )
  }
}

export default Categories;