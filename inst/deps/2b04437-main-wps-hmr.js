webpackHotUpdateextra_dash_ui_components("main",{

/***/ "./src/lib/components/Geolocator/Geolocator.js":
/*!*****************************************************!*\
  !*** ./src/lib/components/Geolocator/Geolocator.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Geolocator =
/*#__PURE__*/
function (_Component) {
  _inherits(Geolocator, _Component);

  function Geolocator(props) {
    var _this;

    _classCallCheck(this, Geolocator);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Geolocator).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      if (!_this.props.suppressLocationOnMount) {
        if (_this.props.watchPosition) _this.watchCurrentLocation();else _this.getCurrentLocation();

        if (_this.props.userDecisionTimeout) {
          var userDecisionTimeoutId = setTimeout(function () {
            _this.onPositionError("DecisionTimeout");
          }, _this.props.userDecisionTimeout);

          _this.setState({
            userDecisionTimeoutId: userDecisionTimeoutId
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "componentWillUnmount", function () {
      _this.cancelUserDecisionTimeout();

      if (_this.props.watchPosition) {
        _this.props.geolocationProvider.clearWatch(_this.state.watchId);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getCurrentLocation", function () {
      if (!_this.props.geolocationProvider || !_this.props.geolocationProvider.getCurrentPosition || !_this.props.geolocationProvider.watchPosition) {
        throw new Error("The provided geolocation provider is invalid");
      } else {
        var watchId = _this.props.geolocationProvider.getCurrentPosition(function (position) {
          _this.onPositionSuccess(position);
        }, function (positionError) {
          _this.onPositionError(positionError);
        }, _objectSpread({}, _this.props.positionOptions));

        _this.setState({
          watchId: watchId
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "watchCurrentLocation", function () {
      if (_this.props.watchPosition) {
        if (_this.props.geolocationProvider) {
          _this.props.geolocationProvider.watchPosition(function (pos) {
            var crd = pos.coords;

            if (_this.state.coords.latitude === crd.latitude && _this.state.coords.longitude === crd.longitude) {
              console.log('Congratulations, you reached the position');
              navigator.geolocation.clearWatch(_this.state.watchId);
            } else {
              _this.onPositionSuccess(crd);
            }
          }, function (err) {
            console.warn('ERROR(' + err.code + '): ' + err.message);

            _this.onPositionError(err);
          }, _objectSpread({}, _this.props.positionOptions));
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onPositionSuccess", function (position) {
      _this.cancelUserDecisionTimeout();

      _this.setState({
        coords: position,
        isGeolocationEnabled: true,
        positionError: null
      });

      _this.props.getPosition(position);

      _this.props.onSuccess(position);
    });

    _defineProperty(_assertThisInitialized(_this), "onPositionError", function (positionError) {
      _this.cancelUserDecisionTimeout();

      _this.setState({
        coords: null,
        isGeolocationEnabled: false,
        positionError: positionError
      });

      _this.props.onError(positionError);
    });

    _defineProperty(_assertThisInitialized(_this), "cancelUserDecisionTimeout", function () {
      if (_this.state.userDecisionTimeoutId) {
        clearTimeout(_this.state.userDecisionTimeoutId);
      }
    });

    _this.state = {
      coords: {
        latitude: 0,
        longitude: 0
      },
      isGeolocationAvailable: Boolean(_this.props.geolocationProvider),
      isGeolocationEnabled: _this.props.isOptimisticGeolocationEnabled,
      positionError: null,
      userDecisionTimeoutId: null,
      watchId: null
    };
    return _this;
  }

  _createClass(Geolocator, [{
    key: "render",
    value: function render() {
      return !this.state.isGeolocationAvailable ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, this.props.errorMsg.isGeolocationAvailable) : !this.state.isGeolocationEnabled ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, this.props.errorMsg.isGeolocationEnabled) : this.state.coords ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "latitude"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, this.state.coords.latitude)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "longitude"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, this.state.coords.longitude)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "altitude"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, this.state.coords.altitude)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "heading"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, this.state.coords.heading)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "speed"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, this.state.coords.speed)))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Getting the location data\u2026 ");
    }
  }]);

  return Geolocator;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Geolocator.propTypes = {
  positionOptions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  watchPosition: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  userDecisionTimeout: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  suppressLocationOnMount: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  geolocationProvider: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  isOptimisticGeolocationEnabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onSuccess: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onError: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  errorMsg: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
Geolocator.defaultProps = {
  positionOptions: {
    enableHighAccuracy: true,
    maximumAge: 0,
    timeout: 5000
  },
  watchPosition: true,
  userDecisionTimeout: null,
  suppressLocationOnMount: false,
  geolocationProvider: navigator.geolocation,
  isOptimisticGeolocationEnabled: true,
  onSuccess: function onSuccess(success) {
    console.log(success);
  },
  onError: function onError(error) {
    console.log(error);
  },
  errorMsg: {
    isGeolocationAvailable: "Your browser does not support Geolocation",
    isGeolocationEnabled: "Geolocation is not enabled"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Geolocator);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHRyYV9kYXNoX3VpX2NvbXBvbmVudHMvLi9zcmMvbGliL2NvbXBvbmVudHMvR2VvbG9jYXRvci9HZW9sb2NhdG9yLmpzIl0sIm5hbWVzIjpbIkdlb2xvY2F0b3IiLCJwcm9wcyIsInN1cHByZXNzTG9jYXRpb25Pbk1vdW50Iiwid2F0Y2hQb3NpdGlvbiIsIndhdGNoQ3VycmVudExvY2F0aW9uIiwiZ2V0Q3VycmVudExvY2F0aW9uIiwidXNlckRlY2lzaW9uVGltZW91dCIsInVzZXJEZWNpc2lvblRpbWVvdXRJZCIsInNldFRpbWVvdXQiLCJvblBvc2l0aW9uRXJyb3IiLCJzZXRTdGF0ZSIsImNhbmNlbFVzZXJEZWNpc2lvblRpbWVvdXQiLCJnZW9sb2NhdGlvblByb3ZpZGVyIiwiY2xlYXJXYXRjaCIsInN0YXRlIiwid2F0Y2hJZCIsImdldEN1cnJlbnRQb3NpdGlvbiIsIkVycm9yIiwicG9zaXRpb24iLCJvblBvc2l0aW9uU3VjY2VzcyIsInBvc2l0aW9uRXJyb3IiLCJwb3NpdGlvbk9wdGlvbnMiLCJwb3MiLCJjcmQiLCJjb29yZHMiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsImNvbnNvbGUiLCJsb2ciLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsImVyciIsIndhcm4iLCJjb2RlIiwibWVzc2FnZSIsImlzR2VvbG9jYXRpb25FbmFibGVkIiwiZ2V0UG9zaXRpb24iLCJvblN1Y2Nlc3MiLCJvbkVycm9yIiwiY2xlYXJUaW1lb3V0IiwiaXNHZW9sb2NhdGlvbkF2YWlsYWJsZSIsIkJvb2xlYW4iLCJpc09wdGltaXN0aWNHZW9sb2NhdGlvbkVuYWJsZWQiLCJlcnJvck1zZyIsImFsdGl0dWRlIiwiaGVhZGluZyIsInNwZWVkIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiYm9vbCIsIm51bWJlciIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiLCJlbmFibGVIaWdoQWNjdXJhY3kiLCJtYXhpbXVtQWdl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QUFNckJSLGdDQUE4QixFQUFFTyxpREFBUyxDQUFDRSxJQU5yQjtBQU9yQmQsV0FBUyxFQUFFWSxpREFBUyxDQUFDSSxJQVBBO0FBUXJCZixTQUFPLEVBQUVXLGlEQUFTLENBQUNJLElBUkU7QUFTckJWLFVBQVEsRUFBRU0saURBQVMsQ0FBQ0M7QUFUQyxDQUF2QjtBQVlBbEQsVUFBVSxDQUFDc0QsWUFBWCxHQUEwQjtBQUN4QmpDLGlCQUFlLEVBQUU7QUFDZmtDLHNCQUFrQixFQUFFLElBREw7QUFFZkMsY0FBVSxFQUFFLENBRkc7QUFHZkMsV0FBTyxFQUFFO0FBSE0sR0FETztBQU14QnRELGVBQWEsRUFBRSxJQU5TO0FBT3hCRyxxQkFBbUIsRUFBRSxJQVBHO0FBUXhCSix5QkFBdUIsRUFBRSxLQVJEO0FBU3hCVSxxQkFBbUIsRUFBRWlCLFNBQVMsQ0FBQ0MsV0FUUDtBQVV4QlksZ0NBQThCLEVBQUUsSUFWUjtBQVd4QkwsV0FBUyxFQUFFLG1CQUFTcUIsT0FBVCxFQUFrQjtBQUFDL0IsV0FBTyxDQUFDQyxHQUFSLENBQVk4QixPQUFaO0FBQXFCLEdBWDNCO0FBWXhCcEIsU0FBTyxFQUFFLGlCQUFTcUIsS0FBVCxFQUFnQjtBQUFDaEMsV0FBTyxDQUFDQyxHQUFSLENBQVkrQixLQUFaO0FBQW1CLEdBWnJCO0FBYXhCaEIsVUFBUSxFQUFFO0FBQ1JILDBCQUFzQixFQUFFLDJDQURoQjtBQUVSTCx3QkFBb0IsRUFBRTtBQUZkO0FBYmMsQ0FBMUI7QUFtQmVuQyx5RUFBZixFIiwiZmlsZSI6IjJiMDQ0MzctbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmNsYXNzIEdlb2xvY2F0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgY29vcmRzOiB7XHJcbiAgICAgICAgbGF0aXR1ZGUgOiAwLFxyXG4gICAgICAgIGxvbmdpdHVkZTogMCAgICAgIFxyXG4gICAgICB9LFxyXG4gICAgICBpc0dlb2xvY2F0aW9uQXZhaWxhYmxlOiBCb29sZWFuKHRoaXMucHJvcHMuZ2VvbG9jYXRpb25Qcm92aWRlciksXHJcbiAgICAgIGlzR2VvbG9jYXRpb25FbmFibGVkOiB0aGlzLnByb3BzLmlzT3B0aW1pc3RpY0dlb2xvY2F0aW9uRW5hYmxlZCxcclxuICAgICAgcG9zaXRpb25FcnJvcjogbnVsbCxcclxuICAgICAgdXNlckRlY2lzaW9uVGltZW91dElkOiBudWxsLFxyXG4gICAgICB3YXRjaElkOiBudWxsLFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XHJcbiAgICBpZiAoIXRoaXMucHJvcHMuc3VwcHJlc3NMb2NhdGlvbk9uTW91bnQpIHtcclxuICAgICAgaWYgKHRoaXMucHJvcHMud2F0Y2hQb3NpdGlvbilcclxuICAgICAgICB0aGlzLndhdGNoQ3VycmVudExvY2F0aW9uKCk7ICAgIFxyXG4gICAgICBlbHNlXHJcbiAgICAgICAgdGhpcy5nZXRDdXJyZW50TG9jYXRpb24oKTtcclxuICAgICAgICBcclxuICAgICAgaWYgKHRoaXMucHJvcHMudXNlckRlY2lzaW9uVGltZW91dCkgeyAgICAgIFxyXG4gICAgICAgIGxldCB1c2VyRGVjaXNpb25UaW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vblBvc2l0aW9uRXJyb3IoXCJEZWNpc2lvblRpbWVvdXRcIilcclxuICAgICAgICB9LCB0aGlzLnByb3BzLnVzZXJEZWNpc2lvblRpbWVvdXQpOyAgICAgIFxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgdXNlckRlY2lzaW9uVGltZW91dElkOiB1c2VyRGVjaXNpb25UaW1lb3V0SWRcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0gIFxyXG5cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCA9ICgpID0+IHtcclxuICAgIHRoaXMuY2FuY2VsVXNlckRlY2lzaW9uVGltZW91dCgpO1xyXG4gICAgaWYgKHRoaXMucHJvcHMud2F0Y2hQb3NpdGlvbikge1xyXG4gICAgICB0aGlzLnByb3BzLmdlb2xvY2F0aW9uUHJvdmlkZXIuY2xlYXJXYXRjaCh0aGlzLnN0YXRlLndhdGNoSWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0Q3VycmVudExvY2F0aW9uID0gKCkgPT4ge1xyXG4gICAgaWYgKFxyXG4gICAgICAhdGhpcy5wcm9wcy5nZW9sb2NhdGlvblByb3ZpZGVyIHx8IFxyXG4gICAgICAhdGhpcy5wcm9wcy5nZW9sb2NhdGlvblByb3ZpZGVyLmdldEN1cnJlbnRQb3NpdGlvbiB8fFxyXG4gICAgICAhdGhpcy5wcm9wcy5nZW9sb2NhdGlvblByb3ZpZGVyLndhdGNoUG9zaXRpb25cclxuICAgICkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgcHJvdmlkZWQgZ2VvbG9jYXRpb24gcHJvdmlkZXIgaXMgaW52YWxpZFwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxldCB3YXRjaElkID0gdGhpcy5wcm9wcy5nZW9sb2NhdGlvblByb3ZpZGVyLmdldEN1cnJlbnRQb3NpdGlvbihcclxuICAgICAgICAocG9zaXRpb24pID0+IHtcclxuICAgICAgICAgIHRoaXMub25Qb3NpdGlvblN1Y2Nlc3MocG9zaXRpb24pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKHBvc2l0aW9uRXJyb3IpID0+IHsgIFxyXG4gICAgICAgICAgdGhpcy5vblBvc2l0aW9uRXJyb3IocG9zaXRpb25FcnJvcik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAuLi50aGlzLnByb3BzLnBvc2l0aW9uT3B0aW9uc1xyXG4gICAgICAgIH0sICBcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7d2F0Y2hJZDogd2F0Y2hJZH0pXHJcbiAgICB9ICAgIFxyXG4gIH1cclxuXHJcbiAgd2F0Y2hDdXJyZW50TG9jYXRpb24gPSAoKSA9PiB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy53YXRjaFBvc2l0aW9uKSB7XHJcbiAgICAgIGlmICh0aGlzLnByb3BzLmdlb2xvY2F0aW9uUHJvdmlkZXIpIHtcclxuICAgICAgICB0aGlzLnByb3BzLmdlb2xvY2F0aW9uUHJvdmlkZXIud2F0Y2hQb3NpdGlvbihcclxuICAgICAgICAgIChwb3MpID0+IHtcclxuICAgICAgICAgICAgdmFyIGNyZCA9IHBvcy5jb29yZHM7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmNvb3Jkcy5sYXRpdHVkZSA9PT0gY3JkLmxhdGl0dWRlICYmIHRoaXMuc3RhdGUuY29vcmRzLmxvbmdpdHVkZSA9PT0gY3JkLmxvbmdpdHVkZSkge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb25ncmF0dWxhdGlvbnMsIHlvdSByZWFjaGVkIHRoZSBwb3NpdGlvbicpO1xyXG4gICAgICAgICAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5jbGVhcldhdGNoKHRoaXMuc3RhdGUud2F0Y2hJZCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5vblBvc2l0aW9uU3VjY2VzcyhjcmQpO1xyXG4gICAgICAgICAgICB9ICAgICAgICAgIFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIChlcnIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdFUlJPUignICsgZXJyLmNvZGUgKyAnKTogJyArIGVyci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgdGhpcy5vblBvc2l0aW9uRXJyb3IoZXJyKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIC4uLnRoaXMucHJvcHMucG9zaXRpb25PcHRpb25zXHJcbiAgICAgICAgICB9ICAgICAgICAgIFxyXG4gICAgICAgIClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25Qb3NpdGlvblN1Y2Nlc3MgPSBwb3NpdGlvbiA9PiB7XHJcbiAgICB0aGlzLmNhbmNlbFVzZXJEZWNpc2lvblRpbWVvdXQoKTtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgY29vcmRzOiBwb3NpdGlvbixcclxuICAgICAgaXNHZW9sb2NhdGlvbkVuYWJsZWQ6IHRydWUsXHJcbiAgICAgIHBvc2l0aW9uRXJyb3I6IG51bGwsXHJcbiAgICB9KVxyXG4gICAgdGhpcy5wcm9wcy5nZXRQb3NpdGlvbihwb3NpdGlvbilcclxuICAgIHRoaXMucHJvcHMub25TdWNjZXNzKHBvc2l0aW9uKVxyXG4gIH1cclxuXHJcbiAgb25Qb3NpdGlvbkVycm9yID0gcG9zaXRpb25FcnJvciA9PiB7XHJcbiAgICB0aGlzLmNhbmNlbFVzZXJEZWNpc2lvblRpbWVvdXQoKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBjb29yZHM6IG51bGwsXHJcbiAgICAgIGlzR2VvbG9jYXRpb25FbmFibGVkOiBmYWxzZSxcclxuICAgICAgcG9zaXRpb25FcnJvcixcclxuICAgIH0pO1xyXG4gICAgdGhpcy5wcm9wcy5vbkVycm9yKHBvc2l0aW9uRXJyb3IpO1xyXG4gIH1cclxuXHJcbiAgY2FuY2VsVXNlckRlY2lzaW9uVGltZW91dCA9ICgpID0+IHtcclxuICAgIGlmICh0aGlzLnN0YXRlLnVzZXJEZWNpc2lvblRpbWVvdXRJZCkge1xyXG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5zdGF0ZS51c2VyRGVjaXNpb25UaW1lb3V0SWQpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuXHJcbiAgICByZXR1cm4gIXRoaXMuc3RhdGUuaXNHZW9sb2NhdGlvbkF2YWlsYWJsZSA/IChcclxuICAgICAgPGRpdj4gICAgICAgIFxyXG4gICAgICAgIHt0aGlzLnByb3BzLmVycm9yTXNnLmlzR2VvbG9jYXRpb25BdmFpbGFibGV9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKSA6ICF0aGlzLnN0YXRlLmlzR2VvbG9jYXRpb25FbmFibGVkID8gKFxyXG4gICAgICA8ZGl2PiAgICAgICAgXHJcbiAgICAgICAge3RoaXMucHJvcHMuZXJyb3JNc2cuaXNHZW9sb2NhdGlvbkVuYWJsZWR9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKSA6IHRoaXMuc3RhdGUuY29vcmRzID8gKFxyXG4gICAgICA8dGFibGU+XHJcbiAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGQ+bGF0aXR1ZGU8L3RkPlxyXG4gICAgICAgICAgICA8dGQ+e3RoaXMuc3RhdGUuY29vcmRzLmxhdGl0dWRlfTwvdGQ+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGQ+bG9uZ2l0dWRlPC90ZD5cclxuICAgICAgICAgICAgPHRkPnt0aGlzLnN0YXRlLmNvb3Jkcy5sb25naXR1ZGV9PC90ZD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0ZD5hbHRpdHVkZTwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZD57dGhpcy5zdGF0ZS5jb29yZHMuYWx0aXR1ZGV9PC90ZD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0ZD5oZWFkaW5nPC90ZD5cclxuICAgICAgICAgICAgPHRkPnt0aGlzLnN0YXRlLmNvb3Jkcy5oZWFkaW5nfTwvdGQ+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGQ+c3BlZWQ8L3RkPlxyXG4gICAgICAgICAgICA8dGQ+e3RoaXMuc3RhdGUuY29vcmRzLnNwZWVkfTwvdGQ+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICAgIDwvdGFibGU+XHJcbiAgICApIDogKFxyXG4gICAgICA8ZGl2PkdldHRpbmcgdGhlIGxvY2F0aW9uIGRhdGEmaGVsbGlwOyA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5HZW9sb2NhdG9yLnByb3BUeXBlcyA9IHtcclxuICBwb3NpdGlvbk9wdGlvbnM6UHJvcFR5cGVzLm9iamVjdCxcclxuICB3YXRjaFBvc2l0aW9uOiBQcm9wVHlwZXMuYm9vbCxcclxuICB1c2VyRGVjaXNpb25UaW1lb3V0OiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIHN1cHByZXNzTG9jYXRpb25Pbk1vdW50OiBQcm9wVHlwZXMuYm9vbCxcclxuICBnZW9sb2NhdGlvblByb3ZpZGVyOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIGlzT3B0aW1pc3RpY0dlb2xvY2F0aW9uRW5hYmxlZDogUHJvcFR5cGVzLmJvb2wsIFxyXG4gIG9uU3VjY2VzczogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgb25FcnJvcjogUHJvcFR5cGVzLmZ1bmMsIFxyXG4gIGVycm9yTXNnOiBQcm9wVHlwZXMub2JqZWN0LFxyXG59XHJcblxyXG5HZW9sb2NhdG9yLmRlZmF1bHRQcm9wcyA9IHtcclxuICBwb3NpdGlvbk9wdGlvbnM6IHtcclxuICAgIGVuYWJsZUhpZ2hBY2N1cmFjeTogdHJ1ZSxcclxuICAgIG1heGltdW1BZ2U6IDAsXHJcbiAgICB0aW1lb3V0OiA1MDAwLFxyXG4gIH0sXHJcbiAgd2F0Y2hQb3NpdGlvbjogdHJ1ZSxcclxuICB1c2VyRGVjaXNpb25UaW1lb3V0OiBudWxsLFxyXG4gIHN1cHByZXNzTG9jYXRpb25Pbk1vdW50OiBmYWxzZSxcclxuICBnZW9sb2NhdGlvblByb3ZpZGVyOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24sXHJcbiAgaXNPcHRpbWlzdGljR2VvbG9jYXRpb25FbmFibGVkOiB0cnVlLFxyXG4gIG9uU3VjY2VzczogZnVuY3Rpb24oc3VjY2Vzcykge2NvbnNvbGUubG9nKHN1Y2Nlc3MpfSxcclxuICBvbkVycm9yOiBmdW5jdGlvbihlcnJvcikge2NvbnNvbGUubG9nKGVycm9yKX0sXHJcbiAgZXJyb3JNc2c6IHtcclxuICAgIGlzR2VvbG9jYXRpb25BdmFpbGFibGU6IFwiWW91ciBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgR2VvbG9jYXRpb25cIixcclxuICAgIGlzR2VvbG9jYXRpb25FbmFibGVkOiBcIkdlb2xvY2F0aW9uIGlzIG5vdCBlbmFibGVkXCJcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdlb2xvY2F0b3I7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=