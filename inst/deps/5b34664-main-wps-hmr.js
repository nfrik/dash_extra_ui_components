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
/* harmony import */ var react_apexcharts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-apexcharts */ "./node_modules/react-apexcharts/dist/react-apexcharts.min.js");
/* harmony import */ var react_apexcharts__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_apexcharts__WEBPACK_IMPORTED_MODULE_6__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var PMSChildrenComponent = /*#__PURE__*/function (_Component) {
  _inherits(PMSChildrenComponent, _Component);

  var _super = _createSuper(PMSChildrenComponent);

  function PMSChildrenComponent(props) {
    var _this;

    _classCallCheck(this, PMSChildrenComponent);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "toggle", function () {
      _this.setState({
        modal: !_this.state.modal
      });
    });

    _defineProperty(_assertThisInitialized(_this), "loadGirlData", function () {
      _this.setState({
        girlName: _this.props.data.girlName,
        cycle: _this.props.data.cycle,
        startDate: _this.props.data.startDate,
        ovulation: _this.props.data.ovulation,
        menstruation: _this.props.data.menstruation
      });

      _this.toggle();
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      _this.setState(_defineProperty({}, event.target.name, event.target.value));
    });

    _this.state = {
      modal: false,
      girlName: "",
      cycle: "",
      startDate: "",
      ovulation: "",
      menstruation: ""
    };
    return _this;
  }

  _createClass(PMSChildrenComponent, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var xaxis = [];
      var pmsData = [];
      var Colors = [];
      var CurrentDay = 0;

      for (var i = 0; i < this.props.data.cycle - this.props.data.ovulation; i++) {
        var date = new Date(this.props.data.startDate);
        var current = new Date();
        CurrentDay = Math.ceil(Number(current.getTime() - date.getTime()) / 86400000);
        var milliDate = date.getTime() + 86400000 * (i + 1);
        var newDate = new Date(milliDate);
        var newDateString = "" + (newDate.getMonth() + 1) + "-" + newDate.getDate();
        xaxis.push(newDateString);
      }

      for (var j = 0; j < this.props.data.menstruation; j++) {
        var step = 100 / this.props.data.menstruation;
        pmsData.push(Math.round(100 - j * step));
        var Colorstep = (255 - 50) / this.props.data.menstruation;
        var colorRed = Math.round(255 - Colorstep * j);
        console.log(colorRed);
        colorRed = colorRed.toString(16);
        Colors.push('#' + colorRed + '0000');
      }

      for (var k = this.props.data.menstruation; k < this.props.data.cycle - this.props.data.ovulation - 5; k++) {
        pmsData.push(0);
        Colors.push('#FFFFFF');
      }

      var fertility = 0;
      var colorGreen = 0;

      for (var l = this.props.data.ovulation - 5; l < this.props.data.ovulation; l++) {
        fertility += 20;
        pmsData.push(fertility);
        var colorStep = Math.round(255 - 50) / 5;
        colorGreen += Number(colorStep);
        var colorGreenHex = colorGreen.toString(16);
        Colors.push('#00' + colorGreenHex + '00');
      }

      var chartData = {
        tooltip: {
          y: {
            formatter: function formatter(value) {
              var yTooltip = value + "%";
              return yTooltip;
            }
          }
        },
        series: [{
          name: '',
          data: pmsData
        }],
        options: {
          chart: {
            type: 'bar',
            height: 350
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: '98%',
              distributed: true,
              markers: {
                colors: ['#FF0000', '#D00000', '#0000', '#0000', '#550000']
              }
            }
          },
          dataLabels: {
            enabled: true
          },
          xaxis: {
            categories: xaxis
          },
          yaxis: {
            title: {
              text: ''
            }
          },
          fill: {
            colors: Colors
          },
          legend: {
            markers: {
              fillColors: Colors
            }
          }
        }
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "card card-cascade narrower"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "card-body card-body-cascade"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBRow"], {
        className: " justify-content-md-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBCol"], {
        md: "12",
        className: ""
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "itemTitle card card-cascade narrower"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "card-body card-body-cascade"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "list-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBRow"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBCol"], {
        md: "8"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "Name : ", this.props.data.girlName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBCol"], {
        md: "4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "StartDate : ", this.props.data.startDate, " "))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBRow"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBCol"], {
        md: "3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "Period : ", this.props.data.cycle)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBCol"], {
        md: "3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "Menstruation : ", this.props.data.menstruation)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBCol"], {
        md: "3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "Current :  ", CurrentDay, " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBCol"], {
        md: "3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "Ovulation : ", this.props.data.ovulation))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBRow"], null)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBRow"], {
        className: "justify-content-md-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBCol"], {
        md: "11"
      }, this.props.data ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apexcharts__WEBPACK_IMPORTED_MODULE_6___default.a, {
        options: chartData.options,
        series: chartData.series,
        type: "bar",
        height: 350
      }) : "")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBCol"], {
        md: "9"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBCol"], {
        md: "3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBBtn"], {
        className: "item1",
        onClick: this.loadGirlData
      }, " Update ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBRow"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBModal"], {
        isOpen: this.state.modal,
        toggle: this.toggle,
        size: "md"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "itemTitle"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBModalHeader"], {
        toggle: this.toggle
      }, "Add Gril")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBModalBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          maxHeight: "680px"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "col-lg-6 col-md-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBInput"], {
        label: "Name : ",
        onChange: this.handleChange,
        name: "girlName",
        value: this.state.girlName
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "col-lg-4 col-md-8"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBInput"], {
        label: "Cycle",
        onChange: this.handleChange,
        name: "cycle",
        value: this.state.cycle
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "col-lg-6 col-md-8"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBInput"], {
        label: "Start Date",
        placeholde: "yyyy-mm-dd",
        onChange: this.handleChange,
        name: "startDate",
        value: this.state.startDate
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "col-lg-4 col-md-8"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBInput"], {
        label: "Ovulstion Period",
        onChange: this.handleChange,
        name: "ovulation",
        value: this.state.ovulation
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "col-lg-6 col-md-8"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBInput"], {
        label: "Menstruation Period",
        onChange: this.handleChange,
        name: "menstruation",
        value: this.state.menstruation
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBModalFooter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBBtn"], {
        className: "item1",
        onClick: this.toggle
      }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBBtn"], {
        className: "item1",
        onClick: function onClick() {
          _this2.toggle();

          _this2.props.girlDataUpdate(_this2.state);
        }
      }, "UpDate")))))));
      debugger;
    }
  }]);

  return PMSChildrenComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


