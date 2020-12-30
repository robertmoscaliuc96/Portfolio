import { Component } from 'react';
import ReactMapGL, {Marker}  from 'react-map-gl';


class Map extends Component {
  state = {
    viewport: {
      width: '80vh',
      height: '100vh',
      latitude: 53.475433,
      longitude: -2.236497,
      zoom: 13,
    }
  };


  render() {
    return (
      <div className="map">
        <ReactMapGL
          mapStyle="mapbox://styles/mapbox/dark-v10"
          mapboxApiAccessToken="pk.eyJ1IjoibW9zY2FsaXIiLCJhIjoiY2toMmhrd2ZqMGVudjJzbXhvZDIzbmFqdSJ9.biQkpZ8loVXIsxhMuNffog"
          onViewportChange={(viewport) => this.setState({ viewport })}
          {...this.state.viewport}
          className="map" >
          <Marker latitude={53.471433} longitude={-2.250497} offsetLeft={-20} offsetTop={-10}>
          <div className="marker-box">
                <div className="marker-name">
                    <i className="fas fa-signature"></i>&nbsp;
                    <p className="marker-text">: Robert Moscaliuc</p>
                </div>
                <div className="marker-name">
                <i className="far fa-envelope"></i>&nbsp;
                
                    <p className="marker-text">: robertmoscaliuc96gmail.com</p>
                </div>
                <div className="marker-name">
                    <i className="fas fa-phone-alt"></i>
                    <p>&nbsp;: 07770083427</p>
                </div>
          </div>
          </Marker>
            
        </ReactMapGL>

      </div>
    );
  }
}

export default Map;