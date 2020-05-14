# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class PMSComponent(Component):
    """A PMSComponent component.


Keyword arguments:
- value (string; optional)
- id (string; optional)
- newGirl (dict; optional)
- updateData (dict; optional)
- range (number; default 21)
- deleteID (string; optional)"""
    @_explicitize_args
    def __init__(self, value=Component.UNDEFINED, id=Component.UNDEFINED, newGirl=Component.UNDEFINED, updateData=Component.UNDEFINED, range=Component.UNDEFINED, deleteID=Component.UNDEFINED, **kwargs):
        self._prop_names = ['value', 'id', 'newGirl', 'updateData', 'range', 'deleteID']
        self._type = 'PMSComponent'
        self._namespace = 'dash_extra_ui_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['value', 'id', 'newGirl', 'updateData', 'range', 'deleteID']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(PMSComponent, self).__init__(**args)
