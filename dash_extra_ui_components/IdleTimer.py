# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class IdleTimer(Component):
    """An IdleTimer component.


Keyword arguments:
- id (string; optional)
- action (dict; optional)
- active (dict; optional)
- idle (dict; optional)
- timeout (number; default 1000 * 60 * 15)
- debounce (number; default 0)
- startOnMount (boolean; default False)
- stopOnIdle (boolean; default False)
- passive (boolean; default True)
- capture (boolean; default True)"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, action=Component.UNDEFINED, active=Component.UNDEFINED, idle=Component.UNDEFINED, timeout=Component.UNDEFINED, debounce=Component.UNDEFINED, startOnMount=Component.UNDEFINED, stopOnIdle=Component.UNDEFINED, passive=Component.UNDEFINED, capture=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'action', 'active', 'idle', 'timeout', 'debounce', 'startOnMount', 'stopOnIdle', 'passive', 'capture']
        self._type = 'IdleTimer'
        self._namespace = 'dash_extra_ui_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'action', 'active', 'idle', 'timeout', 'debounce', 'startOnMount', 'stopOnIdle', 'passive', 'capture']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(IdleTimer, self).__init__(**args)
