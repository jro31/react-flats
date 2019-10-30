import React, { Component } from 'react';

class Flat extends Component {
  handleClick = () => {
    if (this.props.selectProperty) {
      this.props.selectProperty(this.props.lat, this.props.lng);
    }
  }

  render() {
    return (
      <div className="card" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${this.props.image})` }} onClick={this.handleClick}>
        <div className="card-category">{this.props.price} {this.props.currency}</div>
        <div className="card-description">
          <h2>{this.props.name}</h2>
        </div>
        <a className="card-link" href="#"></a>
      </div>
    );
  }
};

export default Flat;
