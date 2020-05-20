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
};

GPayButtonComponent.propTypes = {
  id: PropTypes.string,
  totalPrice: PropTypes.string,
  totalPriceStatus: PropTypes.string,
  currencyCode: PropTypes.string,
  countryCode: PropTypes.string,
  merchantInfo: PropTypes.object,
  paymentMethods: PropTypes.array
};

export default GPayButtonComponent;