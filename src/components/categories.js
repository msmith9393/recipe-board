import React, { Component } from 'react';
import Category from './category.js';
require('./../../styles/main.css');

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: ['Pasta', 'Sides', 'Main Course', 'Dessert']
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