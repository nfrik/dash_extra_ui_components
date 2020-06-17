webpackHotUpdatedash_extra_ui_components("main",{

/***/ "./src/lib/components/PMS_Component/PMSComponent.react.js":
/*!****************************************************************!*\
  !*** ./src/lib/components/PMS_Component/PMSComponent.react.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PMSComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PMSComponent_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PMSComponent.css */ "./src/lib/components/PMS_Component/PMSComponent.css");
/* harmony import */ var _PMSComponent_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_PMSComponent_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bootstrap_css_only_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap-css-only/css/bootstrap.min.css */ "./node_modules/bootstrap-css-only/css/bootstrap.min.css");
/* harmony import */ var bootstrap_css_only_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_css_only_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mdbreact_dist_css_mdb_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mdbreact/dist/css/mdb.css */ "./node_modules/mdbreact/dist/css/mdb.css");
/* harmony import */ var mdbreact_dist_css_mdb_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mdbreact_dist_css_mdb_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-datepicker */ "./node_modules/react-datepicker/dist/react-datepicker.min.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _PMSChildrenComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PMSChildrenComponent */ "./src/lib/components/PMS_Component/PMSChildrenComponent.js");
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mdbreact */ "./node_modules/mdbreact/dist/mdbreact.esm.js");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ "./node_modules/react-datepicker/dist/react-datepicker.css");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_8__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










 // import DatePicker from 'react-datepicker';

var PMSComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(PMSComponent, _Component);

  function PMSComponent(props) {
    var _this;

    _classCallCheck(this, PMSComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PMSComponent).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      _this.setState(_defineProperty({}, event.target.name, event.target.value));
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange1", function (date) {
      debugger;

      _this.setState({
        startDate: date
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getChild", function (e) {
      _this.setState({
        childData: JSON.parse(_this.props.value)[e.target.value]
      });

      _this.props.setProps({
        currentGirlId: JSON.parse(_this.props.value)[e.target.value].id
      });
    });

    _defineProperty(_assertThisInitialized(_this), "girlDataUpdate", function (result) {
      debugger;
      var updateData = result;
      delete result.modal1;
      var str = updateData.startDate.getFullYear() + "-" + (updateData.startDate.getMonth() + 1) + "-" + updateData.startDate.getDate();
      result.startDate = str;

      _this.props.setProps({
        updateData: updateData
      });

      console.log(result);
      debugger;
    });

    _defineProperty(_assertThisInitialized(_this), "delete", function (result) {
      debugger;

      _this.props.setProps({
        deleteID: result
      });
    });

    _defineProperty(_assertThisInitialized(_this), "toggle", function () {
      _this.setState({
        modal: !_this.state.modal,
        error: ""
      });
    });

    _defineProperty(_assertThisInitialized(_this), "render", function () {
      if (JSON.parse(_this.props.value).length > 0) {
        var girlData = JSON.parse(_this.props.value);
        var girlList = [];

        for (var x in girlData) {
          girlList.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
            "class": "list-group-item list-group-item-action item1",
            id: girlData.id,
            value: x,
            onClick: _this.getChild
          }, girlData[x].girlName));
        }
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBRow"], {
        id: _this.props.id
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBCol"], {
        md: "2"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBCol"], {
        md: "8"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBRow"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBCol"], {
        md: "2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "card card-cascade narrower"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "card-body card-body-cascade",
        style: {
          padding: '0px',
          minHeight: '500px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "list-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        "class": "itemTitle list-group-item list-group-item-action"
      }, "MyGirls"), girlList, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        "class": "list-group-item list-group-item-action addItem",
        onClick: _this.toggle
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        style: {
          "color": "grey"
        }
      }, "Add")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          'width': '5px'
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBCol"], {
        md: "9"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PMSChildrenComponent__WEBPACK_IMPORTED_MODULE_6__["default"], {
        data: _this.state.childData,
        "delete": _this["delete"],
        girlDataUpdate: _this.girlDataUpdate
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBRow"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBModal"], {
        isOpen: _this.state.modal,
        toggle: _this.toggle,
        size: "md"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "itemTitle"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBModalHeader"], {
        toggle: _this.toggle
      }, "Add Gril")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBModalBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "col-lg-3 col-md-1"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        style: {
          'color': 'red'
        }
      }, _this.state.error)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "col-lg-4 col-md-12"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBInput"], {
        label: "Name : ",
        onChange: _this.handleChange,
        name: "girlName",
        value: _this.state.girlName
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "col-lg-8 col-md-8"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        "class": "dateLabel"
      }, "startDate"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_datepicker__WEBPACK_IMPORTED_MODULE_5___default.a, {
        className: "datePicker",
        selected: _this.state.startDate,
        onChange: _this.handleChange1
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "col-lg-6 col-md-8"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBInput"], {
        label: "Cycle",
        onChange: _this.handleChange,
        name: "cycle",
        value: _this.state.cycle
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "col-lg-4 col-md-8"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBInput"], {
        label: "Ovulstion Period",
        onChange: _this.handleChange,
        name: "obulation",
        value: _this.state.obulation
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "col-lg-6 col-md-8"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBInput"], {
        label: "Menstruation Period",
        onChange: _this.handleChange,
        name: "menstruation",
        value: _this.state.menstruation
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBModalFooter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "button",
        onClick: _this.toggle
      }, "CANCLE"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "button",
        onClick: function onClick() {
          if (_this.state.girlName != "" && _this.state.cycle != "" && Number(_this.state.cycle) != NaN && _this.state.startDate != "" && Number(_this.state.cycle) > 0 && _this.state.obulation != "" && Number(_this.state.obulation) != NaN && Number(_this.state.obulation) > 0 && _this.state.menstruation != "" && Number(_this.state.menstruation) != NaN && Number(_this.state.menstruation) > 0) {
            var str = _this.state.startDate.getFullYear() + "-" + (_this.state.startDate.getMonth() + 1) + "-" + _this.state.startDate.getDate();

            var _girlData = {
              startDate: str,
              girlName: _this.state.girlName,
              cycle: Number(_this.state.cycle),
              obulation: Number(_this.state.obulation),
              menstruation: Number(_this.state.menstruation)
            };

            _this.props.setProps({
              newGirl: _girlData
            });

            _this.toggle();
          } else {
            _this.setState({
              error: "Please Input Correctly!"
            });

            return;
          }
        }
      }, "Add Girl"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBCol"], {
        md: "2"
      }));
    });

    _this.state = {
      girlName: "",
      cycle: "",
      startDate: new Date(),
      obulation: "",
      menstruation: "",
      modal: false,
      childData: JSON.parse(_this.props.value)[0],
      error: ""
    };
    return _this;
  }

  return PMSComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


