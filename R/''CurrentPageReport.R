# AUTO GENERATED FILE - DO NOT EDIT

''CurrentPageReport <- function(id=NULL, pageCount=NULL, page=NULL, template=NULL) {
    
    props <- list(id=id, pageCount=pageCount, page=page, template=template)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'CurrentPageReport',
        namespace = 'dash_extra_ui_components',
        propNames = c('id', 'pageCount', 'page', 'template'),
        package = 'extraDashUiComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
