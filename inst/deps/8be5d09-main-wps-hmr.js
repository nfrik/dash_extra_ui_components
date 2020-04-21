webpackHotUpdateextra_dash_ui_components("main",{

/***/ "./src/lib/components/Geolocator/GeolocatorComponent.react.js":
/*!********************************************************************!*\
  !*** ./src/lib/components/Geolocator/GeolocatorComponent.react.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Geolocator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Geolocator */ "./src/lib/components/Geolocator/Geolocator.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var GeolocatorComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(GeolocatorComponent, _Component);

  function GeolocatorComponent(props) {
    _classCallCheck(this, GeolocatorComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(GeolocatorComponent).call(this, props));
  }

  _createClass(GeolocatorComponent, [{
    key: "render",
    value: function render() {
      var geolocationProvider = navigator.geolocation;
      this.props.setProps({
        location: geolocationProvider
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: this.props.id
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Geolocator__WEBPACK_IMPORTED_MODULE_2__["default"], {
        positionOptions: this.props.positionOptions,
        watchPosition: this.props.watchPosition,
        userDecisionTimeout: this.props.userDecisionTimeout,
        suppressLocationOnMount: this.props.suppressLocationOnMount,
        isOptimisticGeolocationEnabled: this.props.isOptimisticGeolocationEnabled,
        geolocationProvider: geolocationProvider,
        onSuccess: this.props.onSuccess,
        onError: this.props.onError,
        errorMsg: this.props.errorMsg
      }));
    }
  }]);

  return GeolocatorComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

GeolocatorComponent.defaultProps = {
  setProps: function setProps() {},
  id: null,
  positionOptions: {
    enableHighAccuracy: true,
    maximumAge: 0,
    timeout: 5000
  },
  watchPosition: true,
  userDecisionTimeout: null,
  suppressLocationOnMount: false,
  isOptimisticGeolocationEnabled: true,
  errorMsg: {
    isGeolocationAvailable: "Your browser does not support Geolocation",
    isGeolocationEnabled: "Geolocation is not enabled"
  },
  onSuccess: function onSuccess(success) {
    console.log(success);
  },
  onError: function onError(error) {
    console.log(error);
  }
};
GeolocatorComponent.propTypes = {
  location: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  positionOptions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  watchPosition: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  userDecisionTimeout: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  suppressLocationOnMount: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  isOptimisticGeolocationEnabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  errorMsg: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  onSuccess: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onError: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (GeolocatorComponent);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHRyYV9kYXNoX3VpX2NvbXBvbmVudHMvLi9zcmMvbGliL2NvbXBvbmVudHMvR2VvbG9jYXRvci9HZW9sb2NhdG9yQ29tcG9uZW50LnJlYWN0LmpzIl0sIm5hbWVzIjpbIkdlb2xvY2F0b3JDb21wb25lbnQiLCJwcm9wcyIsImdlb2xvY2F0aW9uUHJvdmlkZXIiLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsInNldFByb3BzIiwibG9jYXRpb24iLCJpZCIsInBvc2l0aW9uT3B0aW9ucyIsIndhdGNoUG9zaXRpb24iLCJ1c2VyRGVjaXNpb25UaW1lb3V0Iiwic3VwcHJlc3NMb2NhdGlvbk9uTW91bnQiLCJpc09wdGltaXN0aWNHZW9sb2NhdGlvbkVuYWJsZWQiLCJvblN1Y2Nlc3MiLCJvbkVycm9yIiwiZXJyb3JNc2ciLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJlbmFibGVIaWdoQWNjdXJhY3kiLCJtYXhpbXVtQWdlIiwidGltZW91dCIsImlzR2VvbG9jYXRpb25BdmFpbGFibGUiLCJpc0dlb2xvY2F0aW9uRW5hYmxlZCIsInN1Y2Nlc3MiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJmdW5jIiwic3RyaW5nIiwiYm9vbCIsIm51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7SUFFTUEsbUI7Ozs7O0FBRUosK0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw0RkFDWEEsS0FEVztBQUVsQjs7Ozs2QkFFUTtBQUNQLFVBQUlDLG1CQUFtQixHQUFHQyxTQUFTLENBQUNDLFdBQXBDO0FBRUEsV0FBS0gsS0FBTCxDQUFXSSxRQUFYLENBQW9CO0FBQ2xCQyxnQkFBUSxFQUFHSjtBQURPLE9BQXBCO0FBSUEsYUFDRTtBQUFLLFVBQUUsRUFBRSxLQUFLRCxLQUFMLENBQVdNO0FBQXBCLFNBQ0UsMkRBQUMsbURBQUQ7QUFDRSx1QkFBZSxFQUFJLEtBQUtOLEtBQUwsQ0FBV08sZUFEaEM7QUFFRSxxQkFBYSxFQUFJLEtBQUtQLEtBQUwsQ0FBV1EsYUFGOUI7QUFHRSwyQkFBbUIsRUFBSSxLQUFLUixLQUFMLENBQVdTLG1CQUhwQztBQUlFLCtCQUF1QixFQUFJLEtBQUtULEtBQUwsQ0FBV1UsdUJBSnhDO0FBS0Usc0NBQThCLEVBQUksS0FBS1YsS0FBTCxDQUFXVyw4QkFML0M7QUFNRSwyQkFBbUIsRUFBS1YsbUJBTjFCO0FBT0UsaUJBQVMsRUFBSSxLQUFLRCxLQUFMLENBQVdZLFNBUDFCO0FBUUUsZUFBTyxFQUFJLEtBQUtaLEtBQUwsQ0FBV2EsT0FSeEI7QUFTRSxnQkFBUSxFQUFJLEtBQUtiLEtBQUwsQ0FBV2M7QUFUekIsUUFERixDQURGO0FBZUQ7Ozs7RUE1QitCQywrQzs7QUErQmxDaEIsbUJBQW1CLENBQUNpQixZQUFwQixHQUFtQztBQUNqQ1osVUFBUSxFQUFHLG9CQUFNLENBQUUsQ0FEYztBQUVqQ0UsSUFBRSxFQUFFLElBRjZCO0FBR2pDQyxpQkFBZSxFQUFFO0FBQ2ZVLHNCQUFrQixFQUFFLElBREw7QUFFZkMsY0FBVSxFQUFFLENBRkc7QUFHZkMsV0FBTyxFQUFFO0FBSE0sR0FIZ0I7QUFRakNYLGVBQWEsRUFBRSxJQVJrQjtBQVNqQ0MscUJBQW1CLEVBQUUsSUFUWTtBQVVqQ0MseUJBQXVCLEVBQUUsS0FWUTtBQVdqQ0MsZ0NBQThCLEVBQUUsSUFYQztBQVlqQ0csVUFBUSxFQUFFO0FBQ1JNLDBCQUFzQixFQUFFLDJDQURoQjtBQUVSQyx3QkFBb0IsRUFBRTtBQUZkLEdBWnVCO0FBZ0JqQ1QsV0FBUyxFQUFFLG1CQUFTVSxPQUFULEVBQWlCO0FBQUVDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixPQUFaO0FBQXNCLEdBaEJuQjtBQWlCakNULFNBQU8sRUFBRSxpQkFBU1ksS0FBVCxFQUFlO0FBQUVGLFdBQU8sQ0FBQ0MsR0FBUixDQUFZQyxLQUFaO0FBQW1CO0FBakJaLENBQW5DO0FBb0JBMUIsbUJBQW1CLENBQUMyQixTQUFwQixHQUFnQztBQUM5QnJCLFVBQVEsRUFBR3NCLGlEQUFTLENBQUNDLE1BRFM7QUFFOUJ4QixVQUFRLEVBQUd1QixpREFBUyxDQUFDRSxJQUZTO0FBRzlCdkIsSUFBRSxFQUFFcUIsaURBQVMsQ0FBQ0csTUFIZ0I7QUFJOUJ2QixpQkFBZSxFQUFFb0IsaURBQVMsQ0FBQ0MsTUFKRztBQUs5QnBCLGVBQWEsRUFBRW1CLGlEQUFTLENBQUNJLElBTEs7QUFNOUJ0QixxQkFBbUIsRUFBRWtCLGlEQUFTLENBQUNLLE1BTkQ7QUFPOUJ0Qix5QkFBdUIsRUFBRWlCLGlEQUFTLENBQUNJLElBUEw7QUFROUJwQixnQ0FBOEIsRUFBRWdCLGlEQUFTLENBQUNJLElBUlo7QUFTOUJqQixVQUFRLEVBQUVhLGlEQUFTLENBQUNDLE1BVFU7QUFVOUJoQixXQUFTLEVBQUVlLGlEQUFTLENBQUNFLElBVlM7QUFXOUJoQixTQUFPLEVBQUVjLGlEQUFTLENBQUNFO0FBWFcsQ0FBaEM7QUFjZTlCLGtGQUFmLEUiLCJmaWxlIjoiOGJlNWQwOS1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgR2VvbG9jYXRvciBmcm9tICcuL0dlb2xvY2F0b3InO1xyXG5cclxuY2xhc3MgR2VvbG9jYXRvckNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBsZXQgZ2VvbG9jYXRpb25Qcm92aWRlciA9IG5hdmlnYXRvci5nZW9sb2NhdGlvbjtcclxuXHJcbiAgICB0aGlzLnByb3BzLnNldFByb3BzKHtcclxuICAgICAgbG9jYXRpb24gOiBnZW9sb2NhdGlvblByb3ZpZGVyXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgaWQ9e3RoaXMucHJvcHMuaWR9PlxyXG4gICAgICAgIDxHZW9sb2NhdG9yIFxyXG4gICAgICAgICAgcG9zaXRpb25PcHRpb25zID0ge3RoaXMucHJvcHMucG9zaXRpb25PcHRpb25zfVxyXG4gICAgICAgICAgd2F0Y2hQb3NpdGlvbiA9IHt0aGlzLnByb3BzLndhdGNoUG9zaXRpb259XHJcbiAgICAgICAgICB1c2VyRGVjaXNpb25UaW1lb3V0ID0ge3RoaXMucHJvcHMudXNlckRlY2lzaW9uVGltZW91dH1cclxuICAgICAgICAgIHN1cHByZXNzTG9jYXRpb25Pbk1vdW50ID0ge3RoaXMucHJvcHMuc3VwcHJlc3NMb2NhdGlvbk9uTW91bnR9ICAgICAgICAgIFxyXG4gICAgICAgICAgaXNPcHRpbWlzdGljR2VvbG9jYXRpb25FbmFibGVkID0ge3RoaXMucHJvcHMuaXNPcHRpbWlzdGljR2VvbG9jYXRpb25FbmFibGVkfVxyXG4gICAgICAgICAgZ2VvbG9jYXRpb25Qcm92aWRlciA9IHsgZ2VvbG9jYXRpb25Qcm92aWRlciB9XHJcbiAgICAgICAgICBvblN1Y2Nlc3MgPSB7dGhpcy5wcm9wcy5vblN1Y2Nlc3N9XHJcbiAgICAgICAgICBvbkVycm9yID0ge3RoaXMucHJvcHMub25FcnJvcn1cclxuICAgICAgICAgIGVycm9yTXNnID0ge3RoaXMucHJvcHMuZXJyb3JNc2d9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5HZW9sb2NhdG9yQ29tcG9uZW50LmRlZmF1bHRQcm9wcyA9IHtcclxuICBzZXRQcm9wcyA6ICgpID0+IHt9LFxyXG4gIGlkOiBudWxsLFxyXG4gIHBvc2l0aW9uT3B0aW9uczoge1xyXG4gICAgZW5hYmxlSGlnaEFjY3VyYWN5OiB0cnVlLFxyXG4gICAgbWF4aW11bUFnZTogMCxcclxuICAgIHRpbWVvdXQ6IDUwMDAsXHJcbiAgfSxcclxuICB3YXRjaFBvc2l0aW9uOiB0cnVlLFxyXG4gIHVzZXJEZWNpc2lvblRpbWVvdXQ6IG51bGwsXHJcbiAgc3VwcHJlc3NMb2NhdGlvbk9uTW91bnQ6IGZhbHNlLFxyXG4gIGlzT3B0aW1pc3RpY0dlb2xvY2F0aW9uRW5hYmxlZDogdHJ1ZSxcclxuICBlcnJvck1zZzoge1xyXG4gICAgaXNHZW9sb2NhdGlvbkF2YWlsYWJsZTogXCJZb3VyIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBHZW9sb2NhdGlvblwiLFxyXG4gICAgaXNHZW9sb2NhdGlvbkVuYWJsZWQ6IFwiR2VvbG9jYXRpb24gaXMgbm90IGVuYWJsZWRcIlxyXG4gIH0sXHJcbiAgb25TdWNjZXNzOiBmdW5jdGlvbihzdWNjZXNzKXsgY29uc29sZS5sb2coc3VjY2VzcykgfSxcclxuICBvbkVycm9yOiBmdW5jdGlvbihlcnJvcil7IGNvbnNvbGUubG9nKGVycm9yKX1cclxufTtcclxuXHJcbkdlb2xvY2F0b3JDb21wb25lbnQucHJvcFR5cGVzID0ge1xyXG4gIGxvY2F0aW9uIDogUHJvcFR5cGVzLm9iamVjdCxcclxuICBzZXRQcm9wcyA6IFByb3BUeXBlcy5mdW5jLFxyXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHBvc2l0aW9uT3B0aW9uczogUHJvcFR5cGVzLm9iamVjdCxcclxuICB3YXRjaFBvc2l0aW9uOiBQcm9wVHlwZXMuYm9vbCxcclxuICB1c2VyRGVjaXNpb25UaW1lb3V0OiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIHN1cHByZXNzTG9jYXRpb25Pbk1vdW50OiBQcm9wVHlwZXMuYm9vbCxcclxuICBpc09wdGltaXN0aWNHZW9sb2NhdGlvbkVuYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxyXG4gIGVycm9yTXNnOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIG9uU3VjY2VzczogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgb25FcnJvcjogUHJvcFR5cGVzLmZ1bmMsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHZW9sb2NhdG9yQ29tcG9uZW50OyJdLCJzb3VyY2VSb290IjoiIn0=