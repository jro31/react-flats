import React, { Component } from 'react';

import FlatList from './flat_list';
import Map from './map';
import flats from '../../data/flats.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flats: flats,
      lat: 48.884211,
      lng: 2.34689
    };
  }

  selectProperty = (lat, lng) => {
    this.setState({
      lat: lat,
      lng: lng
    });
  }

  render() {
    return (
      <div>
        <div className="flat-list">
          <FlatList flats={this.state.flats} selectProperty={this.selectProperty} />
        </div>
        <div className="map-container">
          <Map lat={this.state.lat} lng={this.state.lng} center={{lat: this.state.lat, lng: this.state.lng}} />
        </div>
      </div>
    );
  }
}

export default App;
