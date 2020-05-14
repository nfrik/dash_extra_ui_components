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
        modal1: !_this.state.modal1
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
      modal1: false,
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
        debugger;
        colorRed = colorRed.toString(16);
        Colors.push('#' + colorRed + '0000');
      }

      for (var _i = this.props.data.menstruation; _i < this.props.data.cycle - this.props.data.ovulation - 5; _i++) {
        pmsData.push(0);
        Colors.push('#FFFFFF');
      }

      var fertility = 0;
      var colorGreen = 0;

      for (var _i2 = this.props.data.ovulation - 5; _i2 < this.props.data.ovulation; _i2++) {
        fertility += 20;
        pmsData.push(fertility);
        var colorStep = Math.round(255 - 50) / 5;
        colorGreen += Number(colorStep);
        var colorGreenHex = colorGreen.toString(16);
        Colors.push('#00' + colorGreenHex + '00');
      }

      console.log(pmsData);
      console.log(xaxis);
      console.log(Colors);
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
        isOpen: this.state.modal1,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX2V4dHJhX3VpX2NvbXBvbmVudHMvLi9zcmMvbGliL2NvbXBvbmVudHMvUE1TX0NvbXBvbmVudC9QTVNDaGlsZHJlbkNvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJQTVNDaGlsZHJlbkNvbXBvbmVudCIsInByb3BzIiwic2V0U3RhdGUiLCJtb2RhbDEiLCJzdGF0ZSIsImdpcmxOYW1lIiwiZGF0YSIsImN5Y2xlIiwic3RhcnREYXRlIiwib3Z1bGF0aW9uIiwibWVuc3RydWF0aW9uIiwidG9nZ2xlIiwiZXZlbnQiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJ4YXhpcyIsInBtc0RhdGEiLCJDb2xvcnMiLCJDdXJyZW50RGF5IiwiaSIsImRhdGUiLCJEYXRlIiwiY3VycmVudCIsIk1hdGgiLCJjZWlsIiwiTnVtYmVyIiwiZ2V0VGltZSIsIm1pbGxpRGF0ZSIsIm5ld0RhdGUiLCJuZXdEYXRlU3RyaW5nIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwicHVzaCIsImoiLCJzdGVwIiwicm91bmQiLCJDb2xvcnN0ZXAiLCJjb2xvclJlZCIsImNvbnNvbGUiLCJsb2ciLCJ0b1N0cmluZyIsImZlcnRpbGl0eSIsImNvbG9yR3JlZW4iLCJjb2xvclN0ZXAiLCJjb2xvckdyZWVuSGV4IiwiY2hhcnREYXRhIiwidG9vbHRpcCIsInkiLCJmb3JtYXR0ZXIiLCJ5VG9vbHRpcCIsInNlcmllcyIsIm9wdGlvbnMiLCJjaGFydCIsInR5cGUiLCJoZWlnaHQiLCJwbG90T3B0aW9ucyIsImJhciIsImhvcml6b250YWwiLCJjb2x1bW5XaWR0aCIsImRpc3RyaWJ1dGVkIiwibWFya2VycyIsImNvbG9ycyIsImRhdGFMYWJlbHMiLCJlbmFibGVkIiwiY2F0ZWdvcmllcyIsInlheGlzIiwidGl0bGUiLCJ0ZXh0IiwiZmlsbCIsImxlZ2VuZCIsImZpbGxDb2xvcnMiLCJsb2FkR2lybERhdGEiLCJtYXhIZWlnaHQiLCJoYW5kbGVDaGFuZ2UiLCJnaXJsRGF0YVVwZGF0ZSIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7SUFFcUJBLG9COzs7OztBQUNqQixnQ0FBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOOztBQURlLDZEQVlWLFlBQU07QUFDWCxZQUFLQyxRQUFMLENBQWM7QUFDWkMsY0FBTSxFQUFFLENBQUMsTUFBS0MsS0FBTCxDQUFXRDtBQURSLE9BQWQ7QUFHSCxLQWhCa0I7O0FBQUEsbUVBa0JKLFlBQU07QUFDakIsWUFBS0QsUUFBTCxDQUFjO0FBQ1ZHLGdCQUFRLEVBQUcsTUFBS0osS0FBTCxDQUFXSyxJQUFYLENBQWdCRCxRQURqQjtBQUVWRSxhQUFLLEVBQUcsTUFBS04sS0FBTCxDQUFXSyxJQUFYLENBQWdCQyxLQUZkO0FBR1ZDLGlCQUFTLEVBQUcsTUFBS1AsS0FBTCxDQUFXSyxJQUFYLENBQWdCRSxTQUhsQjtBQUlWQyxpQkFBUyxFQUFJLE1BQUtSLEtBQUwsQ0FBV0ssSUFBWCxDQUFnQkcsU0FKbkI7QUFLVkMsb0JBQVksRUFBRyxNQUFLVCxLQUFMLENBQVdLLElBQVgsQ0FBZ0JJO0FBTHJCLE9BQWQ7O0FBT0EsWUFBS0MsTUFBTDtBQUNILEtBM0JrQjs7QUFBQSxtRUE2QkosVUFBQUMsS0FBSyxFQUFJO0FBQ3BCLFlBQUtWLFFBQUwscUJBQWlCVSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsSUFBOUIsRUFBc0NGLEtBQUssQ0FBQ0MsTUFBTixDQUFhRSxLQUFuRDtBQUNILEtBL0JrQjs7QUFFZixVQUFLWCxLQUFMLEdBQWM7QUFDVkQsWUFBTSxFQUFHLEtBREM7QUFFVkUsY0FBUSxFQUFHLEVBRkQ7QUFHVkUsV0FBSyxFQUFHLEVBSEU7QUFJVkMsZUFBUyxFQUFHLEVBSkY7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LGlEQUFEO0FBQVUsYUFBSyxFQUFDLHFCQUFoQjtBQUFzQyxnQkFBUSxFQUFLLEtBQUtpRSxZQUF4RDtBQUF1RSxZQUFJLEVBQUcsY0FBOUU7QUFBNkYsYUFBSyxFQUFNLEtBQUt0RSxLQUFMLENBQVdNO0FBQW5ILFFBREosQ0FESixDQWpCSixDQURKLENBSkosZUE2QkksMkRBQUMsdURBQUQscUJBQ0ksMkRBQUMsK0NBQUQ7QUFBUSxpQkFBUyxFQUFHLE9BQXBCO0FBQTRCLGVBQU8sRUFBRyxLQUFLQztBQUEzQyxrQkFESixlQUVJLDJEQUFDLCtDQUFEO0FBQVEsaUJBQVMsRUFBRyxPQUFwQjtBQUNJLGVBQU8sRUFBSSxtQkFBTTtBQUNiLGdCQUFJLENBQUNBLE1BQUw7O0FBQ0EsZ0JBQUksQ0FBQ1YsS0FBTCxDQUFXMEUsY0FBWCxDQUEwQixNQUFJLENBQUN2RSxLQUEvQjtBQUNIO0FBSkwsa0JBRkosQ0E3QkosQ0FESixDQURKLENBOUNKLENBREosQ0FESjtBQStGSDs7OztFQXBONkN3RSwrQzs7O0FBdU5sRDVFLG9CQUFvQixDQUFDNkUsWUFBckIsR0FBb0M7QUFDaEN2RSxNQUFJLEVBQUc7QUFEeUIsQ0FBcEM7QUFJQ04sb0JBQW9CLENBQUM4RSxTQUFyQixHQUFpQztBQUM3QnhFLE1BQUksRUFBR3lFLGlEQUFTLENBQUNDLE1BRFk7QUFFN0JMLGdCQUFjLEVBQUdJLGlEQUFTLENBQUNFO0FBRkUsQ0FBakMsQyIsImZpbGUiOiJmNzMxMzMwLW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCAnYm9vdHN0cmFwLWNzcy1vbmx5L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XG5pbXBvcnQgJ21kYnJlYWN0L2Rpc3QvY3NzL21kYi5jc3MnO1xuaW1wb3J0ICcuL1BNU0NvbXBvbmVudC5jc3MnXG5pbXBvcnQgeyBNREJDb250YWluZXIsIE1EQlJvdywgTURCQ29sLCBNREJJbnB1dCwgTURCTW9kYWxGb290ZXIsIE1EQkJ0biwgTURCTW9kYWwsIE1EQk1vZGFsSGVhZGVyLCBNREJNb2RhbEJvZHkgfSBmcm9tIFwibWRicmVhY3RcIjtcblxuaW1wb3J0IENoYXJ0IGZyb20gJ3JlYWN0LWFwZXhjaGFydHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBNU0NoaWxkcmVuQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSAoe1xuICAgICAgICAgICAgbW9kYWwxIDogZmFsc2UsXG4gICAgICAgICAgICBnaXJsTmFtZSA6IFwiXCIsIFxuICAgICAgICAgICAgY3ljbGUgOiBcIlwiLFxuICAgICAgICAgICAgc3RhcnREYXRlIDogXCJcIixcbiAgICAgICAgICAgIG92dWxhdGlvbiAgOiBcIlwiLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgbWVuc3RydWF0aW9uIDogXCJcIixcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICB0b2dnbGUgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIG1vZGFsMTogIXRoaXMuc3RhdGUubW9kYWwxXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxvYWRHaXJsRGF0YSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBnaXJsTmFtZSA6IHRoaXMucHJvcHMuZGF0YS5naXJsTmFtZSxcbiAgICAgICAgICAgIGN5Y2xlIDogdGhpcy5wcm9wcy5kYXRhLmN5Y2xlLFxuICAgICAgICAgICAgc3RhcnREYXRlIDogdGhpcy5wcm9wcy5kYXRhLnN0YXJ0RGF0ZSxcbiAgICAgICAgICAgIG92dWxhdGlvbiAgOiB0aGlzLnByb3BzLmRhdGEub3Z1bGF0aW9uLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgbWVuc3RydWF0aW9uIDogdGhpcy5wcm9wcy5kYXRhLm1lbnN0cnVhdGlvbixcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy50b2dnbGUoKVxuICAgIH1cblxuICAgIGhhbmRsZUNoYW5nZSA9IGV2ZW50ID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFtldmVudC50YXJnZXQubmFtZV0gOiBldmVudC50YXJnZXQudmFsdWUgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB2YXIgeGF4aXMgID0gW11cbiAgICAgICAgdmFyIHBtc0RhdGEgPSBbXVxuICAgICAgICB2YXIgQ29sb3JzID0gW11cbiAgICAgICAgdmFyIEN1cnJlbnREYXkgPSAwXG4gICAgXG4gICAgICAgIGZvciggbGV0IGkgPSAwOyBpIDwgKCB0aGlzLnByb3BzLmRhdGEuY3ljbGUgLSB0aGlzLnByb3BzLmRhdGEub3Z1bGF0aW9uICk7IGkrKyl7XG4gICAgICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKHRoaXMucHJvcHMuZGF0YS5zdGFydERhdGUpXG4gICAgICAgICAgICBsZXQgY3VycmVudCA9IG5ldyBEYXRlKClcbiAgICAgICAgICAgIEN1cnJlbnREYXkgPSBNYXRoLmNlaWwoTnVtYmVyKGN1cnJlbnQuZ2V0VGltZSgpIC0gZGF0ZS5nZXRUaW1lKCkpIC8gODY0MDAwMDApXG4gICAgICAgICAgICBsZXQgbWlsbGlEYXRlID0gZGF0ZS5nZXRUaW1lKCkgKyA4NjQwMDAwMCAqIChpICsgMSlcbiAgICAgICAgICAgIGxldCBuZXdEYXRlID0gbmV3IERhdGUobWlsbGlEYXRlKVxuICAgICAgICAgICAgbGV0IG5ld0RhdGVTdHJpbmcgPSBcIlwiICsgKG5ld0RhdGUuZ2V0TW9udGgoKSsxKSArIFwiLVwiICsgbmV3RGF0ZS5nZXREYXRlKClcbiAgICAgICAgICAgIHhheGlzLnB1c2gobmV3RGF0ZVN0cmluZylcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciggbGV0IGogPSAwOyBqIDwgdGhpcy5wcm9wcy5kYXRhLm1lbnN0cnVhdGlvbjsgaisrICkge1xuICAgICAgICAgICAgbGV0IHN0ZXAgPSAxMDAvdGhpcy5wcm9wcy5kYXRhLm1lbnN0cnVhdGlvbjtcbiAgICAgICAgICAgIHBtc0RhdGEucHVzaCggTWF0aC5yb3VuZCgxMDAgLSBqICogc3RlcCkgKVxuXG4gICAgICAgICAgICBsZXQgQ29sb3JzdGVwID0gKDI1NSAtIDUwKSAvIHRoaXMucHJvcHMuZGF0YS5tZW5zdHJ1YXRpb25cbiAgICAgICAgICAgIGxldCBjb2xvclJlZCA9IE1hdGgucm91bmQoIDI1NSAtIENvbG9yc3RlcCAqIGogKVxuICAgICAgICAgICAgY29uc29sZS5sb2coY29sb3JSZWQpXG4gICAgICAgICAgICBkZWJ1Z2dlclxuICAgICAgICAgICAgY29sb3JSZWQgPSBjb2xvclJlZC50b1N0cmluZygxNilcbiAgICAgICAgICAgIENvbG9ycy5wdXNoKCcjJysgY29sb3JSZWQrJzAwMDAnKVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yKGxldCBpID0gdGhpcy5wcm9wcy5kYXRhLm1lbnN0cnVhdGlvbjsgaSA8ICh0aGlzLnByb3BzLmRhdGEuY3ljbGUtIHRoaXMucHJvcHMuZGF0YS5vdnVsYXRpb24pIC0gNSA7IGkgKyspe1xuICAgICAgICAgICAgcG1zRGF0YS5wdXNoKDApXG4gICAgICAgICAgICBDb2xvcnMucHVzaCgnI0ZGRkZGRicpXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHZhciBmZXJ0aWxpdHkgPSAwXG4gICAgICAgIHZhciBjb2xvckdyZWVuID0gMFxuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5wcm9wcy5kYXRhLm92dWxhdGlvbiAtIDU7IGkgPCB0aGlzLnByb3BzLmRhdGEub3Z1bGF0aW9uIDsgaSsrKXtcbiAgICAgICAgICAgIGZlcnRpbGl0eSArPSAyMDtcbiAgICAgICAgICAgIHBtc0RhdGEucHVzaChmZXJ0aWxpdHkpXG5cbiAgICAgICAgICAgIGxldCBjb2xvclN0ZXAgPSBNYXRoLnJvdW5kKDI1NSAtIDUwKSAvIDU7XG4gICAgICAgICAgICBjb2xvckdyZWVuICs9ICBOdW1iZXIoY29sb3JTdGVwKVxuICAgICAgICAgICAgbGV0IGNvbG9yR3JlZW5IZXggPSBjb2xvckdyZWVuLnRvU3RyaW5nKDE2KVxuICAgICAgICAgICAgQ29sb3JzLnB1c2goJyMwMCcgKyBjb2xvckdyZWVuSGV4ICsgJzAwJylcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKHBtc0RhdGEpXG4gICAgICAgIGNvbnNvbGUubG9nKHhheGlzKVxuICAgICAgICBjb25zb2xlLmxvZyhDb2xvcnMpXG4gICAgICAgIHZhciBjaGFydERhdGEgPSB7XG4gICAgICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgICAgICAgeToge1xuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZXI6ICh2YWx1ZSkgPT4geyBsZXQgeVRvb2x0aXAgPSB2YWx1ZSArIFwiJVwiOyByZXR1cm4geVRvb2x0aXAgfSxcbiAgICAgICAgICAgICAgICB9LCAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VyaWVzOiBbe1xuICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgZGF0YTogcG1zRGF0YVxuICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgY2hhcnQ6IHsgdHlwZTogJ2JhcicsIGhlaWdodDogMzUwIH0sXG4gICAgICAgICAgICAgICAgcGxvdE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgYmFyOiB7IGhvcml6b250YWw6IGZhbHNlLCBjb2x1bW5XaWR0aDogJzk4JScsIGRpc3RyaWJ1dGVkIDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IFsnI0ZGMDAwMCcsICcjRDAwMDAwJywgJyMwMDAwJywgJyMwMDAwJywgJyM1NTAwMDAnXVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZGF0YUxhYmVsczogeyBlbmFibGVkOiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgeGF4aXM6IHsgY2F0ZWdvcmllczogeGF4aXMgfSxcbiAgICAgICAgICAgICAgICB5YXhpczoge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogeyB0ZXh0OiAnJyB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9ycyA6IENvbG9ycyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgICAgICBtYXJrZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsQ29sb3JzOiBDb2xvcnMsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgY2FyZC1jYXNjYWRlIG5hcnJvd2VyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keSBjYXJkLWJvZHktY2FzY2FkZVwiPlxuICAgICAgICAgICAgICAgICAgICA8TURCUm93IGNsYXNzTmFtZT1cIiBqdXN0aWZ5LWNvbnRlbnQtbWQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TURCQ29sIG1kPVwiMTJcIiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbVRpdGxlIGNhcmQgY2FyZC1jYXNjYWRlIG5hcnJvd2VyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHkgY2FyZC1ib2R5LWNhc2NhZGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaXN0LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQlJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQkNvbCBtZCA9ICc4Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5OYW1lIDogeyB0aGlzLnByb3BzLmRhdGEuZ2lybE5hbWUgfTwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTURCQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCQ29sIG1kID0gJzQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PlN0YXJ0RGF0ZSA6IHsgdGhpcy5wcm9wcy5kYXRhLnN0YXJ0RGF0ZSB9IDwvaDU+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01EQkNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01EQlJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCQ29sIG1kID0gJzMnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PlBlcmlvZCA6IHsgdGhpcy5wcm9wcy5kYXRhLmN5Y2xlIH08L2g1PiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NREJDb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJDb2wgbWQgPSAnMyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+TWVuc3RydWF0aW9uIDogeyB0aGlzLnByb3BzLmRhdGEubWVuc3RydWF0aW9uIH08L2g1PiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NREJDb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJDb2wgbWQgPSAnMyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+Q3VycmVudCA6ICB7IEN1cnJlbnREYXkgfSA8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01EQkNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQkNvbCBtZCA9ICczJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5PdnVsYXRpb24gOiB7IHRoaXMucHJvcHMuZGF0YS5vdnVsYXRpb24gfTwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTURCQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTURCUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTURCUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NREJDb2w+XG4gICAgICAgICAgICAgICAgICAgIDwvTURCUm93PlxuICAgICAgICAgICAgICAgICAgICA8TURCUm93IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1tZC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNREJDb2wgbWQgPSBcIjExXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZGF0YSA/IDxDaGFydCBvcHRpb25zPXtjaGFydERhdGEub3B0aW9uc30gc2VyaWVzPXtjaGFydERhdGEuc2VyaWVzfSB0eXBlPVwiYmFyXCIgaGVpZ2h0PXszNTB9IC8+IDpcIlwifVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NREJDb2w+XG4gICAgICAgICAgICAgICAgICAgIDwvTURCUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1EQkNvbCBtZCA9IFwiOVwiPjwvTURCQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1EQkNvbCBtZCA9IFwiM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJCdG4gY2xhc3NOYW1lPVwiaXRlbTFcIiBvbkNsaWNrID0ge3RoaXMubG9hZEdpcmxEYXRhfT4gVXBkYXRlIDwvTURCQnRuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NREJDb2w+XG4gICAgICAgICAgICAgICAgICAgIDxNREJSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TURCTW9kYWwgaXNPcGVuPXt0aGlzLnN0YXRlLm1vZGFsMX0gdG9nZ2xlPXt0aGlzLnRvZ2dsZX0gc2l6ZSA9IFwibWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcIml0ZW1UaXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQk1vZGFsSGVhZGVyICB0b2dnbGU9e3RoaXMudG9nZ2xlfT5BZGQgR3JpbDwvTURCTW9kYWxIZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCTW9kYWxCb2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZSA9IHt7bWF4SGVpZ2h0IDogXCI2ODBweFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPVwiY29sLWxnLTYgY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCSW5wdXQgbGFiZWw9XCJOYW1lIDogXCIgb25DaGFuZ2UgPSB7IHRoaXMuaGFuZGxlQ2hhbmdlIH0gbmFtZSA9XCJnaXJsTmFtZVwiIHZhbHVlID0geyB0aGlzLnN0YXRlLmdpcmxOYW1lIH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9XCJjb2wtbGctNCBjb2wtbWQtOFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQklucHV0IGxhYmVsPVwiQ3ljbGVcIiBvbkNoYW5nZSA9IHsgdGhpcy5oYW5kbGVDaGFuZ2UgfSBuYW1lID0gXCJjeWNsZVwiIHZhbHVlID0geyB0aGlzLnN0YXRlLmN5Y2xlIH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImNvbC1sZy02IGNvbC1tZC04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCSW5wdXQgbGFiZWw9XCJTdGFydCBEYXRlXCIgcGxhY2Vob2xkZSA9IFwieXl5eS1tbS1kZFwiIG9uQ2hhbmdlID0geyB0aGlzLmhhbmRsZUNoYW5nZSB9IG5hbWUgPSBcInN0YXJ0RGF0ZVwiIHZhbHVlID0geyB0aGlzLnN0YXRlLnN0YXJ0RGF0ZSB9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImNvbC1sZy00IGNvbC1tZC04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCSW5wdXQgbGFiZWw9XCJPdnVsc3Rpb24gUGVyaW9kXCIgb25DaGFuZ2UgPSB7IHRoaXMuaGFuZGxlQ2hhbmdlIH0gbmFtZSA9IFwib3Z1bGF0aW9uXCIgdmFsdWUgPSB7IHRoaXMuc3RhdGUub3Z1bGF0aW9uIH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImNvbC1sZy02IGNvbC1tZC04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCSW5wdXQgbGFiZWw9XCJNZW5zdHJ1YXRpb24gUGVyaW9kXCIgb25DaGFuZ2UgPSB7IHRoaXMuaGFuZGxlQ2hhbmdlIH0gbmFtZSA9IFwibWVuc3RydWF0aW9uXCIgdmFsdWUgPSB7ICB0aGlzLnN0YXRlLm1lbnN0cnVhdGlvbiB9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01EQk1vZGFsQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQk1vZGFsRm9vdGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQkJ0biBjbGFzc05hbWUgPSBcIml0ZW0xXCIgb25DbGljaz17IHRoaXMudG9nZ2xlIH0+Q2FuY2VsPC9NREJCdG4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCQnRuIGNsYXNzTmFtZSA9IFwiaXRlbTFcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrID0geygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmdpcmxEYXRhVXBkYXRlKHRoaXMuc3RhdGUpIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVcERhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTURCQnRuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01EQk1vZGFsRm9vdGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTURCTW9kYWw+XG4gICAgICAgICAgICAgICAgICAgIDwvTURCUm93PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5QTVNDaGlsZHJlbkNvbXBvbmVudC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgZGF0YSA6IHt9XG4gfTtcbiBcbiBQTVNDaGlsZHJlbkNvbXBvbmVudC5wcm9wVHlwZXMgPSB7XG4gICAgIGRhdGEgOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICBnaXJsRGF0YVVwZGF0ZSA6IFByb3BUeXBlcy5mdW5jXG4gfTtcbiAiXSwic291cmNlUm9vdCI6IiJ9