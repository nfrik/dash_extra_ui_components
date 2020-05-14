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

    _defineProperty(_assertThisInitialized(_this), "toggle", function (nr) {
      return function () {
        var _this$setState2;

        var modalNumber = 'modal' + nr;

        _this.setState((_this$setState2 = {}, _defineProperty(_this$setState2, modalNumber, !_this.state[modalNumber]), _defineProperty(_this$setState2, "error", ""), _this$setState2));
      };
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
        onClick: _this.toggle(2)
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
        toggle: _this.toggle(2),
        size: "md"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "itemTitle"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBModalHeader"], {
        toggle: _this.toggle(2)
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

          if (_this.state.girlName != "" && _this.state.cycle != "" && Number(_this.state.cycle) != NaN && Number(_this.state.cycle) > 0 && _this.state.startDate != "" && Number(_this.state.startDate) != NaN && Number(_this.state.startDate) > 0 && _this.state.obulation != "" && Number(_this.state.obulation) != Nan && Number(_this.state.obulation) > 0 && _this.state.menstruation != "" && Number(_this.state.menstruation) != NaN && Number(_this.state.menstruation) > 0) {
            var _girlData = {
              girlName: _this.state.girlName,
              cycle: _this.state.cycle,
              obulation: _this.state.obulation,
              menstruation: _this.state.menstruation
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

          _this.toggle(2);
        }
      }, "Add Girl"))))));
    });

    _this.state = {
      girlName: "",
      cycle: "",
      startDate: "",
      obulation: "",
      menstruation: "",
      modal2: false,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX2V4dHJhX3VpX2NvbXBvbmVudHMvLi9zcmMvbGliL2NvbXBvbmVudHMvUE1TX0NvbXBvbmVudC9QTVNDb21wb25lbnQucmVhY3QuanMiXSwibmFtZXMiOlsiUE1TQ29tcG9uZW50IiwicHJvcHMiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwiY2xhc3NOYW1lIiwic2V0U3RhdGUiLCJuYW1lIiwidmFsdWUiLCJlIiwiY2hpbGREYXRhIiwiSlNPTiIsInBhcnNlIiwicmVzdWx0IiwibW9kYWwiLCJzZXRQcm9wcyIsInVwZGF0ZURhdGEiLCJjb25zb2xlIiwibG9nIiwibnIiLCJtb2RhbE51bWJlciIsInN0YXRlIiwibGVuZ3RoIiwiZ2lybERhdGEiLCJnaXJsTGlzdCIsIngiLCJwdXNoIiwiZ2V0Q2hpbGQiLCJnaXJsTmFtZSIsImlkIiwicGFkZGluZyIsIm1pbkhlaWdodCIsInRvZ2dsZSIsImdpcmxEYXRhVXBkYXRlIiwibW9kYWwyIiwibWF4SGVpZ2h0IiwiZXJyb3IiLCJoYW5kbGVDaGFuZ2UiLCJjeWNsZSIsInN0YXJ0RGF0ZSIsIm9idWxhdGlvbiIsIm1lbnN0cnVhdGlvbiIsImRhdGVUcnVlIiwidGVzdCIsIk51bWJlciIsIk5hTiIsIk5hbiIsIm5ld0dpcmwiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJmdW5jIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0lBRXFCQSxZOzs7OztBQUNqQix3QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOOztBQURlLG9FQWVILFVBQUFDLEtBQUssRUFBSTtBQUNyQkEsV0FBSyxDQUFDQyxjQUFOO0FBQ0FELFdBQUssQ0FB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REo7QUFrSEgsS0EzS2tCOztBQUdmLFVBQUtYLEtBQUwsR0FBYTtBQUNUTyxjQUFRLEVBQUcsRUFERjtBQUVUVSxXQUFLLEVBQUcsRUFGQztBQUdUQyxlQUFTLEVBQUcsRUFISDtBQUlUQyxlQUFTLEVBQUksRUFKSjtBQUtUQyxrQkFBWSxFQUFHLEVBTE47QUFNVFAsWUFBTSxFQUFHLEtBTkE7QUFPVHhCLGVBQVMsRUFBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVcsTUFBS1gsS0FBTCxDQUFXTyxLQUF0QixFQUE2QixDQUE3QixDQVBIO0FBUVQ0QixXQUFLLEVBQUc7QUFSQyxLQUFiO0FBSGU7QUFhbEI7OztFQWRxQ1ksK0M7OztBQStLMUNoRCxZQUFZLENBQUNpRCxZQUFiLEdBQTRCO0FBQ3pCekMsT0FBSyxFQUFHLEVBRGlCO0FBRXpCcUIsSUFBRSxFQUFHLElBRm9CO0FBR3pCZCxVQUFRLEVBQUcsb0JBQU0sQ0FBRSxDQUhNO0FBSXpCZ0MsU0FBTyxFQUFHO0FBSmUsQ0FBNUI7QUFPQS9DLFlBQVksQ0FBQ2tELFNBQWIsR0FBeUI7QUFDckIxQyxPQUFLLEVBQUcyQyxpREFBUyxDQUFDQyxNQURHO0FBRXJCdkIsSUFBRSxFQUFHc0IsaURBQVMsQ0FBQ0MsTUFGTTtBQUdyQnJDLFVBQVEsRUFBR29DLGlEQUFTLENBQUNFLElBSEE7QUFJckJOLFNBQU8sRUFBR0ksaURBQVMsQ0FBQ0csTUFKQztBQUtyQnRDLFlBQVUsRUFBR21DLGlEQUFTLENBQUNHO0FBTEYsQ0FBekIsQyIsImZpbGUiOiI5Y2FlMjU1LW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCAnLi9QTVNDb21wb25lbnQuY3NzJztcbmltcG9ydCAnYm9vdHN0cmFwLWNzcy1vbmx5L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XG5pbXBvcnQgJ21kYnJlYWN0L2Rpc3QvY3NzL21kYi5jc3MnO1xuaW1wb3J0IFBNU0NoaWxkcmVuQ29tcG9uZW50IGZyb20gJy4vUE1TQ2hpbGRyZW5Db21wb25lbnQnO1xuaW1wb3J0IHsgTURCQ29udGFpbmVyLCBNREJSb3csIE1EQkNvbCwgTURCSW5wdXQsIE1EQk1vZGFsRm9vdGVyLCBNREJCdG4sIE1EQk1vZGFsLCBNREJNb2RhbEhlYWRlciwgTURCTW9kYWxCb2R5IH0gZnJvbSBcIm1kYnJlYWN0XCI7XG5pbXBvcnQgJy4vUE1TQ29tcG9uZW50LmNzcydcbi8vIGltcG9ydCBEYXRlUGlja2VyIGZyb20gJ3JlYWN0LWRhdGVwaWNrZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQTVNDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZ2lybE5hbWUgOiBcIlwiLCBcbiAgICAgICAgICAgIGN5Y2xlIDogXCJcIixcbiAgICAgICAgICAgIHN0YXJ0RGF0ZSA6IFwiXCIsXG4gICAgICAgICAgICBvYnVsYXRpb24gIDogXCJcIiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIG1lbnN0cnVhdGlvbiA6IFwiXCIsXG4gICAgICAgICAgICBtb2RhbDIgOiBmYWxzZSxcbiAgICAgICAgICAgIGNoaWxkRGF0YSA6IEpTT04ucGFyc2UodGhpcy5wcm9wcy52YWx1ZSlbMF0sXG4gICAgICAgICAgICBlcnJvciA6IFwiXCIgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdWJtaXRIYW5kbGVyID0gZXZlbnQgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC50YXJnZXQuY2xhc3NOYW1lICs9IFwiIHdhcy12YWxpZGF0ZWRcIjtcbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2UgPSBldmVudCA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBbZXZlbnQudGFyZ2V0Lm5hbWVdIDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xuICAgIH1cblxuICAgIGdldENoaWxkID0gZSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY2hpbGREYXRhIDogSlNPTi5wYXJzZSh0aGlzLnByb3BzLnZhbHVlKVtlLnRhcmdldC52YWx1ZV1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBnaXJsRGF0YVVwZGF0ZSA9IHJlc3VsdCA9PiB7XG4gICAgICAgIGRlbGV0ZSByZXN1bHQubW9kYWxcbiAgICAgICAgdGhpcy5wcm9wcy5zZXRQcm9wcyh7XG4gICAgICAgICAgICB1cGRhdGVEYXRhIDogcmVzdWx0XG4gICAgICAgIH0pXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcbiAgICB9XG5cbiAgICB0b2dnbGUgPSBuciA9PiAoKSA9PiB7XG4gICAgICAgIGxldCBtb2RhbE51bWJlciA9ICdtb2RhbCcgKyBuclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBbbW9kYWxOdW1iZXJdOiAhdGhpcy5zdGF0ZVttb2RhbE51bWJlcl0sXG4gICAgICAgICAgZXJyb3IgOiBcIlwiXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgaWYoSlNPTi5wYXJzZSh0aGlzLnByb3BzLnZhbHVlKS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIGxldCBnaXJsRGF0YSA9IEpTT04ucGFyc2UodGhpcy5wcm9wcy52YWx1ZSlcbiAgICAgICAgICAgIHZhciBnaXJsTGlzdCA9IFtdXG4gICAgICAgICAgICBkZWJ1Z2dlclxuICAgICAgICAgICAgZm9yKGxldCB4IGluIGdpcmxEYXRhKXtcbiAgICAgICAgICAgICAgICBnaXJsTGlzdC5wdXNoKFxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBpdGVtMVwiIHZhbHVlID0geyB4IH0gb25DbGljayA9IHt0aGlzLmdldENoaWxkfT57IGdpcmxEYXRhW3hdLmdpcmxOYW1lIH08L2xpPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE1EQkNvbnRhaW5lciBpZCAgPSB7dGhpcy5wcm9wcy5pZH0+XG4gICAgICAgICAgICAgICAgPE1EQlJvdyBjbGFzc05hbWU9XCJqdXN0aWZ5LWNvbnRlbnQtbWQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxNREJDb2wgbWQ9XCIyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBjYXJkLWNhc2NhZGUgbmFycm93ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5IGNhcmQtYm9keS1jYXNjYWRlXCIgc3R5bGUgPSB7eyBwYWRkaW5nIDogJzBweCcsIG1pbkhlaWdodCA6ICc1MDBweCd9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpc3QtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSAgY2xhc3M9XCJpdGVtVGl0bGUgbGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb25cIiA+TXlHaXJsczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGdpcmxMaXN0IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIGFkZEl0ZW1cIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZSgyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lID0gXCJmYSBmYS1hZGRcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkIEdyaWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvTURCQ29sPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlID0ge3snd2lkdGgnIDogJzVweCd9fT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPE1EQkNvbCBtZD1cIjlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQTVNDaGlsZHJlbkNvbXBvbmVudCBkYXRhID0geyB0aGlzLnN0YXRlLmNoaWxkRGF0YSB9IGdpcmxEYXRhVXBkYXRlID0ge3RoaXMuZ2lybERhdGFVcGRhdGV9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvTURCQ29sPlxuICAgICAgICAgICAgICAgIDwvTURCUm93PlxuICAgICAgICAgICAgICAgIDxNREJSb3c+XG4gICAgICAgICAgICAgICAgICAgIDxNREJNb2RhbCBpc09wZW49e3RoaXMuc3RhdGUubW9kYWwyfSB0b2dnbGU9e3RoaXMudG9nZ2xlKDIpfSBzaXplID0gXCJtZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcIml0ZW1UaXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCTW9kYWxIZWFkZXIgIHRvZ2dsZT17dGhpcy50b2dnbGUoMil9PkFkZCBHcmlsPC9NREJNb2RhbEhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCTW9kYWxCb2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlID0ge3ttYXhIZWlnaHQgOiBcIjY4MHB4XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID1cImNvbC1sZy0zIGNvbC1tZC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7J2NvbG9yJzoncmVkJ319PnsgdGhpcy5zdGF0ZS5lcnJvciB9PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9XCJjb2wtbGctNiBjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQklucHV0IGxhYmVsPVwiTmFtZSA6IFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7IHRoaXMuaGFuZGxlQ2hhbmdlIH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lID1cImdpcmxOYW1lXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHsgdGhpcy5zdGF0ZS5naXJsTmFtZSB9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID1cImNvbC1sZy00IGNvbC1tZC04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJJbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ3ljbGVcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0geyB0aGlzLmhhbmRsZUNoYW5nZSB9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9IFwiY3ljbGVcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0geyB0aGlzLnN0YXRlLmN5Y2xlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwiY29sLWxnLTYgY29sLW1kLThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQklucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTdGFydCBEYXRlXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlID0gXCJ5eXl5LW1tLWRkXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHsgdGhpcy5oYW5kbGVDaGFuZ2UgfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPSBcInN0YXJ0RGF0ZVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7IHRoaXMuc3RhdGUuc3RhcnREYXRlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJjb2wtbGctNCBjb2wtbWQtOFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCSW5wdXQgbGFiZWw9XCJPdnVsc3Rpb24gUGVyaW9kXCIgb25DaGFuZ2UgPSB7IHRoaXMuaGFuZGxlQ2hhbmdlIH0gbmFtZSA9IFwib2J1bGF0aW9uXCIgdmFsdWUgPSB7IHRoaXMuc3RhdGUub2J1bGF0aW9uIH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwiY29sLWxnLTYgY29sLW1kLThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQklucHV0IGxhYmVsPVwiTWVuc3RydWF0aW9uIFBlcmlvZFwiIG9uQ2hhbmdlID0geyB0aGlzLmhhbmRsZUNoYW5nZSB9IG5hbWUgPSBcIm1lbnN0cnVhdGlvblwiIHZhbHVlID0geyAgdGhpcy5zdGF0ZS5tZW5zdHJ1YXRpb24gfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01EQk1vZGFsQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCTW9kYWxGb290ZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJCdG4gY2xhc3NOYW1lID0gXCJpdGVtMVwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlKDIpfT5DYW5jZWw8L01EQkJ0bj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQkJ0biBjbGFzc05hbWUgPSBcIml0ZW0xXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2sgPSB7KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRlVHJ1ZSA9IC8oWzEyXVxcZHszfS0oMFsxLTldfDFbMC0yXSktKDBbMS05XXxbMTJdXFxkfDNbMDFdKSkvLnRlc3QodGhpcy5zdGF0ZS5zdGFydERhdGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIWRhdGVUcnVlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA6ICdEYXRlIFR5cGUgbXVzdCBiZSBcInl5eXktbW0tZGRcIiAhJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVidWdnZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLnN0YXRlLmdpcmxOYW1lICE9IFwiXCIgJiYgdGhpcy5zdGF0ZS5jeWNsZSAhPSBcIlwiICYmIE51bWJlcih0aGlzLnN0YXRlLmN5Y2xlKSAhPSBOYU4gJiYgTnVtYmVyKHRoaXMuc3RhdGUuY3ljbGUpID4gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiB0aGlzLnN0YXRlLnN0YXJ0RGF0ZSAhPSBcIlwiICYmIE51bWJlcih0aGlzLnN0YXRlLnN0YXJ0RGF0ZSkgIT0gTmFOICYmIE51bWJlcih0aGlzLnN0YXRlLnN0YXJ0RGF0ZSkgPiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIHRoaXMuc3RhdGUub2J1bGF0aW9uICE9IFwiXCIgJiYgTnVtYmVyKHRoaXMuc3RhdGUub2J1bGF0aW9uKSAhPSBOYW4gJiYgTnVtYmVyKHRoaXMuc3RhdGUub2J1bGF0aW9uKSA+IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5zdGF0ZS5tZW5zdHJ1YXRpb24gIT0gXCJcIiAmJiBOdW1iZXIodGhpcy5zdGF0ZS5tZW5zdHJ1YXRpb24pICE9IE5hTiAmJiBOdW1iZXIodGhpcy5zdGF0ZS5tZW5zdHJ1YXRpb24pID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZ2lybERhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnaXJsTmFtZSA6IHRoaXMuc3RhdGUuZ2lybE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjeWNsZSA6IHRoaXMuc3RhdGUuY3ljbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYnVsYXRpb24gOiB0aGlzLnN0YXRlLm9idWxhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lbnN0cnVhdGlvbiA6IHRoaXMuc3RhdGUubWVuc3RydWF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZXRQcm9wcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdHaXJsIDogZ2lybERhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgOiBcIlBsZWFzZSBJbnB1dCBDb3JyZWN0bHkhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlKDIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+QWRkIEdpcmw8L01EQkJ0bj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01EQk1vZGFsRm9vdGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICA8L01EQk1vZGFsPlxuICAgICAgICAgICAgICAgIDwvTURCUm93PlxuICAgICAgICAgICAgPC9NREJDb250YWluZXI+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5QTVNDb21wb25lbnQuZGVmYXVsdFByb3BzID0ge1xuICAgdmFsdWUgOiB7fSxcbiAgIGlkIDogbnVsbCxcbiAgIHNldFByb3BzIDogKCkgPT4ge30sXG4gICBuZXdHaXJsIDogbnVsbFxufTtcblxuUE1TQ29tcG9uZW50LnByb3BUeXBlcyA9IHtcbiAgICB2YWx1ZSA6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaWQgOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNldFByb3BzIDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgbmV3R2lybCA6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgdXBkYXRlRGF0YSA6IFByb3BUeXBlcy5vYmplY3Rcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9