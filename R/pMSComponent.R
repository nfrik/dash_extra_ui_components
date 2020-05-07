# AUTO GENERATED FILE - DO NOT EDIT

pMSComponent <- function(value=NULL, id=NULL, newGirl=NULL, updateData=NULL) {
    
    props <- list(value=value, id=id, newGirl=newGirl, updateData=updateData)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'PMSComponent',
        namespace = 'dash_extra_ui_components',
        propNames = c('value', 'id', 'newGirl', 'updateData'),
        package = 'dashExtraUiComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
