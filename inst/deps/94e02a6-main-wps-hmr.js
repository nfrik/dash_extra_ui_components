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
      debugger;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX2V4dHJhX3VpX2NvbXBvbmVudHMvLi9zcmMvbGliL2NvbXBvbmVudHMvUE1TX0NvbXBvbmVudC9QTVNDaGlsZHJlbkNvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJQTVNDaGlsZHJlbkNvbXBvbmVudCIsInByb3BzIiwic2V0U3RhdGUiLCJtb2RhbDEiLCJzdGF0ZSIsIm1vZGFsMiIsInN0YXJ0RGF0ZSIsIkRhdGUiLCJkYXRhIiwiaWQiLCJnaXJsTmFtZSIsImN5Y2xlIiwib3Z1bGF0aW9uIiwibWVuc3RydWF0aW9uIiwidG9nZ2xlIiwiZXZlbnQiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJkYXRlIiwiQ3VycmVudERheSIsImN1cnJlbnQiLCJNYXRoIiwiY2VpbCIsIk51bWJlciIsImdldFRpbWUiLCJ0b2dnbGUxIiwibG9hZEdpcmxEYXRhIiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlQ2hhbmdlMSIsImdpcmxEYXRhVXBkYXRlIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicmFuZ2UiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJmdW5jIiwibnVtYmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRXFCQSxvQjs7Ozs7QUFDakIsZ0NBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4RkFBTUEsS0FBTjs7QUFEZSw2REFjVixZQUFNO0FBQ1gsWUFBS0MsUUFBTCxDQUFjO0FBQ1pDLGNBQU0sRUFBRSxDQUFDLE1BQUtDLEtBQUwsQ0FBV0Q7QUFEUixPQUFkO0FBR0gsS0FsQmtCOztBQUFBLDhEQW9CVCxZQUFNO0FBQ1osWUFBS0QsUUFBTCxDQUFjO0FBQ1ZHLGNBQU0sRUFBRSxDQUFDLE1BQUtELEtBQUwsQ0FBV0M7QUFEVixPQUFkO0FBR0gsS0F4QmtC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aW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCAnYm9vdHN0cmFwLWNzcy1vbmx5L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XG5pbXBvcnQgJ21kYnJlYWN0L2Rpc3QvY3NzL21kYi5jc3MnO1xuaW1wb3J0ICcuL1BNU0NvbXBvbmVudC5jc3MnXG5pbXBvcnQgeyBNREJDb250YWluZXIsIE1EQlJvdywgTURCQ29sLCBNREJJbnB1dCwgTURCTW9kYWxGb290ZXIsIE1EQkJ0biwgTURCTW9kYWwsIE1EQk1vZGFsSGVhZGVyLCBNREJNb2RhbEJvZHkgfSBmcm9tIFwibWRicmVhY3RcIjtcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gXCJyZWFjdC1kYXRlcGlja2VyXCI7XG5pbXBvcnQgXCJyZWFjdC1kYXRlcGlja2VyL2Rpc3QvcmVhY3QtZGF0ZXBpY2tlci5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUE1TQ2hpbGRyZW5Db21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9ICh7XG4gICAgICAgICAgICBtb2RhbDEgOiBmYWxzZSxcbiAgICAgICAgICAgIG1vZGFsMjogZmFsc2UsXG4gICAgICAgICAgICBpZCA6IHRoaXMucHJvcHMuZGF0YS5pZCxcbiAgICAgICAgICAgIGdpcmxOYW1lIDogXCJcIixcbiAgICAgICAgICAgIGN5Y2xlIDogXCJcIixcbiAgICAgICAgICAgIHN0YXJ0RGF0ZSA6IG5ldyBEYXRlKCksXG4gICAgICAgICAgICBvdnVsYXRpb24gIDogXCJcIixcbiAgICAgICAgICAgIG1lbnN0cnVhdGlvbiA6IFwiXCIsXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgdG9nZ2xlID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBtb2RhbDE6ICF0aGlzLnN0YXRlLm1vZGFsMVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB0b2dnbGUxID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG1vZGFsMjogIXRoaXMuc3RhdGUubW9kYWwyXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxvYWRHaXJsRGF0YSA9ICgpID0+IHtcbiAgICAgICAgbGV0IHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKHRoaXMucHJvcHMuZGF0YS5zdGFydERhdGUpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaWQgOiB0aGlzLnByb3BzLmRhdGEuaWQsXG4gICAgICAgICAgICBnaXJsTmFtZSA6IHRoaXMucHJvcHMuZGF0YS5naXJsTmFtZSxcbiAgICAgICAgICAgIGN5Y2xlIDogdGhpcy5wcm9wcy5kYXRhLmN5Y2xlLFxuICAgICAgICAgICAgc3RhcnREYXRlIDogc3RhcnREYXRlLFxuICAgICAgICAgICAgb3Z1bGF0aW9uICA6IHRoaXMucHJvcHMuZGF0YS5vdnVsYXRpb24sICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBtZW5zdHJ1YXRpb24gOiB0aGlzLnByb3BzLmRhdGEubWVuc3RydWF0aW9uLFxuICAgICAgICB9KVxuICAgICAgICB0aGlzLnRvZ2dsZSgpXG4gICAgfVxuXG4gICAgaGFuZGxlQ2hhbmdlID0gZXZlbnQgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgW2V2ZW50LnRhcmdldC5uYW1lXSA6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2UxID0gZGF0ZSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc3RhcnREYXRlIDogZGF0ZVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIEN1cnJlbnREYXkgPSAwXG4gICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUodGhpcy5wcm9wcy5kYXRhLnN0YXJ0RGF0ZSlcbiAgICAgICAgbGV0IGN1cnJlbnQgPSBuZXcgRGF0ZSgpXG4gICAgICAgIEN1cnJlbnREYXkgPSBNYXRoLmNlaWwoTnVtYmVyKGN1cnJlbnQuZ2V0VGltZSgpIC0gZGF0ZS5nZXRUaW1lKCkpIC8gODY0MDAwMDApXG4gICAgICAgIGRlYnVnZ2VyXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBjYXJkLWNhc2NhZGUgbmFycm93ZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5IGNhcmQtYm9keS1jYXNjYWRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxNREJSb3cgY2xhc3NOYW1lPVwiIGp1c3RpZnktY29udGVudC1tZC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNREJDb2wgbWQ9XCIxMlwiIGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtVGl0bGUgY2FyZCBjYXJkLWNhc2NhZGUgbmFycm93ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keSBjYXJkLWJvZHktY2FzY2FkZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpc3QtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCQ29sIG1kID0gJzgnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1Pk5hbWUgOiB7IHRoaXMucHJvcHMuZGF0YS5naXJsTmFtZSB9PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NREJDb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJDb2wgbWQgPSAnNCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+U3RhcnREYXRlIDogeyB0aGlzLnByb3BzLmRhdGEuc3RhcnREYXRlIH0gPC9oNT4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTURCQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTURCUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJDb2wgbWQgPSAnMyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+UGVyaW9kIDogeyB0aGlzLnByb3BzLmRhdGEuY3ljbGUgfTwvaDU+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01EQkNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQkNvbCBtZCA9ICczJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5NZW5zdHJ1YXRpb24gOiB7IHRoaXMucHJvcHMuZGF0YS5tZW5zdHJ1YXRpb24gfTwvaDU+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01EQkNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQkNvbCBtZCA9ICczJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5DdXJyZW50IDogIHsgQ3VycmVudERheSB9IDwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTURCQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCQ29sIG1kID0gJzMnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1Pk92dWxhdGlvbiA6IHsgdGhpcy5wcm9wcy5kYXRhLm92dWxhdGlvbiB9PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NREJDb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NREJSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQlJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NREJSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L01EQkNvbD5cbiAgICAgICAgICAgICAgICAgICAgPC9NREJSb3c+XG4gICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgIDxNREJSb3cgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LW1kLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1EQkNvbCBtZCA9IFwiM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uXCIgb25DbGljayA9IHsgdGhpcy50b2dnbGUxIH0+IERlbGV0ZSA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTURCQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1EQkNvbCBtZCA9IFwiM1wiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01EQkNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNREJDb2wgbWQgPSBcIjNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvblwiIG9uQ2xpY2sgPSB7IHRoaXMubG9hZEdpcmxEYXRhIH0+IFVwZGF0ZSA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTURCQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvTURCUm93PlxuXG4gICAgICAgICAgICAgICAgICAgIDxNREJSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TURCTW9kYWwgaXNPcGVuPXt0aGlzLnN0YXRlLm1vZGFsMX0gdG9nZ2xlPXt0aGlzLnRvZ2dsZX0gc2l6ZSA9IFwibWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcIml0ZW1UaXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQk1vZGFsSGVhZGVyICB0b2dnbGU9e3RoaXMudG9nZ2xlfT5BZGQgR2lybDwvTURCTW9kYWxIZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCTW9kYWxCb2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9XCJjb2wtbGctNCBjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJJbnB1dCBsYWJlbD1cIk5hbWUgOiBcIiBvbkNoYW5nZSA9IHsgdGhpcy5oYW5kbGVDaGFuZ2UgfSBuYW1lID1cImdpcmxOYW1lXCIgdmFsdWUgPSB7IHRoaXMuc3RhdGUuZ2lybE5hbWUgfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID1cImNvbC1sZy04IGNvbC1tZC04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJkYXRlTGFiZWxcIj5zdGFydERhdGU8L2xhYmVsPjxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlciBjbGFzc05hbWUgPSBcImRhdGVQaWNrZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXt0aGlzLnN0YXRlLnN0YXJ0RGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UxfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJjb2wtbGctNiBjb2wtbWQtOFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQklucHV0IGxhYmVsPVwiQ3ljbGVcIiBvbkNoYW5nZSA9IHsgdGhpcy5oYW5kbGVDaGFuZ2UgfSBuYW1lID0gXCJjeWNsZVwiIHZhbHVlID0geyB0aGlzLnN0YXRlLmN5Y2xlIH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwiY29sLWxnLTQgY29sLW1kLThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJJbnB1dCBsYWJlbD1cIk92dWxzdGlvbiBQZXJpb2RcIiBvbkNoYW5nZSA9IHsgdGhpcy5oYW5kbGVDaGFuZ2UgfSBuYW1lID0gXCJvdnVsYXRpb25cIiB2YWx1ZSA9IHsgdGhpcy5zdGF0ZS5vdnVsYXRpb24gfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwiY29sLWxnLTYgY29sLW1kLThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJJbnB1dCBsYWJlbD1cIk1lbnN0cnVhdGlvbiBQZXJpb2RcIiBvbkNoYW5nZSA9IHsgdGhpcy5oYW5kbGVDaGFuZ2UgfSBuYW1lID0gXCJtZW5zdHJ1YXRpb25cIiB2YWx1ZSA9IHsgIHRoaXMuc3RhdGUubWVuc3RydWF0aW9uIH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTURCTW9kYWxCb2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCTW9kYWxGb290ZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZSA9IFwiYnV0dG9uXCIgb25DbGljaz17IHRoaXMudG9nZ2xlIH0+Q2FuY2VsPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZSA9IFwiYnV0dG9uXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljayA9IHsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5naXJsRGF0YVVwZGF0ZSh0aGlzLnN0YXRlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVcERhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01EQk1vZGFsRm9vdGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NREJNb2RhbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNREJNb2RhbCBpc09wZW49e3RoaXMuc3RhdGUubW9kYWwyfSB0b2dnbGU9e3RoaXMudG9nZ2xlMX0gc2l6ZSA9IFwibWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcIml0ZW1UaXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQk1vZGFsSGVhZGVyICB0b2dnbGU9e3RoaXMudG9nZ2xlMX0+PC9NREJNb2RhbEhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJNb2RhbEJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+UmVhbGx5IHdhbnQgdG8gRGVsZXRlPzwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTURCTW9kYWxCb2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCTW9kYWxGb290ZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZSA9IFwiYnV0dG9uXCIgb25DbGljaz17IHRoaXMudG9nZ2xlMSB9PkNBTkNMRTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWUgPSBcImJ1dHRvblwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2sgPSB7KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZTEoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRlbGV0ZSh0aGlzLnByb3BzLmRhdGEuaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9LXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NREJNb2RhbEZvb3Rlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTURCTW9kYWw+XG4gICAgICAgICAgICAgICAgICAgIDwvTURCUm93PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5QTVNDaGlsZHJlbkNvbXBvbmVudC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgZGF0YSA6IHt9LFxuICAgIHJhbmdlIDogMjFcbiB9O1xuIFxuIFBNU0NoaWxkcmVuQ29tcG9uZW50LnByb3BUeXBlcyA9IHtcbiAgICAgZGF0YSA6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgIGdpcmxEYXRhVXBkYXRlIDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgIHJhbmdlIDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgZGVsZXRlIDogUHJvcFR5cGVzLmZ1bmMsXG4gfTtcbiAiXSwic291cmNlUm9vdCI6IiJ9