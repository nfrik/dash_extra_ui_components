# AUTO GENERATED FILE - DO NOT EDIT

gPayButtonComponent <- function(id=NULL, totalPrice=NULL, totalPriceStatus=NULL, currencyCode=NULL, countryCode=NULL, merchantInfo=NULL, paymentMethods=NULL) {
    
    props <- list(id=id, totalPrice=totalPrice, totalPriceStatus=totalPriceStatus, currencyCode=currencyCode, countryCode=countryCode, merchantInfo=merchantInfo, paymentMethods=paymentMethods)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'GPayButtonComponent',
        namespace = 'dash_extra_ui_components',
        propNames = c('id', 'totalPrice', 'totalPriceStatus', 'currencyCode', 'countryCode', 'merchantInfo', 'paymentMethods'),
        package = 'dashExtraUiComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
