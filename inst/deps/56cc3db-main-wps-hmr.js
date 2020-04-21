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
    key: "getPosition",
    value: function getPosition(position) {
      //  this.setProps({
      //    location : position
      //  })
      debugger;
    }
  }, {
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
        errorMsg: this.props.errorMsg,
        getPosition: this.getPosition
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHRyYV9kYXNoX3VpX2NvbXBvbmVudHMvLi9zcmMvbGliL2NvbXBvbmVudHMvR2VvbG9jYXRvci9HZW9sb2NhdG9yQ29tcG9uZW50LnJlYWN0LmpzIl0sIm5hbWVzIjpbIkdlb2xvY2F0b3JDb21wb25lbnQiLCJwcm9wcyIsInBvc2l0aW9uIiwiZ2VvbG9jYXRpb25Qcm92aWRlciIsIm5hdmlnYXRvciIsImdlb2xvY2F0aW9uIiwic2V0UHJvcHMiLCJsb2NhdGlvbiIsImlkIiwicG9zaXRpb25PcHRpb25zIiwid2F0Y2hQb3NpdGlvbiIsInVzZXJEZWNpc2lvblRpbWVvdXQiLCJzdXBwcmVzc0xvY2F0aW9uT25Nb3VudCIsImlzT3B0aW1pc3RpY0dlb2xvY2F0aW9uRW5hYmxlZCIsIm9uU3VjY2VzcyIsIm9uRXJyb3IiLCJlcnJvck1zZyIsImdldFBvc2l0aW9uIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwiZW5hYmxlSGlnaEFjY3VyYWN5IiwibWF4aW11bUFnZSIsInRpbWVvdXQiLCJpc0dlb2xvY2F0aW9uQXZhaWxhYmxlIiwiaXNHZW9sb2NhdGlvbkVuYWJsZWQiLCJzdWNjZXNzIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiZnVuYyIsInN0cmluZyIsImJvb2wiLCJudW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0lBRU1BLG1COzs7OztBQUVKLCtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNEZBQ1hBLEtBRFc7QUFFbEI7Ozs7Z0NBRVdDLFEsRUFBVTtBQUN0QjtBQUNBO0FBQ0E7QUFDQztBQUNBOzs7NkJBRVE7QUFDUCxVQUFJQyxtQkFBbUIsR0FBR0MsU0FBUyxDQUFDQyxXQUFwQztBQUVBLFdBQUtKLEtBQUwsQ0FBV0ssUUFBWCxDQUFvQjtBQUNsQkMsZ0JBQVEsRUFBR0o7QUFETyxPQUFwQjtBQUlBLGFBQ0U7QUFBSyxVQUFFLEVBQUUsS0FBS0YsS0FBTCxDQUFXTztBQUFwQixTQUNFLDJEQUFDLG1EQUFEO0FBQ0UsdUJBQWUsRUFBSSxLQUFLUCxLQUFMLENBQVdRLGVBRGhDO0FBRUUscUJBQWEsRUFBSSxLQUFLUixLQUFMLENBQVdTLGFBRjlCO0FBR0UsMkJBQW1CLEVBQUksS0FBS1QsS0FBTCxDQUFXVSxtQkFIcEM7QUFJRSwrQkFBdUIsRUFBSSxLQUFLVixLQUFMLENBQVdXLHVCQUp4QztBQUtFLHNDQUE4QixFQUFJLEtBQUtYLEtBQUwsQ0FBV1ksOEJBTC9DO0FBTUUsMkJBQW1CLEVBQUtWLG1CQU4xQjtBQU9FLGlCQUFTLEVBQUksS0FBS0YsS0FBTCxDQUFXYSxTQVAxQjtBQVFFLGVBQU8sRUFBSSxLQUFLYixLQUFMLENBQVdjLE9BUnhCO0FBU0UsZ0JBQVEsRUFBSSxLQUFLZCxLQUFMLENBQVdlLFFBVHpCO0FBVUUsbUJBQVcsRUFBSyxLQUFLQztBQVZ2QixRQURGLENBREY7QUFnQkQ7Ozs7RUFwQytCQywrQzs7QUF1Q2xDbEIsbUJBQW1CLENBQUNtQixZQUFwQixHQUFtQztBQUNqQ2IsVUFBUSxFQUFHLG9CQUFNLENBQUUsQ0FEYztBQUVqQ0UsSUFBRSxFQUFFLElBRjZCO0FBR2pDQyxpQkFBZSxFQUFFO0FBQ2ZXLHNCQUFrQixFQUFFLElBREw7QUFFZkMsY0FBVSxFQUFFLENBRkc7QUFHZkMsV0FBTyxFQUFFO0FBSE0sR0FIZ0I7QUFRakNmLFVBQVEsRUFBRyxJQVJzQjtBQVNqQ0csZUFBYSxFQUFFLElBVGtCO0FBVWpDQyxxQkFBbUIsRUFBRSxJQVZZO0FBV2pDQyx5QkFBdUIsRUFBRSxLQVhRO0FBWWpDQyxnQ0FBOEIsRUFBRSxJQVpDO0FBYWpDRyxVQUFRLEVBQUU7QUFDUk8sMEJBQXNCLEVBQUUsMkNBRGhCO0FBRVJDLHdCQUFvQixFQUFFO0FBRmQsR0FidUI7QUFpQmpDVixXQUFTLEVBQUUsbUJBQVNXLE9BQVQsRUFBaUI7QUFBRUMsV0FBTyxDQUFDQyxHQUFSLENBQVlGLE9BQVo7QUFBc0IsR0FqQm5CO0FBa0JqQ1YsU0FBTyxFQUFFLGlCQUFTYSxLQUFULEVBQWU7QUFBRUYsV0FBTyxDQUFDQyxHQUFSLENBQVlDLEtBQVo7QUFBbUI7QUFsQlosQ0FBbkM7QUFxQkE1QixtQkFBbUIsQ0FBQzZCLFNBQXBCLEdBQWdDO0FBQzlCdEIsVUFBUSxFQUFHdUIsaURBQVMsQ0FBQ0MsTUFEUztBQUU5QnpCLFVBQVEsRUFBR3dCLGlEQUFTLENBQUNFLElBRlM7QUFHOUJ4QixJQUFFLEVBQUVzQixpREFBUyxDQUFDRyxNQUhnQjtBQUk5QnhCLGlCQUFlLEVBQUVxQixpREFBUyxDQUFDQyxNQUpHO0FBSzlCckIsZUFBYSxFQUFFb0IsaURBQVMsQ0FBQ0ksSUFMSztBQU05QnZCLHFCQUFtQixFQUFFbUIsaURBQVMsQ0FBQ0ssTUFORDtBQU85QnZCLHlCQUF1QixFQUFFa0IsaURBQVMsQ0FBQ0ksSUFQTDtBQVE5QnJCLGdDQUE4QixFQUFFaUIsaURBQVMsQ0FBQ0ksSUFSWjtBQVM5QmxCLFVBQVEsRUFBRWMsaURBQVMsQ0FBQ0MsTUFUVTtBQVU5QmpCLFdBQVMsRUFBRWdCLGlEQUFTLENBQUNFLElBVlM7QUFXOUJqQixTQUFPLEVBQUVlLGlEQUFTLENBQUNFO0FBWFcsQ0FBaEM7QUFjZWhDLGtGQUFmLEUiLCJmaWxlIjoiNTZjYzNkYi1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgR2VvbG9jYXRvciBmcm9tICcuL0dlb2xvY2F0b3InO1xyXG5cclxuY2xhc3MgR2VvbG9jYXRvckNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgfVxyXG5cclxuICBnZXRQb3NpdGlvbihwb3NpdGlvbikge1xyXG4gIC8vICB0aGlzLnNldFByb3BzKHtcclxuICAvLyAgICBsb2NhdGlvbiA6IHBvc2l0aW9uXHJcbiAgLy8gIH0pXHJcbiAgIGRlYnVnZ2VyXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBsZXQgZ2VvbG9jYXRpb25Qcm92aWRlciA9IG5hdmlnYXRvci5nZW9sb2NhdGlvbjtcclxuICAgIFxyXG4gICAgdGhpcy5wcm9wcy5zZXRQcm9wcyh7XHJcbiAgICAgIGxvY2F0aW9uIDogZ2VvbG9jYXRpb25Qcm92aWRlclxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBpZD17dGhpcy5wcm9wcy5pZH0+XHJcbiAgICAgICAgPEdlb2xvY2F0b3IgXHJcbiAgICAgICAgICBwb3NpdGlvbk9wdGlvbnMgPSB7dGhpcy5wcm9wcy5wb3NpdGlvbk9wdGlvbnN9XHJcbiAgICAgICAgICB3YXRjaFBvc2l0aW9uID0ge3RoaXMucHJvcHMud2F0Y2hQb3NpdGlvbn1cclxuICAgICAgICAgIHVzZXJEZWNpc2lvblRpbWVvdXQgPSB7dGhpcy5wcm9wcy51c2VyRGVjaXNpb25UaW1lb3V0fVxyXG4gICAgICAgICAgc3VwcHJlc3NMb2NhdGlvbk9uTW91bnQgPSB7dGhpcy5wcm9wcy5zdXBwcmVzc0xvY2F0aW9uT25Nb3VudH0gICAgICAgICAgXHJcbiAgICAgICAgICBpc09wdGltaXN0aWNHZW9sb2NhdGlvbkVuYWJsZWQgPSB7dGhpcy5wcm9wcy5pc09wdGltaXN0aWNHZW9sb2NhdGlvbkVuYWJsZWR9XHJcbiAgICAgICAgICBnZW9sb2NhdGlvblByb3ZpZGVyID0geyBnZW9sb2NhdGlvblByb3ZpZGVyIH1cclxuICAgICAgICAgIG9uU3VjY2VzcyA9IHt0aGlzLnByb3BzLm9uU3VjY2Vzc31cclxuICAgICAgICAgIG9uRXJyb3IgPSB7dGhpcy5wcm9wcy5vbkVycm9yfVxyXG4gICAgICAgICAgZXJyb3JNc2cgPSB7dGhpcy5wcm9wcy5lcnJvck1zZ31cclxuICAgICAgICAgIGdldFBvc2l0aW9uID0geyB0aGlzLmdldFBvc2l0aW9uIH1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbkdlb2xvY2F0b3JDb21wb25lbnQuZGVmYXVsdFByb3BzID0ge1xyXG4gIHNldFByb3BzIDogKCkgPT4ge30sXHJcbiAgaWQ6IG51bGwsXHJcbiAgcG9zaXRpb25PcHRpb25zOiB7XHJcbiAgICBlbmFibGVIaWdoQWNjdXJhY3k6IHRydWUsXHJcbiAgICBtYXhpbXVtQWdlOiAwLFxyXG4gICAgdGltZW91dDogNTAwMCxcclxuICB9LFxyXG4gIGxvY2F0aW9uIDogbnVsbCxcclxuICB3YXRjaFBvc2l0aW9uOiB0cnVlLFxyXG4gIHVzZXJEZWNpc2lvblRpbWVvdXQ6IG51bGwsXHJcbiAgc3VwcHJlc3NMb2NhdGlvbk9uTW91bnQ6IGZhbHNlLFxyXG4gIGlzT3B0aW1pc3RpY0dlb2xvY2F0aW9uRW5hYmxlZDogdHJ1ZSxcclxuICBlcnJvck1zZzoge1xyXG4gICAgaXNHZW9sb2NhdGlvbkF2YWlsYWJsZTogXCJZb3VyIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBHZW9sb2NhdGlvblwiLFxyXG4gICAgaXNHZW9sb2NhdGlvbkVuYWJsZWQ6IFwiR2VvbG9jYXRpb24gaXMgbm90IGVuYWJsZWRcIlxyXG4gIH0sXHJcbiAgb25TdWNjZXNzOiBmdW5jdGlvbihzdWNjZXNzKXsgY29uc29sZS5sb2coc3VjY2VzcykgfSxcclxuICBvbkVycm9yOiBmdW5jdGlvbihlcnJvcil7IGNvbnNvbGUubG9nKGVycm9yKX1cclxufTtcclxuXHJcbkdlb2xvY2F0b3JDb21wb25lbnQucHJvcFR5cGVzID0ge1xyXG4gIGxvY2F0aW9uIDogUHJvcFR5cGVzLm9iamVjdCxcclxuICBzZXRQcm9wcyA6IFByb3BUeXBlcy5mdW5jLFxyXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHBvc2l0aW9uT3B0aW9uczogUHJvcFR5cGVzLm9iamVjdCxcclxuICB3YXRjaFBvc2l0aW9uOiBQcm9wVHlwZXMuYm9vbCxcclxuICB1c2VyRGVjaXNpb25UaW1lb3V0OiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIHN1cHByZXNzTG9jYXRpb25Pbk1vdW50OiBQcm9wVHlwZXMuYm9vbCxcclxuICBpc09wdGltaXN0aWNHZW9sb2NhdGlvbkVuYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxyXG4gIGVycm9yTXNnOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIG9uU3VjY2VzczogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgb25FcnJvcjogUHJvcFR5cGVzLmZ1bmMsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHZW9sb2NhdG9yQ29tcG9uZW50OyJdLCJzb3VyY2VSb290IjoiIn0=