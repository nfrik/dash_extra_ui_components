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
/* harmony import */ var _PMSChildrenComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PMSChildrenComponent */ "./src/lib/components/PMS_Component/PMSChildrenComponent.js");
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mdbreact */ "./node_modules/mdbreact/dist/mdbreact.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








 // import DatePicker from 'react-datepicker';

var PMSComponent = /*#__PURE__*/function (_Component) {
  _inherits(PMSComponent, _Component);

  var _super = _createSuper(PMSComponent);

  function PMSComponent(props) {
    var _this;

    _classCallCheck(this, PMSComponent);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "submitHandler", function (event) {
      event.preventDefault();
      event.target.className += " was-validated";
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      _this.setState(_defineProperty({}, event.target.name, event.target.value));
    });

    _defineProperty(_assertThisInitialized(_this), "getChild", function (e) {
      _this.setState({
        childData: JSON.parse(_this.props.value)[e.target.value]
      });
    });

    _defineProperty(_assertThisInitialized(_this), "girlDataUpdate", function (result) {
      delete result.modal;

      _this.props.setProps({
        updateData: result
      });

      console.log(result);
    });

    _defineProperty(_assertThisInitialized(_this), "toggle", function () {
      _this.setState({
        modal: !modal,
        error: ""
      });
    });

    _defineProperty(_assertThisInitialized(_this), "render", function () {
      if (JSON.parse(_this.props.value).length > 0) {
        var girlData = JSON.parse(_this.props.value);
        var girlList = [];
        debugger;

        for (var x in girlData) {
          girlList.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
            "class": "list-group-item list-group-item-action item1",
            value: x,
            onClick: _this.getChild
          }, girlData[x].girlName));
        }
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBContainer"], {
        id: _this.props.id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBRow"], {
        className: "justify-content-md-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBCol"], {
        md: "2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "card card-cascade narrower"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "card-body card-body-cascade",
        style: {
          padding: '0px',
          minHeight: '500px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "list-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        "class": "itemTitle list-group-item list-group-item-action"
      }, "MyGirls"), girlList, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        "class": "list-group-item list-group-item-action addItem",
        onClick: _this.toggle
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-add"
      }), "Add Gril"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          'width': '5px'
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBCol"], {
        md: "9"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PMSChildrenComponent__WEBPACK_IMPORTED_MODULE_5__["default"], {
        data: _this.state.childData,
        girlDataUpdate: _this.girlDataUpdate
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBRow"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBModal"], {
        isOpen: _this.state.modal,
        toggle: _this.toggle,
        size: "md"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "itemTitle"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBModalHeader"], {
        toggle: _this.toggle
      }, "Add Gril")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBModalBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          maxHeight: "680px"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "col-lg-3 col-md-1"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        style: {
          'color': 'red'
        }
      }, _this.state.error)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "col-lg-6 col-md-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBInput"], {
        label: "Name : ",
        onChange: _this.handleChange,
        name: "girlName",
        value: _this.state.girlName
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "col-lg-4 col-md-8"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBInput"], {
        label: "Cycle",
        onChange: _this.handleChange,
        name: "cycle",
        value: _this.state.cycle
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "col-lg-6 col-md-8"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBInput"], {
        label: "Start Date",
        placeholde: "yyyy-mm-dd",
        onChange: _this.handleChange,
        name: "startDate",
        value: _this.state.startDate
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "col-lg-4 col-md-8"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBInput"], {
        label: "Ovulstion Period",
        onChange: _this.handleChange,
        name: "obulation",
        value: _this.state.obulation
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "col-lg-6 col-md-8"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBInput"], {
        label: "Menstruation Period",
        onChange: _this.handleChange,
        name: "menstruation",
        value: _this.state.menstruation
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBModalFooter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBBtn"], {
        className: "item1",
        onClick: _this.toggle(2)
      }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBBtn"], {
        className: "item1",
        onClick: function onClick() {
          var dateTrue = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/.test(_this.state.startDate);

          if (!dateTrue) {
            _this.setState({
              error: 'Date Type must be "yyyy-mm-dd" !'
            });

            return;
          }

          debugger;

          if (_this.state.girlName != "" && _this.state.cycle != "" && Number(_this.state.cycle) != NaN && _this.state.startDate != "" && Number(_this.state.cycle) > 0 && _this.state.obulation != "" && Number(_this.state.obulation) != NaN && Number(_this.state.obulation) > 0 && _this.state.menstruation != "" && Number(_this.state.menstruation) != NaN && Number(_this.state.menstruation) > 0) {
            var _girlData = {
              girlName: _this.state.girlName,
              cycle: Number(_this.state.cycle),
              obulation: Number(_this.state.obulation),
              menstruation: Number(_this.state.menstruation)
            };

            _this.props.setProps({
              newGirl: _girlData
            });
          } else {
            _this.setState({
              error: "Please Input Correctly!"
            });

            return;
          }

          _this.toggle();
        }
      }, "Add Girl"))))));
    });

    _this.state = {
      girlName: "",
      cycle: "",
      startDate: "",
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
  newGirl: null
};
PMSComponent.propTypes = {
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  newGirl: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  updateData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX2V4dHJhX3VpX2NvbXBvbmVudHMvLi9zcmMvbGliL2NvbXBvbmVudHMvUE1TX0NvbXBvbmVudC9QTVNDb21wb25lbnQucmVhY3QuanMiXSwibmFtZXMiOlsiUE1TQ29tcG9uZW50IiwicHJvcHMiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwiY2xhc3NOYW1lIiwic2V0U3RhdGUiLCJuYW1lIiwidmFsdWUiLCJlIiwiY2hpbGREYXRhIiwiSlNPTiIsInBhcnNlIiwicmVzdWx0IiwibW9kYWwiLCJzZXRQcm9wcyIsInVwZGF0ZURhdGEiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJsZW5ndGgiLCJnaXJsRGF0YSIsImdpcmxMaXN0IiwieCIsInB1c2giLCJnZXRDaGlsZCIsImdpcmxOYW1lIiwiaWQiLCJwYWRkaW5nIiwibWluSGVpZ2h0IiwidG9nZ2xlIiwic3RhdGUiLCJnaXJsRGF0YVVwZGF0ZSIsIm1heEhlaWdodCIsImhhbmRsZUNoYW5nZSIsImN5Y2xlIiwic3RhcnREYXRlIiwib2J1bGF0aW9uIiwibWVuc3RydWF0aW9uIiwiZGF0ZVRydWUiLCJ0ZXN0IiwiTnVtYmVyIiwiTmFOIiwibmV3R2lybCIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImZ1bmMiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7SUFFcUJBLFk7Ozs7O0FBQ2pCLHdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47O0FBRGUsb0VBZUgsVUFBQUMsS0FBSyxFQUFJO0FBQ3JCQSxXQUFLLENBQUNDLGNBQU47QUFDQUQsV0FBSyxDQUFDRSxNQUFOLENBQWFDLFNBQWIsSUFBMEIsZ0JBQTFCO0FB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QUFIZTtBQWFsQjs7O0VBZHFDeUIsK0M7OztBQThLMUM1QyxZQUFZLENBQUM2QyxZQUFiLEdBQTRCO0FBQ3pCckMsT0FBSyxFQUFHLEVBRGlCO0FBRXpCbUIsSUFBRSxFQUFHLElBRm9CO0FBR3pCWixVQUFRLEVBQUcsb0JBQU0sQ0FBRSxDQUhNO0FBSXpCNEIsU0FBTyxFQUFHO0FBSmUsQ0FBNUI7QUFPQTNDLFlBQVksQ0FBQzhDLFNBQWIsR0FBeUI7QUFDckJ0QyxPQUFLLEVBQUd1QyxpREFBUyxDQUFDQyxNQURHO0FBRXJCckIsSUFBRSxFQUFHb0IsaURBQVMsQ0FBQ0MsTUFGTTtBQUdyQmpDLFVBQVEsRUFBR2dDLGlEQUFTLENBQUNFLElBSEE7QUFJckJOLFNBQU8sRUFBR0ksaURBQVMsQ0FBQ0csTUFKQztBQUtyQmxDLFlBQVUsRUFBRytCLGlEQUFTLENBQUNHO0FBTEYsQ0FBekIsQyIsImZpbGUiOiJkZTI3YWQ2LW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCAnLi9QTVNDb21wb25lbnQuY3NzJztcbmltcG9ydCAnYm9vdHN0cmFwLWNzcy1vbmx5L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XG5pbXBvcnQgJ21kYnJlYWN0L2Rpc3QvY3NzL21kYi5jc3MnO1xuaW1wb3J0IFBNU0NoaWxkcmVuQ29tcG9uZW50IGZyb20gJy4vUE1TQ2hpbGRyZW5Db21wb25lbnQnO1xuaW1wb3J0IHsgTURCQ29udGFpbmVyLCBNREJSb3csIE1EQkNvbCwgTURCSW5wdXQsIE1EQk1vZGFsRm9vdGVyLCBNREJCdG4sIE1EQk1vZGFsLCBNREJNb2RhbEhlYWRlciwgTURCTW9kYWxCb2R5IH0gZnJvbSBcIm1kYnJlYWN0XCI7XG5pbXBvcnQgJy4vUE1TQ29tcG9uZW50LmNzcydcbi8vIGltcG9ydCBEYXRlUGlja2VyIGZyb20gJ3JlYWN0LWRhdGVwaWNrZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQTVNDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZ2lybE5hbWUgOiBcIlwiLCBcbiAgICAgICAgICAgIGN5Y2xlIDogXCJcIixcbiAgICAgICAgICAgIHN0YXJ0RGF0ZSA6IFwiXCIsXG4gICAgICAgICAgICBvYnVsYXRpb24gIDogXCJcIiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIG1lbnN0cnVhdGlvbiA6IFwiXCIsXG4gICAgICAgICAgICBtb2RhbCA6IGZhbHNlLFxuICAgICAgICAgICAgY2hpbGREYXRhIDogSlNPTi5wYXJzZSh0aGlzLnByb3BzLnZhbHVlKVswXSxcbiAgICAgICAgICAgIGVycm9yIDogXCJcIiBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN1Ym1pdEhhbmRsZXIgPSBldmVudCA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnRhcmdldC5jbGFzc05hbWUgKz0gXCIgd2FzLXZhbGlkYXRlZFwiO1xuICAgIH1cblxuICAgIGhhbmRsZUNoYW5nZSA9IGV2ZW50ID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFtldmVudC50YXJnZXQubmFtZV0gOiBldmVudC50YXJnZXQudmFsdWUgfSk7XG4gICAgfVxuXG4gICAgZ2V0Q2hpbGQgPSBlID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjaGlsZERhdGEgOiBKU09OLnBhcnNlKHRoaXMucHJvcHMudmFsdWUpW2UudGFyZ2V0LnZhbHVlXVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGdpcmxEYXRhVXBkYXRlID0gcmVzdWx0ID0+IHtcbiAgICAgICAgZGVsZXRlIHJlc3VsdC5tb2RhbFxuICAgICAgICB0aGlzLnByb3BzLnNldFByb3BzKHtcbiAgICAgICAgICAgIHVwZGF0ZURhdGEgOiByZXN1bHRcbiAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxuICAgIH1cblxuICAgIHRvZ2dsZSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbW9kYWwgOiAhbW9kYWwsXG4gICAgICAgICAgZXJyb3IgOiBcIlwiXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgaWYoSlNPTi5wYXJzZSh0aGlzLnByb3BzLnZhbHVlKS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIGxldCBnaXJsRGF0YSA9IEpTT04ucGFyc2UodGhpcy5wcm9wcy52YWx1ZSlcbiAgICAgICAgICAgIHZhciBnaXJsTGlzdCA9IFtdXG4gICAgICAgICAgICBkZWJ1Z2dlclxuICAgICAgICAgICAgZm9yKGxldCB4IGluIGdpcmxEYXRhKXtcbiAgICAgICAgICAgICAgICBnaXJsTGlzdC5wdXNoKFxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBpdGVtMVwiIHZhbHVlID0geyB4IH0gb25DbGljayA9IHt0aGlzLmdldENoaWxkfT57IGdpcmxEYXRhW3hdLmdpcmxOYW1lIH08L2xpPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE1EQkNvbnRhaW5lciBpZCAgPSB7dGhpcy5wcm9wcy5pZH0+XG4gICAgICAgICAgICAgICAgPE1EQlJvdyBjbGFzc05hbWU9XCJqdXN0aWZ5LWNvbnRlbnQtbWQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxNREJDb2wgbWQ9XCIyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBjYXJkLWNhc2NhZGUgbmFycm93ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5IGNhcmQtYm9keS1jYXNjYWRlXCIgc3R5bGUgPSB7eyBwYWRkaW5nIDogJzBweCcsIG1pbkhlaWdodCA6ICc1MDBweCd9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpc3QtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSAgY2xhc3M9XCJpdGVtVGl0bGUgbGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb25cIiA+TXlHaXJsczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGdpcmxMaXN0IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIGFkZEl0ZW1cIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lID0gXCJmYSBmYS1hZGRcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkIEdyaWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvTURCQ29sPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlID0ge3snd2lkdGgnIDogJzVweCd9fT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPE1EQkNvbCBtZD1cIjlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQTVNDaGlsZHJlbkNvbXBvbmVudCBkYXRhID0geyB0aGlzLnN0YXRlLmNoaWxkRGF0YSB9IGdpcmxEYXRhVXBkYXRlID0ge3RoaXMuZ2lybERhdGFVcGRhdGV9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvTURCQ29sPlxuICAgICAgICAgICAgICAgIDwvTURCUm93PlxuICAgICAgICAgICAgICAgIDxNREJSb3c+XG4gICAgICAgICAgICAgICAgICAgIDxNREJNb2RhbCBpc09wZW49e3RoaXMuc3RhdGUubW9kYWx9IHRvZ2dsZT17dGhpcy50b2dnbGV9IHNpemUgPSBcIm1kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiaXRlbVRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJNb2RhbEhlYWRlciAgdG9nZ2xlPXt0aGlzLnRvZ2dsZX0+QWRkIEdyaWw8L01EQk1vZGFsSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJNb2RhbEJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGUgPSB7e21heEhlaWdodCA6IFwiNjgwcHhcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPVwiY29sLWxnLTMgY29sLW1kLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgc3R5bGU9e3snY29sb3InOidyZWQnfX0+eyB0aGlzLnN0YXRlLmVycm9yIH08L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID1cImNvbC1sZy02IGNvbC1tZC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCSW5wdXQgbGFiZWw9XCJOYW1lIDogXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHsgdGhpcy5oYW5kbGVDaGFuZ2UgfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPVwiZ2lybE5hbWVcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0geyB0aGlzLnN0YXRlLmdpcmxOYW1lIH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPVwiY29sLWxnLTQgY29sLW1kLThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQklucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDeWNsZVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7IHRoaXMuaGFuZGxlQ2hhbmdlIH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gXCJjeWNsZVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7IHRoaXMuc3RhdGUuY3ljbGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJjb2wtbGctNiBjb2wtbWQtOFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCSW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlN0YXJ0IERhdGVcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGUgPSBcInl5eXktbW0tZGRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0geyB0aGlzLmhhbmRsZUNoYW5nZSB9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9IFwic3RhcnREYXRlXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHsgdGhpcy5zdGF0ZS5zdGFydERhdGUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImNvbC1sZy00IGNvbC1tZC04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJJbnB1dCBsYWJlbD1cIk92dWxzdGlvbiBQZXJpb2RcIiBvbkNoYW5nZSA9IHsgdGhpcy5oYW5kbGVDaGFuZ2UgfSBuYW1lID0gXCJvYnVsYXRpb25cIiB2YWx1ZSA9IHsgdGhpcy5zdGF0ZS5vYnVsYXRpb24gfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJjb2wtbGctNiBjb2wtbWQtOFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCSW5wdXQgbGFiZWw9XCJNZW5zdHJ1YXRpb24gUGVyaW9kXCIgb25DaGFuZ2UgPSB7IHRoaXMuaGFuZGxlQ2hhbmdlIH0gbmFtZSA9IFwibWVuc3RydWF0aW9uXCIgdmFsdWUgPSB7ICB0aGlzLnN0YXRlLm1lbnN0cnVhdGlvbiB9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTURCTW9kYWxCb2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJNb2RhbEZvb3Rlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQkJ0biBjbGFzc05hbWUgPSBcIml0ZW0xXCIgb25DbGljaz17dGhpcy50b2dnbGUoMil9PkNhbmNlbDwvTURCQnRuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCQnRuIGNsYXNzTmFtZSA9IFwiaXRlbTFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljayA9IHsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGVUcnVlID0gLyhbMTJdXFxkezN9LSgwWzEtOV18MVswLTJdKS0oMFsxLTldfFsxMl1cXGR8M1swMV0pKS8udGVzdCh0aGlzLnN0YXRlLnN0YXJ0RGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZighZGF0ZVRydWUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yIDogJ0RhdGUgVHlwZSBtdXN0IGJlIFwieXl5eS1tbS1kZFwiICEnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWJ1Z2dlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuc3RhdGUuZ2lybE5hbWUgIT0gXCJcIiAmJiB0aGlzLnN0YXRlLmN5Y2xlICE9IFwiXCIgJiYgTnVtYmVyKHRoaXMuc3RhdGUuY3ljbGUpICE9IE5hTiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5zdGF0ZS5zdGFydERhdGUgIT0gXCJcIiAmJiBOdW1iZXIodGhpcy5zdGF0ZS5jeWNsZSkgPiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIHRoaXMuc3RhdGUub2J1bGF0aW9uICE9IFwiXCIgJiYgTnVtYmVyKHRoaXMuc3RhdGUub2J1bGF0aW9uKSAhPSBOYU4gJiYgTnVtYmVyKHRoaXMuc3RhdGUub2J1bGF0aW9uKSA+IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5zdGF0ZS5tZW5zdHJ1YXRpb24gIT0gXCJcIiAmJiBOdW1iZXIodGhpcy5zdGF0ZS5tZW5zdHJ1YXRpb24pICE9IE5hTiAmJiBOdW1iZXIodGhpcy5zdGF0ZS5tZW5zdHJ1YXRpb24pID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZ2lybERhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnaXJsTmFtZSA6IHRoaXMuc3RhdGUuZ2lybE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjeWNsZSA6IE51bWJlcih0aGlzLnN0YXRlLmN5Y2xlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9idWxhdGlvbiA6IE51bWJlcih0aGlzLnN0YXRlLm9idWxhdGlvbiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW5zdHJ1YXRpb24gOiBOdW1iZXIodGhpcy5zdGF0ZS5tZW5zdHJ1YXRpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZXRQcm9wcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdHaXJsIDogZ2lybERhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgOiBcIlBsZWFzZSBJbnB1dCBDb3JyZWN0bHkhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5BZGQgR2lybDwvTURCQnRuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTURCTW9kYWxGb290ZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgIDwvTURCTW9kYWw+XG4gICAgICAgICAgICAgICAgPC9NREJSb3c+XG4gICAgICAgICAgICA8L01EQkNvbnRhaW5lcj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblBNU0NvbXBvbmVudC5kZWZhdWx0UHJvcHMgPSB7XG4gICB2YWx1ZSA6IHt9LFxuICAgaWQgOiBudWxsLFxuICAgc2V0UHJvcHMgOiAoKSA9PiB7fSxcbiAgIG5ld0dpcmwgOiBudWxsXG59O1xuXG5QTVNDb21wb25lbnQucHJvcFR5cGVzID0ge1xuICAgIHZhbHVlIDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpZCA6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc2V0UHJvcHMgOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBuZXdHaXJsIDogUHJvcFR5cGVzLm9iamVjdCxcbiAgICB1cGRhdGVEYXRhIDogUHJvcFR5cGVzLm9iamVjdFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=