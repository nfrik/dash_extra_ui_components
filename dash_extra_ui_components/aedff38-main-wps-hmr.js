webpackHotUpdatedash_extra_ui_components("main",{

/***/ "./src/lib/components/PMS_Component/PMSChildrenComponent.js":
/*!******************************************************************!*\
  !*** ./src/lib/components/PMS_Component/PMSChildrenComponent.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PMSChildrenComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_css_only_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap-css-only/css/bootstrap.min.css */ "./node_modules/bootstrap-css-only/css/bootstrap.min.css");
/* harmony import */ var bootstrap_css_only_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_css_only_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mdbreact_dist_css_mdb_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mdbreact/dist/css/mdb.css */ "./node_modules/mdbreact/dist/css/mdb.css");
/* harmony import */ var mdbreact_dist_css_mdb_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mdbreact_dist_css_mdb_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _PMSComponent_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PMSComponent.css */ "./src/lib/components/PMS_Component/PMSComponent.css");
/* harmony import */ var _PMSComponent_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_PMSComponent_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mdbreact */ "./node_modules/mdbreact/dist/mdbreact.esm.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-datepicker */ "./node_modules/react-datepicker/dist/react-datepicker.min.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ "./node_modules/react-datepicker/dist/react-datepicker.css");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_7__);
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










var PMSChildrenComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(PMSChildrenComponent, _Component);

  function PMSChildrenComponent(props) {
    var _this;

    _classCallCheck(this, PMSChildrenComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PMSChildrenComponent).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "toggle", function () {
      _this.setState({
        modal1: !_this.state.modal1
      });
    });

    _defineProperty(_assertThisInitialized(_this), "toggle1", function () {
      _this.setState({
        modal2: !_this.state.modal2
      });
    });

    _defineProperty(_assertThisInitialized(_this), "loadGirlData", function () {
      var startDate = new Date(_this.props.data.startDate);

      _this.setState({
        id: _this.props.data.id,
        girlName: _this.props.data.girlName,
        cycle: _this.props.data.cycle,
        startDate: startDate,
        ovulation: _this.props.data.ovulation,
        menstruation: _this.props.data.menstruation
      });

      _this.toggle();

      debugger;
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      _this.setState(_defineProperty({}, event.target.name, event.target.value));
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange1", function (date) {
      _this.setState({
        startDate: date
      });
    });

    _this.state = {
      modal1: false,
      modal2: false,
      id: _this.props.data.id,
      girlName: "",
      cycle: "",
      startDate: new Date(),
      ovulation: "",
      menstruation: ""
    };
    return _this;
  }

  _createClass(PMSChildrenComponent, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var CurrentDay = 0;
      var date = new Date(this.props.data.startDate);
      var current = new Date();
      CurrentDay = Math.ceil(Number(current.getTime() - date.getTime()) / 86400000);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "card card-cascade narrower"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "card-body card-body-cascade"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBRow"], {
        className: " justify-content-md-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBCol"], {
        md: "12",
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "itemTitle card card-cascade narrower"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "card-body card-body-cascade"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "list-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBRow"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBCol"], {
        md: "8"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "Name : ", this.props.data.girlName)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBCol"], {
        md: "4"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "StartDate : ", this.props.data.startDate, " "))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBRow"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBCol"], {
        md: "3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "Period : ", this.props.data.cycle)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBCol"], {
        md: "3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "Menstruation : ", this.props.data.menstruation)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBCol"], {
        md: "3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "Current :  ", CurrentDay, " ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBCol"], {
        md: "3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "Ovulation : ", this.props.data.ovulation))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBRow"], null)))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBRow"], {
        className: "justify-content-md-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBCol"], {
        md: "3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "button",
        onClick: this.toggle1
      }, " Delete ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBCol"], {
        md: "3"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBCol"], {
        md: "3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "button",
        onClick: this.loadGirlData
      }, " Update "))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBRow"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBModal"], {
        isOpen: this.state.modal1,
        toggle: this.toggle,
        size: "md"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "itemTitle"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBModalHeader"], {
        toggle: this.toggle
      }, "Add Girl")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBModalBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "col-lg-4 col-md-12"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBInput"], {
        label: "Name : ",
        onChange: this.handleChange,
        name: "girlName",
        value: this.state.girlName
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "col-lg-8 col-md-8"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        "class": "dateLabel"
      }, "startDate"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_datepicker__WEBPACK_IMPORTED_MODULE_6___default.a, {
        className: "datePicker",
        selected: this.state.startDate,
        onChange: this.handleChange1
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "col-lg-6 col-md-8"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBInput"], {
        label: "Cycle",
        onChange: this.handleChange,
        name: "cycle",
        value: this.state.cycle
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "col-lg-4 col-md-8"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBInput"], {
        label: "Ovulstion Period",
        onChange: this.handleChange,
        name: "ovulation",
        value: this.state.ovulation
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "col-lg-6 col-md-8"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBInput"], {
        label: "Menstruation Period",
        onChange: this.handleChange,
        name: "menstruation",
        value: this.state.menstruation
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBModalFooter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "button",
        onClick: this.toggle
      }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "button",
        onClick: function onClick() {
          _this2.toggle();

          debugger;

          _this2.props.girlDataUpdate(_this2.state);
        }
      }, "UpDate"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBModal"], {
        isOpen: this.state.modal2,
        toggle: this.toggle1,
        size: "md"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "itemTitle"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBModalHeader"], {
        toggle: this.toggle1
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBModalBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Really want to Delete?")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBModalFooter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "button",
        onClick: this.toggle1
      }, "CANCLE"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "button",
        onClick: function onClick() {
          _this2.toggle1();

          _this2.props["delete"](_this2.props.data.id);
        }
      }, "OK"))))));
    }
  }]);

  return PMSChildrenComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


