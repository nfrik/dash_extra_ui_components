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
            position: position
          });

          debugger;
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
  position: null,
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
  position: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHRyYV9kYXNoX3VpX2NvbXBvbmVudHMvLi9zcmMvbGliL2NvbXBvbmVudHMvR2VvbG9jYXRvci9HZW9sb2NhdG9yQ29tcG9uZW50LnJlYWN0LmpzIl0sIm5hbWVzIjpbIkdlb2xvY2F0b3JDb21wb25lbnQiLCJwcm9wcyIsImdlb2xvY2F0aW9uUHJvdmlkZXIiLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsImlkIiwicG9zaXRpb25PcHRpb25zIiwid2F0Y2hQb3NpdGlvbiIsInVzZXJEZWNpc2lvblRpbWVvdXQiLCJzdXBwcmVzc0xvY2F0aW9uT25Nb3VudCIsImlzT3B0aW1pc3RpY0dlb2xvY2F0aW9uRW5hYmxlZCIsIm9uU3VjY2VzcyIsIm9uRXJyb3IiLCJlcnJvck1zZyIsInBvc2l0aW9uIiwic2V0UHJvcHMiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJlbmFibGVIaWdoQWNjdXJhY3kiLCJtYXhpbXVtQWdlIiwidGltZW91dCIsImlzR2VvbG9jYXRpb25BdmFpbGFibGUiLCJpc0dlb2xvY2F0aW9uRW5hYmxlZCIsInN1Y2Nlc3MiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJmdW5jIiwic3RyaW5nIiwiYm9vbCIsIm51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7SUFFTUEsbUI7Ozs7O0FBRUosK0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw0RkFDWEEsS0FEVztBQUVsQjs7Ozs2QkFFUTtBQUFBOztBQUNQLFVBQUlDLG1CQUFtQixHQUFHQyxTQUFTLENBQUNDLFdBQXBDO0FBRUEsYUFDRTtBQUFLLFVBQUUsRUFBRSxLQUFLSCxLQUFMLENBQVdJO0FBQXBCLFNBQ0UsMkRBQUMsbURBQUQ7QUFDRSx1QkFBZSxFQUFJLEtBQUtKLEtBQUwsQ0FBV0ssZUFEaEM7QUFFRSxxQkFBYSxFQUFJLEtBQUtMLEtBQUwsQ0FBV00sYUFGOUI7QUFHRSwyQkFBbUIsRUFBSSxLQUFLTixLQUFMLENBQVdPLG1CQUhwQztBQUlFLCtCQUF1QixFQUFJLEtBQUtQLEtBQUwsQ0FBV1EsdUJBSnhDO0FBS0Usc0NBQThCLEVBQUksS0FBS1IsS0FBTCxDQUFXUyw4QkFML0M7QUFNRSwyQkFBbUIsRUFBS1IsbUJBTjFCO0FBT0UsaUJBQVMsRUFBSSxLQUFLRCxLQUFMLENBQVdVLFNBUDFCO0FBUUUsZUFBTyxFQUFJLEtBQUtWLEtBQUwsQ0FBV1csT0FSeEI7QUFTRSxnQkFBUSxFQUFJLEtBQUtYLEtBQUwsQ0FBV1ksUUFUekI7QUFVRSxtQkFBVyxFQUFLLHFCQUFDQyxRQUFELEVBQWM7QUFDNUIsZUFBSSxDQUFDYixLQUFMLENBQVdjLFFBQVgsQ0FBb0I7QUFDbEJELG9CQUFRLEVBQUdBO0FBRE8sV0FBcEI7O0FBR0E7QUFDRDtBQWZILFFBREYsQ0FERjtBQXFCRDs7OztFQTlCK0JFLCtDOztBQWlDbENoQixtQkFBbUIsQ0FBQ2lCLFlBQXBCLEdBQW1DO0FBQ2pDRixVQUFRLEVBQUUsb0JBQU0sQ0FBRSxDQURlO0FBRWpDVixJQUFFLEVBQUUsSUFGNkI7QUFHakNDLGlCQUFlLEVBQUU7QUFDZlksc0JBQWtCLEVBQUUsSUFETDtBQUVmQyxjQUFVLEVBQUUsQ0FGRztBQUdmQyxXQUFPLEVBQUU7QUFITSxHQUhnQjtBQVFqQ04sVUFBUSxFQUFHLElBUnNCO0FBU2pDUCxlQUFhLEVBQUUsSUFUa0I7QUFVakNDLHFCQUFtQixFQUFFLElBVlk7QUFXakNDLHlCQUF1QixFQUFFLEtBWFE7QUFZakNDLGdDQUE4QixFQUFFLElBWkM7QUFhakNHLFVBQVEsRUFBRTtBQUNSUSwwQkFBc0IsRUFBRSwyQ0FEaEI7QUFFUkMsd0JBQW9CLEVBQUU7QUFGZCxHQWJ1QjtBQWlCakNYLFdBQVMsRUFBRSxtQkFBU1ksT0FBVCxFQUFpQjtBQUFFQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsT0FBWjtBQUFzQixHQWpCbkI7QUFrQmpDWCxTQUFPLEVBQUUsaUJBQVNjLEtBQVQsRUFBZTtBQUFFRixXQUFPLENBQUNDLEdBQVIsQ0FBWUMsS0FBWjtBQUFtQjtBQWxCWixDQUFuQztBQXFCQTFCLG1CQUFtQixDQUFDMkIsU0FBcEIsR0FBZ0M7QUFDOUJiLFVBQVEsRUFBR2MsaURBQVMsQ0FBQ0MsTUFEUztBQUU5QmQsVUFBUSxFQUFHYSxpREFBUyxDQUFDRSxJQUZTO0FBRzlCekIsSUFBRSxFQUFFdUIsaURBQVMsQ0FBQ0csTUFIZ0I7QUFJOUJ6QixpQkFBZSxFQUFFc0IsaURBQVMsQ0FBQ0MsTUFKRztBQUs5QnRCLGVBQWEsRUFBRXFCLGlEQUFTLENBQUNJLElBTEs7QUFNOUJ4QixxQkFBbUIsRUFBRW9CLGlEQUFTLENBQUNLLE1BTkQ7QUFPOUJ4Qix5QkFBdUIsRUFBRW1CLGlEQUFTLENBQUNJLElBUEw7QUFROUJ0QixnQ0FBOEIsRUFBRWtCLGlEQUFTLENBQUNJLElBUlo7QUFTOUJuQixVQUFRLEVBQUVlLGlEQUFTLENBQUNDLE1BVFU7QUFVOUJsQixXQUFTLEVBQUVpQixpREFBUyxDQUFDRSxJQVZTO0FBVzlCbEIsU0FBTyxFQUFFZ0IsaURBQVMsQ0FBQ0U7QUFYVyxDQUFoQztBQWNlOUIsa0ZBQWYsRSIsImZpbGUiOiI3NzZmODk2LW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBHZW9sb2NhdG9yIGZyb20gJy4vR2VvbG9jYXRvcic7XHJcblxyXG5jbGFzcyBHZW9sb2NhdG9yQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGxldCBnZW9sb2NhdGlvblByb3ZpZGVyID0gbmF2aWdhdG9yLmdlb2xvY2F0aW9uO1xyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGlkPXt0aGlzLnByb3BzLmlkfT5cclxuICAgICAgICA8R2VvbG9jYXRvciBcclxuICAgICAgICAgIHBvc2l0aW9uT3B0aW9ucyA9IHt0aGlzLnByb3BzLnBvc2l0aW9uT3B0aW9uc31cclxuICAgICAgICAgIHdhdGNoUG9zaXRpb24gPSB7dGhpcy5wcm9wcy53YXRjaFBvc2l0aW9ufVxyXG4gICAgICAgICAgdXNlckRlY2lzaW9uVGltZW91dCA9IHt0aGlzLnByb3BzLnVzZXJEZWNpc2lvblRpbWVvdXR9XHJcbiAgICAgICAgICBzdXBwcmVzc0xvY2F0aW9uT25Nb3VudCA9IHt0aGlzLnByb3BzLnN1cHByZXNzTG9jYXRpb25Pbk1vdW50fSAgICAgICAgICBcclxuICAgICAgICAgIGlzT3B0aW1pc3RpY0dlb2xvY2F0aW9uRW5hYmxlZCA9IHt0aGlzLnByb3BzLmlzT3B0aW1pc3RpY0dlb2xvY2F0aW9uRW5hYmxlZH1cclxuICAgICAgICAgIGdlb2xvY2F0aW9uUHJvdmlkZXIgPSB7IGdlb2xvY2F0aW9uUHJvdmlkZXIgfVxyXG4gICAgICAgICAgb25TdWNjZXNzID0ge3RoaXMucHJvcHMub25TdWNjZXNzfVxyXG4gICAgICAgICAgb25FcnJvciA9IHt0aGlzLnByb3BzLm9uRXJyb3J9XHJcbiAgICAgICAgICBlcnJvck1zZyA9IHt0aGlzLnByb3BzLmVycm9yTXNnfVxyXG4gICAgICAgICAgZ2V0UG9zaXRpb24gPSB7IChwb3NpdGlvbikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLnNldFByb3BzKHtcclxuICAgICAgICAgICAgICBwb3NpdGlvbiA6IHBvc2l0aW9uXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGRlYnVnZ2VyXHJcbiAgICAgICAgICB9IH1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbkdlb2xvY2F0b3JDb21wb25lbnQuZGVmYXVsdFByb3BzID0ge1xyXG4gIHNldFByb3BzOiAoKSA9PiB7fSxcclxuICBpZDogbnVsbCxcclxuICBwb3NpdGlvbk9wdGlvbnM6IHtcclxuICAgIGVuYWJsZUhpZ2hBY2N1cmFjeTogdHJ1ZSxcclxuICAgIG1heGltdW1BZ2U6IDAsXHJcbiAgICB0aW1lb3V0OiA1MDAwLFxyXG4gIH0sXHJcbiAgcG9zaXRpb24gOiBudWxsLFxyXG4gIHdhdGNoUG9zaXRpb246IHRydWUsXHJcbiAgdXNlckRlY2lzaW9uVGltZW91dDogbnVsbCxcclxuICBzdXBwcmVzc0xvY2F0aW9uT25Nb3VudDogZmFsc2UsXHJcbiAgaXNPcHRpbWlzdGljR2VvbG9jYXRpb25FbmFibGVkOiB0cnVlLFxyXG4gIGVycm9yTXNnOiB7XHJcbiAgICBpc0dlb2xvY2F0aW9uQXZhaWxhYmxlOiBcIllvdXIgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IEdlb2xvY2F0aW9uXCIsXHJcbiAgICBpc0dlb2xvY2F0aW9uRW5hYmxlZDogXCJHZW9sb2NhdGlvbiBpcyBub3QgZW5hYmxlZFwiXHJcbiAgfSxcclxuICBvblN1Y2Nlc3M6IGZ1bmN0aW9uKHN1Y2Nlc3MpeyBjb25zb2xlLmxvZyhzdWNjZXNzKSB9LFxyXG4gIG9uRXJyb3I6IGZ1bmN0aW9uKGVycm9yKXsgY29uc29sZS5sb2coZXJyb3IpfVxyXG59O1xyXG5cclxuR2VvbG9jYXRvckNvbXBvbmVudC5wcm9wVHlwZXMgPSB7XHJcbiAgcG9zaXRpb24gOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIHNldFByb3BzIDogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgcG9zaXRpb25PcHRpb25zOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIHdhdGNoUG9zaXRpb246IFByb3BUeXBlcy5ib29sLFxyXG4gIHVzZXJEZWNpc2lvblRpbWVvdXQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgc3VwcHJlc3NMb2NhdGlvbk9uTW91bnQ6IFByb3BUeXBlcy5ib29sLFxyXG4gIGlzT3B0aW1pc3RpY0dlb2xvY2F0aW9uRW5hYmxlZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgZXJyb3JNc2c6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgb25TdWNjZXNzOiBQcm9wVHlwZXMuZnVuYyxcclxuICBvbkVycm9yOiBQcm9wVHlwZXMuZnVuYyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdlb2xvY2F0b3JDb21wb25lbnQ7Il0sInNvdXJjZVJvb3QiOiIifQ==