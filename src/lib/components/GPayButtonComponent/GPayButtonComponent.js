import React, { Component } from 'react';
import GPayButton from 'react-google-pay-button';
import PropTypes from 'prop-types';

class GPayButtonComponent extends Component {
  render () {
    return (

        <GPayButton
          totalPriceStatus={ this.props.totalPriceStatus }
          totalPrice={ this.props.totalPrice }
          currencyCode={ this.props.currencyCode }
          countryCode={ this.props.countryCode }
          development={true}
          merchantInfo={ this.props.merchantInfo }
          allowedPaymentMethods={ this.props.paymentMethods }
          color = { this.props.color }
          type = { this.props.type }
          apiVersion = { this.props.apiVersion }
          apiVersionMinor = { this.props.apiVersionMinor}
          className = { this.props.className }
          style = { this.props.style }
        />
    )
  }
}
GPayButtonComponent.defaultProps={
  id: null,
  totalPriceStatus: 'FINAL',
  totalPrice: '14.00',
  currencyCode: 'GBP',
  countryCode: 'GB',
  className: null,
  style : null,
  color : 'black',
  type : 'long',
  apiVersion : 2,
  apiVersionMinor : 0,
  checkoutOption : 'DEFAULT'
};

GPayButtonComponent.propTypes = {
  id: PropTypes.string,
  totalPrice: PropTypes.string,
  totalPriceStatus: PropTypes.string,
  currencyCode: PropTypes.string,
  countryCode: PropTypes.string,
  merchantInfo: PropTypes.object,
  paymentMethods: PropTypes.array,
  className: PropTypes.string,
  style : PropTypes.object,
  color : PropTypes.string,
  type : PropTypes.string,
  apiVersion: PropTypes.number,
  apiVersionMinor: PropTypes.number,
  checkoutOption: PropTypes.string
};

export default GPayButtonComponent;