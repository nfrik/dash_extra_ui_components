# AUTO GENERATED FILE - DO NOT EDIT

pmsComponent <- function(value=NULL) {
    
    props <- list(value=value)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'pmsComponent',
        namespace = 'dash_extra_ui_components',
        propNames = c('value'),
        package = 'dashExtraUiComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
