# AUTO GENERATED FILE - DO NOT EDIT

organizationChartComponent <- function(id=NULL, value=NULL, selectionMode=NULL) {
    
    props <- list(id=id, value=value, selectionMode=selectionMode)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'OrganizationChartComponent',
        namespace = 'extra_dash_ui_components',
        propNames = c('id', 'value', 'selectionMode'),
        package = 'extraDashUiComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
