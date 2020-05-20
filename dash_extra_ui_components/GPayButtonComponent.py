# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class GPayButtonComponent(Component):
    """A GPayButtonComponent component.


Keyword arguments:
- id (string; optional)
- totalPrice (string; default '14.00')
- totalPriceStatus (string; default 'FINAL')
- currencyCode (string; default 'GBP')
- countryCode (string; default 'GB')
- merchantInfo (dict; optional)
- paymentMethods (list; optional)"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, totalPrice=Component.UNDEFINED, totalPriceStatus=Component.UNDEFINED, currencyCode=Component.UNDEFINED, countryCode=Component.UNDEFINED, merchantInfo=Component.UNDEFINED, paymentMethods=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'totalPrice', 'totalPriceStatus', 'currencyCode', 'countryCode', 'merchantInfo', 'paymentMethods']
        self._type = 'GPayButtonComponent'
        self._namespace = 'dash_extra_ui_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'totalPrice', 'totalPriceStatus', 'currencyCode', 'countryCode', 'merchantInfo', 'paymentMethods']
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
