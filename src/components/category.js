import React, { Component } from 'react';

class Category extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var image = this.props.cat.split(' ')[0].toLowerCase();
    return (
      <div className="category">
        <img className="main-img" src={`/assets/home-page/${image}.jpg`} alt={`${this.props.cat}`} />
        <div className="overlay">
          <div className="title">{this.props.cat}</div>
        </div>
      </div>
    );
  }
}

export default Category;
