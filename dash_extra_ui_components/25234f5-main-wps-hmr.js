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
        className: "justify-content-md-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBCol"], {
        md: "11"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBCol"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX2V4dHJhX3VpX2NvbXBvbmVudHMvLi9zcmMvbGliL2NvbXBvbmVudHMvUE1TX0NvbXBvbmVudC9QTVNDaGlsZHJlbkNvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJQTVNDaGlsZHJlbkNvbXBvbmVudCIsInByb3BzIiwic2V0U3RhdGUiLCJtb2RhbCIsInN0YXRlIiwiZ2lybE5hbWUiLCJkYXRhIiwiY3ljbGUiLCJzdGFydERhdGUiLCJvdnVsYXRpb24iLCJtZW5zdHJ1YXRpb24iLCJ0b2dnbGUiLCJldmVudCIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInhheGlzIiwicG1zRGF0YSIsIkNvbG9ycyIsIkN1cnJlbnREYXkiLCJpIiwiZGF0ZSIsIkRhdGUiLCJjdXJyZW50IiwiTWF0aCIsImNlaWwiLCJOdW1iZXIiLCJnZXRUaW1lIiwibWlsbGlEYXRlIiwibmV3RGF0ZSIsIm5ld0RhdGVTdHJpbmciLCJnZXRNb250aCIsImdldERhdGUiLCJwdXNoIiwiaiIsInN0ZXAiLCJyb3VuZCIsIkNvbG9yc3RlcCIsImNvbG9yUmVkIiwiY29uc29sZSIsImxvZyIsInRvU3RyaW5nIiwiayIsImZlcnRpbGl0eSIsImNvbG9yR3JlZW4iLCJsIiwiY29sb3JTdGVwIiwiY29sb3JHcmVlbkhleCIsImNoYXJ0RGF0YSIsInRvb2x0aXAiLCJ5IiwiZm9ybWF0dGVyIiwieVRvb2x0aXAiLCJzZXJpZXMiLCJvcHRpb25zIiwiY2hhcnQiLCJ0eXBlIiwiaGVpZ2h0IiwicGxvdE9wdGlvbnMiLCJiYXIiLCJob3Jpem9udGFsIiwiY29sdW1uV2lkdGgiLCJkaXN0cmlidXRlZCIsIm1hcmtlcnMiLCJjb2xvcnMiLCJkYXRhTGFiZWxzIiwiZW5hYmxlZCIsImNhdGVnb3JpZXMiLCJ5YXhpcyIsInRpdGxlIiwidGV4dCIsImZpbGwiLCJsZWdlbmQiLCJmaWxsQ29sb3JzIiwibG9hZEdpcmxEYXRhIiwibWF4SGVpZ2h0IiwiaGFuZGxlQ2hhbmdlIiwiZ2lybERhdGFVcGRhdGUiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0lBRXFCQSxvQjs7Ozs7QUFDakIsZ0NBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjs7QUFEZSw2REFZVixZQUFNO0FBQ1gsWUFBS0MsUUFBTCxDQUFjO0FBQ1pDLGFBQUssRUFBRSxDQUFDLE1BQUtDLEtBQUwsQ0FBV0Q7QUFEUCxPQUFkO0FBR0gsS0FoQmtCOztBQUFBLG1FQWtCSixZQUFNO0FBQ2pCLFlBQUtELFFBQUwsQ0FBYztBQUNWRyxnQkFBUSxFQUFHLE1BQUtKLEtBQUwsQ0FBV0ssSUFBWCxDQUFnQkQsUUFEakI7QUFFVkUsYUFBSyxFQUFHLE1BQUtOLEtBQUwsQ0FBV0ssSUFBWCxDQUFnQkMsS0FGZDtBQUdWQyxpQkFBUyxFQUFHLE1BQUtQLEtBQUwsQ0FBV0ssSUFBWCxDQUFnQkUsU0FIbEI7QUFJVkMsaUJBQVMsRUFBSSxNQUFLUixLQUFMLENBQVdLLElBQVgsQ0FBZ0JHLFNBSm5CO0FBS1ZDLG9CQUFZLEVBQUcsTUFBS1QsS0FBTCxDQUFXSyxJQUFYLENBQWdCSTtBQUxyQixPQUFkOztBQU9BLFlBQUtDLE1BQUw7QUFDSCxLQTNCa0I7O0FBQUEsbUVBNkJKLFVBQUFDLEtBQUssRUFBSTtBQUNwQixZQUFLVixRQUFMLHFCQUFpQlUsS0FBSyxDQUFDQyxNQUFOLENBQWFDLElBQTlCLEVBQXNDRixLQUFLLENBQUNDLE1BQU4sQ0FBYUUsS0FBbkQ7QUFDSCxLQS9Ca0I7O0FBRWYsVUFBS1gsS0FBTCxHQUFjO0FBQ1ZELFdBQUssRUFBRyxLQURFO0FBRVZFLGNBQVEsRUFBRyxFQUZEO0FBR1ZFLFdBQUssRUFBRyxFQUhFO0FBSVZDLGVBQVMsRUFBRyxFQUpGO0FBS1ZDLGVBQVMsRUFBSSxFQUxIO0FBTVZDLGtCQUFZLEVBQUc7QUFOTCxLQUFkO0FBRmU7QUFVbEI7Ozs7NkJBdUJRO0FBQUE7O0FBQ0wsVUFBSU0sS0FBSyxHQUFJLEVBQWI7QUFDQSxVQUFJQyxPQUFPLEdBQUcsRUFBZDtBQUNBLFVBQUlDLE1BQU0sR0FBRyxFQUFiO0FBQ0EsVUFBSUMsVUFBVSxHQUFHLENBQWpCOztBQUVBLFdBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBSyxLQUFLbkIsS0FBTCxDQUFXSyxJQUFYLENBQWdCQyxLQUFoQixHQUF3QixLQUFLTixLQUFMLENBQVdLLElBQVgsQ0FBZ0JHLFNBQTlELEVBQTJFVyxDQUFDLEVBQTVFLEVBQStFO0FBQzNFLFlBQUlDLElBQUksR0FBRyxJQUFJQyxJQUFKLENBQVMsS0FBS3JCLEtBQUwsQ0FBV0ssSUFBWCxDQUFnQkUsU0FBekIsQ0FBWDtBQUNBLFlBQUllLE9BQU8sR0FBRyxJQUFJRCxJQUFKLEVBQWQ7QUFDQUgsa0JBQVUsR0FBR0ssSUFBSSxDQUFDQyxJQUFMLENBQVVDLE1BQU0sQ0FBQ0gsT0FBTyxDQUFDSSxPQUFSLEtBQW9CTixJQUFJLENBQUNNLE9BQUwsRUFBckIsQ0FBTixHQUE2QyxRQUF2RCxDQUFiO0FBQ0EsWUFBSUMsU0FBUyxHQUFHUCxJQUFJLENBQUNNLE9BQUwsS0FBaUIsWUFBWVAsQ0FBQyxHQUFHLENBQWhCLENBQWpDO0FBQ0EsWUFBSVMsT0FBTyxHQUFHLElBQUlQLElBQUosQ0FBU00sU0FBVCxDQUFkO0FBQ0EsWUFBSUUsYUFBYSxHQUFHLE1BQU1ELE9BQU8sQ0FBQ0UsUUFBUixLQUFtQixDQUF6QixJQUE4QixHQUE5QixHQUFvQ0YsT0FBTyxDQUFDRyxPQUFSLEVBQXhEO0FBQ0FoQixhQUFLLENBQUNpQixJQUFOLENBQVdILGFBQVg7QUFDSDs7QUFFRCxXQUFLLElBQUlJLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS2pDLEtBQUwsQ0FBV0ssSUFBWCxDQUFnQkksWUFBcEMsRUFBa0R3QixDQUFDLEVBQW5ELEVBQXdEO0FBQ3BELFlBQUlDLElBQUksR0FBRyxNQUFJLEtBQUtsQyxLQUFMLENBQVdLLElBQVgsQ0FBZ0JJLFlBQS9CO0FBQ0FPLGVBQU8sQ0FBQ2dCLElBQVIsQ0FBY1QsSUFBSSxDQUFDWSxLQUFMLENBQVcsTUFBTUYsQ0FBQyxHQUFHQyxJQUFyQixDQUFkO0FBRUEsWUFBSUUsU0FBUyxHQUFHLENBQUMsTUFBTSxFQUFQLElBQWEsS0FBS3BDLEtBQUwsQ0FBV0ssSUFBWCxDQUFnQkksWUFBN0M7QUFDQSxZQUFJNEIsUUFBUSxHQUFHZCxJQUFJLENBQUNZLEtBQUwsQ0FBWSxNQUFNQyxTQUFTLEdBQUdILENBQTlCLENBQWY7QUFDQUssZUFBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVo7QUFDQUEsZ0JBQVEsR0FBR0EsUUFBUSxDQUFDRyxRQUFULENBQWtCLEVBQWxCLENBQVg7QUFDQXZCLGNBQU0sQ0FBQ2UsSUFBUCxDQUFZLE1BQUtLLFFBQUwsR0FBYyxNQUExQjtBQUNIOztBQUVELFdBQUksSUFBSUksQ0FBQyxHQUFHLEtBQUt6QyxLQUFMLENBQVdLLElBQVgsQ0FBZ0JJLFlBQTVCLEVBQTBDZ0MsQ0FBQyxHQUFHLEtBQUt6QyxLQUFMLENBQVdLLElBQVgsQ0FBZ0JDLEtBQWhCLEdBQXdCLEtBQUtOLEtBQUwsQ0FBV0ssSUFBWCxDQUFnQkcsU0FBeEMsR0FBb0QsQ0FBbEcsRUFBc0dpQyxDQUFDLEVBQXZHLEVBQTJHO0FBQ3ZHekIsZUFBTyxDQUFDZ0IsSUFBUixDQUFhLENBQWI7QUFDQWYsY0FBTSxDQUFDZSxJQUFQLENBQVksU0FBWjtBQUNIOztBQUVELFVBQUlVLFNBQVMsR0FBRyxDQUFoQjtBQUNBLFVBQUlDLFVBQVUsR0FBRyxDQUFqQjs7QUFFQSxXQUFLLElBQUlDLENBQUMsR0FBRyxLQUFLNUMsS0FBTCxDQUFXSyxJQUFYLENBQWdCRyxTQUFoQixHQUE0QixDQUF6QyxFQUE0Q29DLENBQUMsR0FBRyxLQUFLNUMsS0FBTCxDQUFXSyxJQUFYLENBQWdCRyxTQUFoRSxFQUE0RW9DLENBQUMsRUFBN0UsRUFBZ0Y7QUFDNUVGLGlCQUFTLElBQUksRUFBYjtBQUNBMUIsZUFBTyxDQUFDZ0IsSUFBUixDQUFhVSxTQUFiO0FBRUEsWUFBSUcsU0FBUyxHQUFHdEIsSUFBSSxDQUFDWSxLQUFMLENBQVcsTUFBTSxFQUFqQixJQUF1QixDQUF2QztBQUNBUSxrQkFBVSxJQUFLbEIsTUFBTSxDQUFDb0IsU0FBRCxDQUFyQjtBQUNBLFlBQUlDLGFBQWEsR0FBR0gsVUFBVSxDQUFDSCxRQUFYLENBQW9CLEVBQXBCLENBQXBCO0FBQ0F2QixjQUFNLENBQUNlLElBQVAsQ0FBWSxRQUFRYyxhQUFSLEdBQXdCLElBQXBDO0FBQ0g7O0FBRUQsVUFBSUMsU0FBUyxHQUFHO0FBQ1pDLGVBQU8sRUFBRTtBQUNMQyxXQUFDLEVBQUU7QUFDQ0MscUJBQVMsRUFBRSxtQkFBQ3BDLEtBQUQsRUFBVztBQUFFLGtCQUFJcUMsUUFBUSxHQUFHckMsS0FBSyxHQUFHLEdBQXZCO0FBQTRCLHFCQUFPcUMsUUFBUDtBQUFpQjtBQUR0RTtBQURFLFNBREc7QUFNWkMsY0FBTSxFQUFFLENBQUM7QUFDUHZDLGNBQUksRUFBRSxFQURDO0FBRVBSLGNBQUksRUFBRVc7QUFGQyxTQUFELENBTkk7QUFVWnFDLGVBQU8sRUFBRTtBQUNMQyxlQUFLLEVBQUU7QUFBRUMsZ0JBQUksRUFBRSxLQUFSO0FBQWVDLGtCQUFNLEVBQUU7QUFBdkIsV0FERjtBQUVMQyxxQkFBVyxFQUFFO0FBQ1RDLGVBQUcsRUFBRTtBQUFFQyx3QkFBVSxFQUFFLEtBQWQ7QUFBcUJDLHlCQUFXLEVBQUUsS0FBbEM7QUFBeUNDLHlCQUFXLEVBQUcsSUFBdkQ7QUFDREMscUJBQU8sRUFBRTtBQUNMQyxzQkFBTSxFQUFFLENBQUMsU0FBRCxFQUFZLFNBQVosRUFBdUIsT0FBdkIsRUFBZ0MsT0FBaEMsRUFBeUMsU0FBekM7QUFESDtBQURSO0FBREksV0FGUjtBQVNMQyxvQkFBVSxFQUFFO0FBQUVDLG1CQUFPLEVBQUU7QUFBWCxXQVRQO0FBVUxsRCxlQUFLLEVBQUU7QUFBRW1ELHNCQUFVLEVBQUVuRDtBQUFkLFdBVkY7QUFXTG9ELGVBQUssRUFBRTtBQUNIQyxpQkFBSyxFQUFFO0FBQUVDLGtCQUFJLEVBQUU7QUFBUjtBQURKLFdBWEY7QUFjTEMsY0FBSSxFQUFFO0FBQ0ZQLGtCQUFNLEVBQUc5QztBQURQLFdBZEQ7QUFpQkxzRCxnQkFBTSxFQUFFO0FBQ0pULG1CQUFPLEVBQUU7QUFDTFUsd0JBQVUsRUFBRXZEO0FBRFA7QUFETDtBQWpCSDtBQVZHLE9BQWhCO0FBbUNBLDBCQUNJO0FBQUssaUJBQU07QUFBWCxzQkFDSTtBQUFLLGlCQUFNO0FBQVgsc0JBcUNJLDJEQUFDLCtDQUFEO0FBQVEsaUJBQVMsRUFBQztBQUFsQixzQkFDSSwyREFBQywrQ0FBRDtBQUFRLFVBQUUsRUFBRztBQUFiLFFBREosQ0FyQ0osZUFpRFEsMkRBQUMsK0NBQUQ7QUFBUSxVQUFFLEVBQUc7QUFBYixRQWpEUixlQWtEUSwyREFBQywrQ0FBRDtBQUFRLFVBQUUsRUFBRztBQUFiLHNCQUNJLDJEQUFDLCtDQUFEO0FBQVEsaUJBQVMsRUFBQyxPQUFsQjtBQUEwQixlQUFPLEVBQUksS0FBS3dEO0FBQTFDLG9CQURKLENBbERSLGVBcURJLDJEQUFDLCtDQUFELHFCQUNJLDJEQUFDLGlEQUFEO0FBQVUsY0FBTSxFQUFFLEtBQUt0RSxLQUFMLENBQVdELEtBQTdCO0FBQW9DLGNBQU0sRUFBRSxLQUFLUSxNQUFqRDtBQUF5RCxZQUFJLEVBQUc7QUFBaEUsc0JBQ0ksc0ZBQ0k7QUFBSyxpQkFBUyxFQUFHO0FBQWpCLHNCQUNJLDJEQUFDLHVEQUFEO0FBQWlCLGNBQU0sRUFBRSxLQUFLQTtBQUE5QixvQkFESixDQURKLGVBSUksMkRBQUMscURBQUQscUJBQ0k7QUFBSyxhQUFLLEVBQUk7QUFBQ2dFLG1CQUFTLEVBQUc7QUFBYjtBQUFkLHNCQUNJO0FBQUssaUJBQVE7QUFBYixzQkFDSTtBQUFLLGlCQUFPO0FBQVosc0JBQ0ksMkRBQUMsaURBQUQ7QUFBVSxhQUFLLEVBQUMsU0FBaEI7QUFDSSxnQkFBUSxFQUFLLEtBQUtDLFlBRHRCO0FBRUksWUFBSSxFQUFFLFVBRlY7QUFHSSxhQUFLLEVBQUssS0FBS3hFLEtBQUwsQ0FBV0M7QUFIekIsUUFESixDQURKLGVBUUk7QUFBSyxpQkFBTztBQUFaLHNCQUNJLDJEQUFDLGlEQUFEO0FBQVUsYUFBSyxFQUFDLE9BQWhCO0FBQ0ksZ0JBQVEsRUFBSyxLQUFLdUUsWUFEdEI7QUFFSSxZQUFJLEVBQUcsT0FGWDtBQUdJLGFBQUssRUFBSyxLQUFLeEUsS0FBTCxDQUFXRztBQUh6QixRQURKLENBUkosQ0FESixlQWlCSTtBQUFLLGlCQUFTLEVBQUc7QUFBakIsc0JBQ0k7QUFBSyxpQkFBUTtBQUFiLHNCQUNJLDJEQUFDLGlEQUFEO0FBQVUsYUFBSyxFQUFDLFlBQWhCO0FBQ0ksa0JBQVUsRUFBRyxZQURqQjtBQUVJLGdCQUFRLEVBQUssS0FBS3FFLFlBRnRCO0FBR0ksWUFBSSxFQUFHLFdBSFg7QUFJSSxhQUFLLEVBQUssS0FBS3hFLEtBQUwsQ0FBV0k7QUFKekIsUUFESixDQURKLGVBU0k7QUFBSyxpQkFBUTtBQUFiLHNCQUNJLDJEQUFDLGlEQUFEO0FBQVUsYUFBSyxFQUFDLGtCQUFoQjtBQUNJLGdCQUFRLEVBQUssS0FBS29FLFlBRHRCO0FBRUksWUFBSSxFQUFHLFdBRlg7QUFHSSxhQUFLLEVBQUssS0FBS3hFLEtBQUwsQ0FBV0s7QUFIekIsUUFESixDQVRKLENBakJKLGVBa0NJO0FBQUssaUJBQVE7QUFBYixzQkFDSTtBQUFLLGlCQUFRO0FBQWIsc0JBQ0ksMkRBQUMsaURBQUQ7QUFBVSxhQUFLLEVBQUMscUJBQWhCO0FBQ0ksZ0JBQVEsRUFBSyxLQUFLbUUsWUFEdEI7QUFFSSxZQUFJLEVBQUcsY0FGWDtBQUdJLGFBQUssRUFBTSxLQUFLeEUsS0FBTCxDQUFXTTtBQUgxQixRQURKLENBREosQ0FsQ0osQ0FESixDQUpKLGVBa0RJLDJEQUFDLHVEQUFELHFCQUNJLDJEQUFDLCtDQUFEO0FBQVEsaUJBQVMsRUFBRyxPQUFwQjtBQUE0QixlQUFPLEVBQUcsS0FBS0M7QUFBM0Msa0JBREosZUFFSSwyREFBQywrQ0FBRDtBQUFRLGlCQUFTLEVBQUcsT0FBcEI7QUFDSSxlQUFPLEVBQUksbUJBQU07QUFDYixnQkFBSSxDQUFDQSxNQUFMOztBQUNBLGdCQUFJLENBQUNWLEtBQUwsQ0FBVzRFLGNBQVgsQ0FBMEIsTUFBSSxDQUFDekUsS0FBL0I7QUFDSDtBQUpMLGtCQUZKLENBbERKLENBREosQ0FESixDQXJESixDQURKLENBREo7QUEySEg7Ozs7RUE3TzZDMEUsK0M7OztBQWdQbEQ5RSxvQkFBb0IsQ0FBQytFLFlBQXJCLEdBQW9DO0FBQ2hDekUsTUFBSSxFQUFHO0FBRHlCLENBQXBDO0FBSUNOLG9CQUFvQixDQUFDZ0YsU0FBckIsR0FBaUM7QUFDN0IxRSxNQUFJLEVBQUcyRSxpREFBUyxDQUFDQyxNQURZO0FBRTdCTCxnQkFBYyxFQUFHSSxpREFBUyxDQUFDRTtBQUZFLENBQWpDLEMiLCJmaWxlIjoiMjUyMzRmNS1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC1jc3Mtb25seS9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xuaW1wb3J0ICdtZGJyZWFjdC9kaXN0L2Nzcy9tZGIuY3NzJztcbmltcG9ydCAnLi9QTVNDb21wb25lbnQuY3NzJ1xuaW1wb3J0IHsgTURCQ29udGFpbmVyLCBNREJSb3csIE1EQkNvbCwgTURCSW5wdXQsIE1EQk1vZGFsRm9vdGVyLCBNREJCdG4sIE1EQk1vZGFsLCBNREJNb2RhbEhlYWRlciwgTURCTW9kYWxCb2R5IH0gZnJvbSBcIm1kYnJlYWN0XCI7XG5cbmltcG9ydCBDaGFydCBmcm9tICdyZWFjdC1hcGV4Y2hhcnRzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQTVNDaGlsZHJlbkNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0gKHtcbiAgICAgICAgICAgIG1vZGFsIDogZmFsc2UsXG4gICAgICAgICAgICBnaXJsTmFtZSA6IFwiXCIsIFxuICAgICAgICAgICAgY3ljbGUgOiBcIlwiLFxuICAgICAgICAgICAgc3RhcnREYXRlIDogXCJcIixcbiAgICAgICAgICAgIG92dWxhdGlvbiAgOiBcIlwiLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgbWVuc3RydWF0aW9uIDogXCJcIixcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICB0b2dnbGUgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIG1vZGFsOiAhdGhpcy5zdGF0ZS5tb2RhbFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsb2FkR2lybERhdGEgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZ2lybE5hbWUgOiB0aGlzLnByb3BzLmRhdGEuZ2lybE5hbWUsXG4gICAgICAgICAgICBjeWNsZSA6IHRoaXMucHJvcHMuZGF0YS5jeWNsZSxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZSA6IHRoaXMucHJvcHMuZGF0YS5zdGFydERhdGUsXG4gICAgICAgICAgICBvdnVsYXRpb24gIDogdGhpcy5wcm9wcy5kYXRhLm92dWxhdGlvbiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIG1lbnN0cnVhdGlvbiA6IHRoaXMucHJvcHMuZGF0YS5tZW5zdHJ1YXRpb24sXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMudG9nZ2xlKClcbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2UgPSBldmVudCA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBbZXZlbnQudGFyZ2V0Lm5hbWVdIDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIHhheGlzICA9IFtdXG4gICAgICAgIHZhciBwbXNEYXRhID0gW11cbiAgICAgICAgdmFyIENvbG9ycyA9IFtdXG4gICAgICAgIHZhciBDdXJyZW50RGF5ID0gMFxuICAgIFxuICAgICAgICBmb3IoIGxldCBpID0gMDsgaSA8ICggdGhpcy5wcm9wcy5kYXRhLmN5Y2xlIC0gdGhpcy5wcm9wcy5kYXRhLm92dWxhdGlvbiApOyBpKyspe1xuICAgICAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSh0aGlzLnByb3BzLmRhdGEuc3RhcnREYXRlKVxuICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSBuZXcgRGF0ZSgpXG4gICAgICAgICAgICBDdXJyZW50RGF5ID0gTWF0aC5jZWlsKE51bWJlcihjdXJyZW50LmdldFRpbWUoKSAtIGRhdGUuZ2V0VGltZSgpKSAvIDg2NDAwMDAwKVxuICAgICAgICAgICAgbGV0IG1pbGxpRGF0ZSA9IGRhdGUuZ2V0VGltZSgpICsgODY0MDAwMDAgKiAoaSArIDEpXG4gICAgICAgICAgICBsZXQgbmV3RGF0ZSA9IG5ldyBEYXRlKG1pbGxpRGF0ZSlcbiAgICAgICAgICAgIGxldCBuZXdEYXRlU3RyaW5nID0gXCJcIiArIChuZXdEYXRlLmdldE1vbnRoKCkrMSkgKyBcIi1cIiArIG5ld0RhdGUuZ2V0RGF0ZSgpXG4gICAgICAgICAgICB4YXhpcy5wdXNoKG5ld0RhdGVTdHJpbmcpXG4gICAgICAgIH1cblxuICAgICAgICBmb3IoIGxldCBqID0gMDsgaiA8IHRoaXMucHJvcHMuZGF0YS5tZW5zdHJ1YXRpb247IGorKyApIHtcbiAgICAgICAgICAgIGxldCBzdGVwID0gMTAwL3RoaXMucHJvcHMuZGF0YS5tZW5zdHJ1YXRpb247XG4gICAgICAgICAgICBwbXNEYXRhLnB1c2goIE1hdGgucm91bmQoMTAwIC0gaiAqIHN0ZXApIClcblxuICAgICAgICAgICAgbGV0IENvbG9yc3RlcCA9ICgyNTUgLSA1MCkgLyB0aGlzLnByb3BzLmRhdGEubWVuc3RydWF0aW9uXG4gICAgICAgICAgICBsZXQgY29sb3JSZWQgPSBNYXRoLnJvdW5kKCAyNTUgLSBDb2xvcnN0ZXAgKiBqIClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbG9yUmVkKVxuICAgICAgICAgICAgY29sb3JSZWQgPSBjb2xvclJlZC50b1N0cmluZygxNilcbiAgICAgICAgICAgIENvbG9ycy5wdXNoKCcjJysgY29sb3JSZWQrJzAwMDAnKVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yKGxldCBrID0gdGhpcy5wcm9wcy5kYXRhLm1lbnN0cnVhdGlvbjsgayA8IHRoaXMucHJvcHMuZGF0YS5jeWNsZSAtIHRoaXMucHJvcHMuZGF0YS5vdnVsYXRpb24gLSA1IDsgayArKyl7XG4gICAgICAgICAgICBwbXNEYXRhLnB1c2goMClcbiAgICAgICAgICAgIENvbG9ycy5wdXNoKCcjRkZGRkZGJylcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdmFyIGZlcnRpbGl0eSA9IDBcbiAgICAgICAgdmFyIGNvbG9yR3JlZW4gPSAwXG5cbiAgICAgICAgZm9yIChsZXQgbCA9IHRoaXMucHJvcHMuZGF0YS5vdnVsYXRpb24gLSA1OyBsIDwgdGhpcy5wcm9wcy5kYXRhLm92dWxhdGlvbiA7IGwrKyl7XG4gICAgICAgICAgICBmZXJ0aWxpdHkgKz0gMjA7XG4gICAgICAgICAgICBwbXNEYXRhLnB1c2goZmVydGlsaXR5KVxuXG4gICAgICAgICAgICBsZXQgY29sb3JTdGVwID0gTWF0aC5yb3VuZCgyNTUgLSA1MCkgLyA1O1xuICAgICAgICAgICAgY29sb3JHcmVlbiArPSAgTnVtYmVyKGNvbG9yU3RlcClcbiAgICAgICAgICAgIGxldCBjb2xvckdyZWVuSGV4ID0gY29sb3JHcmVlbi50b1N0cmluZygxNilcbiAgICAgICAgICAgIENvbG9ycy5wdXNoKCcjMDAnICsgY29sb3JHcmVlbkhleCArICcwMCcpXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHZhciBjaGFydERhdGEgPSB7XG4gICAgICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgICAgICAgeToge1xuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZXI6ICh2YWx1ZSkgPT4geyBsZXQgeVRvb2x0aXAgPSB2YWx1ZSArIFwiJVwiOyByZXR1cm4geVRvb2x0aXAgfSxcbiAgICAgICAgICAgICAgICB9LCAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VyaWVzOiBbe1xuICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgZGF0YTogcG1zRGF0YVxuICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgY2hhcnQ6IHsgdHlwZTogJ2JhcicsIGhlaWdodDogMzUwIH0sXG4gICAgICAgICAgICAgICAgcGxvdE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgYmFyOiB7IGhvcml6b250YWw6IGZhbHNlLCBjb2x1bW5XaWR0aDogJzk4JScsIGRpc3RyaWJ1dGVkIDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IFsnI0ZGMDAwMCcsICcjRDAwMDAwJywgJyMwMDAwJywgJyMwMDAwJywgJyM1NTAwMDAnXVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZGF0YUxhYmVsczogeyBlbmFibGVkOiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgeGF4aXM6IHsgY2F0ZWdvcmllczogeGF4aXMgfSxcbiAgICAgICAgICAgICAgICB5YXhpczoge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogeyB0ZXh0OiAnJyB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9ycyA6IENvbG9ycyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgICAgICBtYXJrZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsQ29sb3JzOiBDb2xvcnMsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgY2FyZC1jYXNjYWRlIG5hcnJvd2VyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keSBjYXJkLWJvZHktY2FzY2FkZVwiPlxuICAgICAgICAgICAgICAgICAgICB7LyogPE1EQlJvdyBjbGFzc05hbWU9XCIganVzdGlmeS1jb250ZW50LW1kLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1EQkNvbCBtZD1cIjEyXCIgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1UaXRsZSBjYXJkIGNhcmQtY2FzY2FkZSBuYXJyb3dlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5IGNhcmQtYm9keS1jYXNjYWRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlzdC1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJDb2wgbWQgPSAnOCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+TmFtZSA6IHsgdGhpcy5wcm9wcy5kYXRhLmdpcmxOYW1lIH08L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01EQkNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQkNvbCBtZCA9ICc0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5TdGFydERhdGUgOiB7IHRoaXMucHJvcHMuZGF0YS5zdGFydERhdGUgfSA8L2g1PiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NREJDb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NREJSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQlJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQkNvbCBtZCA9ICczJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5QZXJpb2QgOiB7IHRoaXMucHJvcHMuZGF0YS5jeWNsZSB9PC9oNT4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTURCQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCQ29sIG1kID0gJzMnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1Pk1lbnN0cnVhdGlvbiA6IHsgdGhpcy5wcm9wcy5kYXRhLm1lbnN0cnVhdGlvbiB9PC9oNT4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTURCQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCQ29sIG1kID0gJzMnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PkN1cnJlbnQgOiAgeyBDdXJyZW50RGF5IH0gPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NREJDb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJDb2wgbWQgPSAnMyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+T3Z1bGF0aW9uIDogeyB0aGlzLnByb3BzLmRhdGEub3Z1bGF0aW9uIH08L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01EQkNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01EQlJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01EQlJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTURCQ29sPlxuICAgICAgICAgICAgICAgICAgICA8L01EQlJvdz4gKi99XG4gICAgICAgICAgICAgICAgICAgIDxNREJSb3cgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LW1kLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1EQkNvbCBtZCA9IFwiMTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyoge3RoaXMucHJvcHMuZGF0YSA/IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hhcnQgb3B0aW9ucz17Y2hhcnREYXRhLm9wdGlvbnN9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VyaWVzPXtjaGFydERhdGEuc2VyaWVzfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJiYXJcIiBoZWlnaHQ9ezM1MH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NREJDb2w+XG4gICAgICAgICAgICAgICAgICAgIDwvTURCUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1EQkNvbCBtZCA9IFwiOVwiPjwvTURCQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1EQkNvbCBtZCA9IFwiM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJCdG4gY2xhc3NOYW1lPVwiaXRlbTFcIiBvbkNsaWNrID0ge3RoaXMubG9hZEdpcmxEYXRhfT4gVXBkYXRlIDwvTURCQnRuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NREJDb2w+XG4gICAgICAgICAgICAgICAgICAgIDxNREJSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TURCTW9kYWwgaXNPcGVuPXt0aGlzLnN0YXRlLm1vZGFsfSB0b2dnbGU9e3RoaXMudG9nZ2xlfSBzaXplID0gXCJtZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiaXRlbVRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCTW9kYWxIZWFkZXIgIHRvZ2dsZT17dGhpcy50b2dnbGV9PkFkZCBHcmlsPC9NREJNb2RhbEhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJNb2RhbEJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlID0ge3ttYXhIZWlnaHQgOiBcIjY4MHB4XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9XCJjb2wtbGctNiBjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJJbnB1dCBsYWJlbD1cIk5hbWUgOiBcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHsgdGhpcy5oYW5kbGVDaGFuZ2UgfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lID1cImdpcmxOYW1lXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7IHRoaXMuc3RhdGUuZ2lybE5hbWUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPVwiY29sLWxnLTQgY29sLW1kLThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJJbnB1dCBsYWJlbD1cIkN5Y2xlXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7IHRoaXMuaGFuZGxlQ2hhbmdlIH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9IFwiY3ljbGVcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHsgdGhpcy5zdGF0ZS5jeWNsZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImNvbC1sZy02IGNvbC1tZC04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCSW5wdXQgbGFiZWw9XCJTdGFydCBEYXRlXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZSA9IFwieXl5eS1tbS1kZFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0geyB0aGlzLmhhbmRsZUNoYW5nZSB9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPSBcInN0YXJ0RGF0ZVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0geyB0aGlzLnN0YXRlLnN0YXJ0RGF0ZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwiY29sLWxnLTQgY29sLW1kLThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJJbnB1dCBsYWJlbD1cIk92dWxzdGlvbiBQZXJpb2RcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHsgdGhpcy5oYW5kbGVDaGFuZ2UgfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gXCJvdnVsYXRpb25cIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHsgdGhpcy5zdGF0ZS5vdnVsYXRpb24gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJjb2wtbGctNiBjb2wtbWQtOFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQklucHV0IGxhYmVsPVwiTWVuc3RydWF0aW9uIFBlcmlvZFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0geyB0aGlzLmhhbmRsZUNoYW5nZSB9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPSBcIm1lbnN0cnVhdGlvblwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0geyAgdGhpcy5zdGF0ZS5tZW5zdHJ1YXRpb24gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01EQk1vZGFsQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQk1vZGFsRm9vdGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQkJ0biBjbGFzc05hbWUgPSBcIml0ZW0xXCIgb25DbGljaz17IHRoaXMudG9nZ2xlIH0+Q2FuY2VsPC9NREJCdG4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCQnRuIGNsYXNzTmFtZSA9IFwiaXRlbTFcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrID0geygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmdpcmxEYXRhVXBkYXRlKHRoaXMuc3RhdGUpIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVcERhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTURCQnRuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01EQk1vZGFsRm9vdGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTURCTW9kYWw+XG4gICAgICAgICAgICAgICAgICAgIDwvTURCUm93PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5QTVNDaGlsZHJlbkNvbXBvbmVudC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgZGF0YSA6IHt9XG4gfTtcbiBcbiBQTVNDaGlsZHJlbkNvbXBvbmVudC5wcm9wVHlwZXMgPSB7XG4gICAgIGRhdGEgOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICBnaXJsRGF0YVVwZGF0ZSA6IFByb3BUeXBlcy5mdW5jXG4gfTtcbiAiXSwic291cmNlUm9vdCI6IiJ9