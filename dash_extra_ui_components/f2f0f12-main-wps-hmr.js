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
      startDate: null,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX2V4dHJhX3VpX2NvbXBvbmVudHMvLi9zcmMvbGliL2NvbXBvbmVudHMvUE1TX0NvbXBvbmVudC9QTVNDaGlsZHJlbkNvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJQTVNDaGlsZHJlbkNvbXBvbmVudCIsInByb3BzIiwic2V0U3RhdGUiLCJtb2RhbDEiLCJzdGF0ZSIsIm1vZGFsMiIsInN0YXJ0RGF0ZSIsIkRhdGUiLCJkYXRhIiwiaWQiLCJnaXJsTmFtZSIsImN5Y2xlIiwib3Z1bGF0aW9uIiwibWVuc3RydWF0aW9uIiwidG9nZ2xlIiwiZXZlbnQiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJkYXRlIiwiQ3VycmVudERheSIsImN1cnJlbnQiLCJNYXRoIiwiY2VpbCIsIk51bWJlciIsImdldFRpbWUiLCJ0b2dnbGUxIiwibG9hZEdpcmxEYXRhIiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlQ2hhbmdlMSIsImdpcmxEYXRhVXBkYXRlIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicmFuZ2UiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJmdW5jIiwibnVtYmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRXFCQSxvQjs7Ozs7QUFDakIsZ0NBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4RkFBTUEsS0FBTjs7QUFEZSw2REFjVixZQUFNO0FBQ1gsWUFBS0MsUUFBTCxDQUFjO0FBQ1pDLGNBQU0sRUFBRSxDQUFDLE1BQUtDLEtBQUwsQ0FBV0Q7QUFEUixPQUFkO0FBR0gsS0FsQmtCOztBQUFBLDhEQW9CVCxZQUFNO0FBQ1osWUFBS0QsUUFBTCxDQUFjO0FBQ1ZHLGNBQU0sRUFBRSxDQUFDLE1BQUtELEtBQUwsQ0FBV0M7QUFEVixPQUFkO0FBR0gsS0F4QmtC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LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0ICdib290c3RyYXAtY3NzLW9ubHkvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcbmltcG9ydCAnbWRicmVhY3QvZGlzdC9jc3MvbWRiLmNzcyc7XG5pbXBvcnQgJy4vUE1TQ29tcG9uZW50LmNzcydcbmltcG9ydCB7IE1EQkNvbnRhaW5lciwgTURCUm93LCBNREJDb2wsIE1EQklucHV0LCBNREJNb2RhbEZvb3RlciwgTURCQnRuLCBNREJNb2RhbCwgTURCTW9kYWxIZWFkZXIsIE1EQk1vZGFsQm9keSB9IGZyb20gXCJtZGJyZWFjdFwiO1xuaW1wb3J0IERhdGVQaWNrZXIgZnJvbSBcInJlYWN0LWRhdGVwaWNrZXJcIjtcbmltcG9ydCBcInJlYWN0LWRhdGVwaWNrZXIvZGlzdC9yZWFjdC1kYXRlcGlja2VyLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQTVNDaGlsZHJlbkNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0gKHtcbiAgICAgICAgICAgIG1vZGFsMSA6IGZhbHNlLFxuICAgICAgICAgICAgbW9kYWwyOiBmYWxzZSxcbiAgICAgICAgICAgIGlkIDogdGhpcy5wcm9wcy5kYXRhLmlkLFxuICAgICAgICAgICAgZ2lybE5hbWUgOiBcIlwiLFxuICAgICAgICAgICAgY3ljbGUgOiBcIlwiLFxuICAgICAgICAgICAgc3RhcnREYXRlIDogbnVsbCxcbiAgICAgICAgICAgIG92dWxhdGlvbiAgOiBcIlwiLFxuICAgICAgICAgICAgbWVuc3RydWF0aW9uIDogXCJcIixcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICB0b2dnbGUgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIG1vZGFsMTogIXRoaXMuc3RhdGUubW9kYWwxXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHRvZ2dsZTEgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbW9kYWwyOiAhdGhpcy5zdGF0ZS5tb2RhbDJcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbG9hZEdpcmxEYXRhID0gKCkgPT4ge1xuICAgICAgICBsZXQgc3RhcnREYXRlID0gbmV3IERhdGUodGhpcy5wcm9wcy5kYXRhLnN0YXJ0RGF0ZSlcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpZCA6IHRoaXMucHJvcHMuZGF0YS5pZCxcbiAgICAgICAgICAgIGdpcmxOYW1lIDogdGhpcy5wcm9wcy5kYXRhLmdpcmxOYW1lLFxuICAgICAgICAgICAgY3ljbGUgOiB0aGlzLnByb3BzLmRhdGEuY3ljbGUsXG4gICAgICAgICAgICBzdGFydERhdGUgOiBzdGFydERhdGUsXG4gICAgICAgICAgICBvdnVsYXRpb24gIDogdGhpcy5wcm9wcy5kYXRhLm92dWxhdGlvbiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIG1lbnN0cnVhdGlvbiA6IHRoaXMucHJvcHMuZGF0YS5tZW5zdHJ1YXRpb24sXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMudG9nZ2xlKClcbiAgICAgICAgZGVidWdnZXJcbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2UgPSBldmVudCA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBbZXZlbnQudGFyZ2V0Lm5hbWVdIDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xuICAgIH1cbiAgICBoYW5kbGVDaGFuZ2UxID0gZGF0ZSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc3RhcnREYXRlIDogZGF0ZVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIEN1cnJlbnREYXkgPSAwXG4gICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUodGhpcy5wcm9wcy5kYXRhLnN0YXJ0RGF0ZSlcbiAgICAgICAgbGV0IGN1cnJlbnQgPSBuZXcgRGF0ZSgpXG4gICAgICAgIEN1cnJlbnREYXkgPSBNYXRoLmNlaWwoTnVtYmVyKGN1cnJlbnQuZ2V0VGltZSgpIC0gZGF0ZS5nZXRUaW1lKCkpIC8gODY0MDAwMDApXG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIGNhcmQtY2FzY2FkZSBuYXJyb3dlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHkgY2FyZC1ib2R5LWNhc2NhZGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPE1EQlJvdyBjbGFzc05hbWU9XCIganVzdGlmeS1jb250ZW50LW1kLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1EQkNvbCBtZD1cIjEyXCIgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1UaXRsZSBjYXJkIGNhcmQtY2FzY2FkZSBuYXJyb3dlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5IGNhcmQtYm9keS1jYXNjYWRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlzdC1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJDb2wgbWQgPSAnOCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+TmFtZSA6IHsgdGhpcy5wcm9wcy5kYXRhLmdpcmxOYW1lIH08L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01EQkNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQkNvbCBtZCA9ICc0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5TdGFydERhdGUgOiB7IHRoaXMucHJvcHMuZGF0YS5zdGFydERhdGUgfSA8L2g1PiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NREJDb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NREJSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQlJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQkNvbCBtZCA9ICczJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5QZXJpb2QgOiB7IHRoaXMucHJvcHMuZGF0YS5jeWNsZSB9PC9oNT4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTURCQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCQ29sIG1kID0gJzMnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1Pk1lbnN0cnVhdGlvbiA6IHsgdGhpcy5wcm9wcy5kYXRhLm1lbnN0cnVhdGlvbiB9PC9oNT4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTURCQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCQ29sIG1kID0gJzMnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PkN1cnJlbnQgOiAgeyBDdXJyZW50RGF5IH0gPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NREJDb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJDb2wgbWQgPSAnMyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+T3Z1bGF0aW9uIDogeyB0aGlzLnByb3BzLmRhdGEub3Z1bGF0aW9uIH08L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01EQkNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01EQlJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01EQlJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTURCQ29sPlxuICAgICAgICAgICAgICAgICAgICA8L01EQlJvdz5cbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgPE1EQlJvdyBjbGFzc05hbWU9XCJqdXN0aWZ5LWNvbnRlbnQtbWQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TURCQ29sIG1kID0gXCIzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b25cIiBvbkNsaWNrID0geyB0aGlzLnRvZ2dsZTEgfT4gRGVsZXRlIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NREJDb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TURCQ29sIG1kID0gXCIzXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTURCQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1EQkNvbCBtZCA9IFwiM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uXCIgb25DbGljayA9IHsgdGhpcy5sb2FkR2lybERhdGEgfT4gVXBkYXRlIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NREJDb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9NREJSb3c+XG5cbiAgICAgICAgICAgICAgICAgICAgPE1EQlJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNREJNb2RhbCBpc09wZW49e3RoaXMuc3RhdGUubW9kYWwxfSB0b2dnbGU9e3RoaXMudG9nZ2xlfSBzaXplID0gXCJtZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiaXRlbVRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCTW9kYWxIZWFkZXIgIHRvZ2dsZT17dGhpcy50b2dnbGV9PkFkZCBHaXJsPC9NREJNb2RhbEhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJNb2RhbEJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID1cImNvbC1sZy00IGNvbC1tZC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQklucHV0IGxhYmVsPVwiTmFtZSA6IFwiIG9uQ2hhbmdlID0geyB0aGlzLmhhbmRsZUNoYW5nZSB9IG5hbWUgPVwiZ2lybE5hbWVcIiB2YWx1ZSA9IHsgdGhpcy5zdGF0ZS5naXJsTmFtZSB9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPVwiY29sLWxnLTggY29sLW1kLThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImRhdGVMYWJlbFwiPnN0YXJ0RGF0ZTwvbGFiZWw+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyIGNsYXNzTmFtZSA9IFwiZGF0ZVBpY2tlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3RoaXMuc3RhdGUuc3RhcnREYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZTF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImNvbC1sZy02IGNvbC1tZC04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCSW5wdXQgbGFiZWw9XCJDeWNsZVwiIG9uQ2hhbmdlID0geyB0aGlzLmhhbmRsZUNoYW5nZSB9IG5hbWUgPSBcImN5Y2xlXCIgdmFsdWUgPSB7IHRoaXMuc3RhdGUuY3ljbGUgfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJjb2wtbGctNCBjb2wtbWQtOFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQklucHV0IGxhYmVsPVwiT3Z1bHN0aW9uIFBlcmlvZFwiIG9uQ2hhbmdlID0geyB0aGlzLmhhbmRsZUNoYW5nZSB9IG5hbWUgPSBcIm92dWxhdGlvblwiIHZhbHVlID0geyB0aGlzLnN0YXRlLm92dWxhdGlvbiB9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJjb2wtbGctNiBjb2wtbWQtOFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQklucHV0IGxhYmVsPVwiTWVuc3RydWF0aW9uIFBlcmlvZFwiIG9uQ2hhbmdlID0geyB0aGlzLmhhbmRsZUNoYW5nZSB9IG5hbWUgPSBcIm1lbnN0cnVhdGlvblwiIHZhbHVlID0geyAgdGhpcy5zdGF0ZS5tZW5zdHJ1YXRpb24gfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NREJNb2RhbEJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJNb2RhbEZvb3Rlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lID0gXCJidXR0b25cIiBvbkNsaWNrPXsgdGhpcy50b2dnbGUgfT5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lID0gXCJidXR0b25cIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrID0geygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmdpcmxEYXRhVXBkYXRlKHRoaXMuc3RhdGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVwRGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTURCTW9kYWxGb290ZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L01EQk1vZGFsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1EQk1vZGFsIGlzT3Blbj17dGhpcy5zdGF0ZS5tb2RhbDJ9IHRvZ2dsZT17dGhpcy50b2dnbGUxfSBzaXplID0gXCJtZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiaXRlbVRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCTW9kYWxIZWFkZXIgIHRvZ2dsZT17dGhpcy50b2dnbGUxfT48L01EQk1vZGFsSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQk1vZGFsQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5SZWFsbHkgd2FudCB0byBEZWxldGU/PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NREJNb2RhbEJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJNb2RhbEZvb3Rlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lID0gXCJidXR0b25cIiBvbkNsaWNrPXsgdGhpcy50b2dnbGUxIH0+Q0FOQ0xFPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZSA9IFwiYnV0dG9uXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljayA9IHsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlMSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGVsZXRlKHRoaXMucHJvcHMuZGF0YS5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT0tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01EQk1vZGFsRm9vdGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NREJNb2RhbD5cbiAgICAgICAgICAgICAgICAgICAgPC9NREJSb3c+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblBNU0NoaWxkcmVuQ29tcG9uZW50LmRlZmF1bHRQcm9wcyA9IHtcbiAgICBkYXRhIDoge30sXG4gICAgcmFuZ2UgOiAyMVxuIH07XG4gXG4gUE1TQ2hpbGRyZW5Db21wb25lbnQucHJvcFR5cGVzID0ge1xuICAgICBkYXRhIDogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgZ2lybERhdGFVcGRhdGUgOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgcmFuZ2UgOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICBkZWxldGUgOiBQcm9wVHlwZXMuZnVuYyxcbiB9O1xuICJdLCJzb3VyY2VSb290IjoiIn0=