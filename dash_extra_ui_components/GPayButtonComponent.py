# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class GPayButtonComponent(Component):
    """A GPayButtonComponent component.


Keyword arguments:
- id (string; optional)
- totalPrice (string; default '14.00')
- totalPriceStatus (string; default 'FINAL')
- currencyCode (string; default 'USD')
- countryCode (string; default 'US')
- merchantInfo (dict; default {
  merchantName: '<YOUR MERCHANT NAME>',
  // A Google merchant identifier issued after your website is approved by Google ✅
  merchantId: 'AR-UcSCI_GrzS0Xodf3oUAinZwIylhqdOImtBtfUBZUMtwptW_dn3R1zwzdP1JVvmuOQmtU8I4wESLk'
})
- paymentMethods (list; default [
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
])
- className (string; optional)
- style (dict; optional)
- color (string; default 'black')
- type (string; default 'long')
- apiVersion (number; default 2)
- apiVersionMinor (number; default 0)
- checkoutOption (string; default 'DEFAULT')
- development (boolean; default True)
- changedPaymentData (dict; optional)
- userCancelData (dict; optional)
- loadPaymentData (dict; optional)
- paymentAuthorized (dict; optional)"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, totalPrice=Component.UNDEFINED, totalPriceStatus=Component.UNDEFINED, currencyCode=Component.UNDEFINED, countryCode=Component.UNDEFINED, merchantInfo=Component.UNDEFINED, paymentMethods=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, color=Component.UNDEFINED, type=Component.UNDEFINED, apiVersion=Component.UNDEFINED, apiVersionMinor=Component.UNDEFINED, checkoutOption=Component.UNDEFINED, development=Component.UNDEFINED, changedPaymentData=Component.UNDEFINED, userCancelData=Component.UNDEFINED, loadPaymentData=Component.UNDEFINED, paymentAuthorized=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'totalPrice', 'totalPriceStatus', 'currencyCode', 'countryCode', 'merchantInfo', 'paymentMethods', 'className', 'style', 'color', 'type', 'apiVersion', 'apiVersionMinor', 'checkoutOption', 'development', 'changedPaymentData', 'userCancelData', 'loadPaymentData', 'paymentAuthorized']
        self._type = 'GPayButtonComponent'
        self._namespace = 'dash_extra_ui_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'totalPrice', 'totalPriceStatus', 'currencyCode', 'countryCode', 'merchantInfo', 'paymentMethods', 'className', 'style', 'color', 'type', 'apiVersion', 'apiVersionMinor', 'checkoutOption', 'development', 'changedPaymentData', 'userCancelData', 'loadPaymentData', 'paymentAuthorized']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(GPayButtonComponent, self).__init__(**args)