PMSChildrenComponent.defaultProps = {
  data: {},
  range: 21
};
PMSChildrenComponent.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  girlDataUpdate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  range: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  "delete": prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX2V4dHJhX3VpX2NvbXBvbmVudHMvLi9zcmMvbGliL2NvbXBvbmVudHMvUE1TX0NvbXBvbmVudC9QTVNDaGlsZHJlbkNvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJQTVNDaGlsZHJlbkNvbXBvbmVudCIsInByb3BzIiwic2V0U3RhdGUiLCJtb2RhbDEiLCJzdGF0ZSIsIm1vZGFsMiIsInN0YXJ0RGF0ZSIsIkRhdGUiLCJkYXRhIiwiaWQiLCJnaXJsTmFtZSIsImN5Y2xlIiwib3Z1bGF0aW9uIiwibWVuc3RydWF0aW9uIiwidG9nZ2xlIiwiZXZlbnQiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJkYXRlIiwiQ3VycmVudERheSIsImN1cnJlbnQiLCJNYXRoIiwiY2VpbCIsIk51bWJlciIsImdldFRpbWUiLCJ0b2dnbGUxIiwibG9hZEdpcmxEYXRhIiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlQ2hhbmdlMSIsImdpcmxEYXRhVXBkYXRlIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicmFuZ2UiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJmdW5jIiwibnVtYmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRXFCQSxvQjs7Ozs7QUFDakIsZ0NBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4RkFBTUEsS0FBTjs7QUFEZSw2REFjVixZQUFNO0FBQ1gsWUFBS0MsUUFBTCxDQUFjO0FBQ1pDLGNBQU0sRUFBRSxDQUFDLE1BQUtDLEtBQUwsQ0FBV0Q7QUFEUixPQUFkO0FBR0gsS0FsQmtCOztBQUFBLDhEQW9CVCxZQUFNO0FBQ1osWUFBS0QsUUFBTCxDQUFjO0FBQ1ZHLGNBQU0sRUFBRSxDQUFDLE1BQUtELEtBQUwsQ0FBV0M7QUFEVixPQUFkO0FBR0gsS0F4QmtCOztBQUFBLG1FQTBCSixZQUFNO0FBQ2pCLFVBQUlDLFNBQVMsR0FBRyxJQUFJQyxJQUFKLENBQVMsTUFBS04sS0FBTCxDQUFXTyxJQUFYLENBQWdCRixTQUF6QixDQUFoQjs7QUFDQSxZQUFLSixRQUFMLENBQWM7QUFDVk8sVUFBRSxFQUFHLE1BQUtSLEtBQUwsQ0FBV08sSUFBWCxDQUFnQkMsRUFEWDtBQUVWQyxnQkFBUSxFQUFHLE1BQUtULEtBQUwsQ0FBV08sSUFBWCxDQUFnQkUsUUFGakI7QUFHVkMsYUFBSyxFQUFHLE1BQUtWLEtBQUwsQ0FBV08sSUFBWCxDQUFnQkcsS0FIZDtBQUlWTCxpQkFBUyxFQUFHQSxTQUpGO0FBS1ZNLGlCQUFTLEVBQUksTUFBS1gsS0FBTCxDQUFXTyxJQUFYLENBQWdCSSxTQUxuQjtBQU1WQyxvQkFBWSxFQUFHLE1BQUtaLEtBQUwsQ0FBV08sSUFBWCxDQUFnQks7QUFOckIsT0FBZDs7QUFRQSxZQUFLQyxNQUFMOztBQUNBO0FBQ0gsS0F0Q2tCOztBQUFBLG1FQXdDSixVQUFBQyxLQUFLLEVBQUk7QUFDcEIsWUFBS2IsUUFBTCxxQkFBaUJhLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxJQUE5QixFQUFzQ0YsS0FBSyxDQUFDQyxNQUFOLENBQWFFLEtBQW5EO0FBQ0gsS0ExQ2tCOztBQUFBLG9FQTJDSCxVQUFBQyxJQUFJLEVBQUk7QUFDcEIsWUFBS2pCLFFBQUwsQ0FBYztBQUNWSSxpQkFBUyxFQUFHYTtBQURGLE9BQWQ7QUFHSCxLQS9Da0I7O0FBRWYsVUFBS2YsS0FBTCxHQUFjO0FBQ1ZELFlBQU0sRUFBRyxLQURDO0FBRVZFLFlBQU0sRUFBRSxLQUZFO0FBR1ZJLFFBQUUsRUFBRyxNQUFLUixLQUFMLENBQVdPLElBQVgsQ0FBZ0JDLEVBSFg7QUFJVkMsY0FBUSxFQUFHLEVBSkQ7QUFLVkMsV0FBSyxFQUFHLEVBTEU7QUFNVkwsZUFBUyxFQUFHLElBQUlDLElBQUosRUFORjtBQU9WSyxlQUFTLEVBQUksRUFQSDtBQVFWQyxrQkFBWSxFQUFHO0FBUkwsS0FBZDtBQUZlO0FBWWxCOzs7OzZCQXFDUTtBQUFBOztBQUNMLFVBQUlPLFVBQVUsR0FBRyxDQUFqQjtBQUNBLFVBQUlELElBQUksR0FBRyxJQUFJWixJQUFKLENBQVMsS0FBS04sS0FBTCxDQUFXTyxJQUFYLENBQWdCRixTQUF6QixDQUFYO0FBQ0EsVUFBSWUsT0FBTyxHQUFHLElBQUlkLElBQUosRUFBZDtBQUNBYSxnQkFBVSxHQUFHRSxJQUFJLENBQUNDLElBQUwsQ0FBVUMsTUFBTSxDQUFDSCxPQUFPLENBQUNJLE9BQVIsS0FBb0JOLElBQUksQ0FBQ00sT0FBTCxFQUFyQixDQUFOLEdBQTZDLFFBQXZELENBQWI7QUFFQSxhQUNJO0FBQUssaUJBQU07QUFBWCxTQUNJO0FBQUssaUJBQU07QUFBWCxTQUNJLDJEQUFDLCtDQUFEO0FBQVEsaUJBQVMsRUFBQztBQUFsQixTQUNJLDJEQUFDLCtDQUFEO0FBQVEsVUFBRSxFQUFDLElBQVg7QUFBZ0IsaUJBQVMsRUFBQztBQUExQixTQUNJO0FBQUssaUJBQU07QUFBWCxTQUNJO0FBQUssaUJBQU07QUFBWCxTQUNJO0FBQUssaUJBQU07QUFBWCxTQUNJLDJEQUFDLCtDQUFELFFBQ0ksMkRBQUMsK0NBQUQ7QUFBUSxVQUFFLEVBQUc7QUFBYixTQUNJLGtGQUFhLEtBQUt4QixLQUFMLENBQVdPLElBQVgsQ0FBZ0JFLFFBQTdCLENBREosQ0FESixFQUlJLDJEQUFDLCtDQUFEO0FBQVEsVUFBRSxFQUFHO0FBQWIsU0FDSSx1RkFBa0IsS0FBS1QsS0FBTCxDQUFXTyxJQUFYLENBQWdCRixTQUFsQyxNQURKLENBSkosQ0FESixFQVVJLDJEQUFDLCtDQUFELFFBQ0ksMkRBQUMsK0NBQUQ7QUFBUSxVQUFFLEVBQUc7QUFBYixTQUNJLG9GQUFlLEtBQUtMLEtBQUwsQ0FBV08sSUFBWCxDQUFnQkcsS0FBL0IsQ0FESixDQURKLEVBSUksMkRBQUMsK0NBQUQ7QUFBUSxVQUFFLEVBQUc7QUFBYixTQUNJLDBGQUFxQixLQUFLVixLQUFMLENBQVdPLElBQVgsQ0FBZ0JLLFlBQXJDLENBREosQ0FKSixFQU9JLDJEQUFDLCtDQUFEO0FBQVEsVUFBRSxFQUFHO0FBQWIsU0FDSSxzRkFBaUJPLFVBQWpCLE1BREosQ0FQSixFQVVJLDJEQUFDLCtDQUFEO0FBQVEsVUFBRSxFQUFHO0FBQWIsU0FDSSx1RkFBa0IsS0FBS25CLEtBQUwsQ0FBV08sSUFBWCxDQUFnQkksU0FBbEMsQ0FESixDQVZKLENBVkosRUF3QkksMkRBQUMsK0NBQUQsT0F4QkosQ0FESixDQURKLENBREosQ0FESixDQURKLEVBcUNJLHNFQXJDSixFQXNDSSwyREFBQywrQ0FBRDtBQUFRLGlCQUFTLEVBQUM7QUFBbEIsU0FDSSwyREFBQywrQ0FBRDtBQUFRLFVBQUUsRUFBRztBQUFiLFNBQ0k7QUFBUSxpQkFBUyxFQUFDLFFBQWxCO0FBQTJCLGVBQU8sRUFBSyxLQUFLYztBQUE1QyxvQkFESixDQURKLEVBSUksMkRBQUMsK0NBQUQ7QUFBUSxVQUFFLEVBQUc7QUFBYixRQUpKLEVBT0ksMkRBQUMsK0NBQUQ7QUFBUSxVQUFFLEVBQUc7QUFBYixTQUNJO0FBQVEsaUJBQVMsRUFBQyxRQUFsQjtBQUEyQixlQUFPLEVBQUssS0FBS0M7QUFBNUMsb0JBREosQ0FQSixDQXRDSixFQW1ESSwyREFBQywrQ0FBRCxRQUNJLDJEQUFDLGlEQUFEO0FBQVUsY0FBTSxFQUFFLEtBQUt2QixLQUFMLENBQVdELE1BQTdCO0FBQXFDLGNBQU0sRUFBRSxLQUFLVyxNQUFsRDtBQUEwRCxZQUFJLEVBQUc7QUFBakUsU0FDUTtBQUFLLGlCQUFTLEVBQUc7QUFBakIsU0FDSSwyREFBQyx1REFBRDtBQUFpQixjQUFNLEVBQUUsS0FBS0E7QUFBOUIsb0JBREosQ0FEUixFQUlRLDJEQUFDLHFEQUFELFFBQ0ksd0VBQ0k7QUFBSyxpQkFBUTtBQUFiLFNBQ0k7QUFBSyxpQkFBTztBQUFaLFNBQ0ksMkRBQUMsaURBQUQ7QUFBVSxhQUFLLEVBQUMsU0FBaEI7QUFBMEIsZ0JBQVEsRUFBSyxLQUFLYyxZQUE1QztBQUEyRCxZQUFJLEVBQUUsVUFBakU7QUFBNEUsYUFBSyxFQUFLLEtBQUt4QixLQUFMLENBQVdNO0FBQWpHLFFBREosQ0FESixFQUlJO0FBQUssaUJBQU87QUFBWixTQUNJO0FBQU8saUJBQU07QUFBYixxQkFESixFQUM4QyxzRUFEOUMsRUFFSSwyREFBQyx1REFBRDtBQUFZLGlCQUFTLEVBQUcsWUFBeEI7QUFDSSxnQkFBUSxFQUFFLEtBQUtOLEtBQUwsQ0FBV0UsU0FEekI7QUFFSSxnQkFBUSxFQUFFLEtBQUt1QjtBQUZuQixRQUZKLENBSkosQ0FESixFQWFJO0FBQUssaUJBQVMsRUFBRztBQUFqQixTQUNJO0FBQUssaUJBQVE7QUFBYixTQUNJLDJEQUFDLGlEQUFEO0FBQVUsYUFBSyxFQUFDLE9BQWhCO0FBQXdCLGdCQUFRLEVBQUssS0FBS0QsWUFBMUM7QUFBeUQsWUFBSSxFQUFHLE9BQWhFO0FBQXdFLGFBQUssRUFBSyxLQUFLeEIsS0FBTCxDQUFXTztBQUE3RixRQURKLENBREosRUFJSTtBQUFLLGlCQUFRO0FBQWIsU0FDSSwyREFBQyxpREFBRDtBQUFVLGFBQUssRUFBQyxrQkFBaEI7QUFBbUMsZ0JBQVEsRUFBSyxLQUFLaUIsWUFBckQ7QUFBb0UsWUFBSSxFQUFHLFdBQTNFO0FBQXVGLGFBQUssRUFBSyxLQUFLeEIsS0FBTCxDQUFXUTtBQUE1RyxRQURKLENBSkosQ0FiSixFQXFCSTtBQUFLLGlCQUFRO0FBQWIsU0FDSTtBQUFLLGlCQUFRO0FBQWIsU0FDSSwyREFBQyxpREFBRDtBQUFVLGFBQUssRUFBQyxxQkFBaEI7QUFBc0MsZ0JBQVEsRUFBSyxLQUFLZ0IsWUFBeEQ7QUFBdUUsWUFBSSxFQUFHLGNBQTlFO0FBQTZGLGFBQUssRUFBTSxLQUFLeEIsS0FBTCxDQUFXUztBQUFuSCxRQURKLENBREosQ0FyQkosQ0FESixDQUpSLEVBaUNRLDJEQUFDLHVEQUFELFFBQ0k7QUFBUSxpQkFBUyxFQUFHLFFBQXBCO0FBQTZCLGVBQU8sRUFBRyxLQUFLQztBQUE1QyxrQkFESixFQUVJO0FBQVEsaUJBQVMsRUFBRyxRQUFwQjtBQUNJLGVBQU8sRUFBSSxtQkFBTTtBQUNiLGdCQUFJLENBQUNBLE1BQUw7O0FBQ0E7O0FBQ0EsZ0JBQUksQ0FBQ2IsS0FBTCxDQUFXNkIsY0FBWCxDQUEwQixNQUFJLENBQUMxQixLQUEvQjtBQUNIO0FBTEwsa0JBRkosQ0FqQ1IsQ0FESixFQThDSSwyREFBQyxpREFBRDtBQUFVLGNBQU0sRUFBRSxLQUFLQSxLQUFMLENBQVdDLE1BQTdCO0FBQXFDLGNBQU0sRUFBRSxLQUFLcUIsT0FBbEQ7QUFBMkQsWUFBSSxFQUFHO0FBQWxFLFNBQ1E7QUFBSyxpQkFBUyxFQUFHO0FBQWpCLFNBQ0ksMkRBQUMsdURBQUQ7QUFBaUIsY0FBTSxFQUFFLEtBQUtBO0FBQTlCLFFBREosQ0FEUixFQUlRLDJEQUFDLHFEQUFELFFBQ0ksZ0dBREosQ0FKUixFQU9RLDJEQUFDLHVEQUFELFFBQ0k7QUFBUSxpQkFBUyxFQUFHLFFBQXBCO0FBQTZCLGVBQU8sRUFBRyxLQUFLQTtBQUE1QyxrQkFESixFQUVJO0FBQVEsaUJBQVMsRUFBRyxRQUFwQjtBQUNJLGVBQU8sRUFBSSxtQkFBTTtBQUNiLGdCQUFJLENBQUNBLE9BQUw7O0FBQ0EsZ0JBQUksQ0FBQ3pCLEtBQUwsV0FBa0IsTUFBSSxDQUFDQSxLQUFMLENBQVdPLElBQVgsQ0FBZ0JDLEVBQWxDO0FBQ0g7QUFKTCxjQUZKLENBUFIsQ0E5Q0osQ0FuREosQ0FESixDQURKO0FBeUhIOzs7O0VBakw2Q3NCLCtDOzs7QUFvTGxEL0Isb0JBQW9CLENBQUNnQyxZQUFyQixHQUFvQztBQUNoQ3hCLE1BQUksRUFBRyxFQUR5QjtBQUVoQ3lCLE9BQUssRUFBRztBQUZ3QixDQUFwQztBQUtDakMsb0JBQW9CLENBQUNrQyxTQUFyQixHQUFpQztBQUM3QjFCLE1BQUksRUFBRzJCLGlEQUFTLENBQUNDLE1BRFk7QUFFN0JOLGdCQUFjLEVBQUdLLGlEQUFTLENBQUNFLElBRkU7QUFHN0JKLE9BQUssRUFBR0UsaURBQVMsQ0FBQ0csTUFIVztBQUk3QixZQUFTSCxpREFBUyxDQUFDRTtBQUpVLENBQWpDLEMiLCJmaWxlIjoiYWVkZmYzOC1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC1jc3Mtb25seS9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xuaW1wb3J0ICdtZGJyZWFjdC9kaXN0L2Nzcy9tZGIuY3NzJztcbmltcG9ydCAnLi9QTVNDb21wb25lbnQuY3NzJ1xuaW1wb3J0IHsgTURCQ29udGFpbmVyLCBNREJSb3csIE1EQkNvbCwgTURCSW5wdXQsIE1EQk1vZGFsRm9vdGVyLCBNREJCdG4sIE1EQk1vZGFsLCBNREJNb2RhbEhlYWRlciwgTURCTW9kYWxCb2R5IH0gZnJvbSBcIm1kYnJlYWN0XCI7XG5pbXBvcnQgRGF0ZVBpY2tlciBmcm9tIFwicmVhY3QtZGF0ZXBpY2tlclwiO1xuaW1wb3J0IFwicmVhY3QtZGF0ZXBpY2tlci9kaXN0L3JlYWN0LWRhdGVwaWNrZXIuY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBNU0NoaWxkcmVuQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSAoe1xuICAgICAgICAgICAgbW9kYWwxIDogZmFsc2UsXG4gICAgICAgICAgICBtb2RhbDI6IGZhbHNlLFxuICAgICAgICAgICAgaWQgOiB0aGlzLnByb3BzLmRhdGEuaWQsXG4gICAgICAgICAgICBnaXJsTmFtZSA6IFwiXCIsXG4gICAgICAgICAgICBjeWNsZSA6IFwiXCIsXG4gICAgICAgICAgICBzdGFydERhdGUgOiBuZXcgRGF0ZSgpLFxuICAgICAgICAgICAgb3Z1bGF0aW9uICA6IFwiXCIsXG4gICAgICAgICAgICBtZW5zdHJ1YXRpb24gOiBcIlwiLFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHRvZ2dsZSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbW9kYWwxOiAhdGhpcy5zdGF0ZS5tb2RhbDFcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdG9nZ2xlMSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBtb2RhbDI6ICF0aGlzLnN0YXRlLm1vZGFsMlxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsb2FkR2lybERhdGEgPSAoKSA9PiB7XG4gICAgICAgIGxldCBzdGFydERhdGUgPSBuZXcgRGF0ZSh0aGlzLnByb3BzLmRhdGEuc3RhcnREYXRlKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlkIDogdGhpcy5wcm9wcy5kYXRhLmlkLFxuICAgICAgICAgICAgZ2lybE5hbWUgOiB0aGlzLnByb3BzLmRhdGEuZ2lybE5hbWUsXG4gICAgICAgICAgICBjeWNsZSA6IHRoaXMucHJvcHMuZGF0YS5jeWNsZSxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZSA6IHN0YXJ0RGF0ZSxcbiAgICAgICAgICAgIG92dWxhdGlvbiAgOiB0aGlzLnByb3BzLmRhdGEub3Z1bGF0aW9uLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgbWVuc3RydWF0aW9uIDogdGhpcy5wcm9wcy5kYXRhLm1lbnN0cnVhdGlvbixcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy50b2dnbGUoKVxuICAgICAgICBkZWJ1Z2dlclxuICAgIH1cblxuICAgIGhhbmRsZUNoYW5nZSA9IGV2ZW50ID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFtldmVudC50YXJnZXQubmFtZV0gOiBldmVudC50YXJnZXQudmFsdWUgfSk7XG4gICAgfVxuICAgIGhhbmRsZUNoYW5nZTEgPSBkYXRlID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzdGFydERhdGUgOiBkYXRlXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB2YXIgQ3VycmVudERheSA9IDBcbiAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSh0aGlzLnByb3BzLmRhdGEuc3RhcnREYXRlKVxuICAgICAgICBsZXQgY3VycmVudCA9IG5ldyBEYXRlKClcbiAgICAgICAgQ3VycmVudERheSA9IE1hdGguY2VpbChOdW1iZXIoY3VycmVudC5nZXRUaW1lKCkgLSBkYXRlLmdldFRpbWUoKSkgLyA4NjQwMDAwMClcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgY2FyZC1jYXNjYWRlIG5hcnJvd2VyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keSBjYXJkLWJvZHktY2FzY2FkZVwiPlxuICAgICAgICAgICAgICAgICAgICA8TURCUm93IGNsYXNzTmFtZT1cIiBqdXN0aWZ5LWNvbnRlbnQtbWQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TURCQ29sIG1kPVwiMTJcIiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbVRpdGxlIGNhcmQgY2FyZC1jYXNjYWRlIG5hcnJvd2VyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHkgY2FyZC1ib2R5LWNhc2NhZGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaXN0LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQlJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQkNvbCBtZCA9ICc4Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5OYW1lIDogeyB0aGlzLnByb3BzLmRhdGEuZ2lybE5hbWUgfTwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTURCQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCQ29sIG1kID0gJzQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PlN0YXJ0RGF0ZSA6IHsgdGhpcy5wcm9wcy5kYXRhLnN0YXJ0RGF0ZSB9IDwvaDU+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01EQkNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01EQlJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCQ29sIG1kID0gJzMnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PlBlcmlvZCA6IHsgdGhpcy5wcm9wcy5kYXRhLmN5Y2xlIH08L2g1PiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NREJDb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJDb2wgbWQgPSAnMyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+TWVuc3RydWF0aW9uIDogeyB0aGlzLnByb3BzLmRhdGEubWVuc3RydWF0aW9uIH08L2g1PiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NREJDb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJDb2wgbWQgPSAnMyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+Q3VycmVudCA6ICB7IEN1cnJlbnREYXkgfSA8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01EQkNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQkNvbCBtZCA9ICczJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5PdnVsYXRpb24gOiB7IHRoaXMucHJvcHMuZGF0YS5vdnVsYXRpb24gfTwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTURCQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTURCUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTURCUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NREJDb2w+XG4gICAgICAgICAgICAgICAgICAgIDwvTURCUm93PlxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgICA8TURCUm93IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1tZC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNREJDb2wgbWQgPSBcIjNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvblwiIG9uQ2xpY2sgPSB7IHRoaXMudG9nZ2xlMSB9PiBEZWxldGUgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L01EQkNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNREJDb2wgbWQgPSBcIjNcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NREJDb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TURCQ29sIG1kID0gXCIzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b25cIiBvbkNsaWNrID0geyB0aGlzLmxvYWRHaXJsRGF0YSB9PiBVcGRhdGUgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L01EQkNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L01EQlJvdz5cblxuICAgICAgICAgICAgICAgICAgICA8TURCUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1EQk1vZGFsIGlzT3Blbj17dGhpcy5zdGF0ZS5tb2RhbDF9IHRvZ2dsZT17dGhpcy50b2dnbGV9IHNpemUgPSBcIm1kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJpdGVtVGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJNb2RhbEhlYWRlciAgdG9nZ2xlPXt0aGlzLnRvZ2dsZX0+QWRkIEdpcmw8L01EQk1vZGFsSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQk1vZGFsQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPVwiY29sLWxnLTQgY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCSW5wdXQgbGFiZWw9XCJOYW1lIDogXCIgb25DaGFuZ2UgPSB7IHRoaXMuaGFuZGxlQ2hhbmdlIH0gbmFtZSA9XCJnaXJsTmFtZVwiIHZhbHVlID0geyB0aGlzLnN0YXRlLmdpcmxOYW1lIH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9XCJjb2wtbGctOCBjb2wtbWQtOFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZGF0ZUxhYmVsXCI+c3RhcnREYXRlPC9sYWJlbD48YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhdGVQaWNrZXIgY2xhc3NOYW1lID0gXCJkYXRlUGlja2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17dGhpcy5zdGF0ZS5zdGFydERhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlMX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwiY29sLWxnLTYgY29sLW1kLThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJJbnB1dCBsYWJlbD1cIkN5Y2xlXCIgb25DaGFuZ2UgPSB7IHRoaXMuaGFuZGxlQ2hhbmdlIH0gbmFtZSA9IFwiY3ljbGVcIiB2YWx1ZSA9IHsgdGhpcy5zdGF0ZS5jeWNsZSB9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImNvbC1sZy00IGNvbC1tZC04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCSW5wdXQgbGFiZWw9XCJPdnVsc3Rpb24gUGVyaW9kXCIgb25DaGFuZ2UgPSB7IHRoaXMuaGFuZGxlQ2hhbmdlIH0gbmFtZSA9IFwib3Z1bGF0aW9uXCIgdmFsdWUgPSB7IHRoaXMuc3RhdGUub3Z1bGF0aW9uIH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImNvbC1sZy02IGNvbC1tZC04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCSW5wdXQgbGFiZWw9XCJNZW5zdHJ1YXRpb24gUGVyaW9kXCIgb25DaGFuZ2UgPSB7IHRoaXMuaGFuZGxlQ2hhbmdlIH0gbmFtZSA9IFwibWVuc3RydWF0aW9uXCIgdmFsdWUgPSB7ICB0aGlzLnN0YXRlLm1lbnN0cnVhdGlvbiB9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01EQk1vZGFsQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQk1vZGFsRm9vdGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWUgPSBcImJ1dHRvblwiIG9uQ2xpY2s9eyB0aGlzLnRvZ2dsZSB9PkNhbmNlbDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWUgPSBcImJ1dHRvblwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2sgPSB7KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlYnVnZ2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZ2lybERhdGFVcGRhdGUodGhpcy5zdGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXBEYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NREJNb2RhbEZvb3Rlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTURCTW9kYWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TURCTW9kYWwgaXNPcGVuPXt0aGlzLnN0YXRlLm1vZGFsMn0gdG9nZ2xlPXt0aGlzLnRvZ2dsZTF9IHNpemUgPSBcIm1kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJpdGVtVGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJNb2RhbEhlYWRlciAgdG9nZ2xlPXt0aGlzLnRvZ2dsZTF9PjwvTURCTW9kYWxIZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCTW9kYWxCb2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPlJlYWxseSB3YW50IHRvIERlbGV0ZT88L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01EQk1vZGFsQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQk1vZGFsRm9vdGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWUgPSBcImJ1dHRvblwiIG9uQ2xpY2s9eyB0aGlzLnRvZ2dsZTEgfT5DQU5DTEU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lID0gXCJidXR0b25cIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrID0geygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGUxKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kZWxldGUodGhpcy5wcm9wcy5kYXRhLmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPS1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTURCTW9kYWxGb290ZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L01EQk1vZGFsPlxuICAgICAgICAgICAgICAgICAgICA8L01EQlJvdz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuUE1TQ2hpbGRyZW5Db21wb25lbnQuZGVmYXVsdFByb3BzID0ge1xuICAgIGRhdGEgOiB7fSxcbiAgICByYW5nZSA6IDIxXG4gfTtcbiBcbiBQTVNDaGlsZHJlbkNvbXBvbmVudC5wcm9wVHlwZXMgPSB7XG4gICAgIGRhdGEgOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICBnaXJsRGF0YVVwZGF0ZSA6IFByb3BUeXBlcy5mdW5jLFxuICAgICByYW5nZSA6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgIGRlbGV0ZSA6IFByb3BUeXBlcy5mdW5jLFxuIH07XG4gIl0sInNvdXJjZVJvb3QiOiIifQ==