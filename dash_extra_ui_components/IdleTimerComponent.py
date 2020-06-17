# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class IdleTimerComponent(Component):
    """An IdleTimerComponent component.


Keyword arguments:
- id (string; optional)
- timeout (number; default 3000)
- action (dict; optional)
- idle (string; optional)
- active (dict; optional)
- acType (string; optional)
- xPosition (number; optional)
- yPosition (number; optional)
- movementX (number; optional)
- movementY (number; optional)
- pageX (number; optional)
- pageY (number; optional)
- screenX (number; optional)
- screenY (number; optional)
- timeStamp (number; optional)
- type (string; optional)
- code (string; optional)
- key (string; optional)
- which (number; optional)"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, timeout=Component.UNDEFINED, action=Component.UNDEFINED, idle=Component.UNDEFINED, active=Component.UNDEFINED, acType=Component.UNDEFINED, xPosition=Component.UNDEFINED, yPosition=Component.UNDEFINED, movementX=Component.UNDEFINED, movementY=Component.UNDEFINED, pageX=Component.UNDEFINED, pageY=Component.UNDEFINED, screenX=Component.UNDEFINED, screenY=Component.UNDEFINED, timeStamp=Component.UNDEFINED, type=Component.UNDEFINED, code=Component.UNDEFINED, key=Component.UNDEFINED, which=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'timeout', 'action', 'idle', 'active', 'acType', 'xPosition', 'yPosition', 'movementX', 'movementY', 'pageX', 'pageY', 'screenX', 'screenY', 'timeStamp', 'type', 'code', 'key', 'which']
        self._type = 'IdleTimerComponent'
        self._namespace = 'dash_extra_ui_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'timeout', 'action', 'idle', 'active', 'acType', 'xPosition', 'yPosition', 'movementX', 'movementY', 'pageX', 'pageY', 'screenX', 'screenY', 'timeStamp', 'type', 'code', 'key', 'which']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(IdleTimerComponent, self).__init__(**args)
