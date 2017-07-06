import React from 'react';
import GoogleMapReact from 'google-map-react';
import MyLocationMarker from './MyLocationMarker';
import OldLocationMarker from './OldLocationMarker';
import Locations from '../../../public/data/locations.json';
import AlaskaLocations from '../../../public/data/alaskaLocations.json';
let BOAT_NAME = 'Padelesha';


const _map = (props) => {
  const latestPosition = props.onDelivery ? props.markersMigrationDelivery.slice(-1)[0] : props.markers.slice(-1)[0];
  if (props.onDelivery) {
    BOAT_NAME = 'Migration';
  }

  const markers = [].concat(props.markers, props.markersMigrationDelivery);
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

        //Alaska
        const route2 = new maps.Polyline({
          path: props.markersMigrationDelivery,
          geodesic: true,
          strokeColor: '#f230b8',
          strokeOpacity: 1.0,
          strokeWeight: 2
        });
        route2.setMap(map);
      }}
      yesIWantToUseGoogleMapApiInternals={true}
    >
      <MyLocationMarker
        text={BOAT_NAME}
        { ...latestPosition }
      />
      {
        markers.map(({ lat, lng, name, content, images}, index) => {
          if (index < markers.length - 1) {
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
  markersMigrationDelivery: React.PropTypes.array,
  zoom: React.PropTypes.number,
  onDelivery: React.PropTypes.bool,
}

_map.defaultProps = {
    zoom: 10,
    markers: Locations,
    markersMigrationDelivery: AlaskaLocations,
    onDelivery: true,
}
