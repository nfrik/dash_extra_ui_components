# AUTO GENERATED FILE - DO NOT EDIT

pMSChildrenComponent <- function(data=NULL, girlDataUpdate=NULL) {
    
    props <- list(data=data, girlDataUpdate=girlDataUpdate)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'PMSChildrenComponent',
        namespace = 'dash_extra_ui_components',
        propNames = c('data', 'girlDataUpdate'),
        package = 'dashExtraUiComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
