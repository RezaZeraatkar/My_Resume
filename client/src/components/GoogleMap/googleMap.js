import React from 'react';
import PropTypes from 'prop-types';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

const { InfoBox } = require('react-google-maps/lib/components/addons/InfoBox');
// eslint-disable-next-line prettier/prettier
const GoogleMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={17}
      defaultCenter={{ lat: 35.734182, lng: 51.548713 }}
    >
      <Marker
        position={{ lat: 35.734182, lng: 51.548713 }}
        onClick={props.onToggleOpen}
      >
        {props.isOpen && (
          <InfoBox
            onCloseClick={props.onToggleOpen}
            options={{ closeBoxURL: ``, enableEventPropagation: true }}
          >
            <div style={{ backgroundColor: `yellow` }}>
              <div style={{ fontSize: `16px`, fontColor: `#08233B` }} />
            </div>
          </InfoBox>
        )}
      </Marker>
    </GoogleMap>
  )),
);

GoogleMapComponent.propTypes = {
  isMarkerShown: PropTypes.bool.isRequired,
};

export default GoogleMapComponent;
