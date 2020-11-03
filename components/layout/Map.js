import { Component } from 'react';
import ReactMapGL from 'react-map-gl';

class Map extends Component {
  state = {
    viewport: {
      width: '40vw',
      height: '40vh',
      latitude: 53.475433,
      longitude: -2.236497,
      zoom: 13,
      
    }
  };


  render() {
    return (
      <ReactMapGL
        mapStyle="mapbox://styles/mapbox/dark-v10"
        mapboxApiAccessToken="pk.eyJ1IjoibW9zY2FsaXIiLCJhIjoiY2toMmhrd2ZqMGVudjJzbXhvZDIzbmFqdSJ9.biQkpZ8loVXIsxhMuNffog"
        onViewportChange={(viewport) => this.setState({ viewport })}
        {...this.state.viewport}
        className="map" >
        
          
      </ReactMapGL>
    );
  }
}

export default Map;