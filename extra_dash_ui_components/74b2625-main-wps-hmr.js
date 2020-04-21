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
      var _this = this;

      var geolocationProvider = navigator.geolocation;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: this.props.id
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Geolocator__WEBPACK_IMPORTED_MODULE_2__["default"], {
        id: this.props.id,
        positionOptions: this.props.positionOptions,
        watchPosition: this.props.watchPosition,
        userDecisionTimeout: this.props.userDecisionTimeout,
        suppressLocationOnMount: this.props.suppressLocationOnMount,
        isOptimisticGeolocationEnabled: this.props.isOptimisticGeolocationEnabled,
        geolocationProvider: geolocationProvider,
        onSuccess: this.props.onSuccess,
        onError: this.props.onError,
        errorMsg: this.props.errorMsg,
        getPosition: function getPosition(position) {
          _this.props.setProps({
            position: position.latitude
          });

          console.log(position);
        }
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
  position: 0,
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
  position: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHRyYV9kYXNoX3VpX2NvbXBvbmVudHMvLi9zcmMvbGliL2NvbXBvbmVudHMvR2VvbG9jYXRvci9HZW9sb2NhdG9yQ29tcG9uZW50LnJlYWN0LmpzIl0sIm5hbWVzIjpbIkdlb2xvY2F0b3JDb21wb25lbnQiLCJwcm9wcyIsImdlb2xvY2F0aW9uUHJvdmlkZXIiLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsImlkIiwicG9zaXRpb25PcHRpb25zIiwid2F0Y2hQb3NpdGlvbiIsInVzZXJEZWNpc2lvblRpbWVvdXQiLCJzdXBwcmVzc0xvY2F0aW9uT25Nb3VudCIsImlzT3B0aW1pc3RpY0dlb2xvY2F0aW9uRW5hYmxlZCIsIm9uU3VjY2VzcyIsIm9uRXJyb3IiLCJlcnJvck1zZyIsInBvc2l0aW9uIiwic2V0UHJvcHMiLCJsYXRpdHVkZSIsImNvbnNvbGUiLCJsb2ciLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJlbmFibGVIaWdoQWNjdXJhY3kiLCJtYXhpbXVtQWdlIiwidGltZW91dCIsImlzR2VvbG9jYXRpb25BdmFpbGFibGUiLCJpc0dlb2xvY2F0aW9uRW5hYmxlZCIsInN1Y2Nlc3MiLCJlcnJvciIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm51bWJlciIsImZ1bmMiLCJzdHJpbmciLCJvYmplY3QiLCJib29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztJQUVNQSxtQjs7Ozs7QUFFSiwrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDRGQUNYQSxLQURXO0FBRWxCOzs7OzZCQUVRO0FBQUE7O0FBQ1AsVUFBSUMsbUJBQW1CLEdBQUdDLFNBQVMsQ0FBQ0MsV0FBcEM7QUFFQSxhQUNFO0FBQUssVUFBRSxFQUFFLEtBQUtILEtBQUwsQ0FBV0k7QUFBcEIsU0FDRSwyREFBQyxtREFBRDtBQUNFLFVBQUUsRUFBSyxLQUFLSixLQUFMLENBQVdJLEVBRHBCO0FBRUUsdUJBQWUsRUFBSSxLQUFLSixLQUFMLENBQVdLLGVBRmhDO0FBR0UscUJBQWEsRUFBSSxLQUFLTCxLQUFMLENBQVdNLGFBSDlCO0FBSUUsMkJBQW1CLEVBQUksS0FBS04sS0FBTCxDQUFXTyxtQkFKcEM7QUFLRSwrQkFBdUIsRUFBSSxLQUFLUCxLQUFMLENBQVdRLHVCQUx4QztBQU1FLHNDQUE4QixFQUFJLEtBQUtSLEtBQUwsQ0FBV1MsOEJBTi9DO0FBT0UsMkJBQW1CLEVBQUtSLG1CQVAxQjtBQVFFLGlCQUFTLEVBQUksS0FBS0QsS0FBTCxDQUFXVSxTQVIxQjtBQVNFLGVBQU8sRUFBSSxLQUFLVixLQUFMLENBQVdXLE9BVHhCO0FBVUUsZ0JBQVEsRUFBSSxLQUFLWCxLQUFMLENBQVdZLFFBVnpCO0FBV0UsbUJBQVcsRUFBSyxxQkFBQ0MsUUFBRCxFQUFjO0FBQzVCLGVBQUksQ0FBQ2IsS0FBTCxDQUFXYyxRQUFYLENBQW9CO0FBQ2xCRCxvQkFBUSxFQUFHQSxRQUFRLENBQUNFO0FBREYsV0FBcEI7O0FBR0FDLGlCQUFPLENBQUNDLEdBQVIsQ0FBWUosUUFBWjtBQUNEO0FBaEJILFFBREYsQ0FERjtBQXVCRDs7OztFQWhDK0JLLCtDOztBQW1DbENuQixtQkFBbUIsQ0FBQ29CLFlBQXBCLEdBQW1DO0FBQ2pDTCxVQUFRLEVBQUUsb0JBQU0sQ0FBRSxDQURlO0FBRWpDVixJQUFFLEVBQUUsSUFGNkI7QUFHakNDLGlCQUFlLEVBQUU7QUFDZmUsc0JBQWtCLEVBQUUsSUFETDtBQUVmQyxjQUFVLEVBQUUsQ0FGRztBQUdmQyxXQUFPLEVBQUU7QUFITSxHQUhnQjtBQVFqQ1QsVUFBUSxFQUFHLENBUnNCO0FBU2pDUCxlQUFhLEVBQUUsSUFUa0I7QUFVakNDLHFCQUFtQixFQUFFLElBVlk7QUFXakNDLHlCQUF1QixFQUFFLEtBWFE7QUFZakNDLGdDQUE4QixFQUFFLElBWkM7QUFhakNHLFVBQVEsRUFBRTtBQUNSVywwQkFBc0IsRUFBRSwyQ0FEaEI7QUFFUkMsd0JBQW9CLEVBQUU7QUFGZCxHQWJ1QjtBQWlCakNkLFdBQVMsRUFBRSxtQkFBU2UsT0FBVCxFQUFpQjtBQUFFVCxXQUFPLENBQUNDLEdBQVIsQ0FBWVEsT0FBWjtBQUFzQixHQWpCbkI7QUFrQmpDZCxTQUFPLEVBQUUsaUJBQVNlLEtBQVQsRUFBZTtBQUFFVixXQUFPLENBQUNDLEdBQVIsQ0FBWVMsS0FBWjtBQUFtQjtBQWxCWixDQUFuQztBQXFCQTNCLG1CQUFtQixDQUFDNEIsU0FBcEIsR0FBZ0M7QUFDOUJkLFVBQVEsRUFBR2UsaURBQVMsQ0FBQ0MsTUFEUztBQUU5QmYsVUFBUSxFQUFHYyxpREFBUyxDQUFDRSxJQUZTO0FBRzlCMUIsSUFBRSxFQUFFd0IsaURBQVMsQ0FBQ0csTUFIZ0I7QUFJOUIxQixpQkFBZSxFQUFFdUIsaURBQVMsQ0FBQ0ksTUFKRztBQUs5QjFCLGVBQWEsRUFBRXNCLGlEQUFTLENBQUNLLElBTEs7QUFNOUIxQixxQkFBbUIsRUFBRXFCLGlEQUFTLENBQUNDLE1BTkQ7QUFPOUJyQix5QkFBdUIsRUFBRW9CLGlEQUFTLENBQUNLLElBUEw7QUFROUJ4QixnQ0FBOEIsRUFBRW1CLGlEQUFTLENBQUNLLElBUlo7QUFTOUJyQixVQUFRLEVBQUVnQixpREFBUyxDQUFDSSxNQVRVO0FBVTlCdEIsV0FBUyxFQUFFa0IsaURBQVMsQ0FBQ0UsSUFWUztBQVc5Qm5CLFNBQU8sRUFBRWlCLGlEQUFTLENBQUNFO0FBWFcsQ0FBaEM7QUFjZS9CLGtGQUFmLEUiLCJmaWxlIjoiNzRiMjYyNS1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgR2VvbG9jYXRvciBmcm9tICcuL0dlb2xvY2F0b3InO1xyXG5cclxuY2xhc3MgR2VvbG9jYXRvckNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBsZXQgZ2VvbG9jYXRpb25Qcm92aWRlciA9IG5hdmlnYXRvci5nZW9sb2NhdGlvbjtcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBpZD17dGhpcy5wcm9wcy5pZH0+XHJcbiAgICAgICAgPEdlb2xvY2F0b3IgXHJcbiAgICAgICAgICBpZCA9IHsgdGhpcy5wcm9wcy5pZCB9XHJcbiAgICAgICAgICBwb3NpdGlvbk9wdGlvbnMgPSB7dGhpcy5wcm9wcy5wb3NpdGlvbk9wdGlvbnN9XHJcbiAgICAgICAgICB3YXRjaFBvc2l0aW9uID0ge3RoaXMucHJvcHMud2F0Y2hQb3NpdGlvbn1cclxuICAgICAgICAgIHVzZXJEZWNpc2lvblRpbWVvdXQgPSB7dGhpcy5wcm9wcy51c2VyRGVjaXNpb25UaW1lb3V0fVxyXG4gICAgICAgICAgc3VwcHJlc3NMb2NhdGlvbk9uTW91bnQgPSB7dGhpcy5wcm9wcy5zdXBwcmVzc0xvY2F0aW9uT25Nb3VudH0gICAgICAgICAgXHJcbiAgICAgICAgICBpc09wdGltaXN0aWNHZW9sb2NhdGlvbkVuYWJsZWQgPSB7dGhpcy5wcm9wcy5pc09wdGltaXN0aWNHZW9sb2NhdGlvbkVuYWJsZWR9XHJcbiAgICAgICAgICBnZW9sb2NhdGlvblByb3ZpZGVyID0geyBnZW9sb2NhdGlvblByb3ZpZGVyIH1cclxuICAgICAgICAgIG9uU3VjY2VzcyA9IHt0aGlzLnByb3BzLm9uU3VjY2Vzc31cclxuICAgICAgICAgIG9uRXJyb3IgPSB7dGhpcy5wcm9wcy5vbkVycm9yfVxyXG4gICAgICAgICAgZXJyb3JNc2cgPSB7dGhpcy5wcm9wcy5lcnJvck1zZ31cclxuICAgICAgICAgIGdldFBvc2l0aW9uID0geyAocG9zaXRpb24pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5zZXRQcm9wcyh7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb24gOiBwb3NpdGlvbi5sYXRpdHVkZSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocG9zaXRpb24pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB9IFxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuR2VvbG9jYXRvckNvbXBvbmVudC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgc2V0UHJvcHM6ICgpID0+IHt9LFxyXG4gIGlkOiBudWxsLFxyXG4gIHBvc2l0aW9uT3B0aW9uczoge1xyXG4gICAgZW5hYmxlSGlnaEFjY3VyYWN5OiB0cnVlLFxyXG4gICAgbWF4aW11bUFnZTogMCxcclxuICAgIHRpbWVvdXQ6IDUwMDAsXHJcbiAgfSxcclxuICBwb3NpdGlvbiA6IDAsXHJcbiAgd2F0Y2hQb3NpdGlvbjogdHJ1ZSxcclxuICB1c2VyRGVjaXNpb25UaW1lb3V0OiBudWxsLFxyXG4gIHN1cHByZXNzTG9jYXRpb25Pbk1vdW50OiBmYWxzZSxcclxuICBpc09wdGltaXN0aWNHZW9sb2NhdGlvbkVuYWJsZWQ6IHRydWUsXHJcbiAgZXJyb3JNc2c6IHtcclxuICAgIGlzR2VvbG9jYXRpb25BdmFpbGFibGU6IFwiWW91ciBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgR2VvbG9jYXRpb25cIixcclxuICAgIGlzR2VvbG9jYXRpb25FbmFibGVkOiBcIkdlb2xvY2F0aW9uIGlzIG5vdCBlbmFibGVkXCJcclxuICB9LFxyXG4gIG9uU3VjY2VzczogZnVuY3Rpb24oc3VjY2Vzcyl7IGNvbnNvbGUubG9nKHN1Y2Nlc3MpIH0sXHJcbiAgb25FcnJvcjogZnVuY3Rpb24oZXJyb3IpeyBjb25zb2xlLmxvZyhlcnJvcil9XHJcbn07XHJcblxyXG5HZW9sb2NhdG9yQ29tcG9uZW50LnByb3BUeXBlcyA9IHtcclxuICBwb3NpdGlvbiA6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgc2V0UHJvcHMgOiBQcm9wVHlwZXMuZnVuYyxcclxuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcclxuICBwb3NpdGlvbk9wdGlvbnM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgd2F0Y2hQb3NpdGlvbjogUHJvcFR5cGVzLmJvb2wsXHJcbiAgdXNlckRlY2lzaW9uVGltZW91dDogUHJvcFR5cGVzLm51bWJlcixcclxuICBzdXBwcmVzc0xvY2F0aW9uT25Nb3VudDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgaXNPcHRpbWlzdGljR2VvbG9jYXRpb25FbmFibGVkOiBQcm9wVHlwZXMuYm9vbCxcclxuICBlcnJvck1zZzogUHJvcFR5cGVzLm9iamVjdCxcclxuICBvblN1Y2Nlc3M6IFByb3BUeXBlcy5mdW5jLFxyXG4gIG9uRXJyb3I6IFByb3BUeXBlcy5mdW5jLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2VvbG9jYXRvckNvbXBvbmVudDsiXSwic291cmNlUm9vdCI6IiJ9