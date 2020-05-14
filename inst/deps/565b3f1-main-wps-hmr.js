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
        modal: !_this.state.modal,
        error: ""
      });
    });

    _defineProperty(_assertThisInitialized(_this), "render", function () {
      if (JSON.parse(_this.props.value).length > 0) {
        var girlData = JSON.parse(_this.props.value);
        var girlList = [];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX2V4dHJhX3VpX2NvbXBvbmVudHMvLi9zcmMvbGliL2NvbXBvbmVudHMvUE1TX0NvbXBvbmVudC9QTVNDb21wb25lbnQucmVhY3QuanMiXSwibmFtZXMiOlsiUE1TQ29tcG9uZW50IiwicHJvcHMiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwiY2xhc3NOYW1lIiwic2V0U3RhdGUiLCJuYW1lIiwidmFsdWUiLCJlIiwiY2hpbGREYXRhIiwiSlNPTiIsInBhcnNlIiwicmVzdWx0IiwibW9kYWwiLCJzZXRQcm9wcyIsInVwZGF0ZURhdGEiLCJjb25zb2xlIiwibG9nIiwic3RhdGUiLCJlcnJvciIsImxlbmd0aCIsImdpcmxEYXRhIiwiZ2lybExpc3QiLCJ4IiwicHVzaCIsImdldENoaWxkIiwiZ2lybE5hbWUiLCJpZCIsInBhZGRpbmciLCJtaW5IZWlnaHQiLCJ0b2dnbGUiLCJnaXJsRGF0YVVwZGF0ZSIsIm1heEhlaWdodCIsImhhbmRsZUNoYW5nZSIsImN5Y2xlIiwic3RhcnREYXRlIiwib2J1bGF0aW9uIiwibWVuc3RydWF0aW9uIiwiZGF0ZVRydWUiLCJ0ZXN0IiwiTnVtYmVyIiwiTmFOIiwibmV3R2lybCIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImZ1bmMiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7SUFFcUJBLFk7Ozs7O0FBQ2pCLHdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47O0FBRGUsb0VBZUgsVUFBQUMsS0FBSyxFQUFJO0FBQ3JCQSxXQUFLLENBQUNDLGNBQU47QUFDQUQsV0FBSyxDQUFDRSxNQUFOLENBQWFDLFNBQWIsSUFBMEIsZ0JBQTFCO0FB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QTdCLENBUEg7QUFRVFksV0FBSyxFQUFHO0FBUkMsS0FBYjtBQUhlO0FBYWxCOzs7RUFkcUN3QiwrQzs7O0FBOEsxQzVDLFlBQVksQ0FBQzZDLFlBQWIsR0FBNEI7QUFDekJyQyxPQUFLLEVBQUcsRUFEaUI7QUFFekJvQixJQUFFLEVBQUcsSUFGb0I7QUFHekJiLFVBQVEsRUFBRyxvQkFBTSxDQUFFLENBSE07QUFJekI0QixTQUFPLEVBQUc7QUFKZSxDQUE1QjtBQU9BM0MsWUFBWSxDQUFDOEMsU0FBYixHQUF5QjtBQUNyQnRDLE9BQUssRUFBR3VDLGlEQUFTLENBQUNDLE1BREc7QUFFckJwQixJQUFFLEVBQUdtQixpREFBUyxDQUFDQyxNQUZNO0FBR3JCakMsVUFBUSxFQUFHZ0MsaURBQVMsQ0FBQ0UsSUFIQTtBQUlyQk4sU0FBTyxFQUFHSSxpREFBUyxDQUFDRyxNQUpDO0FBS3JCbEMsWUFBVSxFQUFHK0IsaURBQVMsQ0FBQ0c7QUFMRixDQUF6QixDIiwiZmlsZSI6IjU2NWIzZjEtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0ICcuL1BNU0NvbXBvbmVudC5jc3MnO1xuaW1wb3J0ICdib290c3RyYXAtY3NzLW9ubHkvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcbmltcG9ydCAnbWRicmVhY3QvZGlzdC9jc3MvbWRiLmNzcyc7XG5pbXBvcnQgUE1TQ2hpbGRyZW5Db21wb25lbnQgZnJvbSAnLi9QTVNDaGlsZHJlbkNvbXBvbmVudCc7XG5pbXBvcnQgeyBNREJDb250YWluZXIsIE1EQlJvdywgTURCQ29sLCBNREJJbnB1dCwgTURCTW9kYWxGb290ZXIsIE1EQkJ0biwgTURCTW9kYWwsIE1EQk1vZGFsSGVhZGVyLCBNREJNb2RhbEJvZHkgfSBmcm9tIFwibWRicmVhY3RcIjtcbmltcG9ydCAnLi9QTVNDb21wb25lbnQuY3NzJ1xuLy8gaW1wb3J0IERhdGVQaWNrZXIgZnJvbSAncmVhY3QtZGF0ZXBpY2tlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBNU0NvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBnaXJsTmFtZSA6IFwiXCIsIFxuICAgICAgICAgICAgY3ljbGUgOiBcIlwiLFxuICAgICAgICAgICAgc3RhcnREYXRlIDogXCJcIixcbiAgICAgICAgICAgIG9idWxhdGlvbiAgOiBcIlwiLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgbWVuc3RydWF0aW9uIDogXCJcIixcbiAgICAgICAgICAgIG1vZGFsIDogZmFsc2UsXG4gICAgICAgICAgICBjaGlsZERhdGEgOiBKU09OLnBhcnNlKHRoaXMucHJvcHMudmFsdWUpWzBdLFxuICAgICAgICAgICAgZXJyb3IgOiBcIlwiIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3VibWl0SGFuZGxlciA9IGV2ZW50ID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSArPSBcIiB3YXMtdmFsaWRhdGVkXCI7XG4gICAgfVxuXG4gICAgaGFuZGxlQ2hhbmdlID0gZXZlbnQgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgW2V2ZW50LnRhcmdldC5uYW1lXSA6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcbiAgICB9XG5cbiAgICBnZXRDaGlsZCA9IGUgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGNoaWxkRGF0YSA6IEpTT04ucGFyc2UodGhpcy5wcm9wcy52YWx1ZSlbZS50YXJnZXQudmFsdWVdXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZ2lybERhdGFVcGRhdGUgPSByZXN1bHQgPT4ge1xuICAgICAgICBkZWxldGUgcmVzdWx0Lm1vZGFsXG4gICAgICAgIHRoaXMucHJvcHMuc2V0UHJvcHMoe1xuICAgICAgICAgICAgdXBkYXRlRGF0YSA6IHJlc3VsdFxuICAgICAgICB9KVxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXG4gICAgfVxuXG4gICAgdG9nZ2xlID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBtb2RhbCA6ICF0aGlzLnN0YXRlLm1vZGFsLFxuICAgICAgICAgIGVycm9yIDogXCJcIlxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgIGlmKEpTT04ucGFyc2UodGhpcy5wcm9wcy52YWx1ZSkubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICBsZXQgZ2lybERhdGEgPSBKU09OLnBhcnNlKHRoaXMucHJvcHMudmFsdWUpXG4gICAgICAgICAgICB2YXIgZ2lybExpc3QgPSBbXVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3IobGV0IHggaW4gZ2lybERhdGEpe1xuICAgICAgICAgICAgICAgIGdpcmxMaXN0LnB1c2goXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIGl0ZW0xXCIgdmFsdWUgPSB7IHggfSBvbkNsaWNrID0ge3RoaXMuZ2V0Q2hpbGR9PnsgZ2lybERhdGFbeF0uZ2lybE5hbWUgfTwvbGk+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TURCQ29udGFpbmVyIGlkICA9IHt0aGlzLnByb3BzLmlkfT5cbiAgICAgICAgICAgICAgICA8TURCUm93IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1tZC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPE1EQkNvbCBtZD1cIjJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIGNhcmQtY2FzY2FkZSBuYXJyb3dlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHkgY2FyZC1ib2R5LWNhc2NhZGVcIiBzdHlsZSA9IHt7IHBhZGRpbmcgOiAnMHB4JywgbWluSGVpZ2h0IDogJzUwMHB4J319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlzdC1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpICBjbGFzcz1cIml0ZW1UaXRsZSBsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvblwiID5NeUdpcmxzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgZ2lybExpc3QgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gYWRkSXRlbVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2sgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWUgPSBcImZhIGZhLWFkZFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZGQgR3JpbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9NREJDb2w+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGUgPSB7eyd3aWR0aCcgOiAnNXB4J319PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8TURCQ29sIG1kPVwiOVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFBNU0NoaWxkcmVuQ29tcG9uZW50IGRhdGEgPSB7IHRoaXMuc3RhdGUuY2hpbGREYXRhIH0gZ2lybERhdGFVcGRhdGUgPSB7dGhpcy5naXJsRGF0YVVwZGF0ZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9NREJDb2w+XG4gICAgICAgICAgICAgICAgPC9NREJSb3c+XG4gICAgICAgICAgICAgICAgPE1EQlJvdz5cbiAgICAgICAgICAgICAgICAgICAgPE1EQk1vZGFsIGlzT3Blbj17dGhpcy5zdGF0ZS5tb2RhbH0gdG9nZ2xlPXt0aGlzLnRvZ2dsZX0gc2l6ZSA9IFwibWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJpdGVtVGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQk1vZGFsSGVhZGVyICB0b2dnbGU9e3RoaXMudG9nZ2xlfT5BZGQgR3JpbDwvTURCTW9kYWxIZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQk1vZGFsQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZSA9IHt7bWF4SGVpZ2h0IDogXCI2ODBweFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9XCJjb2wtbGctMyBjb2wtbWQtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBzdHlsZT17eydjb2xvcic6J3JlZCd9fT57IHRoaXMuc3RhdGUuZXJyb3IgfTwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPVwiY29sLWxnLTYgY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJJbnB1dCBsYWJlbD1cIk5hbWUgOiBcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0geyB0aGlzLmhhbmRsZUNoYW5nZSB9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9XCJnaXJsTmFtZVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7IHRoaXMuc3RhdGUuZ2lybE5hbWUgfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9XCJjb2wtbGctNCBjb2wtbWQtOFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCSW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkN5Y2xlXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHsgdGhpcy5oYW5kbGVDaGFuZ2UgfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPSBcImN5Y2xlXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHsgdGhpcy5zdGF0ZS5jeWNsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImNvbC1sZy02IGNvbC1tZC04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJJbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU3RhcnQgRGF0ZVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZSA9IFwieXl5eS1tbS1kZFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7IHRoaXMuaGFuZGxlQ2hhbmdlIH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gXCJzdGFydERhdGVcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0geyB0aGlzLnN0YXRlLnN0YXJ0RGF0ZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwiY29sLWxnLTQgY29sLW1kLThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQklucHV0IGxhYmVsPVwiT3Z1bHN0aW9uIFBlcmlvZFwiIG9uQ2hhbmdlID0geyB0aGlzLmhhbmRsZUNoYW5nZSB9IG5hbWUgPSBcIm9idWxhdGlvblwiIHZhbHVlID0geyB0aGlzLnN0YXRlLm9idWxhdGlvbiB9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImNvbC1sZy02IGNvbC1tZC04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJJbnB1dCBsYWJlbD1cIk1lbnN0cnVhdGlvbiBQZXJpb2RcIiBvbkNoYW5nZSA9IHsgdGhpcy5oYW5kbGVDaGFuZ2UgfSBuYW1lID0gXCJtZW5zdHJ1YXRpb25cIiB2YWx1ZSA9IHsgIHRoaXMuc3RhdGUubWVuc3RydWF0aW9uIH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NREJNb2RhbEJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQk1vZGFsRm9vdGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCQnRuIGNsYXNzTmFtZSA9IFwiaXRlbTFcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZSgyKX0+Q2FuY2VsPC9NREJCdG4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJCdG4gY2xhc3NOYW1lID0gXCJpdGVtMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrID0geygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0ZVRydWUgPSAvKFsxMl1cXGR7M30tKDBbMS05XXwxWzAtMl0pLSgwWzEtOV18WzEyXVxcZHwzWzAxXSkpLy50ZXN0KHRoaXMuc3RhdGUuc3RhcnREYXRlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCFkYXRlVHJ1ZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgOiAnRGF0ZSBUeXBlIG11c3QgYmUgXCJ5eXl5LW1tLWRkXCIgISdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuc3RhdGUuZ2lybE5hbWUgIT0gXCJcIiAmJiB0aGlzLnN0YXRlLmN5Y2xlICE9IFwiXCIgJiYgTnVtYmVyKHRoaXMuc3RhdGUuY3ljbGUpICE9IE5hTiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5zdGF0ZS5zdGFydERhdGUgIT0gXCJcIiAmJiBOdW1iZXIodGhpcy5zdGF0ZS5jeWNsZSkgPiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIHRoaXMuc3RhdGUub2J1bGF0aW9uICE9IFwiXCIgJiYgTnVtYmVyKHRoaXMuc3RhdGUub2J1bGF0aW9uKSAhPSBOYU4gJiYgTnVtYmVyKHRoaXMuc3RhdGUub2J1bGF0aW9uKSA+IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5zdGF0ZS5tZW5zdHJ1YXRpb24gIT0gXCJcIiAmJiBOdW1iZXIodGhpcy5zdGF0ZS5tZW5zdHJ1YXRpb24pICE9IE5hTiAmJiBOdW1iZXIodGhpcy5zdGF0ZS5tZW5zdHJ1YXRpb24pID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZ2lybERhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnaXJsTmFtZSA6IHRoaXMuc3RhdGUuZ2lybE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjeWNsZSA6IE51bWJlcih0aGlzLnN0YXRlLmN5Y2xlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9idWxhdGlvbiA6IE51bWJlcih0aGlzLnN0YXRlLm9idWxhdGlvbiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW5zdHJ1YXRpb24gOiBOdW1iZXIodGhpcy5zdGF0ZS5tZW5zdHJ1YXRpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZXRQcm9wcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdHaXJsIDogZ2lybERhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgOiBcIlBsZWFzZSBJbnB1dCBDb3JyZWN0bHkhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5BZGQgR2lybDwvTURCQnRuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTURCTW9kYWxGb290ZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgIDwvTURCTW9kYWw+XG4gICAgICAgICAgICAgICAgPC9NREJSb3c+XG4gICAgICAgICAgICA8L01EQkNvbnRhaW5lcj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblBNU0NvbXBvbmVudC5kZWZhdWx0UHJvcHMgPSB7XG4gICB2YWx1ZSA6IHt9LFxuICAgaWQgOiBudWxsLFxuICAgc2V0UHJvcHMgOiAoKSA9PiB7fSxcbiAgIG5ld0dpcmwgOiBudWxsXG59O1xuXG5QTVNDb21wb25lbnQucHJvcFR5cGVzID0ge1xuICAgIHZhbHVlIDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpZCA6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc2V0UHJvcHMgOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBuZXdHaXJsIDogUHJvcFR5cGVzLm9iamVjdCxcbiAgICB1cGRhdGVEYXRhIDogUHJvcFR5cGVzLm9iamVjdFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=