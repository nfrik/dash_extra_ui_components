# AUTO GENERATED FILE - DO NOT EDIT

''GeolocatorComponent <- function(position=NULL, id=NULL, positionOptions=NULL, watchPosition=NULL, userDecisionTimeout=NULL, suppressLocationOnMount=NULL, isOptimisticGeolocationEnabled=NULL, errorMsg=NULL, onSuccess=NULL, onError=NULL) {
    
    props <- list(position=position, id=id, positionOptions=positionOptions, watchPosition=watchPosition, userDecisionTimeout=userDecisionTimeout, suppressLocationOnMount=suppressLocationOnMount, isOptimisticGeolocationEnabled=isOptimisticGeolocationEnabled, errorMsg=errorMsg, onSuccess=onSuccess, onError=onError)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'GeolocatorComponent',
        namespace = 'extra_dash_ui_components',
        propNames = c('position', 'id', 'positionOptions', 'watchPosition', 'userDecisionTimeout', 'suppressLocationOnMount', 'isOptimisticGeolocationEnabled', 'errorMsg', 'onSuccess', 'onError'),
        package = 'extraDashUiComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