PMSChildrenComponent.defaultProps = {
  data: {}
};
PMSChildrenComponent.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  girlDataUpdate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX2V4dHJhX3VpX2NvbXBvbmVudHMvLi9zcmMvbGliL2NvbXBvbmVudHMvUE1TX0NvbXBvbmVudC9QTVNDaGlsZHJlbkNvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJQTVNDaGlsZHJlbkNvbXBvbmVudCIsInByb3BzIiwic2V0U3RhdGUiLCJtb2RhbCIsInN0YXRlIiwiZ2lybE5hbWUiLCJkYXRhIiwiY3ljbGUiLCJzdGFydERhdGUiLCJvdnVsYXRpb24iLCJtZW5zdHJ1YXRpb24iLCJ0b2dnbGUiLCJldmVudCIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInhheGlzIiwicG1zRGF0YSIsIkNvbG9ycyIsIkN1cnJlbnREYXkiLCJpIiwiZGF0ZSIsIkRhdGUiLCJjdXJyZW50IiwiTWF0aCIsImNlaWwiLCJOdW1iZXIiLCJnZXRUaW1lIiwibWlsbGlEYXRlIiwibmV3RGF0ZSIsIm5ld0RhdGVTdHJpbmciLCJnZXRNb250aCIsImdldERhdGUiLCJwdXNoIiwiaiIsInN0ZXAiLCJyb3VuZCIsIkNvbG9yc3RlcCIsImNvbG9yUmVkIiwiY29uc29sZSIsImxvZyIsInRvU3RyaW5nIiwiayIsImZlcnRpbGl0eSIsImNvbG9yR3JlZW4iLCJsIiwiY29sb3JTdGVwIiwiY29sb3JHcmVlbkhleCIsImNoYXJ0RGF0YSIsInRvb2x0aXAiLCJ5IiwiZm9ybWF0dGVyIiwieVRvb2x0aXAiLCJzZXJpZXMiLCJvcHRpb25zIiwiY2hhcnQiLCJ0eXBlIiwiaGVpZ2h0IiwicGxvdE9wdGlvbnMiLCJiYXIiLCJob3Jpem9udGFsIiwiY29sdW1uV2lkdGgiLCJkaXN0cmlidXRlZCIsIm1hcmtlcnMiLCJjb2xvcnMiLCJkYXRhTGFiZWxzIiwiZW5hYmxlZCIsImNhdGVnb3JpZXMiLCJ5YXhpcyIsInRpdGxlIiwidGV4dCIsImZpbGwiLCJsZWdlbmQiLCJmaWxsQ29sb3JzIiwibG9hZEdpcmxEYXRhIiwibWF4SGVpZ2h0IiwiaGFuZGxlQ2hhbmdlIiwiZ2lybERhdGFVcGRhdGUiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0lBRXFCQSxvQjs7Ozs7QUFDakIsZ0NBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjs7QUFEZSw2REFZVixZQUFNO0FBQ1gsWUFBS0MsUUFBTCxDQUFjO0FBQ1pDLGFBQUssRUFBRSxDQUFDLE1BQUtDLEtBQUwsQ0FBV0Q7QUFEUCxPQUFkO0FBR0gsS0FoQmtCOztBQUFBLG1FQWtCSixZQUFNO0FBQ2pCLFlBQUtELFFBQUwsQ0FBYztBQUNWRyxnQkFBUSxFQUFHLE1BQUtKLEtBQUwsQ0FBV0ssSUFBWCxDQUFnQkQsUUFEakI7QUFFVkUsYUFBSyxFQUFHLE1BQUtOLEtBQUwsQ0FBV0ssSUFBWCxDQUFnQkMsS0FGZDtBQUdWQyxpQkFBUyxFQUFHLE1BQUtQLEtBQUwsQ0FBV0ssSUFBWCxDQUFnQkUsU0FIbEI7QUFJVkMsaUJBQVMsRUFBSSxNQUFLUixLQUFMLENBQVdLLElBQVgsQ0FBZ0JHLFNBSm5CO0FBS1ZDLG9CQUFZLEVBQUcsTUFBS1QsS0FBTCxDQUFXSyxJQUFYLENBQWdCSTtBQUxyQixPQUFkOztBQU9BLFlBQUtDLE1BQUw7QUFDSCxLQTNCa0I7O0FBQUEsbUVBNkJKLFVBQUFDLEtBQUssRUFBSTtBQUNwQixZQUFLVixRQUFMLHFCQUFpQlUsS0FBSyxDQUFDQyxNQUFOLENBQWFDLElBQTlCLEVBQXNDRixLQUFLLENBQUNDLE1BQU4sQ0FBYUUsS0FBbkQ7QUFDSCxLQS9Ca0I7O0FBRWYsVUFBS1gsS0FBTCxHQUFjO0FBQ1ZELFdBQUssRUFBRyxLQURFO0FBRVZFLGNBQVEsRUFBRyxFQUZEO0FBR1ZFLFdBQUssRUFBRyxFQUhFO0FBSVZDLGVBQVMsRUFB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REosQ0FsQ0osQ0FESixDQUpKLGVBa0RJLDJEQUFDLHVEQUFELHFCQUNJLDJEQUFDLCtDQUFEO0FBQVEsaUJBQVMsRUFBRyxPQUFwQjtBQUE0QixlQUFPLEVBQUcsS0FBS0M7QUFBM0Msa0JBREosZUFFSSwyREFBQywrQ0FBRDtBQUFRLGlCQUFTLEVBQUcsT0FBcEI7QUFDSSxlQUFPLEVBQUksbUJBQU07QUFDYixnQkFBSSxDQUFDQSxNQUFMOztBQUNBLGdCQUFJLENBQUNWLEtBQUwsQ0FBVzRFLGNBQVgsQ0FBMEIsTUFBSSxDQUFDekUsS0FBL0I7QUFDSDtBQUpMLGtCQUZKLENBbERKLENBREosQ0FESixDQXJESixDQURKLENBREo7QUEySEE7QUFDSDs7OztFQTlPNkMwRSwrQzs7O0FBaVBsRDlFLG9CQUFvQixDQUFDK0UsWUFBckIsR0FBb0M7QUFDaEN6RSxNQUFJLEVBQUc7QUFEeUIsQ0FBcEM7QUFJQ04sb0JBQW9CLENBQUNnRixTQUFyQixHQUFpQztBQUM3QjFFLE1BQUksRUFBRzJFLGlEQUFTLENBQUNDLE1BRFk7QUFFN0JMLGdCQUFjLEVBQUdJLGlEQUFTLENBQUNFO0FBRkUsQ0FBakMsQyIsImZpbGUiOiI1YjM0NjY0LW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCAnYm9vdHN0cmFwLWNzcy1vbmx5L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XG5pbXBvcnQgJ21kYnJlYWN0L2Rpc3QvY3NzL21kYi5jc3MnO1xuaW1wb3J0ICcuL1BNU0NvbXBvbmVudC5jc3MnXG5pbXBvcnQgeyBNREJDb250YWluZXIsIE1EQlJvdywgTURCQ29sLCBNREJJbnB1dCwgTURCTW9kYWxGb290ZXIsIE1EQkJ0biwgTURCTW9kYWwsIE1EQk1vZGFsSGVhZGVyLCBNREJNb2RhbEJvZHkgfSBmcm9tIFwibWRicmVhY3RcIjtcblxuaW1wb3J0IENoYXJ0IGZyb20gJ3JlYWN0LWFwZXhjaGFydHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBNU0NoaWxkcmVuQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSAoe1xuICAgICAgICAgICAgbW9kYWwgOiBmYWxzZSxcbiAgICAgICAgICAgIGdpcmxOYW1lIDogXCJcIiwgXG4gICAgICAgICAgICBjeWNsZSA6IFwiXCIsXG4gICAgICAgICAgICBzdGFydERhdGUgOiBcIlwiLFxuICAgICAgICAgICAgb3Z1bGF0aW9uICA6IFwiXCIsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBtZW5zdHJ1YXRpb24gOiBcIlwiLFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHRvZ2dsZSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbW9kYWw6ICF0aGlzLnN0YXRlLm1vZGFsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxvYWRHaXJsRGF0YSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBnaXJsTmFtZSA6IHRoaXMucHJvcHMuZGF0YS5naXJsTmFtZSxcbiAgICAgICAgICAgIGN5Y2xlIDogdGhpcy5wcm9wcy5kYXRhLmN5Y2xlLFxuICAgICAgICAgICAgc3RhcnREYXRlIDogdGhpcy5wcm9wcy5kYXRhLnN0YXJ0RGF0ZSxcbiAgICAgICAgICAgIG92dWxhdGlvbiAgOiB0aGlzLnByb3BzLmRhdGEub3Z1bGF0aW9uLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgbWVuc3RydWF0aW9uIDogdGhpcy5wcm9wcy5kYXRhLm1lbnN0cnVhdGlvbixcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy50b2dnbGUoKVxuICAgIH1cblxuICAgIGhhbmRsZUNoYW5nZSA9IGV2ZW50ID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFtldmVudC50YXJnZXQubmFtZV0gOiBldmVudC50YXJnZXQudmFsdWUgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB2YXIgeGF4aXMgID0gW11cbiAgICAgICAgdmFyIHBtc0RhdGEgPSBbXVxuICAgICAgICB2YXIgQ29sb3JzID0gW11cbiAgICAgICAgdmFyIEN1cnJlbnREYXkgPSAwXG4gICAgXG4gICAgICAgIGZvciggbGV0IGkgPSAwOyBpIDwgKCB0aGlzLnByb3BzLmRhdGEuY3ljbGUgLSB0aGlzLnByb3BzLmRhdGEub3Z1bGF0aW9uICk7IGkrKyl7XG4gICAgICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKHRoaXMucHJvcHMuZGF0YS5zdGFydERhdGUpXG4gICAgICAgICAgICBsZXQgY3VycmVudCA9IG5ldyBEYXRlKClcbiAgICAgICAgICAgIEN1cnJlbnREYXkgPSBNYXRoLmNlaWwoTnVtYmVyKGN1cnJlbnQuZ2V0VGltZSgpIC0gZGF0ZS5nZXRUaW1lKCkpIC8gODY0MDAwMDApXG4gICAgICAgICAgICBsZXQgbWlsbGlEYXRlID0gZGF0ZS5nZXRUaW1lKCkgKyA4NjQwMDAwMCAqIChpICsgMSlcbiAgICAgICAgICAgIGxldCBuZXdEYXRlID0gbmV3IERhdGUobWlsbGlEYXRlKVxuICAgICAgICAgICAgbGV0IG5ld0RhdGVTdHJpbmcgPSBcIlwiICsgKG5ld0RhdGUuZ2V0TW9udGgoKSsxKSArIFwiLVwiICsgbmV3RGF0ZS5nZXREYXRlKClcbiAgICAgICAgICAgIHhheGlzLnB1c2gobmV3RGF0ZVN0cmluZylcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciggbGV0IGogPSAwOyBqIDwgdGhpcy5wcm9wcy5kYXRhLm1lbnN0cnVhdGlvbjsgaisrICkge1xuICAgICAgICAgICAgbGV0IHN0ZXAgPSAxMDAvdGhpcy5wcm9wcy5kYXRhLm1lbnN0cnVhdGlvbjtcbiAgICAgICAgICAgIHBtc0RhdGEucHVzaCggTWF0aC5yb3VuZCgxMDAgLSBqICogc3RlcCkgKVxuXG4gICAgICAgICAgICBsZXQgQ29sb3JzdGVwID0gKDI1NSAtIDUwKSAvIHRoaXMucHJvcHMuZGF0YS5tZW5zdHJ1YXRpb25cbiAgICAgICAgICAgIGxldCBjb2xvclJlZCA9IE1hdGgucm91bmQoIDI1NSAtIENvbG9yc3RlcCAqIGogKVxuICAgICAgICAgICAgY29uc29sZS5sb2coY29sb3JSZWQpXG4gICAgICAgICAgICBjb2xvclJlZCA9IGNvbG9yUmVkLnRvU3RyaW5nKDE2KVxuICAgICAgICAgICAgQ29sb3JzLnB1c2goJyMnKyBjb2xvclJlZCsnMDAwMCcpXG4gICAgICAgIH1cblxuICAgICAgICBmb3IobGV0IGsgPSB0aGlzLnByb3BzLmRhdGEubWVuc3RydWF0aW9uOyBrIDwgdGhpcy5wcm9wcy5kYXRhLmN5Y2xlIC0gdGhpcy5wcm9wcy5kYXRhLm92dWxhdGlvbiAtIDUgOyBrICsrKXtcbiAgICAgICAgICAgIHBtc0RhdGEucHVzaCgwKVxuICAgICAgICAgICAgQ29sb3JzLnB1c2goJyNGRkZGRkYnKVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB2YXIgZmVydGlsaXR5ID0gMFxuICAgICAgICB2YXIgY29sb3JHcmVlbiA9IDBcblxuICAgICAgICBmb3IgKGxldCBsID0gdGhpcy5wcm9wcy5kYXRhLm92dWxhdGlvbiAtIDU7IGwgPCB0aGlzLnByb3BzLmRhdGEub3Z1bGF0aW9uIDsgbCsrKXtcbiAgICAgICAgICAgIGZlcnRpbGl0eSArPSAyMDtcbiAgICAgICAgICAgIHBtc0RhdGEucHVzaChmZXJ0aWxpdHkpXG5cbiAgICAgICAgICAgIGxldCBjb2xvclN0ZXAgPSBNYXRoLnJvdW5kKDI1NSAtIDUwKSAvIDU7XG4gICAgICAgICAgICBjb2xvckdyZWVuICs9ICBOdW1iZXIoY29sb3JTdGVwKVxuICAgICAgICAgICAgbGV0IGNvbG9yR3JlZW5IZXggPSBjb2xvckdyZWVuLnRvU3RyaW5nKDE2KVxuICAgICAgICAgICAgQ29sb3JzLnB1c2goJyMwMCcgKyBjb2xvckdyZWVuSGV4ICsgJzAwJylcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdmFyIGNoYXJ0RGF0YSA9IHtcbiAgICAgICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICAgICAgICB5OiB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlcjogKHZhbHVlKSA9PiB7IGxldCB5VG9vbHRpcCA9IHZhbHVlICsgXCIlXCI7IHJldHVybiB5VG9vbHRpcCB9LFxuICAgICAgICAgICAgICAgIH0sICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXJpZXM6IFt7XG4gICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICBkYXRhOiBwbXNEYXRhXG4gICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBjaGFydDogeyB0eXBlOiAnYmFyJywgaGVpZ2h0OiAzNTAgfSxcbiAgICAgICAgICAgICAgICBwbG90T3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICBiYXI6IHsgaG9yaXpvbnRhbDogZmFsc2UsIGNvbHVtbldpZHRoOiAnOTglJywgZGlzdHJpYnV0ZWQgOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFya2Vyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yczogWycjRkYwMDAwJywgJyNEMDAwMDAnLCAnIzAwMDAnLCAnIzAwMDAnLCAnIzU1MDAwMCddXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkYXRhTGFiZWxzOiB7IGVuYWJsZWQ6IHRydWUgfSxcbiAgICAgICAgICAgICAgICB4YXhpczogeyBjYXRlZ29yaWVzOiB4YXhpcyB9LFxuICAgICAgICAgICAgICAgIHlheGlzOiB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB7IHRleHQ6ICcnIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZpbGw6IHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3JzIDogQ29sb3JzLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmtlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxDb2xvcnM6IENvbG9ycyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBjYXJkLWNhc2NhZGUgbmFycm93ZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5IGNhcmQtYm9keS1jYXNjYWRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxNREJSb3cgY2xhc3NOYW1lPVwiIGp1c3RpZnktY29udGVudC1tZC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNREJDb2wgbWQ9XCIxMlwiIGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtVGl0bGUgY2FyZCBjYXJkLWNhc2NhZGUgbmFycm93ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keSBjYXJkLWJvZHktY2FzY2FkZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpc3QtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCQ29sIG1kID0gJzgnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1Pk5hbWUgOiB7IHRoaXMucHJvcHMuZGF0YS5naXJsTmFtZSB9PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NREJDb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJDb2wgbWQgPSAnNCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+U3RhcnREYXRlIDogeyB0aGlzLnByb3BzLmRhdGEuc3RhcnREYXRlIH0gPC9oNT4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTURCQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTURCUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJDb2wgbWQgPSAnMyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+UGVyaW9kIDogeyB0aGlzLnByb3BzLmRhdGEuY3ljbGUgfTwvaDU+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01EQkNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQkNvbCBtZCA9ICczJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5NZW5zdHJ1YXRpb24gOiB7IHRoaXMucHJvcHMuZGF0YS5tZW5zdHJ1YXRpb24gfTwvaDU+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01EQkNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQkNvbCBtZCA9ICczJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5DdXJyZW50IDogIHsgQ3VycmVudERheSB9IDwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTURCQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCQ29sIG1kID0gJzMnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1Pk92dWxhdGlvbiA6IHsgdGhpcy5wcm9wcy5kYXRhLm92dWxhdGlvbiB9PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NREJDb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NREJSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQlJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NREJSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L01EQkNvbD5cbiAgICAgICAgICAgICAgICAgICAgPC9NREJSb3c+XG4gICAgICAgICAgICAgICAgICAgIDxNREJSb3cgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LW1kLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1EQkNvbCBtZCA9IFwiMTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5kYXRhID8gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGFydCBvcHRpb25zPXtjaGFydERhdGEub3B0aW9uc30gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJpZXM9e2NoYXJ0RGF0YS5zZXJpZXN9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJhclwiIGhlaWdodD17MzUwfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTURCQ29sPlxuICAgICAgICAgICAgICAgICAgICA8L01EQlJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNREJDb2wgbWQgPSBcIjlcIj48L01EQkNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNREJDb2wgbWQgPSBcIjNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCQnRuIGNsYXNzTmFtZT1cIml0ZW0xXCIgb25DbGljayA9IHt0aGlzLmxvYWRHaXJsRGF0YX0+IFVwZGF0ZSA8L01EQkJ0bj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTURCQ29sPlxuICAgICAgICAgICAgICAgICAgICA8TURCUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1EQk1vZGFsIGlzT3Blbj17dGhpcy5zdGF0ZS5tb2RhbH0gdG9nZ2xlPXt0aGlzLnRvZ2dsZX0gc2l6ZSA9IFwibWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcIml0ZW1UaXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQk1vZGFsSGVhZGVyICB0b2dnbGU9e3RoaXMudG9nZ2xlfT5BZGQgR3JpbDwvTURCTW9kYWxIZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCTW9kYWxCb2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZSA9IHt7bWF4SGVpZ2h0IDogXCI2ODBweFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPVwiY29sLWxnLTYgY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCSW5wdXQgbGFiZWw9XCJOYW1lIDogXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7IHRoaXMuaGFuZGxlQ2hhbmdlIH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9XCJnaXJsTmFtZVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0geyB0aGlzLnN0YXRlLmdpcmxOYW1lIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID1cImNvbC1sZy00IGNvbC1tZC04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCSW5wdXQgbGFiZWw9XCJDeWNsZVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0geyB0aGlzLmhhbmRsZUNoYW5nZSB9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPSBcImN5Y2xlXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7IHRoaXMuc3RhdGUuY3ljbGUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJjb2wtbGctNiBjb2wtbWQtOFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQklucHV0IGxhYmVsPVwiU3RhcnQgRGF0ZVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGUgPSBcInl5eXktbW0tZGRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHsgdGhpcy5oYW5kbGVDaGFuZ2UgfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gXCJzdGFydERhdGVcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHsgdGhpcy5zdGF0ZS5zdGFydERhdGUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImNvbC1sZy00IGNvbC1tZC04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCSW5wdXQgbGFiZWw9XCJPdnVsc3Rpb24gUGVyaW9kXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7IHRoaXMuaGFuZGxlQ2hhbmdlIH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9IFwib3Z1bGF0aW9uXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7IHRoaXMuc3RhdGUub3Z1bGF0aW9uIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwiY29sLWxnLTYgY29sLW1kLThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJJbnB1dCBsYWJlbD1cIk1lbnN0cnVhdGlvbiBQZXJpb2RcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHsgdGhpcy5oYW5kbGVDaGFuZ2UgfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gXCJtZW5zdHJ1YXRpb25cIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHsgIHRoaXMuc3RhdGUubWVuc3RydWF0aW9uIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NREJNb2RhbEJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJNb2RhbEZvb3Rlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJCdG4gY2xhc3NOYW1lID0gXCJpdGVtMVwiIG9uQ2xpY2s9eyB0aGlzLnRvZ2dsZSB9PkNhbmNlbDwvTURCQnRuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQkJ0biBjbGFzc05hbWUgPSBcIml0ZW0xXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljayA9IHsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5naXJsRGF0YVVwZGF0ZSh0aGlzLnN0YXRlKSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXBEYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01EQkJ0bj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NREJNb2RhbEZvb3Rlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L01EQk1vZGFsPlxuICAgICAgICAgICAgICAgICAgICA8L01EQlJvdz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgICBkZWJ1Z2dlclxuICAgIH1cbn1cblxuUE1TQ2hpbGRyZW5Db21wb25lbnQuZGVmYXVsdFByb3BzID0ge1xuICAgIGRhdGEgOiB7fVxuIH07XG4gXG4gUE1TQ2hpbGRyZW5Db21wb25lbnQucHJvcFR5cGVzID0ge1xuICAgICBkYXRhIDogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgZ2lybERhdGFVcGRhdGUgOiBQcm9wVHlwZXMuZnVuY1xuIH07XG4gIl0sInNvdXJjZVJvb3QiOiIifQ==