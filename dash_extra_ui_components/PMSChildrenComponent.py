# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class PMSChildrenComponent(Component):
    """A PMSChildrenComponent component.


Keyword arguments:
- data (list; optional)"""
    @_explicitize_args
    def __init__(self, data=Component.UNDEFINED, girlDataUpdate=Component.UNDEFINED, **kwargs):
        self._prop_names = ['data']
        self._type = 'PMSChildrenComponent'
        self._namespace = 'dash_extra_ui_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['data']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(PMSChildrenComponent, self).__init__(**args)
