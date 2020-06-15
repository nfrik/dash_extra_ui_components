# AUTO GENERATED FILE - DO NOT EDIT

idleTimerComponent <- function(id=NULL, timeout=NULL, action=NULL, idle=NULL, active=NULL, acType=NULL, xPosition=NULL, yPosition=NULL, movementX=NULL, movementY=NULL, pageX=NULL, pageY=NULL, screenX=NULL, screenY=NULL, timeStamp=NULL, type=NULL, code=NULL, key=NULL, which=NULL) {
    
    props <- list(id=id, timeout=timeout, action=action, idle=idle, active=active, acType=acType, xPosition=xPosition, yPosition=yPosition, movementX=movementX, movementY=movementY, pageX=pageX, pageY=pageY, screenX=screenX, screenY=screenY, timeStamp=timeStamp, type=type, code=code, key=key, which=which)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'IdleTimerComponent',
        namespace = 'dash_extra_ui_components',
        propNames = c('id', 'timeout', 'action', 'idle', 'active', 'acType', 'xPosition', 'yPosition', 'movementX', 'movementY', 'pageX', 'pageY', 'screenX', 'screenY', 'timeStamp', 'type', 'code', 'key', 'which'),
        package = 'dashExtraUiComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
