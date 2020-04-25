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
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Geolocator = /*#__PURE__*/function (_Component) {
  _inherits(Geolocator, _Component);

  var _super = _createSuper(Geolocator);

  function Geolocator(props) {
    var _this;

    _classCallCheck(this, Geolocator);

    _this = _super.call(this, props);

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
      return !this.state.isGeolocationAvailable ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, this.props.errorMsg.isGeolocationAvailable) : !this.state.isGeolocationEnabled ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, this.props.errorMsg.isGeolocationEnabled) : this.state.coords ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHRyYV9kYXNoX3VpX2NvbXBvbmVudHMvLi9zcmMvbGliL2NvbXBvbmVudHMvR2VvbG9jYXRvci9HZW9sb2NhdG9yLmpzIl0sIm5hbWVzIjpbIkdlb2xvY2F0b3IiLCJwcm9wcyIsInN1cHByZXNzTG9jYXRpb25Pbk1vdW50Iiwid2F0Y2hQb3NpdGlvbiIsIndhdGNoQ3VycmVudExvY2F0aW9uIiwiZ2V0Q3VycmVudExvY2F0aW9uIiwidXNlckRlY2lzaW9uVGltZW91dCIsInVzZXJEZWNpc2lvblRpbWVvdXRJZCIsInNldFRpbWVvdXQiLCJvblBvc2l0aW9uRXJyb3IiLCJzZXRTdGF0ZSIsImNhbmNlbFVzZXJEZWNpc2lvblRpbWVvdXQiLCJnZW9sb2NhdGlvblByb3ZpZGVyIiwiY2xlYXJXYXRjaCIsInN0YXRlIiwid2F0Y2hJZCIsImdldEN1cnJlbnRQb3NpdGlvbiIsIkVycm9yIiwicG9zaXRpb24iLCJvblBvc2l0aW9uU3VjY2VzcyIsInBvc2l0aW9uRXJyb3IiLCJwb3NpdGlvbk9wdGlvbnMiLCJwb3MiLCJjcmQiLCJjb29yZHMiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsImNvbnNvbGUiLCJsb2ciLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsImVyciIsIndhcm4iLCJjb2RlIiwibWVzc2FnZSIsImlzR2VvbG9jYXRpb25FbmFibGVkIiwiZ2V0UG9zaXRpb24iLCJvblN1Y2Nlc3MiLCJvbkVycm9yIiwiY2xlYXJUaW1lb3V0IiwiaXNHZW9sb2NhdGlvbkF2YWlsYWJsZSIsIkJvb2xlYW4iLCJpc09wdGltaXN0aWNHZW9sb2NhdGlvbkVuYWJsZWQiLCJlcnJvck1zZyIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImJvb2wiLCJudW1iZXIiLCJmdW5jIiwiZGVmYXVsdFByb3BzIiwiZW5hYmxlSGlnaEFjY3VyYWN5IiwibWF4aW11bUFnZSIsInRpbWVvdXQiLCJzdWNjZXNzIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztJQUVNQSxVOzs7OztBQUVKLHNCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOOztBQURpQix3RUFlQyxZQUFNO0FBQ3hCLFVBQUksQ0FBQyxNQUFLQSxLQUFMLENBQVdDLHVCQUFoQixFQUF5QztBQUN2QyxZQUFJLE1BQUtELEtBQUwsQ0FBV0UsYUFBZixFQUNFLE1BQUtDLG9CQUFMLEdBREYsS0FHRSxNQUFLQyxrQkFBTDs7QUFFRixZQUFJLE1BQUtKLEtBQUwsQ0FBV0ssbUJBQWYsRUFBb0M7QUFDbEMsY0FBSUMscUJBQXFCLEdBQUdDLFVBQVUsQ0FBQyxZQUFNO0FBQ3pDLGtCQUFLQyxlQUFMLENBQXFCLGlCQUFyQjtBQUNILFdBRnFDLEVBRW5DLE1BQUtSLEtBQUwsQ0FBV0ssbUJBRndCLENBQXRDOztBQUdBLGdCQUFLSSxRQUFMLENBQWM7QUFDWkgsaUNBQXFCLEVBQUVBO0FBRFgsV0FBZDtBQUdEO0FBQ0Y7QUFDRixLQS9Ca0I7O0FBQUEsMkVBaUNJLFlBQU07QUFDM0IsWUFBS0kseUJBQUw7O0FBQ0EsVUFBSSxNQUFLVixLQUFMLENBQVdFLGFBQWYsRUFBOEI7QUFDNUIsY0FBS0YsS0FBTCxDQUFXVyxtQkFBWCxDQUErQkMsVUFBL0IsQ0FBMEMsTUFBS0MsS0FBTCxDQUFXQyxPQUFyRDtBQUNEO0FBQ0YsS0F0Q2tCOztBQUFBLHlFQXdDRSxZQUFNO0FBQ3pCLFVBQ0UsQ0FBQyxNQUFLZCxLQUFMLENBQVdXLG1CQUFaLElBQ0EsQ0FBQyxNQUFLWCxLQUFMLENBQVdXLG1CQUFYLENBQStCSSxrQkFEaEMsSUFFQSxDQUFDLE1BQUtmLEtBQUwsQ0FBV1csbUJBQVgsQ0FBK0JULGFBSGxDLEVBSUU7QUFDQSxjQUFNLElBQUljLEtBQUosQ0FBVSw4Q0FBVixDQUFOO0FBQ0QsT0FORCxNQU1PO0FBQ0wsWUFBSUYsT0FBTyxHQUFHLE1BQUtkLEtBQUwsQ0FBV1csbUJBQVgsQ0FBK0JJLGtCQUEvQixDQUNaLFVBQUNFLFFBQUQsRUFBYztBQUNaLGdCQUFLQyxpQkFBTCxDQUF1QkQsUUFBdkI7QUFDRCxTQUhXLEVBSVosVUFBQ0UsYUFBRCxFQUFtQjtBQUNqQixnQkFBS1gsZUFBTCxDQUFxQlcsYUFBckI7QUFDRCxTQU5XLG9CQVFQLE1BQUtuQixLQUFMLENBQVdvQixlQVJKLEVBQWQ7O0FBV0EsY0FBS1gsUUFBTCxDQUFjO0FBQUNLLGlCQUFPLEVBQUVBO0FBQVYsU0FBZDtBQUNEO0FBQ0YsS0E3RGtCOztBQUFBLDJFQStESSxZQUFNO0FBQzNCLFVBQUksTUFBS2QsS0FBTCxDQUFXRSxhQUFmLEVBQThCO0FBQzVCLFlBQUksTUFBS0YsS0FBTCxDQUFXVyxtQkFBZixFQUFvQztBQUNsQyxnQkFBS1gsS0FBTCxDQUFXVyxtQkFBWCxDQUErQlQsYUFBL0IsQ0FDRSxVQUFDbUIsR0FBRCxFQUFTO0FBQ1AsZ0JBQUlDLEdBQUcsR0FBR0QsR0FBRyxDQUFDRSxNQUFkOztBQUNBLGdCQUFJLE1BQUtWLEtBQUwsQ0FBV1UsTUFBWCxDQUFrQkMsUUFBbEIsS0FBK0JGLEdBQUcsQ0FBQ0UsUUFBbkMsSUFBK0MsTUFBS1gsS0FBTCxDQUFXVSxNQUFYLENBQWtCRSxTQUFsQixLQUFnQ0gsR0FBRyxDQUFDRyxTQUF2RixFQUFrRztBQUNoR0MscUJBQU8sQ0FBQ0MsR0FBUixDQUFZLDJDQUFaO0FBQ0FDLHVCQUFTLENBQUNDLFdBQVYsQ0FBc0JqQixVQUF0QixDQUFpQyxNQUFLQyxLQUFMLENBQVdDLE9BQTVDO0FBQ0QsYUFIRCxNQUdPO0FBQ0wsb0JBQUtJLGlCQUFMLENBQXVCSSxHQUF2QjtBQUNEO0FBQ0YsV0FUSCxFQVVFLFVBQUNRLEdBQUQsRUFBUztBQUNQSixtQkFBTyxDQUFDSyxJQUFSLENBQWEsV0FBV0QsR0FBRyxDQUFDRSxJQUFmLEdBQXNCLEtBQXRCLEdBQThCRixHQUFHLENBQUNHLE9BQS9DOztBQUNBLGtCQUFLekIsZUFBTCxDQUFxQnNCLEdBQXJCO0FBQ0QsV0FiSCxvQkFlTyxNQUFLOUIsS0FBTCxDQUFXb0IsZUFmbEI7QUFrQkQ7QUFDRjtBQUNGLEtBdEZrQjs7QUFBQSx3RUF3RkMsVUFBQUgsUUFBUSxFQUFJO0FBQzlCLFlBQUtQLHlCQUFMOztBQUVBLFlBQUtELFFBQUwsQ0FBYztBQUNaYyxjQUFNLEVBQUVOLFFBREk7QUFFWmlCLDRCQUFvQixFQUFFLElBRlY7QUFHWmYscUJBQWEsRUFBRTtBQUhILE9BQWQ7O0FBS0EsWUFBS25CLEtBQUwsQ0FBV21DLFdBQVgsQ0FBdUJsQixRQUF2Qjs7QUFDQSxZQUFLakIsS0FBTCxDQUFXb0MsU0FBWCxDQUFxQm5CLFFBQXJCO0FBQ0QsS0FsR2tCOztBQUFBLHNFQW9HRCxVQUFBRSxhQUFhLEVBQUk7QUFDakMsWUFBS1QseUJBQUw7O0FBQ0EsWUFBS0QsUUFBTCxDQUFjO0FBQ1pjLGNBQU0sRUFBRSxJQURJO0FBRVpXLDRCQUFvQixFQUFFLEtBRlY7QUFHWmYscUJBQWEsRUFBYkE7QUFIWSxPQUFkOztBQUtBLFlBQUtuQixLQUFMLENBQVdxQyxPQUFYLENBQW1CbEIsYUFBbkI7QUFDRCxLQTVHa0I7O0FBQUEsZ0ZBOEdTLFlBQU07QUFDaEMsVUFBSSxNQUFLTixLQUFMLENBQVdQLHFCQUFmLEVBQXNDO0FBQ3BDZ0Msb0JBQVksQ0FBQyxNQUFLekIsS0FBTCxDQUFXUCxxQkFBWixDQUFaO0FBQ0Q7QUFDRixLQWxIa0I7O0FBRWpCLFVBQUtPLEtBQUwsR0FBYTtBQUNYVSxZQUFNLEVBQUU7QUFDTkMsZ0JBQVEsRUFBRyxDQURMO0FBRU5DLGlCQUFTLEVBQUU7QUFGTCxPQURHO0FBS1hjLDRCQUFzQixFQUFFQyxPQUFPLENBQUMsTUFBS3hDLEtBQUwsQ0FBV1csbUJBQVosQ0FMcEI7QUFNWHVCLDBCQUFvQixFQUFFLE1BQUtsQyxLQUFMLENBQVd5Qyw4QkFOdEI7QUFPWHRCLG1CQUFhLEVBQUUsSUFQSjtBQVFYYiwyQkFBcUIsRUFBRSxJQVJaO0FBU1hRLGFBQU8sRUFBRTtBQVRFLEtBQWI7QUFGaUI7QUFhbEI7Ozs7NkJBdUdRO0FBRVAsYUFBTyxDQUFDLEtBQUtELEtBQUwsQ0FBVzBCLHNCQUFaLGdCQUNMLHdFQUNHLEtBQUt2QyxLQUFMLENBQVcwQyxRQUFYLENBQW9CSCxzQkFEdkIsQ0FESyxHQUlILENBQUMsS0FBSzFCLEtBQUwsQ0FBV3FCLG9CQUFaLGdCQUNGLHdFQUNHLEtBQUtsQyxLQUFMLENBQVcwQyxRQUFYLENBQW9CUixvQkFEdkIsQ0FERSxHQUlBLEtBQUtyQixLQUFMLENBQVdVLE1BQVgsZ0JBQ0YsdUVBREUsZ0JBR0YsdUVBWEY7QUFhRDs7OztFQXJJc0JvQiwrQzs7QUF3SXpCNUMsVUFBVSxDQUFDNkMsU0FBWCxHQUF1QjtBQUNyQnhCLGlCQUFlLEVBQUN5QixpREFBUyxDQUFDQyxNQURMO0FBRXJCNUMsZUFBYSxFQUFFMkMsaURBQVMsQ0FBQ0UsSUFGSjtBQUdyQjFDLHFCQUFtQixFQUFFd0MsaURBQVMsQ0FBQ0csTUFIVjtBQUlyQi9DLHlCQUF1QixFQUFFNEMsaURBQVMsQ0FBQ0UsSUFKZDtBQUtyQnBDLHFCQUFtQixFQUFFa0MsaURBQVMsQ0FBQ0MsTUFMVjtBQU1yQkwsZ0NBQThCLEVBQUVJLGlEQUFTLENBQUNFLElBTnJCO0FBT3JCWCxXQUFTLEVBQUVTLGlEQUFTLENBQUNJLElBUEE7QUFRckJaLFNBQU8sRUFBRVEsaURBQVMsQ0FBQ0ksSUFSRTtBQVNyQlAsVUFBUSxFQUFFRyxpREFBUyxDQUFDQztBQVRDLENBQXZCO0FBWUEvQyxVQUFVLENBQUNtRCxZQUFYLEdBQTBCO0FBQ3hCOUIsaUJBQWUsRUFBRTtBQUNmK0Isc0JBQWtCLEVBQUUsSUFETDtBQUVmQyxjQUFVLEVBQUUsQ0FGRztBQUdmQyxXQUFPLEVBQUU7QUFITSxHQURPO0FBTXhCbkQsZUFBYSxFQUFFLElBTlM7QUFPeEJHLHFCQUFtQixFQUFFLElBUEc7QUFReEJKLHlCQUF1QixFQUFFLEtBUkQ7QUFTeEJVLHFCQUFtQixFQUFFaUIsU0FBUyxDQUFDQyxXQVRQO0FBVXhCWSxnQ0FBOEIsRUFBRSxJQVZSO0FBV3hCTCxXQUFTLEVBQUUsbUJBQVNrQixPQUFULEVBQWtCO0FBQUM1QixXQUFPLENBQUNDLEdBQVIsQ0FBWTJCLE9BQVo7QUFBcUIsR0FYM0I7QUFZeEJqQixTQUFPLEVBQUUsaUJBQVNrQixLQUFULEVBQWdCO0FBQUM3QixXQUFPLENBQUNDLEdBQVIsQ0FBWTRCLEtBQVo7QUFBbUIsR0FackI7QUFheEJiLFVBQVEsRUFBRTtBQUNSSCwwQkFBc0IsRUFBRSwyQ0FEaEI7QUFFUkwsd0JBQW9CLEVBQUU7QUFGZDtBQWJjLENBQTFCO0FBbUJlbkMseUVBQWYsRSIsImZpbGUiOiI3MGUwZjdiLW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jbGFzcyBHZW9sb2NhdG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY29vcmRzOiB7XG4gICAgICAgIGxhdGl0dWRlIDogMCxcbiAgICAgICAgbG9uZ2l0dWRlOiAwICAgICAgXG4gICAgICB9LFxuICAgICAgaXNHZW9sb2NhdGlvbkF2YWlsYWJsZTogQm9vbGVhbih0aGlzLnByb3BzLmdlb2xvY2F0aW9uUHJvdmlkZXIpLFxuICAgICAgaXNHZW9sb2NhdGlvbkVuYWJsZWQ6IHRoaXMucHJvcHMuaXNPcHRpbWlzdGljR2VvbG9jYXRpb25FbmFibGVkLFxuICAgICAgcG9zaXRpb25FcnJvcjogbnVsbCxcbiAgICAgIHVzZXJEZWNpc2lvblRpbWVvdXRJZDogbnVsbCxcbiAgICAgIHdhdGNoSWQ6IG51bGwsXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgaWYgKCF0aGlzLnByb3BzLnN1cHByZXNzTG9jYXRpb25Pbk1vdW50KSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy53YXRjaFBvc2l0aW9uKVxuICAgICAgICB0aGlzLndhdGNoQ3VycmVudExvY2F0aW9uKCk7ICAgIFxuICAgICAgZWxzZVxuICAgICAgICB0aGlzLmdldEN1cnJlbnRMb2NhdGlvbigpO1xuICAgICAgICBcbiAgICAgIGlmICh0aGlzLnByb3BzLnVzZXJEZWNpc2lvblRpbWVvdXQpIHsgICAgICBcbiAgICAgICAgbGV0IHVzZXJEZWNpc2lvblRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vblBvc2l0aW9uRXJyb3IoXCJEZWNpc2lvblRpbWVvdXRcIilcbiAgICAgICAgfSwgdGhpcy5wcm9wcy51c2VyRGVjaXNpb25UaW1lb3V0KTsgICAgICBcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgdXNlckRlY2lzaW9uVGltZW91dElkOiB1c2VyRGVjaXNpb25UaW1lb3V0SWRcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9ICBcblxuICBjb21wb25lbnRXaWxsVW5tb3VudCA9ICgpID0+IHtcbiAgICB0aGlzLmNhbmNlbFVzZXJEZWNpc2lvblRpbWVvdXQoKTtcbiAgICBpZiAodGhpcy5wcm9wcy53YXRjaFBvc2l0aW9uKSB7XG4gICAgICB0aGlzLnByb3BzLmdlb2xvY2F0aW9uUHJvdmlkZXIuY2xlYXJXYXRjaCh0aGlzLnN0YXRlLndhdGNoSWQpO1xuICAgIH1cbiAgfVxuXG4gIGdldEN1cnJlbnRMb2NhdGlvbiA9ICgpID0+IHtcbiAgICBpZiAoXG4gICAgICAhdGhpcy5wcm9wcy5nZW9sb2NhdGlvblByb3ZpZGVyIHx8IFxuICAgICAgIXRoaXMucHJvcHMuZ2VvbG9jYXRpb25Qcm92aWRlci5nZXRDdXJyZW50UG9zaXRpb24gfHxcbiAgICAgICF0aGlzLnByb3BzLmdlb2xvY2F0aW9uUHJvdmlkZXIud2F0Y2hQb3NpdGlvblxuICAgICkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHByb3ZpZGVkIGdlb2xvY2F0aW9uIHByb3ZpZGVyIGlzIGludmFsaWRcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB3YXRjaElkID0gdGhpcy5wcm9wcy5nZW9sb2NhdGlvblByb3ZpZGVyLmdldEN1cnJlbnRQb3NpdGlvbihcbiAgICAgICAgKHBvc2l0aW9uKSA9PiB7XG4gICAgICAgICAgdGhpcy5vblBvc2l0aW9uU3VjY2Vzcyhwb3NpdGlvbik7XG4gICAgICAgIH0sXG4gICAgICAgIChwb3NpdGlvbkVycm9yKSA9PiB7ICBcbiAgICAgICAgICB0aGlzLm9uUG9zaXRpb25FcnJvcihwb3NpdGlvbkVycm9yKTtcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIC4uLnRoaXMucHJvcHMucG9zaXRpb25PcHRpb25zXG4gICAgICAgIH0sICBcbiAgICAgICk7XG4gICAgICB0aGlzLnNldFN0YXRlKHt3YXRjaElkOiB3YXRjaElkfSlcbiAgICB9ICAgIFxuICB9XG5cbiAgd2F0Y2hDdXJyZW50TG9jYXRpb24gPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMud2F0Y2hQb3NpdGlvbikge1xuICAgICAgaWYgKHRoaXMucHJvcHMuZ2VvbG9jYXRpb25Qcm92aWRlcikge1xuICAgICAgICB0aGlzLnByb3BzLmdlb2xvY2F0aW9uUHJvdmlkZXIud2F0Y2hQb3NpdGlvbihcbiAgICAgICAgICAocG9zKSA9PiB7XG4gICAgICAgICAgICB2YXIgY3JkID0gcG9zLmNvb3JkcztcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmNvb3Jkcy5sYXRpdHVkZSA9PT0gY3JkLmxhdGl0dWRlICYmIHRoaXMuc3RhdGUuY29vcmRzLmxvbmdpdHVkZSA9PT0gY3JkLmxvbmdpdHVkZSkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ29uZ3JhdHVsYXRpb25zLCB5b3UgcmVhY2hlZCB0aGUgcG9zaXRpb24nKTtcbiAgICAgICAgICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmNsZWFyV2F0Y2godGhpcy5zdGF0ZS53YXRjaElkKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMub25Qb3NpdGlvblN1Y2Nlc3MoY3JkKTtcbiAgICAgICAgICAgIH0gICAgICAgICAgXG4gICAgICAgICAgfSxcbiAgICAgICAgICAoZXJyKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ0VSUk9SKCcgKyBlcnIuY29kZSArICcpOiAnICsgZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgdGhpcy5vblBvc2l0aW9uRXJyb3IoZXJyKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIC4uLnRoaXMucHJvcHMucG9zaXRpb25PcHRpb25zXG4gICAgICAgICAgfSAgICAgICAgICBcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9zaXRpb25TdWNjZXNzID0gcG9zaXRpb24gPT4ge1xuICAgIHRoaXMuY2FuY2VsVXNlckRlY2lzaW9uVGltZW91dCgpO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjb29yZHM6IHBvc2l0aW9uLFxuICAgICAgaXNHZW9sb2NhdGlvbkVuYWJsZWQ6IHRydWUsXG4gICAgICBwb3NpdGlvbkVycm9yOiBudWxsLFxuICAgIH0pXG4gICAgdGhpcy5wcm9wcy5nZXRQb3NpdGlvbihwb3NpdGlvbilcbiAgICB0aGlzLnByb3BzLm9uU3VjY2Vzcyhwb3NpdGlvbilcbiAgfVxuXG4gIG9uUG9zaXRpb25FcnJvciA9IHBvc2l0aW9uRXJyb3IgPT4ge1xuICAgIHRoaXMuY2FuY2VsVXNlckRlY2lzaW9uVGltZW91dCgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY29vcmRzOiBudWxsLFxuICAgICAgaXNHZW9sb2NhdGlvbkVuYWJsZWQ6IGZhbHNlLFxuICAgICAgcG9zaXRpb25FcnJvcixcbiAgICB9KTtcbiAgICB0aGlzLnByb3BzLm9uRXJyb3IocG9zaXRpb25FcnJvcik7XG4gIH1cblxuICBjYW5jZWxVc2VyRGVjaXNpb25UaW1lb3V0ID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnN0YXRlLnVzZXJEZWNpc2lvblRpbWVvdXRJZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuc3RhdGUudXNlckRlY2lzaW9uVGltZW91dElkKTtcbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuICF0aGlzLnN0YXRlLmlzR2VvbG9jYXRpb25BdmFpbGFibGUgPyAoXG4gICAgICA8ZGl2PiAgICAgICAgXG4gICAgICAgIHt0aGlzLnByb3BzLmVycm9yTXNnLmlzR2VvbG9jYXRpb25BdmFpbGFibGV9XG4gICAgICA8L2Rpdj5cbiAgICApIDogIXRoaXMuc3RhdGUuaXNHZW9sb2NhdGlvbkVuYWJsZWQgPyAoXG4gICAgICA8ZGl2PiAgICAgICAgXG4gICAgICAgIHt0aGlzLnByb3BzLmVycm9yTXNnLmlzR2VvbG9jYXRpb25FbmFibGVkfVxuICAgICAgPC9kaXY+XG4gICAgKSA6IHRoaXMuc3RhdGUuY29vcmRzID8gKFxuICAgICAgPGRpdj48L2Rpdj5cbiAgICApIDogKFxuICAgICAgPGRpdj48L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkdlb2xvY2F0b3IucHJvcFR5cGVzID0ge1xuICBwb3NpdGlvbk9wdGlvbnM6UHJvcFR5cGVzLm9iamVjdCxcbiAgd2F0Y2hQb3NpdGlvbjogUHJvcFR5cGVzLmJvb2wsXG4gIHVzZXJEZWNpc2lvblRpbWVvdXQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIHN1cHByZXNzTG9jYXRpb25Pbk1vdW50OiBQcm9wVHlwZXMuYm9vbCxcbiAgZ2VvbG9jYXRpb25Qcm92aWRlcjogUHJvcFR5cGVzLm9iamVjdCxcbiAgaXNPcHRpbWlzdGljR2VvbG9jYXRpb25FbmFibGVkOiBQcm9wVHlwZXMuYm9vbCwgXG4gIG9uU3VjY2VzczogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uRXJyb3I6IFByb3BUeXBlcy5mdW5jLCBcbiAgZXJyb3JNc2c6IFByb3BUeXBlcy5vYmplY3QsXG59XG5cbkdlb2xvY2F0b3IuZGVmYXVsdFByb3BzID0ge1xuICBwb3NpdGlvbk9wdGlvbnM6IHtcbiAgICBlbmFibGVIaWdoQWNjdXJhY3k6IHRydWUsXG4gICAgbWF4aW11bUFnZTogMCxcbiAgICB0aW1lb3V0OiA1MDAwLFxuICB9LFxuICB3YXRjaFBvc2l0aW9uOiB0cnVlLFxuICB1c2VyRGVjaXNpb25UaW1lb3V0OiBudWxsLFxuICBzdXBwcmVzc0xvY2F0aW9uT25Nb3VudDogZmFsc2UsXG4gIGdlb2xvY2F0aW9uUHJvdmlkZXI6IG5hdmlnYXRvci5nZW9sb2NhdGlvbixcbiAgaXNPcHRpbWlzdGljR2VvbG9jYXRpb25FbmFibGVkOiB0cnVlLFxuICBvblN1Y2Nlc3M6IGZ1bmN0aW9uKHN1Y2Nlc3MpIHtjb25zb2xlLmxvZyhzdWNjZXNzKX0sXG4gIG9uRXJyb3I6IGZ1bmN0aW9uKGVycm9yKSB7Y29uc29sZS5sb2coZXJyb3IpfSxcbiAgZXJyb3JNc2c6IHtcbiAgICBpc0dlb2xvY2F0aW9uQXZhaWxhYmxlOiBcIllvdXIgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IEdlb2xvY2F0aW9uXCIsXG4gICAgaXNHZW9sb2NhdGlvbkVuYWJsZWQ6IFwiR2VvbG9jYXRpb24gaXMgbm90IGVuYWJsZWRcIlxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdlb2xvY2F0b3I7XG4iXSwic291cmNlUm9vdCI6IiJ9