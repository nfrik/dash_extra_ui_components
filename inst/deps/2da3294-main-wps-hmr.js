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
      debugger;

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
              navigator.geolocation.clearWatch(id);
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
      debugger;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHRyYV9kYXNoX3VpX2NvbXBvbmVudHMvLi9zcmMvbGliL2NvbXBvbmVudHMvR2VvbG9jYXRvci9HZW9sb2NhdG9yLmpzIl0sIm5hbWVzIjpbIkdlb2xvY2F0b3IiLCJwcm9wcyIsInN1cHByZXNzTG9jYXRpb25Pbk1vdW50Iiwid2F0Y2hQb3NpdGlvbiIsIndhdGNoQ3VycmVudExvY2F0aW9uIiwiZ2V0Q3VycmVudExvY2F0aW9uIiwidXNlckRlY2lzaW9uVGltZW91dCIsInVzZXJEZWNpc2lvblRpbWVvdXRJZCIsInNldFRpbWVvdXQiLCJvblBvc2l0aW9uRXJyb3IiLCJzZXRTdGF0ZSIsImNhbmNlbFVzZXJEZWNpc2lvblRpbWVvdXQiLCJnZW9sb2NhdGlvblByb3ZpZGVyIiwiY2xlYXJXYXRjaCIsInN0YXRlIiwid2F0Y2hJZCIsImdldEN1cnJlbnRQb3NpdGlvbiIsIkVycm9yIiwicG9zaXRpb24iLCJvblBvc2l0aW9uU3VjY2VzcyIsInBvc2l0aW9uRXJyb3IiLCJwb3NpdGlvbk9wdGlvbnMiLCJwb3MiLCJjcmQiLCJjb29yZHMiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsImNvbnNvbGUiLCJsb2ciLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsImlkIiwiZXJyIiwid2FybiIsImNvZGUiLCJtZXNzYWdlIiwiaXNHZW9sb2NhdGlvbkVuYWJsZWQiLCJvblN1Y2Nlc3MiLCJvbkVycm9yIiwiY2xlYXJUaW1lb3V0IiwiaXNHZW9sb2NhdGlvbkF2YWlsYWJsZSIsIkJvb2xlYW4iLCJpc09wdGltaXN0aWNHZW9sb2NhdGlvbkVuYWJsZWQiLCJlcnJvck1zZyIsImFsdGl0dWRlIiwiaGVhZGluZyIsInNwZWVkIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiYm9vbCIsIm51bWJlciIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiLCJlbmFibGVIaWdoQWNjdXJhY3kiLCJtYXhpbXVtQWdlIiwidGltZW91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LGlEQUFTLENBQUNJLElBUEE7QUFRckJmLFNBQU8sRUFBRVcsaURBQVMsQ0FBQ0ksSUFSRTtBQVNyQlYsVUFBUSxFQUFFTSxpREFBUyxDQUFDQztBQVRDLENBQXZCO0FBWUFsRCxVQUFVLENBQUNzRCxZQUFYLEdBQTBCO0FBQ3hCakMsaUJBQWUsRUFBRTtBQUNma0Msc0JBQWtCLEVBQUUsSUFETDtBQUVmQyxjQUFVLEVBQUUsQ0FGRztBQUdmQyxXQUFPLEVBQUU7QUFITSxHQURPO0FBTXhCdEQsZUFBYSxFQUFFLElBTlM7QUFPeEJHLHFCQUFtQixFQUFFLElBUEc7QUFReEJKLHlCQUF1QixFQUFFLEtBUkQ7QUFTeEJVLHFCQUFtQixFQUFFaUIsU0FBUyxDQUFDQyxXQVRQO0FBVXhCWSxnQ0FBOEIsRUFBRSxJQVZSO0FBV3hCTCxXQUFTLEVBQUUsbUJBQVNxQixPQUFULEVBQWtCO0FBQUMvQixXQUFPLENBQUNDLEdBQVIsQ0FBWThCLE9BQVo7QUFBcUIsR0FYM0I7QUFZeEJwQixTQUFPLEVBQUUsaUJBQVNxQixLQUFULEVBQWdCO0FBQUNoQyxXQUFPLENBQUNDLEdBQVIsQ0FBWStCLEtBQVo7QUFBbUIsR0FackI7QUFheEJoQixVQUFRLEVBQUU7QUFDUkgsMEJBQXNCLEVBQUUsMkNBRGhCO0FBRVJKLHdCQUFvQixFQUFFO0FBRmQ7QUFiYyxDQUExQjtBQW1CZXBDLHlFQUFmLEUiLCJmaWxlIjoiMmRhMzI5NC1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuY2xhc3MgR2VvbG9jYXRvciBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBjb29yZHM6IHtcclxuICAgICAgICBsYXRpdHVkZSA6IDAsXHJcbiAgICAgICAgbG9uZ2l0dWRlOiAwICAgICAgXHJcbiAgICAgIH0sXHJcbiAgICAgIGlzR2VvbG9jYXRpb25BdmFpbGFibGU6IEJvb2xlYW4odGhpcy5wcm9wcy5nZW9sb2NhdGlvblByb3ZpZGVyKSxcclxuICAgICAgaXNHZW9sb2NhdGlvbkVuYWJsZWQ6IHRoaXMucHJvcHMuaXNPcHRpbWlzdGljR2VvbG9jYXRpb25FbmFibGVkLFxyXG4gICAgICBwb3NpdGlvbkVycm9yOiBudWxsLFxyXG4gICAgICB1c2VyRGVjaXNpb25UaW1lb3V0SWQ6IG51bGwsXHJcbiAgICAgIHdhdGNoSWQ6IG51bGwsXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcclxuICAgIGlmICghdGhpcy5wcm9wcy5zdXBwcmVzc0xvY2F0aW9uT25Nb3VudCkge1xyXG4gICAgICBpZiAodGhpcy5wcm9wcy53YXRjaFBvc2l0aW9uKVxyXG4gICAgICAgIHRoaXMud2F0Y2hDdXJyZW50TG9jYXRpb24oKTsgICAgXHJcbiAgICAgIGVsc2VcclxuICAgICAgICB0aGlzLmdldEN1cnJlbnRMb2NhdGlvbigpO1xyXG4gICAgICAgIFxyXG4gICAgICBpZiAodGhpcy5wcm9wcy51c2VyRGVjaXNpb25UaW1lb3V0KSB7ICAgICAgXHJcbiAgICAgICAgbGV0IHVzZXJEZWNpc2lvblRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9uUG9zaXRpb25FcnJvcihcIkRlY2lzaW9uVGltZW91dFwiKVxyXG4gICAgICAgIH0sIHRoaXMucHJvcHMudXNlckRlY2lzaW9uVGltZW91dCk7ICAgICAgXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICB1c2VyRGVjaXNpb25UaW1lb3V0SWQ6IHVzZXJEZWNpc2lvblRpbWVvdXRJZFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSAgXHJcblxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50ID0gKCkgPT4ge1xyXG4gICAgZGVidWdnZXJcclxuICAgIHRoaXMuY2FuY2VsVXNlckRlY2lzaW9uVGltZW91dCgpO1xyXG4gICAgaWYgKHRoaXMucHJvcHMud2F0Y2hQb3NpdGlvbikge1xyXG4gICAgICB0aGlzLnByb3BzLmdlb2xvY2F0aW9uUHJvdmlkZXIuY2xlYXJXYXRjaCh0aGlzLnN0YXRlLndhdGNoSWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0Q3VycmVudExvY2F0aW9uID0gKCkgPT4ge1xyXG4gICAgaWYgKFxyXG4gICAgICAhdGhpcy5wcm9wcy5nZW9sb2NhdGlvblByb3ZpZGVyIHx8IFxyXG4gICAgICAhdGhpcy5wcm9wcy5nZW9sb2NhdGlvblByb3ZpZGVyLmdldEN1cnJlbnRQb3NpdGlvbiB8fFxyXG4gICAgICAhdGhpcy5wcm9wcy5nZW9sb2NhdGlvblByb3ZpZGVyLndhdGNoUG9zaXRpb25cclxuICAgICkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgcHJvdmlkZWQgZ2VvbG9jYXRpb24gcHJvdmlkZXIgaXMgaW52YWxpZFwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxldCB3YXRjaElkID0gdGhpcy5wcm9wcy5nZW9sb2NhdGlvblByb3ZpZGVyLmdldEN1cnJlbnRQb3NpdGlvbihcclxuICAgICAgICAocG9zaXRpb24pID0+IHtcclxuICAgICAgICAgIHRoaXMub25Qb3NpdGlvblN1Y2Nlc3MocG9zaXRpb24pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKHBvc2l0aW9uRXJyb3IpID0+IHsgIFxyXG4gICAgICAgICAgdGhpcy5vblBvc2l0aW9uRXJyb3IocG9zaXRpb25FcnJvcik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAuLi50aGlzLnByb3BzLnBvc2l0aW9uT3B0aW9uc1xyXG4gICAgICAgIH0sICBcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7d2F0Y2hJZDogd2F0Y2hJZH0pXHJcbiAgICB9ICAgIFxyXG4gIH1cclxuXHJcbiAgd2F0Y2hDdXJyZW50TG9jYXRpb24gPSAoKSA9PiB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy53YXRjaFBvc2l0aW9uKSB7XHJcbiAgICAgIGlmICh0aGlzLnByb3BzLmdlb2xvY2F0aW9uUHJvdmlkZXIpIHtcclxuICAgICAgICB0aGlzLnByb3BzLmdlb2xvY2F0aW9uUHJvdmlkZXIud2F0Y2hQb3NpdGlvbihcclxuICAgICAgICAgIChwb3MpID0+IHtcclxuICAgICAgICAgICAgdmFyIGNyZCA9IHBvcy5jb29yZHM7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmNvb3Jkcy5sYXRpdHVkZSA9PT0gY3JkLmxhdGl0dWRlICYmIHRoaXMuc3RhdGUuY29vcmRzLmxvbmdpdHVkZSA9PT0gY3JkLmxvbmdpdHVkZSkge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb25ncmF0dWxhdGlvbnMsIHlvdSByZWFjaGVkIHRoZSBwb3NpdGlvbicpO1xyXG4gICAgICAgICAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5jbGVhcldhdGNoKGlkKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB0aGlzLm9uUG9zaXRpb25TdWNjZXNzKGNyZCk7XHJcbiAgICAgICAgICAgIH0gICAgICAgICAgXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ0VSUk9SKCcgKyBlcnIuY29kZSArICcpOiAnICsgZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB0aGlzLm9uUG9zaXRpb25FcnJvcihlcnIpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgLi4udGhpcy5wcm9wcy5wb3NpdGlvbk9wdGlvbnNcclxuICAgICAgICAgIH0gICAgICAgICAgXHJcbiAgICAgICAgKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblBvc2l0aW9uU3VjY2VzcyA9IHBvc2l0aW9uID0+IHtcclxuICAgIHRoaXMuY2FuY2VsVXNlckRlY2lzaW9uVGltZW91dCgpO1xyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBjb29yZHM6IHBvc2l0aW9uLFxyXG4gICAgICBpc0dlb2xvY2F0aW9uRW5hYmxlZDogdHJ1ZSxcclxuICAgICAgcG9zaXRpb25FcnJvcjogbnVsbCxcclxuICAgIH0pXHJcblxyXG4gICAgdGhpcy5wcm9wcy5vblN1Y2Nlc3MocG9zaXRpb24pXHJcbiAgfVxyXG5cclxuICBvblBvc2l0aW9uRXJyb3IgPSBwb3NpdGlvbkVycm9yID0+IHtcclxuICAgIHRoaXMuY2FuY2VsVXNlckRlY2lzaW9uVGltZW91dCgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGNvb3JkczogbnVsbCxcclxuICAgICAgaXNHZW9sb2NhdGlvbkVuYWJsZWQ6IGZhbHNlLFxyXG4gICAgICBwb3NpdGlvbkVycm9yLFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnByb3BzLm9uRXJyb3IocG9zaXRpb25FcnJvcik7XHJcbiAgfVxyXG5cclxuICBjYW5jZWxVc2VyRGVjaXNpb25UaW1lb3V0ID0gKCkgPT4ge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUudXNlckRlY2lzaW9uVGltZW91dElkKSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnN0YXRlLnVzZXJEZWNpc2lvblRpbWVvdXRJZCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgZGVidWdnZXJcclxuICAgIHJldHVybiAhdGhpcy5zdGF0ZS5pc0dlb2xvY2F0aW9uQXZhaWxhYmxlID8gKFxyXG4gICAgICA8ZGl2PiAgICAgICAgXHJcbiAgICAgICAge3RoaXMucHJvcHMuZXJyb3JNc2cuaXNHZW9sb2NhdGlvbkF2YWlsYWJsZX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApIDogIXRoaXMuc3RhdGUuaXNHZW9sb2NhdGlvbkVuYWJsZWQgPyAoXHJcbiAgICAgIDxkaXY+ICAgICAgICBcclxuICAgICAgICB7dGhpcy5wcm9wcy5lcnJvck1zZy5pc0dlb2xvY2F0aW9uRW5hYmxlZH1cclxuICAgICAgPC9kaXY+XHJcbiAgICApIDogdGhpcy5zdGF0ZS5jb29yZHMgPyAoXHJcbiAgICAgIDx0YWJsZT5cclxuICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0ZD5sYXRpdHVkZTwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZD57dGhpcy5zdGF0ZS5jb29yZHMubGF0aXR1ZGV9PC90ZD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0ZD5sb25naXR1ZGU8L3RkPlxyXG4gICAgICAgICAgICA8dGQ+e3RoaXMuc3RhdGUuY29vcmRzLmxvbmdpdHVkZX08L3RkPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRkPmFsdGl0dWRlPC90ZD5cclxuICAgICAgICAgICAgPHRkPnt0aGlzLnN0YXRlLmNvb3Jkcy5hbHRpdHVkZX08L3RkPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRkPmhlYWRpbmc8L3RkPlxyXG4gICAgICAgICAgICA8dGQ+e3RoaXMuc3RhdGUuY29vcmRzLmhlYWRpbmd9PC90ZD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0ZD5zcGVlZDwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZD57dGhpcy5zdGF0ZS5jb29yZHMuc3BlZWR9PC90ZD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgICAgPC90YWJsZT5cclxuICAgICkgOiAoXHJcbiAgICAgIDxkaXY+R2V0dGluZyB0aGUgbG9jYXRpb24gZGF0YSZoZWxsaXA7IDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbkdlb2xvY2F0b3IucHJvcFR5cGVzID0ge1xyXG4gIHBvc2l0aW9uT3B0aW9uczpQcm9wVHlwZXMub2JqZWN0LFxyXG4gIHdhdGNoUG9zaXRpb246IFByb3BUeXBlcy5ib29sLFxyXG4gIHVzZXJEZWNpc2lvblRpbWVvdXQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgc3VwcHJlc3NMb2NhdGlvbk9uTW91bnQ6IFByb3BUeXBlcy5ib29sLFxyXG4gIGdlb2xvY2F0aW9uUHJvdmlkZXI6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgaXNPcHRpbWlzdGljR2VvbG9jYXRpb25FbmFibGVkOiBQcm9wVHlwZXMuYm9vbCwgXHJcbiAgb25TdWNjZXNzOiBQcm9wVHlwZXMuZnVuYyxcclxuICBvbkVycm9yOiBQcm9wVHlwZXMuZnVuYywgXHJcbiAgZXJyb3JNc2c6IFByb3BUeXBlcy5vYmplY3QsXHJcbn1cclxuXHJcbkdlb2xvY2F0b3IuZGVmYXVsdFByb3BzID0ge1xyXG4gIHBvc2l0aW9uT3B0aW9uczoge1xyXG4gICAgZW5hYmxlSGlnaEFjY3VyYWN5OiB0cnVlLFxyXG4gICAgbWF4aW11bUFnZTogMCxcclxuICAgIHRpbWVvdXQ6IDUwMDAsXHJcbiAgfSxcclxuICB3YXRjaFBvc2l0aW9uOiB0cnVlLFxyXG4gIHVzZXJEZWNpc2lvblRpbWVvdXQ6IG51bGwsXHJcbiAgc3VwcHJlc3NMb2NhdGlvbk9uTW91bnQ6IGZhbHNlLFxyXG4gIGdlb2xvY2F0aW9uUHJvdmlkZXI6IG5hdmlnYXRvci5nZW9sb2NhdGlvbixcclxuICBpc09wdGltaXN0aWNHZW9sb2NhdGlvbkVuYWJsZWQ6IHRydWUsXHJcbiAgb25TdWNjZXNzOiBmdW5jdGlvbihzdWNjZXNzKSB7Y29uc29sZS5sb2coc3VjY2Vzcyl9LFxyXG4gIG9uRXJyb3I6IGZ1bmN0aW9uKGVycm9yKSB7Y29uc29sZS5sb2coZXJyb3IpfSxcclxuICBlcnJvck1zZzoge1xyXG4gICAgaXNHZW9sb2NhdGlvbkF2YWlsYWJsZTogXCJZb3VyIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBHZW9sb2NhdGlvblwiLFxyXG4gICAgaXNHZW9sb2NhdGlvbkVuYWJsZWQ6IFwiR2VvbG9jYXRpb24gaXMgbm90IGVuYWJsZWRcIlxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2VvbG9jYXRvcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==