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
      var modalNumber = 'modal';

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
        isOpen: _this.state.modal2,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX2V4dHJhX3VpX2NvbXBvbmVudHMvLi9zcmMvbGliL2NvbXBvbmVudHMvUE1TX0NvbXBvbmVudC9QTVNDb21wb25lbnQucmVhY3QuanMiXSwibmFtZXMiOlsiUE1TQ29tcG9uZW50IiwicHJvcHMiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwiY2xhc3NOYW1lIiwic2V0U3RhdGUiLCJuYW1lIiwidmFsdWUiLCJlIiwiY2hpbGREYXRhIiwiSlNPTiIsInBhcnNlIiwicmVzdWx0IiwibW9kYWwiLCJzZXRQcm9wcyIsInVwZGF0ZURhdGEiLCJjb25zb2xlIiwibG9nIiwibW9kYWxOdW1iZXIiLCJlcnJvciIsImxlbmd0aCIsImdpcmxEYXRhIiwiZ2lybExpc3QiLCJ4IiwicHVzaCIsImdldENoaWxkIiwiZ2lybE5hbWUiLCJpZCIsInBhZGRpbmciLCJtaW5IZWlnaHQiLCJ0b2dnbGUiLCJzdGF0ZSIsImdpcmxEYXRhVXBkYXRlIiwibW9kYWwyIiwibWF4SGVpZ2h0IiwiaGFuZGxlQ2hhbmdlIiwiY3ljbGUiLCJzdGFydERhdGUiLCJvYnVsYXRpb24iLCJtZW5zdHJ1YXRpb24iLCJkYXRlVHJ1ZSIsInRlc3QiLCJOdW1iZXIiLCJOYU4iLCJuZXdHaXJsIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiZnVuYyIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOztJQUVxQkEsWTs7Ozs7QUFDakIsd0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjs7QUFEZSxvRUFlSCxVQUFBQyxLQUFLLEVBQUk7QUFDckJBLFdBQUssQ0FBQ0MsY0FBTjtBQUNBRCxXQUFLLENBQUNFLE1BQU4sQ0FB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TyxLQUF0QixFQUE2QixDQUE3QixDQVBIO0FBUVRZLFdBQUssRUFBRztBQVJDLEtBQWI7QUFIZTtBQWFsQjs7O0VBZHFDMEIsK0M7OztBQStLMUM5QyxZQUFZLENBQUMrQyxZQUFiLEdBQTRCO0FBQ3pCdkMsT0FBSyxFQUFHLEVBRGlCO0FBRXpCb0IsSUFBRSxFQUFHLElBRm9CO0FBR3pCYixVQUFRLEVBQUcsb0JBQU0sQ0FBRSxDQUhNO0FBSXpCOEIsU0FBTyxFQUFHO0FBSmUsQ0FBNUI7QUFPQTdDLFlBQVksQ0FBQ2dELFNBQWIsR0FBeUI7QUFDckJ4QyxPQUFLLEVBQUd5QyxpREFBUyxDQUFDQyxNQURHO0FBRXJCdEIsSUFBRSxFQUFHcUIsaURBQVMsQ0FBQ0MsTUFGTTtBQUdyQm5DLFVBQVEsRUFBR2tDLGlEQUFTLENBQUNFLElBSEE7QUFJckJOLFNBQU8sRUFBR0ksaURBQVMsQ0FBQ0csTUFKQztBQUtyQnBDLFlBQVUsRUFBR2lDLGlEQUFTLENBQUNHO0FBTEYsQ0FBekIsQyIsImZpbGUiOiIzYzdmNDdjLW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCAnLi9QTVNDb21wb25lbnQuY3NzJztcbmltcG9ydCAnYm9vdHN0cmFwLWNzcy1vbmx5L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XG5pbXBvcnQgJ21kYnJlYWN0L2Rpc3QvY3NzL21kYi5jc3MnO1xuaW1wb3J0IFBNU0NoaWxkcmVuQ29tcG9uZW50IGZyb20gJy4vUE1TQ2hpbGRyZW5Db21wb25lbnQnO1xuaW1wb3J0IHsgTURCQ29udGFpbmVyLCBNREJSb3csIE1EQkNvbCwgTURCSW5wdXQsIE1EQk1vZGFsRm9vdGVyLCBNREJCdG4sIE1EQk1vZGFsLCBNREJNb2RhbEhlYWRlciwgTURCTW9kYWxCb2R5IH0gZnJvbSBcIm1kYnJlYWN0XCI7XG5pbXBvcnQgJy4vUE1TQ29tcG9uZW50LmNzcydcbi8vIGltcG9ydCBEYXRlUGlja2VyIGZyb20gJ3JlYWN0LWRhdGVwaWNrZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQTVNDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZ2lybE5hbWUgOiBcIlwiLCBcbiAgICAgICAgICAgIGN5Y2xlIDogXCJcIixcbiAgICAgICAgICAgIHN0YXJ0RGF0ZSA6IFwiXCIsXG4gICAgICAgICAgICBvYnVsYXRpb24gIDogXCJcIiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIG1lbnN0cnVhdGlvbiA6IFwiXCIsXG4gICAgICAgICAgICBtb2RhbCA6IGZhbHNlLFxuICAgICAgICAgICAgY2hpbGREYXRhIDogSlNPTi5wYXJzZSh0aGlzLnByb3BzLnZhbHVlKVswXSxcbiAgICAgICAgICAgIGVycm9yIDogXCJcIiBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN1Ym1pdEhhbmRsZXIgPSBldmVudCA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnRhcmdldC5jbGFzc05hbWUgKz0gXCIgd2FzLXZhbGlkYXRlZFwiO1xuICAgIH1cblxuICAgIGhhbmRsZUNoYW5nZSA9IGV2ZW50ID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFtldmVudC50YXJnZXQubmFtZV0gOiBldmVudC50YXJnZXQudmFsdWUgfSk7XG4gICAgfVxuXG4gICAgZ2V0Q2hpbGQgPSBlID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjaGlsZERhdGEgOiBKU09OLnBhcnNlKHRoaXMucHJvcHMudmFsdWUpW2UudGFyZ2V0LnZhbHVlXVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGdpcmxEYXRhVXBkYXRlID0gcmVzdWx0ID0+IHtcbiAgICAgICAgZGVsZXRlIHJlc3VsdC5tb2RhbFxuICAgICAgICB0aGlzLnByb3BzLnNldFByb3BzKHtcbiAgICAgICAgICAgIHVwZGF0ZURhdGEgOiByZXN1bHRcbiAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxuICAgIH1cblxuICAgIHRvZ2dsZSA9ICgpID0+IHtcbiAgICAgICAgbGV0IG1vZGFsTnVtYmVyID0gJ21vZGFsJ1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBtb2RhbCA6ICFtb2RhbCxcbiAgICAgICAgICBlcnJvciA6IFwiXCJcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyID0gKCkgPT4ge1xuICAgICAgICBpZihKU09OLnBhcnNlKHRoaXMucHJvcHMudmFsdWUpLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgbGV0IGdpcmxEYXRhID0gSlNPTi5wYXJzZSh0aGlzLnByb3BzLnZhbHVlKVxuICAgICAgICAgICAgdmFyIGdpcmxMaXN0ID0gW11cbiAgICAgICAgICAgIGRlYnVnZ2VyXG4gICAgICAgICAgICBmb3IobGV0IHggaW4gZ2lybERhdGEpe1xuICAgICAgICAgICAgICAgIGdpcmxMaXN0LnB1c2goXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIGl0ZW0xXCIgdmFsdWUgPSB7IHggfSBvbkNsaWNrID0ge3RoaXMuZ2V0Q2hpbGR9PnsgZ2lybERhdGFbeF0uZ2lybE5hbWUgfTwvbGk+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TURCQ29udGFpbmVyIGlkICA9IHt0aGlzLnByb3BzLmlkfT5cbiAgICAgICAgICAgICAgICA8TURCUm93IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1tZC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPE1EQkNvbCBtZD1cIjJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIGNhcmQtY2FzY2FkZSBuYXJyb3dlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHkgY2FyZC1ib2R5LWNhc2NhZGVcIiBzdHlsZSA9IHt7IHBhZGRpbmcgOiAnMHB4JywgbWluSGVpZ2h0IDogJzUwMHB4J319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlzdC1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpICBjbGFzcz1cIml0ZW1UaXRsZSBsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvblwiID5NeUdpcmxzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgZ2lybExpc3QgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gYWRkSXRlbVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2sgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWUgPSBcImZhIGZhLWFkZFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZGQgR3JpbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9NREJDb2w+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGUgPSB7eyd3aWR0aCcgOiAnNXB4J319PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8TURCQ29sIG1kPVwiOVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFBNU0NoaWxkcmVuQ29tcG9uZW50IGRhdGEgPSB7IHRoaXMuc3RhdGUuY2hpbGREYXRhIH0gZ2lybERhdGFVcGRhdGUgPSB7dGhpcy5naXJsRGF0YVVwZGF0ZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9NREJDb2w+XG4gICAgICAgICAgICAgICAgPC9NREJSb3c+XG4gICAgICAgICAgICAgICAgPE1EQlJvdz5cbiAgICAgICAgICAgICAgICAgICAgPE1EQk1vZGFsIGlzT3Blbj17dGhpcy5zdGF0ZS5tb2RhbDJ9IHRvZ2dsZT17dGhpcy50b2dnbGV9IHNpemUgPSBcIm1kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiaXRlbVRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJNb2RhbEhlYWRlciAgdG9nZ2xlPXt0aGlzLnRvZ2dsZX0+QWRkIEdyaWw8L01EQk1vZGFsSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJNb2RhbEJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGUgPSB7e21heEhlaWdodCA6IFwiNjgwcHhcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPVwiY29sLWxnLTMgY29sLW1kLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgc3R5bGU9e3snY29sb3InOidyZWQnfX0+eyB0aGlzLnN0YXRlLmVycm9yIH08L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID1cImNvbC1sZy02IGNvbC1tZC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCSW5wdXQgbGFiZWw9XCJOYW1lIDogXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHsgdGhpcy5oYW5kbGVDaGFuZ2UgfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPVwiZ2lybE5hbWVcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0geyB0aGlzLnN0YXRlLmdpcmxOYW1lIH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPVwiY29sLWxnLTQgY29sLW1kLThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQklucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDeWNsZVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7IHRoaXMuaGFuZGxlQ2hhbmdlIH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gXCJjeWNsZVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7IHRoaXMuc3RhdGUuY3ljbGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJjb2wtbGctNiBjb2wtbWQtOFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCSW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlN0YXJ0IERhdGVcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGUgPSBcInl5eXktbW0tZGRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0geyB0aGlzLmhhbmRsZUNoYW5nZSB9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9IFwic3RhcnREYXRlXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHsgdGhpcy5zdGF0ZS5zdGFydERhdGUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImNvbC1sZy00IGNvbC1tZC04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJJbnB1dCBsYWJlbD1cIk92dWxzdGlvbiBQZXJpb2RcIiBvbkNoYW5nZSA9IHsgdGhpcy5oYW5kbGVDaGFuZ2UgfSBuYW1lID0gXCJvYnVsYXRpb25cIiB2YWx1ZSA9IHsgdGhpcy5zdGF0ZS5vYnVsYXRpb24gfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJjb2wtbGctNiBjb2wtbWQtOFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCSW5wdXQgbGFiZWw9XCJNZW5zdHJ1YXRpb24gUGVyaW9kXCIgb25DaGFuZ2UgPSB7IHRoaXMuaGFuZGxlQ2hhbmdlIH0gbmFtZSA9IFwibWVuc3RydWF0aW9uXCIgdmFsdWUgPSB7ICB0aGlzLnN0YXRlLm1lbnN0cnVhdGlvbiB9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTURCTW9kYWxCb2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJNb2RhbEZvb3Rlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQkJ0biBjbGFzc05hbWUgPSBcIml0ZW0xXCIgb25DbGljaz17dGhpcy50b2dnbGUoMil9PkNhbmNlbDwvTURCQnRuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCQnRuIGNsYXNzTmFtZSA9IFwiaXRlbTFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljayA9IHsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGVUcnVlID0gLyhbMTJdXFxkezN9LSgwWzEtOV18MVswLTJdKS0oMFsxLTldfFsxMl1cXGR8M1swMV0pKS8udGVzdCh0aGlzLnN0YXRlLnN0YXJ0RGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZighZGF0ZVRydWUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yIDogJ0RhdGUgVHlwZSBtdXN0IGJlIFwieXl5eS1tbS1kZFwiICEnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWJ1Z2dlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuc3RhdGUuZ2lybE5hbWUgIT0gXCJcIiAmJiB0aGlzLnN0YXRlLmN5Y2xlICE9IFwiXCIgJiYgTnVtYmVyKHRoaXMuc3RhdGUuY3ljbGUpICE9IE5hTiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5zdGF0ZS5zdGFydERhdGUgIT0gXCJcIiAmJiBOdW1iZXIodGhpcy5zdGF0ZS5jeWNsZSkgPiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIHRoaXMuc3RhdGUub2J1bGF0aW9uICE9IFwiXCIgJiYgTnVtYmVyKHRoaXMuc3RhdGUub2J1bGF0aW9uKSAhPSBOYU4gJiYgTnVtYmVyKHRoaXMuc3RhdGUub2J1bGF0aW9uKSA+IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5zdGF0ZS5tZW5zdHJ1YXRpb24gIT0gXCJcIiAmJiBOdW1iZXIodGhpcy5zdGF0ZS5tZW5zdHJ1YXRpb24pICE9IE5hTiAmJiBOdW1iZXIodGhpcy5zdGF0ZS5tZW5zdHJ1YXRpb24pID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZ2lybERhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnaXJsTmFtZSA6IHRoaXMuc3RhdGUuZ2lybE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjeWNsZSA6IE51bWJlcih0aGlzLnN0YXRlLmN5Y2xlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9idWxhdGlvbiA6IE51bWJlcih0aGlzLnN0YXRlLm9idWxhdGlvbiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW5zdHJ1YXRpb24gOiBOdW1iZXIodGhpcy5zdGF0ZS5tZW5zdHJ1YXRpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZXRQcm9wcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdHaXJsIDogZ2lybERhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgOiBcIlBsZWFzZSBJbnB1dCBDb3JyZWN0bHkhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5BZGQgR2lybDwvTURCQnRuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTURCTW9kYWxGb290ZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgIDwvTURCTW9kYWw+XG4gICAgICAgICAgICAgICAgPC9NREJSb3c+XG4gICAgICAgICAgICA8L01EQkNvbnRhaW5lcj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblBNU0NvbXBvbmVudC5kZWZhdWx0UHJvcHMgPSB7XG4gICB2YWx1ZSA6IHt9LFxuICAgaWQgOiBudWxsLFxuICAgc2V0UHJvcHMgOiAoKSA9PiB7fSxcbiAgIG5ld0dpcmwgOiBudWxsXG59O1xuXG5QTVNDb21wb25lbnQucHJvcFR5cGVzID0ge1xuICAgIHZhbHVlIDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpZCA6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc2V0UHJvcHMgOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBuZXdHaXJsIDogUHJvcFR5cGVzLm9iamVjdCxcbiAgICB1cGRhdGVEYXRhIDogUHJvcFR5cGVzLm9iamVjdFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=