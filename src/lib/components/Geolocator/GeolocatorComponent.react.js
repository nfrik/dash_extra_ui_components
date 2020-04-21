import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Geolocator from './Geolocator';

class GeolocatorComponent extends Component {

  constructor(props) {
    super(props);
  }

  getPosition(position) {
   this.setProps({
     location : position
   })
  }

  render() {
    let geolocationProvider = navigator.geolocation;
    
    return (
      <div id={this.props.id}>
        <Geolocator 
          positionOptions = {this.props.positionOptions}
          watchPosition = {this.props.watchPosition}
          userDecisionTimeout = {this.props.userDecisionTimeout}
          suppressLocationOnMount = {this.props.suppressLocationOnMount}          
          isOptimisticGeolocationEnabled = {this.props.isOptimisticGeolocationEnabled}
          geolocationProvider = { geolocationProvider }
          onSuccess = {this.props.onSuccess}
          onError = {this.props.onError}
          errorMsg = {this.props.errorMsg}
          getPosition = { this.getPosition }
        />
      </div>
    )
  }
}

GeolocatorComponent.defaultProps = {
  setProps : () => {},
  id: null,
  positionOptions: {
    enableHighAccuracy: true,
    maximumAge: 0,
    timeout: 5000,
  },
  location : null,
  watchPosition: true,
  userDecisionTimeout: null,
  suppressLocationOnMount: false,
  isOptimisticGeolocationEnabled: true,
  errorMsg: {
    isGeolocationAvailable: "Your browser does not support Geolocation",
    isGeolocationEnabled: "Geolocation is not enabled"
  },
  onSuccess: function(success){ console.log(success) },
  onError: function(error){ console.log(error)}
};

GeolocatorComponent.propTypes = {
  location : PropTypes.object,
  setProps : PropTypes.func,
  id: PropTypes.string,
  positionOptions: PropTypes.object,
  watchPosition: PropTypes.bool,
  userDecisionTimeout: PropTypes.number,
  suppressLocationOnMount: PropTypes.bool,
  isOptimisticGeolocationEnabled: PropTypes.bool,
  errorMsg: PropTypes.object,
  onSuccess: PropTypes.func,
  onError: PropTypes.func,
};

export default GeolocatorComponent;