PMSComponent.defaultProps = {
  value: {},
  id: null,
  setProps: function setProps() {},
  newGirl: null,
  range: 21
};
PMSComponent.propTypes = {
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  newGirl: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  updateData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  range: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  currentGirlId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  deleteID: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX2V4dHJhX3VpX2NvbXBvbmVudHMvLi9zcmMvbGliL2NvbXBvbmVudHMvUE1TX0NvbXBvbmVudC9QTVNDb21wb25lbnQucmVhY3QuanMiXSwibmFtZXMiOlsiUE1TQ29tcG9uZW50IiwicHJvcHMiLCJldmVudCIsInNldFN0YXRlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiZGF0ZSIsInN0YXJ0RGF0ZSIsImUiLCJjaGlsZERhdGEiLCJKU09OIiwicGFyc2UiLCJzZXRQcm9wcyIsImN1cnJlbnRHaXJsSWQiLCJpZCIsInJlc3VsdCIsInVwZGF0ZURhdGEiLCJtb2RhbDEiLCJzdHIiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJkZWxldGVJRCIsIm1vZGFsIiwic3RhdGUiLCJlcnJvciIsImxlbmd0aCIsImdpcmxEYXRhIiwiZ2lybExpc3QiLCJ4IiwicHVzaCIsImdldENoaWxkIiwiZ2lybE5hbWUiLCJwYWRkaW5nIiwibWluSGVpZ2h0IiwidG9nZ2xlIiwiZ2lybERhdGFVcGRhdGUiLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVDaGFuZ2UxIiwiY3ljbGUiLCJvYnVsYXRpb24iLCJtZW5zdHJ1YXRpb24iLCJOdW1iZXIiLCJOYU4iLCJuZXdHaXJsIiwiRGF0ZSIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInJhbmdlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiZnVuYyIsIm9iamVjdCIsIm51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7Q0FFQTs7SUFFcUJBLFk7Ozs7O0FBQ2pCLHdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2Ysc0ZBQU1BLEtBQU47O0FBRGUsbUVBZUosVUFBQUMsS0FBSyxF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RUFBRztBQUxpQixDQUE1QjtBQVFBbkQsWUFBWSxDQUFDb0QsU0FBYixHQUF5QjtBQUNyQjlDLE9BQUssRUFBRytDLGlEQUFTLENBQUNDLE1BREc7QUFFckJ2QyxJQUFFLEVBQUdzQyxpREFBUyxDQUFDQyxNQUZNO0FBR3JCekMsVUFBUSxFQUFHd0MsaURBQVMsQ0FBQ0UsSUFIQTtBQUlyQlIsU0FBTyxFQUFHTSxpREFBUyxDQUFDRyxNQUpDO0FBS3JCdkMsWUFBVSxFQUFHb0MsaURBQVMsQ0FBQ0csTUFMRjtBQU1yQkwsT0FBSyxFQUFHRSxpREFBUyxDQUFDSSxNQU5HO0FBT3JCM0MsZUFBYSxFQUFHdUMsaURBQVMsQ0FBQ0ksTUFQTDtBQVFyQmhDLFVBQVEsRUFBRzRCLGlEQUFTLENBQUNJO0FBUkEsQ0FBekIsQyIsImZpbGUiOiI0ZGU3ZDA3LW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCAnLi9QTVNDb21wb25lbnQuY3NzJztcbmltcG9ydCAnYm9vdHN0cmFwLWNzcy1vbmx5L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XG5pbXBvcnQgJ21kYnJlYWN0L2Rpc3QvY3NzL21kYi5jc3MnO1xuaW1wb3J0IERhdGVQaWNrZXIgZnJvbSBcInJlYWN0LWRhdGVwaWNrZXJcIjtcbmltcG9ydCBQTVNDaGlsZHJlbkNvbXBvbmVudCBmcm9tICcuL1BNU0NoaWxkcmVuQ29tcG9uZW50JztcbmltcG9ydCB7IE1EQkRhdGVQaWNrZXJWNSwgXG4gICAgICAgICBNREJDb250YWluZXIsIFxuICAgICAgICAgTURCUm93LCBcbiAgICAgICAgIE1EQkNvbCwgXG4gICAgICAgICBNREJJbnB1dCwgXG4gICAgICAgICBNREJNb2RhbEZvb3RlciwgXG4gICAgICAgICBNREJNb2RhbCwgXG4gICAgICAgICBNREJNb2RhbEhlYWRlciwgXG4gICAgICAgICBNREJNb2RhbEJvZHkgfSBmcm9tIFwibWRicmVhY3RcIjtcbmltcG9ydCAnLi9QTVNDb21wb25lbnQuY3NzJ1xuaW1wb3J0IFwicmVhY3QtZGF0ZXBpY2tlci9kaXN0L3JlYWN0LWRhdGVwaWNrZXIuY3NzXCI7XG4vLyBpbXBvcnQgRGF0ZVBpY2tlciBmcm9tICdyZWFjdC1kYXRlcGlja2VyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUE1TQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGdpcmxOYW1lIDogXCJcIiwgXG4gICAgICAgICAgICBjeWNsZSA6IFwiXCIsXG4gICAgICAgICAgICBzdGFydERhdGUgOiBuZXcgRGF0ZSgpLFxuICAgICAgICAgICAgb2J1bGF0aW9uICA6IFwiXCIsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBtZW5zdHJ1YXRpb24gOiBcIlwiLFxuICAgICAgICAgICAgbW9kYWwgOiBmYWxzZSxcbiAgICAgICAgICAgIGNoaWxkRGF0YSA6IEpTT04ucGFyc2UodGhpcy5wcm9wcy52YWx1ZSlbMF0sXG4gICAgICAgICAgICBlcnJvciA6IFwiXCIgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2UgPSBldmVudCA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBbZXZlbnQudGFyZ2V0Lm5hbWVdIDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xuICAgIH1cblxuICAgIGhhbmRsZUNoYW5nZTEgPSBkYXRlID0+IHtcbiAgICAgICAgZGVidWdnZXJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzdGFydERhdGU6IGRhdGVcbiAgICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0Q2hpbGQgPSBlID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjaGlsZERhdGEgOiBKU09OLnBhcnNlKHRoaXMucHJvcHMudmFsdWUpW2UudGFyZ2V0LnZhbHVlXVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLnByb3BzLnNldFByb3BzKHtcbiAgICAgICAgICAgIGN1cnJlbnRHaXJsSWQgOiBKU09OLnBhcnNlKHRoaXMucHJvcHMudmFsdWUpW2UudGFyZ2V0LnZhbHVlXS5pZFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGdpcmxEYXRhVXBkYXRlID0gcmVzdWx0ID0+IHtcbiAgICAgICAgZGVidWdnZXJcbiAgICAgICAgbGV0IHVwZGF0ZURhdGEgPSByZXN1bHRcbiAgICAgICAgZGVsZXRlIHJlc3VsdC5tb2RhbDFcbiAgICAgICAgdmFyIHN0ciA9IHVwZGF0ZURhdGEuc3RhcnREYXRlLmdldEZ1bGxZZWFyKCkgKyBcIi1cIiArICh1cGRhdGVEYXRhLnN0YXJ0RGF0ZS5nZXRNb250aCgpKzEpICsgXCItXCIgKyB1cGRhdGVEYXRhLnN0YXJ0RGF0ZS5nZXREYXRlKClcbiAgICAgICAgcmVzdWx0LnN0YXJ0RGF0ZSA9IHN0clxuICAgICAgICB0aGlzLnByb3BzLnNldFByb3BzKHtcbiAgICAgICAgICAgIHVwZGF0ZURhdGEgOiB1cGRhdGVEYXRhXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcbiAgICAgICAgZGVidWdnZXJcbiAgICB9XG5cbiAgICBkZWxldGUgPSAocmVzdWx0KSA9PntcbiAgICAgICAgZGVidWdnZXJcbiAgICAgICAgdGhpcy5wcm9wcy5zZXRQcm9wcyh7XG4gICAgICAgICAgICBkZWxldGVJRCA6IHJlc3VsdFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHRvZ2dsZSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbW9kYWwgOiAhdGhpcy5zdGF0ZS5tb2RhbCxcbiAgICAgICAgICBlcnJvciA6IFwiXCJcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyID0gKCkgPT4ge1xuICAgICAgICBpZihKU09OLnBhcnNlKHRoaXMucHJvcHMudmFsdWUpLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgbGV0IGdpcmxEYXRhID0gSlNPTi5wYXJzZSh0aGlzLnByb3BzLnZhbHVlKVxuICAgICAgICAgICAgdmFyIGdpcmxMaXN0ID0gW11cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZm9yKGxldCB4IGluIGdpcmxEYXRhKXtcbiAgICAgICAgICAgICAgICBnaXJsTGlzdC5wdXNoKFxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBpdGVtMVwiIGlkID0geyBnaXJsRGF0YS5pZCB9IHZhbHVlID0geyB4IH0gb25DbGljayA9IHt0aGlzLmdldENoaWxkfT57IGdpcmxEYXRhW3hdLmdpcmxOYW1lIH08L2xpPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE1EQlJvdyBpZCAgPSB7dGhpcy5wcm9wcy5pZH0+XG4gICAgICAgICAgICAgICAgPE1EQkNvbCBtZCA9IFwiMlwiPlxuXG4gICAgICAgICAgICAgICAgPC9NREJDb2w+XG4gICAgICAgICAgICAgICAgPE1EQkNvbCBtZCA9IFwiOFwiPlxuICAgICAgICAgICAgICAgICAgICA8TURCUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1EQkNvbCBtZD1cIjJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBjYXJkLWNhc2NhZGUgbmFycm93ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keSBjYXJkLWJvZHktY2FzY2FkZVwiIHN0eWxlID0ge3sgcGFkZGluZyA6ICcwcHgnLCBtaW5IZWlnaHQgOiAnNTAwcHgnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlzdC1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSAgY2xhc3M9XCJpdGVtVGl0bGUgbGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb25cIiA+TXlHaXJsczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBnaXJsTGlzdCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gYWRkSXRlbVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IHN0eWxlID0ge3sgXCJjb2xvclwiIDogXCJncmV5XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZGQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTURCQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZSA9IHt7J3dpZHRoJyA6ICc1cHgnfX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TURCQ29sIG1kPVwiOVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQTVNDaGlsZHJlbkNvbXBvbmVudCBkYXRhID0geyB0aGlzLnN0YXRlLmNoaWxkRGF0YSB9IGRlbGV0ZSA9IHsgdGhpcy5kZWxldGUgfSBnaXJsRGF0YVVwZGF0ZSA9IHsgdGhpcy5naXJsRGF0YVVwZGF0ZSB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L01EQkNvbD5cbiAgICAgICAgICAgICAgICAgICAgPC9NREJSb3c+XG4gICAgICAgICAgICAgICAgICAgIDxNREJSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TURCTW9kYWwgaXNPcGVuPXt0aGlzLnN0YXRlLm1vZGFsfSB0b2dnbGU9e3RoaXMudG9nZ2xlfSBzaXplID0gXCJtZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJpdGVtVGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQk1vZGFsSGVhZGVyICB0b2dnbGU9e3RoaXMudG9nZ2xlfT5BZGQgR3JpbDwvTURCTW9kYWxIZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQk1vZGFsQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID1cImNvbC1sZy0zIGNvbC1tZC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7J2NvbG9yJzoncmVkJ319PnsgdGhpcy5zdGF0ZS5lcnJvciB9PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9XCJjb2wtbGctNCBjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQklucHV0IGxhYmVsPVwiTmFtZSA6IFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7IHRoaXMuaGFuZGxlQ2hhbmdlIH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lID1cImdpcmxOYW1lXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHsgdGhpcy5zdGF0ZS5naXJsTmFtZSB9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID1cImNvbC1sZy04IGNvbC1tZC04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImRhdGVMYWJlbFwiPnN0YXJ0RGF0ZTwvbGFiZWw+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhdGVQaWNrZXIgY2xhc3NOYW1lID0gXCJkYXRlUGlja2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXt0aGlzLnN0YXRlLnN0YXJ0RGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZTF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+ICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImNvbC1sZy02IGNvbC1tZC04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJJbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ3ljbGVcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0geyB0aGlzLmhhbmRsZUNoYW5nZSB9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9IFwiY3ljbGVcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0geyB0aGlzLnN0YXRlLmN5Y2xlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJjb2wtbGctNCBjb2wtbWQtOFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCSW5wdXQgbGFiZWw9XCJPdnVsc3Rpb24gUGVyaW9kXCIgb25DaGFuZ2UgPSB7IHRoaXMuaGFuZGxlQ2hhbmdlIH0gbmFtZSA9IFwib2J1bGF0aW9uXCIgdmFsdWUgPSB7IHRoaXMuc3RhdGUub2J1bGF0aW9uIH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwiY29sLWxnLTYgY29sLW1kLThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQklucHV0IGxhYmVsPVwiTWVuc3RydWF0aW9uIFBlcmlvZFwiIG9uQ2hhbmdlID0geyB0aGlzLmhhbmRsZUNoYW5nZSB9IG5hbWUgPSBcIm1lbnN0cnVhdGlvblwiIHZhbHVlID0geyAgdGhpcy5zdGF0ZS5tZW5zdHJ1YXRpb24gfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01EQk1vZGFsQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCTW9kYWxGb290ZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lID0gXCJidXR0b25cIiBvbkNsaWNrPXsgdGhpcy50b2dnbGUgfT5DQU5DTEU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWUgPSBcImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrID0geygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLnN0YXRlLmdpcmxOYW1lICE9IFwiXCIgJiYgdGhpcy5zdGF0ZS5jeWNsZSAhPSBcIlwiICYmIE51bWJlcih0aGlzLnN0YXRlLmN5Y2xlKSAhPSBOYU4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIHRoaXMuc3RhdGUuc3RhcnREYXRlICE9IFwiXCIgJiYgTnVtYmVyKHRoaXMuc3RhdGUuY3ljbGUpID4gMCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5zdGF0ZS5vYnVsYXRpb24gIT0gXCJcIiAmJiBOdW1iZXIodGhpcy5zdGF0ZS5vYnVsYXRpb24pICE9IE5hTiAmJiBOdW1iZXIodGhpcy5zdGF0ZS5vYnVsYXRpb24pID4gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiB0aGlzLnN0YXRlLm1lbnN0cnVhdGlvbiAhPSBcIlwiICYmIE51bWJlcih0aGlzLnN0YXRlLm1lbnN0cnVhdGlvbikgIT0gTmFOICYmIE51bWJlcih0aGlzLnN0YXRlLm1lbnN0cnVhdGlvbikgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdHIgPSAodGhpcy5zdGF0ZS5zdGFydERhdGUuZ2V0RnVsbFllYXIoKSArIFwiLVwiICsgKHRoaXMuc3RhdGUuc3RhcnREYXRlLmdldE1vbnRoKCkgKzEpICsgXCItXCIgKyAodGhpcy5zdGF0ZS5zdGFydERhdGUuZ2V0RGF0ZSgpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGdpcmxEYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnREYXRlIDogc3RyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2lybE5hbWUgOiB0aGlzLnN0YXRlLmdpcmxOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3ljbGUgOiBOdW1iZXIodGhpcy5zdGF0ZS5jeWNsZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYnVsYXRpb24gOiBOdW1iZXIodGhpcy5zdGF0ZS5vYnVsYXRpb24pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVuc3RydWF0aW9uIDogTnVtYmVyKHRoaXMuc3RhdGUubWVuc3RydWF0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2V0UHJvcHMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3R2lybCA6IGdpcmxEYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yIDogXCJQbGVhc2UgSW5wdXQgQ29ycmVjdGx5IVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5BZGQgR2lybDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTURCTW9kYWxGb290ZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L01EQk1vZGFsPlxuICAgICAgICAgICAgICAgICAgICA8L01EQlJvdz5cbiAgICAgICAgICAgICAgICA8L01EQkNvbD5cbiAgICAgICAgICAgICAgICA8TURCQ29sIG1kID0gXCIyXCI+XG5cbiAgICAgICAgICAgICAgICA8L01EQkNvbD5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvTURCUm93PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuUE1TQ29tcG9uZW50LmRlZmF1bHRQcm9wcyA9IHtcbiAgIHZhbHVlIDoge30sXG4gICBpZCA6IG51bGwsXG4gICBzZXRQcm9wcyA6ICgpID0+IHt9LFxuICAgbmV3R2lybCA6IG51bGwsXG4gICByYW5nZSA6IDIxXG59O1xuXG5QTVNDb21wb25lbnQucHJvcFR5cGVzID0ge1xuICAgIHZhbHVlIDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpZCA6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc2V0UHJvcHMgOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBuZXdHaXJsIDogUHJvcFR5cGVzLm9iamVjdCxcbiAgICB1cGRhdGVEYXRhIDogUHJvcFR5cGVzLm9iamVjdCxcbiAgICByYW5nZSA6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgY3VycmVudEdpcmxJZCA6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgZGVsZXRlSUQgOiBQcm9wVHlwZXMubnVtYmVyLFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=