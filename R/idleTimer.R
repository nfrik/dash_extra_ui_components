# AUTO GENERATED FILE - DO NOT EDIT

idleTimer <- function(id=NULL, action=NULL, active=NULL, idle=NULL, timeout=NULL, debounce=NULL, startOnMount=NULL, stopOnIdle=NULL, passive=NULL, capture=NULL) {
    
    props <- list(id=id, action=action, active=active, idle=idle, timeout=timeout, debounce=debounce, startOnMount=startOnMount, stopOnIdle=stopOnIdle, passive=passive, capture=capture)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'IdleTimer',
        namespace = 'dash_extra_ui_components',
        propNames = c('id', 'action', 'active', 'idle', 'timeout', 'debounce', 'startOnMount', 'stopOnIdle', 'passive', 'capture'),
        package = 'dashExtraUiComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
