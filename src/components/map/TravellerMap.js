import React from 'react';
import GoogleMapReact from 'google-map-react';
import MyLocationMarker from './MyLocationMarker';
import OldLocationMarker from './OldLocationMarker';
import Locations from '../../../public/data/locations.json';
const BOAT_NAME = 'Padelesha';


const _map = (props) => {
  const latestPosition = props.markers.slice(-1)[0];
  return (
    <GoogleMapReact
      bootstrapURLKeys={{key: 'AIzaSyCQgWNVWBIRCc4x5ZBzxoHgp04HRMM4PDo'}}
      defaultCenter={{lat: latestPosition.lat, lng: latestPosition.lng}}
      defaultZoom={props.zoom}
      onGoogleApiLoaded={({ map, maps }) => {
        const route = new maps.Polyline({
          path: props.markers,
          geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 1.0,
          strokeWeight: 2
        });
        route.setMap(map);
      }}
      yesIWantToUseGoogleMapApiInternals={true}
    >
      <MyLocationMarker
        text={BOAT_NAME}
        { ...latestPosition }
      />
      {
        props.markers.map(({ lat, lng, name, content, images}, index) => {
          if (index < props.markers.length - 1) {
            return (
              <OldLocationMarker
                content={content}
                images={images}
                key={index}
                lat={lat}
                lng={lng}
                name={name}
              />
            );
          }
        })
      }
    </GoogleMapReact>
  )
};

export default _map

_map.propTypes = {
  markers: React.PropTypes.array.isRequired,
  zoom: React.PropTypes.number,
}

_map.defaultProps = {
    zoom: 10,
    markers: Locations
}
