import React from "react";
import PropTypes from "prop-types";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

// eslint-disable-next-line prettier/prettier
const GoogleMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: 35.734182, lng: 51.548713 }}
    >
      {props.isMarkerShown && (
        <Marker position={{ lat: 35.734182, lng: 51.548713 }} />
      )}
    </GoogleMap>
  ))
);

GoogleMapComponent.propTypes = {
  isMarkerShown: PropTypes.bool.isRequired
};

export default GoogleMapComponent;
