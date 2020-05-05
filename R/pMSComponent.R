# AUTO GENERATED FILE - DO NOT EDIT

pMSComponent <- function(value=NULL, id=NULL) {
    
    props <- list(value=value, id=id)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'PMSComponent',
        namespace = 'dash_extra_ui_components',
        propNames = c('value', 'id'),
        package = 'dashExtraUiComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
