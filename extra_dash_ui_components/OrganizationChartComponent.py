# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class OrganizationChartComponent(Component):
    """An OrganizationChartComponent component.


Keyword arguments:
- id (string; optional): The ID used to identify this component in Dash callbacks.
- value (list; optional): An array of nested TreeNodes
- selectionMode (string; default 'single'): Defines the selection mode, valid values "single" and "multiple"."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, value=Component.UNDEFINED, selectionMode=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'value', 'selectionMode']
        self._type = 'OrganizationChartComponent'
        self._namespace = 'extra_dash_ui_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'value', 'selectionMode']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(OrganizationChartComponent, self).__init__(**args)
