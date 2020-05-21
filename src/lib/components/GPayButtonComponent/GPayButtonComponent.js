import React, { Component } from 'react';
import GPayButton from 'react-google-pay-button';
import PropTypes from 'prop-types';

class GPayButtonComponent extends Component {
  
  userCanceledHandle = userCancelData => {
    this.props.setProps({
      userCancelData: userCancelData
    })
  }

  onLoadPaymentData(loadPaymentData){
    this.props.setProps({
      loadPaymentData : loadPaymentData
    })
  }

  onPaymentDataChanged(intermediatePaymentData) {
    let changedPaymentData =  new Promise(function(resolve, reject) {
  
      let shippingAddress = intermediatePaymentData.shippingAddress;
      let shippingOptionData = intermediatePaymentData.shippingOptionData;
      let paymentDataRequestUpdate = {};
  
      if (intermediatePaymentData.callbackTrigger == "INITIALIZE" || intermediatePaymentData.callbackTrigger == "SHIPPING_ADDRESS") {
        if(shippingAddress.administrativeArea == "NJ")  {
          paymentDataRequestUpdate.error = getGoogleUnserviceableAddressError();
        }
        else {
          paymentDataRequestUpdate.newShippingOptionParameters = getGoogleDefaultShippingOptions();
          let selectedShippingOptionId = paymentDataRequestUpdate.newShippingOptionParameters.defaultSelectedOptionId;
          paymentDataRequestUpdate.newTransactionInfo = calculateNewTransactionInfo(selectedShippingOptionId);
        }
      }
      else if (intermediatePaymentData.callbackTrigger == "SHIPPING_OPTION") {
        paymentDataRequestUpdate.newTransactionInfo = calculateNewTransactionInfo(shippingOptionData.id);
      }
  
      resolve(paymentDataRequestUpdate);
    });
    this.props.setProps({
      changedPaymentData : changedPaymentData
    })
  }
  
  onPaymentAuthorized(paymentData) {

    let paymentAuthorized = new Promise(function(resolve, reject){
      // handle the response
      processPayment(paymentData)
      .then(function() {
        resolve({transactionState: 'SUCCESS'});
      })
      .catch(function() {
        resolve({
          transactionState: 'ERROR',
          error: {
            intent: 'PAYMENT_AUTHORIZATION',
            message: 'Insufficient funds',
            reason: 'PAYMENT_DATA_INVALID'
          }
        });
      });
    });

    this.props.setProps({
      paymentAuthorized: paymentAuthorized
    })
  }

  render () {
    // const paymentDataCallbacks =  {
    //   'onPaymentDataChanged': 'onPaymentDataChanged',
    //   'onPaymentAuthorized': 'onPaymentAuthorized'
    // }

    return (
        <GPayButton
          totalPriceStatus={ this.props.totalPriceStatus }
          shippingAddressRequired = { true }
          totalPrice={ this.props.totalPrice }
          currencyCode={ this.props.currencyCode }
          countryCode={ this.props.countryCode }
          development={ true }
          merchantInfo={ this.props.merchantInfo }
          allowedPaymentMethods={ this.props.paymentMethods }
          color = { this.props.color }
          type = { this.props.type }
          apiVersion = { this.props.apiVersion }
          apiVersionMinor = { this.props.apiVersionMinor}
          className = { this.props.className }
          development = { this.props.development }
          style = { this.props.style }
          onLoadPaymentData={this.loadPaymentDataHandler}
          onUserCanceled={this.userCanceledHandle}
          onLoadPaymentData = {this.onLoadPaymentData}
          // onPaymentDataChanged = {this.onPaymentDataChanged}
          onPaymentAuthorized = {this.onPaymentAuthorized}
        />
    )
  }
}
GPayButtonComponent.defaultProps={
  id: null,
  totalPriceStatus: 'FINAL',
  totalPrice: '14.00',
  currencyCode: 'USD',
  countryCode: 'US',
  className: null,
  style : null,
  color : 'black',
  type : 'long',
  apiVersion : 2,
  setProps : () => {},
  merchantInfo : {
    merchantName: '<YOUR MERCHANT NAME>',
    // A Google merchant identifier issued after your website is approved by Google ✅
    merchantId: 'AR-UcSCI_GrzS0Xodf3oUAinZwIylhqdOImtBtfUBZUMtwptW_dn3R1zwzdP1JVvmuOQmtU8I4wESLk'
  },
  paymentMethods : [
    {
      type: 'CARD',
      parameters: {
        allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
        allowedCardNetworks: ['AMEX', 'DISCOVER', 'INTERAC', 'JCB', 'MASTERCARD', 'VISA']
      },
      tokenizationSpecification: {
        type: 'PAYMENT_GATEWAY',
        parameters: {
          'gateway': 'stripe',
          'stripe:version': '2019-03-14',
          'stripe:publishableKey': '<YOUR_PUBLIC_STRIPE_KEY>'
        }
      }
    },
    {
      type: 'PAYPAL',
      parameters: {
        'purchase_context': {
          'purchase_units': [{
            'payee': {
              'merchant_id': 'AR-UcSCI_GrzS0Xodf3oUAinZwIylhqdOImtBtfUBZUMtwptW_dn3R1zwzdP1JVvmuOQmtU8I4wESLk'
            }
          }]
        }
      },
      tokenizationSpecification: {
        type: 'DIRECT'
      }
    }
  ],
  apiVersionMinor : 0,
  checkoutOption : 'DEFAULT',
  development : true,
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
  checkoutOption: PropTypes.string,
  development: PropTypes.bool,
  setProps: PropTypes.func,
  changedPaymentData : PropTypes.object,
  userCancelData: PropTypes.object,
  loadPaymentData: PropTypes.object,
  paymentAuthorized: PropTypes.object
};

export default GPayButtonComponent;