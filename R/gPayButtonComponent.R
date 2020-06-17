# AUTO GENERATED FILE - DO NOT EDIT

gPayButtonComponent <- function(id=NULL, totalPrice=NULL, totalPriceStatus=NULL, currencyCode=NULL, countryCode=NULL, merchantInfo=NULL, paymentMethods=NULL, className=NULL, style=NULL, color=NULL, type=NULL, apiVersion=NULL, apiVersionMinor=NULL, checkoutOption=NULL, development=NULL, changedPaymentData=NULL, userCancelData=NULL, loadPaymentData=NULL, paymentAuthorized=NULL) {
    
    props <- list(id=id, totalPrice=totalPrice, totalPriceStatus=totalPriceStatus, currencyCode=currencyCode, countryCode=countryCode, merchantInfo=merchantInfo, paymentMethods=paymentMethods, className=className, style=style, color=color, type=type, apiVersion=apiVersion, apiVersionMinor=apiVersionMinor, checkoutOption=checkoutOption, development=development, changedPaymentData=changedPaymentData, userCancelData=userCancelData, loadPaymentData=loadPaymentData, paymentAuthorized=paymentAuthorized)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'GPayButtonComponent',
        namespace = 'dash_extra_ui_components',
        propNames = c('id', 'totalPrice', 'totalPriceStatus', 'currencyCode', 'countryCode', 'merchantInfo', 'paymentMethods', 'className', 'style', 'color', 'type', 'apiVersion', 'apiVersionMinor', 'checkoutOption', 'development', 'changedPaymentData', 'userCancelData', 'loadPaymentData', 'paymentAuthorized'),
        package = 'dashExtraUiComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
