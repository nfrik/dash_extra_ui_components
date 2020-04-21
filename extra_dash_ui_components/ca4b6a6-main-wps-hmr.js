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

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var GeolocatorComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(GeolocatorComponent, _Component);

  function GeolocatorComponent(props) {
    var _this;

    _classCallCheck(this, GeolocatorComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GeolocatorComponent).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "getPosition", function (position) {//   this.props.setProps({
      //     event : "onCardClick",
      //     metaData : metadata
      // })
      //  this.props.setProps({
      //    location : position
      //  })
      //  debugger
      // this.props.setProps({
      //   location : position
      // })
    });

    return _this;
  }

  _createClass(GeolocatorComponent, [{
    key: "render",
    value: function render() {
      var _this2 = this;

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
          _this2.props.setProps({
            location: position
          });
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
  location: null,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHRyYV9kYXNoX3VpX2NvbXBvbmVudHMvLi9zcmMvbGliL2NvbXBvbmVudHMvR2VvbG9jYXRvci9HZW9sb2NhdG9yQ29tcG9uZW50LnJlYWN0LmpzIl0sIm5hbWVzIjpbIkdlb2xvY2F0b3JDb21wb25lbnQiLCJwcm9wcyIsInBvc2l0aW9uIiwiZ2VvbG9jYXRpb25Qcm92aWRlciIsIm5hdmlnYXRvciIsImdlb2xvY2F0aW9uIiwiaWQiLCJwb3NpdGlvbk9wdGlvbnMiLCJ3YXRjaFBvc2l0aW9uIiwidXNlckRlY2lzaW9uVGltZW91dCIsInN1cHByZXNzTG9jYXRpb25Pbk1vdW50IiwiaXNPcHRpbWlzdGljR2VvbG9jYXRpb25FbmFibGVkIiwib25TdWNjZXNzIiwib25FcnJvciIsImVycm9yTXNnIiwic2V0UHJvcHMiLCJsb2NhdGlvbiIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsImVuYWJsZUhpZ2hBY2N1cmFjeSIsIm1heGltdW1BZ2UiLCJ0aW1lb3V0IiwiaXNHZW9sb2NhdGlvbkF2YWlsYWJsZSIsImlzR2VvbG9jYXRpb25FbmFibGVkIiwic3VjY2VzcyIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImZ1bmMiLCJzdHJpbmciLCJib29sIiwibnVtYmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0lBRU1BLG1COzs7OztBQUVKLCtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDZGQUFNQSxLQUFOOztBQURpQixrRUFJTCxVQUFBQyxRQUFRLEVBQUksQ0FDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNDLEtBaEJrQjs7QUFBQTtBQUVsQjs7Ozs2QkFnQlE7QUFBQTs7QUFDUCxVQUFJQyxtQkFBbUIsR0FBR0MsU0FBUyxDQUFDQyxXQUFwQztBQUVBLGFBQ0U7QUFBSyxVQUFFLEVBQUUsS0FBS0osS0FBTCxDQUFXSztBQUFwQixTQUNFLDJEQUFDLG1EQUFEO0FBQ0UsdUJBQWUsRUFBSSxLQUFLTCxLQUFMLENBQVdNLGVBRGhDO0FBRUUscUJBQWEsRUFBSSxLQUFLTixLQUFMLENBQVdPLGFBRjlCO0FBR0UsMkJBQW1CLEVBQUksS0FBS1AsS0FBTCxDQUFXUSxtQkFIcEM7QUFJRSwrQkFBdUIsRUFBSSxLQUFLUixLQUFMLENBQVdTLHVCQUp4QztBQUtFLHNDQUE4QixFQUFJLEtBQUtULEtBQUwsQ0FBV1UsOEJBTC9DO0FBTUUsMkJBQW1CLEVBQUtSLG1CQU4xQjtBQU9FLGlCQUFTLEVBQUksS0FBS0YsS0FBTCxDQUFXVyxTQVAxQjtBQVFFLGVBQU8sRUFBSSxLQUFLWCxLQUFMLENBQVdZLE9BUnhCO0FBU0UsZ0JBQVEsRUFBSSxLQUFLWixLQUFMLENBQVdhLFFBVHpCO0FBVUUsbUJBQVcsRUFBSyxxQkFBQ1osUUFBRCxFQUFjO0FBQzVCLGdCQUFJLENBQUNELEtBQUwsQ0FBV2MsUUFBWCxDQUFvQjtBQUNsQkMsb0JBQVEsRUFBR2Q7QUFETyxXQUFwQjtBQUdEO0FBZEgsUUFERixDQURGO0FBb0JEOzs7O0VBM0MrQmUsK0M7O0FBOENsQ2pCLG1CQUFtQixDQUFDa0IsWUFBcEIsR0FBbUM7QUFDakNILFVBQVEsRUFBRSxvQkFBTSxDQUFFLENBRGU7QUFFakNULElBQUUsRUFBRSxJQUY2QjtBQUdqQ0MsaUJBQWUsRUFBRTtBQUNmWSxzQkFBa0IsRUFBRSxJQURMO0FBRWZDLGNBQVUsRUFBRSxDQUZHO0FBR2ZDLFdBQU8sRUFBRTtBQUhNLEdBSGdCO0FBUWpDTCxVQUFRLEVBQUcsSUFSc0I7QUFTakNSLGVBQWEsRUFBRSxJQVRrQjtBQVVqQ0MscUJBQW1CLEVBQUUsSUFWWTtBQVdqQ0MseUJBQXVCLEVBQUUsS0FYUTtBQVlqQ0MsZ0NBQThCLEVBQUUsSUFaQztBQWFqQ0csVUFBUSxFQUFFO0FBQ1JRLDBCQUFzQixFQUFFLDJDQURoQjtBQUVSQyx3QkFBb0IsRUFBRTtBQUZkLEdBYnVCO0FBaUJqQ1gsV0FBUyxFQUFFLG1CQUFTWSxPQUFULEVBQWlCO0FBQUVDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixPQUFaO0FBQXNCLEdBakJuQjtBQWtCakNYLFNBQU8sRUFBRSxpQkFBU2MsS0FBVCxFQUFlO0FBQUVGLFdBQU8sQ0FBQ0MsR0FBUixDQUFZQyxLQUFaO0FBQW1CO0FBbEJaLENBQW5DO0FBcUJBM0IsbUJBQW1CLENBQUM0QixTQUFwQixHQUFnQztBQUM5QlosVUFBUSxFQUFHYSxpREFBUyxDQUFDQyxNQURTO0FBRTlCZixVQUFRLEVBQUdjLGlEQUFTLENBQUNFLElBRlM7QUFHOUJ6QixJQUFFLEVBQUV1QixpREFBUyxDQUFDRyxNQUhnQjtBQUk5QnpCLGlCQUFlLEVBQUVzQixpREFBUyxDQUFDQyxNQUpHO0FBSzlCdEIsZUFBYSxFQUFFcUIsaURBQVMsQ0FBQ0ksSUFMSztBQU05QnhCLHFCQUFtQixFQUFFb0IsaURBQVMsQ0FBQ0ssTUFORDtBQU85QnhCLHlCQUF1QixFQUFFbUIsaURBQVMsQ0FBQ0ksSUFQTDtBQVE5QnRCLGdDQUE4QixFQUFFa0IsaURBQVMsQ0FBQ0ksSUFSWjtBQVM5Qm5CLFVBQVEsRUFBRWUsaURBQVMsQ0FBQ0MsTUFUVTtBQVU5QmxCLFdBQVMsRUFBRWlCLGlEQUFTLENBQUNFLElBVlM7QUFXOUJsQixTQUFPLEVBQUVnQixpREFBUyxDQUFDRTtBQVhXLENBQWhDO0FBY2UvQixrRkFBZixFIiwiZmlsZSI6ImNhNGI2YTYtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IEdlb2xvY2F0b3IgZnJvbSAnLi9HZW9sb2NhdG9yJztcclxuXHJcbmNsYXNzIEdlb2xvY2F0b3JDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UG9zaXRpb24gPSBwb3NpdGlvbiA9PiB7XHJcbiAgLy8gICB0aGlzLnByb3BzLnNldFByb3BzKHtcclxuICAvLyAgICAgZXZlbnQgOiBcIm9uQ2FyZENsaWNrXCIsXHJcbiAgLy8gICAgIG1ldGFEYXRhIDogbWV0YWRhdGFcclxuICAvLyB9KVxyXG4gIC8vICB0aGlzLnByb3BzLnNldFByb3BzKHtcclxuICAvLyAgICBsb2NhdGlvbiA6IHBvc2l0aW9uXHJcbiAgLy8gIH0pXHJcbiAgLy8gIGRlYnVnZ2VyXHJcbiAgLy8gdGhpcy5wcm9wcy5zZXRQcm9wcyh7XHJcbiAgLy8gICBsb2NhdGlvbiA6IHBvc2l0aW9uXHJcbiAgLy8gfSlcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGxldCBnZW9sb2NhdGlvblByb3ZpZGVyID0gbmF2aWdhdG9yLmdlb2xvY2F0aW9uO1xyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGlkPXt0aGlzLnByb3BzLmlkfT5cclxuICAgICAgICA8R2VvbG9jYXRvciBcclxuICAgICAgICAgIHBvc2l0aW9uT3B0aW9ucyA9IHt0aGlzLnByb3BzLnBvc2l0aW9uT3B0aW9uc31cclxuICAgICAgICAgIHdhdGNoUG9zaXRpb24gPSB7dGhpcy5wcm9wcy53YXRjaFBvc2l0aW9ufVxyXG4gICAgICAgICAgdXNlckRlY2lzaW9uVGltZW91dCA9IHt0aGlzLnByb3BzLnVzZXJEZWNpc2lvblRpbWVvdXR9XHJcbiAgICAgICAgICBzdXBwcmVzc0xvY2F0aW9uT25Nb3VudCA9IHt0aGlzLnByb3BzLnN1cHByZXNzTG9jYXRpb25Pbk1vdW50fSAgICAgICAgICBcclxuICAgICAgICAgIGlzT3B0aW1pc3RpY0dlb2xvY2F0aW9uRW5hYmxlZCA9IHt0aGlzLnByb3BzLmlzT3B0aW1pc3RpY0dlb2xvY2F0aW9uRW5hYmxlZH1cclxuICAgICAgICAgIGdlb2xvY2F0aW9uUHJvdmlkZXIgPSB7IGdlb2xvY2F0aW9uUHJvdmlkZXIgfVxyXG4gICAgICAgICAgb25TdWNjZXNzID0ge3RoaXMucHJvcHMub25TdWNjZXNzfVxyXG4gICAgICAgICAgb25FcnJvciA9IHt0aGlzLnByb3BzLm9uRXJyb3J9XHJcbiAgICAgICAgICBlcnJvck1zZyA9IHt0aGlzLnByb3BzLmVycm9yTXNnfVxyXG4gICAgICAgICAgZ2V0UG9zaXRpb24gPSB7IChwb3NpdGlvbikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLnNldFByb3BzKHtcclxuICAgICAgICAgICAgICBsb2NhdGlvbiA6IHBvc2l0aW9uXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9IH1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbkdlb2xvY2F0b3JDb21wb25lbnQuZGVmYXVsdFByb3BzID0ge1xyXG4gIHNldFByb3BzOiAoKSA9PiB7fSxcclxuICBpZDogbnVsbCxcclxuICBwb3NpdGlvbk9wdGlvbnM6IHtcclxuICAgIGVuYWJsZUhpZ2hBY2N1cmFjeTogdHJ1ZSxcclxuICAgIG1heGltdW1BZ2U6IDAsXHJcbiAgICB0aW1lb3V0OiA1MDAwLFxyXG4gIH0sXHJcbiAgbG9jYXRpb24gOiBudWxsLFxyXG4gIHdhdGNoUG9zaXRpb246IHRydWUsXHJcbiAgdXNlckRlY2lzaW9uVGltZW91dDogbnVsbCxcclxuICBzdXBwcmVzc0xvY2F0aW9uT25Nb3VudDogZmFsc2UsXHJcbiAgaXNPcHRpbWlzdGljR2VvbG9jYXRpb25FbmFibGVkOiB0cnVlLFxyXG4gIGVycm9yTXNnOiB7XHJcbiAgICBpc0dlb2xvY2F0aW9uQXZhaWxhYmxlOiBcIllvdXIgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IEdlb2xvY2F0aW9uXCIsXHJcbiAgICBpc0dlb2xvY2F0aW9uRW5hYmxlZDogXCJHZW9sb2NhdGlvbiBpcyBub3QgZW5hYmxlZFwiXHJcbiAgfSxcclxuICBvblN1Y2Nlc3M6IGZ1bmN0aW9uKHN1Y2Nlc3MpeyBjb25zb2xlLmxvZyhzdWNjZXNzKSB9LFxyXG4gIG9uRXJyb3I6IGZ1bmN0aW9uKGVycm9yKXsgY29uc29sZS5sb2coZXJyb3IpfVxyXG59O1xyXG5cclxuR2VvbG9jYXRvckNvbXBvbmVudC5wcm9wVHlwZXMgPSB7XHJcbiAgbG9jYXRpb24gOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIHNldFByb3BzIDogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgcG9zaXRpb25PcHRpb25zOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIHdhdGNoUG9zaXRpb246IFByb3BUeXBlcy5ib29sLFxyXG4gIHVzZXJEZWNpc2lvblRpbWVvdXQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgc3VwcHJlc3NMb2NhdGlvbk9uTW91bnQ6IFByb3BUeXBlcy5ib29sLFxyXG4gIGlzT3B0aW1pc3RpY0dlb2xvY2F0aW9uRW5hYmxlZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgZXJyb3JNc2c6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgb25TdWNjZXNzOiBQcm9wVHlwZXMuZnVuYyxcclxuICBvbkVycm9yOiBQcm9wVHlwZXMuZnVuYyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdlb2xvY2F0b3JDb21wb25lbnQ7Il0sInNvdXJjZVJvb3QiOiIifQ==