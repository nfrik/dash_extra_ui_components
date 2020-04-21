# AUTO GENERATED FILE - DO NOT EDIT

''Geolocator <- function(positionOptions=NULL, watchPosition=NULL, userDecisionTimeout=NULL, suppressLocationOnMount=NULL, geolocationProvider=NULL, isOptimisticGeolocationEnabled=NULL, onSuccess=NULL, onError=NULL, errorMsg=NULL, getPosition=NULL) {
    
    props <- list(positionOptions=positionOptions, watchPosition=watchPosition, userDecisionTimeout=userDecisionTimeout, suppressLocationOnMount=suppressLocationOnMount, geolocationProvider=geolocationProvider, isOptimisticGeolocationEnabled=isOptimisticGeolocationEnabled, onSuccess=onSuccess, onError=onError, errorMsg=errorMsg, getPosition=getPosition)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Geolocator',
        namespace = 'extra_dash_ui_components',
        propNames = c('positionOptions', 'watchPosition', 'userDecisionTimeout', 'suppressLocationOnMount', 'geolocationProvider', 'isOptimisticGeolocationEnabled', 'onSuccess', 'onError', 'errorMsg', 'getPosition'),
        package = 'extraDashUiComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
