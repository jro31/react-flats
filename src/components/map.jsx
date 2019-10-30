import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import Marker from './marker';

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 48.88,
      lng: 2.34
    },
    zoom: 15
  };

  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={this.props.lat}
            lng={this.props.lng}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
