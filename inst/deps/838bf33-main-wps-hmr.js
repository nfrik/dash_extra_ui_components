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









var PMSChildrenComponent = /*#__PURE__*/function (_Component) {
  _inherits(PMSChildrenComponent, _Component);

  var _super = _createSuper(PMSChildrenComponent);

  function PMSChildrenComponent(props) {
    var _this;

    _classCallCheck(this, PMSChildrenComponent);

    _this = _super.call(this, props);
    _this.state = {
      modal1: false,
      girlName: "",
      cycle: "",
      startDate: "",
      ovulation: "",
      menstruation: ""
    };
    return _this;
  } // toggle = () => {
  //     this.setState({
  //       modal1: !this.state.modal1
  //     });
  // }
  // loadGirlData = () => {
  //     this.setState({
  //         girlName : this.props.data.girlName,
  //         cycle : this.props.data.cycle,
  //         startDate : this.props.data.startDate,
  //         ovulation  : this.props.data.ovulation,                                             
  //         menstruation : this.props.data.menstruation,
  //     })
  //     this.toggle()
  // }
  // handleChange = event => {
  //     this.setState({ [event.target.name] : event.target.value });
  // }


  _createClass(PMSChildrenComponent, [{
    key: "render",
    value: function render() {
      //     var xaxis  = []
      //     var pmsData = []
      //     var Colors = []
      //     var CurrentDay = 0
      //     for( let i = 0; i < ( this.props.data.cycle - this.props.data.ovulation ); i++){
      //         let date = new Date(this.props.data.startDate)
      //         let current = new Date()
      //         CurrentDay = Math.ceil(Number(current.getTime() - date.getTime()) / 86400000)
      //         let milliDate = date.getTime() + 86400000 * (i + 1)
      //         let newDate = new Date(milliDate)
      //         let newDateString = "" + (newDate.getMonth()+1) + "-" + newDate.getDate()
      //         xaxis.push(newDateString)
      //     }
      //     for( let j = 0; j < this.props.data.menstruation; j++ ) {
      //         let step = 100/this.props.data.menstruation;
      //         pmsData.push( Math.round(100 - j * step) )
      //         let Colorstep = (255 - 50) / this.props.data.menstruation
      //         let colorRed = Math.round( 255 - Colorstep * j )
      //         console.log(colorRed)
      //         debugger
      //         colorRed = colorRed.toString(16)
      //         Colors.push('#'+ colorRed+'0000')
      //     }
      //     for(let i = this.props.data.menstruation; i < (this.props.data.cycle- this.props.data.ovulation) - 5 ; i ++){
      //         pmsData.push(0)
      //         Colors.push('#FFFFFF')
      //     }
      //     var fertility = 0
      //     var colorGreen = 0
      //     for (let i = this.props.data.ovulation - 5; i < this.props.data.ovulation ; i++){
      //         fertility += 20;
      //         pmsData.push(fertility)
      //         let colorStep = Math.round(255 - 50) / 5;
      //         colorGreen +=  Number(colorStep)
      //         let colorGreenHex = colorGreen.toString(16)
      //         Colors.push('#00' + colorGreenHex + '00')
      //     }
      //     console.log(pmsData)
      //     console.log(xaxis)
      //     console.log(Colors)
      //     var chartData = {
      //         tooltip: {
      //             y: {
      //                 formatter: (value) => { let yTooltip = value + "%"; return yTooltip },
      //             },              
      //         },
      //         series: [{
      //           name: '',
      //           data: pmsData
      //         }],
      //         options: {
      //             chart: { type: 'bar', height: 350 },
      //             plotOptions: {
      //                 bar: { horizontal: false, columnWidth: '98%', distributed : true,
      //                     markers: {
      //                         colors: ['#FF0000', '#D00000', '#0000', '#0000', '#550000']
      //                     }
      //                 },
      //             },
      //             dataLabels: { enabled: true },
      //             xaxis: { categories: xaxis },
      //             yaxis: {
      //                 title: { text: '' }
      //             },
      //             fill: {
      //                 colors : Colors,
      //             },
      //             legend: {
      //                 markers: {
      //                     fillColors: Colors,
      //                 },
      //             }
      //         },
      //     };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "card card-cascade narrower"
      }, "asdfasdfasd");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX2V4dHJhX3VpX2NvbXBvbmVudHMvLi9zcmMvbGliL2NvbXBvbmVudHMvUE1TX0NvbXBvbmVudC9QTVNDaGlsZHJlbkNvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJQTVNDaGlsZHJlbkNvbXBvbmVudCIsInByb3BzIiwic3RhdGUiLCJtb2RhbDEiLCJnaXJsTmFtZSIsImN5Y2xlIiwic3RhcnREYXRlIiwib3Z1bGF0aW9uIiwibWVuc3RydWF0aW9uIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwiZGF0YSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImdpcmxEYXRhVXBkYXRlIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7SUFFcUJBLG9COzs7OztBQUNqQixnQ0FBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFjO0FBQ1ZDLFlBQU0sRUFBRyxLQURDO0FBRVZDLGNBQVEsRUFBRyxFQUZEO0FBR1ZDLFdBQUssRUFBRyxFQUhFO0FBSVZDLGVBQVMsRUFBRyxFQUpGO0FBS1ZDLGVBQVMsRUFBSSxFQUxIO0FBTVZDLGtCQUFZLEVBQUc7QUFOTCxLQUFkO0FBRmU7QUFVbEIsRyxDQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7NkJBRVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUksMEJBQ0k7QUFBSyxpQkFBTTtBQUFYLHVCQURKO0FBZ0dIOzs7O0VBck42Q0MsK0M7OztBQXdObERULG9CQUFvQixDQUFDVSxZQUFyQixHQUFvQztBQUNoQ0MsTUFBSSxFQUFHO0FBRHlCLENBQXBDO0FBSUNYLG9CQUFvQixDQUFDWSxTQUFyQixHQUFpQztBQUM3QkQsTUFBSSxFQUFHRSxpREFBUyxDQUFDQyxNQURZO0FBRTdCQyxnQkFBYyxFQUFHRixpREFBUyxDQUFDRztBQUZFLENBQWpDLEMiLCJmaWxlIjoiODM4YmYzMy1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC1jc3Mtb25seS9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xuaW1wb3J0ICdtZGJyZWFjdC9kaXN0L2Nzcy9tZGIuY3NzJztcbmltcG9ydCAnLi9QTVNDb21wb25lbnQuY3NzJ1xuaW1wb3J0IHsgTURCQ29udGFpbmVyLCBNREJSb3csIE1EQkNvbCwgTURCSW5wdXQsIE1EQk1vZGFsRm9vdGVyLCBNREJCdG4sIE1EQk1vZGFsLCBNREJNb2RhbEhlYWRlciwgTURCTW9kYWxCb2R5IH0gZnJvbSBcIm1kYnJlYWN0XCI7XG5cbmltcG9ydCBDaGFydCBmcm9tICdyZWFjdC1hcGV4Y2hhcnRzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQTVNDaGlsZHJlbkNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0gKHtcbiAgICAgICAgICAgIG1vZGFsMSA6IGZhbHNlLFxuICAgICAgICAgICAgZ2lybE5hbWUgOiBcIlwiLCBcbiAgICAgICAgICAgIGN5Y2xlIDogXCJcIixcbiAgICAgICAgICAgIHN0YXJ0RGF0ZSA6IFwiXCIsXG4gICAgICAgICAgICBvdnVsYXRpb24gIDogXCJcIiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIG1lbnN0cnVhdGlvbiA6IFwiXCIsXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gdG9nZ2xlID0gKCkgPT4ge1xuICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAvLyAgICAgICBtb2RhbDE6ICF0aGlzLnN0YXRlLm1vZGFsMVxuICAgIC8vICAgICB9KTtcbiAgICAvLyB9XG5cbiAgICAvLyBsb2FkR2lybERhdGEgPSAoKSA9PiB7XG4gICAgLy8gICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgIC8vICAgICAgICAgZ2lybE5hbWUgOiB0aGlzLnByb3BzLmRhdGEuZ2lybE5hbWUsXG4gICAgLy8gICAgICAgICBjeWNsZSA6IHRoaXMucHJvcHMuZGF0YS5jeWNsZSxcbiAgICAvLyAgICAgICAgIHN0YXJ0RGF0ZSA6IHRoaXMucHJvcHMuZGF0YS5zdGFydERhdGUsXG4gICAgLy8gICAgICAgICBvdnVsYXRpb24gIDogdGhpcy5wcm9wcy5kYXRhLm92dWxhdGlvbiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAvLyAgICAgICAgIG1lbnN0cnVhdGlvbiA6IHRoaXMucHJvcHMuZGF0YS5tZW5zdHJ1YXRpb24sXG4gICAgLy8gICAgIH0pXG4gICAgLy8gICAgIHRoaXMudG9nZ2xlKClcbiAgICAvLyB9XG5cbiAgICAvLyBoYW5kbGVDaGFuZ2UgPSBldmVudCA9PiB7XG4gICAgLy8gICAgIHRoaXMuc2V0U3RhdGUoeyBbZXZlbnQudGFyZ2V0Lm5hbWVdIDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xuICAgIC8vIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAvLyAgICAgdmFyIHhheGlzICA9IFtdXG4gICAgLy8gICAgIHZhciBwbXNEYXRhID0gW11cbiAgICAvLyAgICAgdmFyIENvbG9ycyA9IFtdXG4gICAgLy8gICAgIHZhciBDdXJyZW50RGF5ID0gMFxuICAgIFxuICAgIC8vICAgICBmb3IoIGxldCBpID0gMDsgaSA8ICggdGhpcy5wcm9wcy5kYXRhLmN5Y2xlIC0gdGhpcy5wcm9wcy5kYXRhLm92dWxhdGlvbiApOyBpKyspe1xuICAgIC8vICAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSh0aGlzLnByb3BzLmRhdGEuc3RhcnREYXRlKVxuICAgIC8vICAgICAgICAgbGV0IGN1cnJlbnQgPSBuZXcgRGF0ZSgpXG4gICAgLy8gICAgICAgICBDdXJyZW50RGF5ID0gTWF0aC5jZWlsKE51bWJlcihjdXJyZW50LmdldFRpbWUoKSAtIGRhdGUuZ2V0VGltZSgpKSAvIDg2NDAwMDAwKVxuICAgIC8vICAgICAgICAgbGV0IG1pbGxpRGF0ZSA9IGRhdGUuZ2V0VGltZSgpICsgODY0MDAwMDAgKiAoaSArIDEpXG4gICAgLy8gICAgICAgICBsZXQgbmV3RGF0ZSA9IG5ldyBEYXRlKG1pbGxpRGF0ZSlcbiAgICAvLyAgICAgICAgIGxldCBuZXdEYXRlU3RyaW5nID0gXCJcIiArIChuZXdEYXRlLmdldE1vbnRoKCkrMSkgKyBcIi1cIiArIG5ld0RhdGUuZ2V0RGF0ZSgpXG4gICAgLy8gICAgICAgICB4YXhpcy5wdXNoKG5ld0RhdGVTdHJpbmcpXG4gICAgLy8gICAgIH1cblxuICAgIC8vICAgICBmb3IoIGxldCBqID0gMDsgaiA8IHRoaXMucHJvcHMuZGF0YS5tZW5zdHJ1YXRpb247IGorKyApIHtcbiAgICAvLyAgICAgICAgIGxldCBzdGVwID0gMTAwL3RoaXMucHJvcHMuZGF0YS5tZW5zdHJ1YXRpb247XG4gICAgLy8gICAgICAgICBwbXNEYXRhLnB1c2goIE1hdGgucm91bmQoMTAwIC0gaiAqIHN0ZXApIClcblxuICAgIC8vICAgICAgICAgbGV0IENvbG9yc3RlcCA9ICgyNTUgLSA1MCkgLyB0aGlzLnByb3BzLmRhdGEubWVuc3RydWF0aW9uXG4gICAgLy8gICAgICAgICBsZXQgY29sb3JSZWQgPSBNYXRoLnJvdW5kKCAyNTUgLSBDb2xvcnN0ZXAgKiBqIClcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGNvbG9yUmVkKVxuICAgIC8vICAgICAgICAgZGVidWdnZXJcbiAgICAvLyAgICAgICAgIGNvbG9yUmVkID0gY29sb3JSZWQudG9TdHJpbmcoMTYpXG4gICAgLy8gICAgICAgICBDb2xvcnMucHVzaCgnIycrIGNvbG9yUmVkKycwMDAwJylcbiAgICAvLyAgICAgfVxuXG4gICAgLy8gICAgIGZvcihsZXQgaSA9IHRoaXMucHJvcHMuZGF0YS5tZW5zdHJ1YXRpb247IGkgPCAodGhpcy5wcm9wcy5kYXRhLmN5Y2xlLSB0aGlzLnByb3BzLmRhdGEub3Z1bGF0aW9uKSAtIDUgOyBpICsrKXtcbiAgICAvLyAgICAgICAgIHBtc0RhdGEucHVzaCgwKVxuICAgIC8vICAgICAgICAgQ29sb3JzLnB1c2goJyNGRkZGRkYnKVxuICAgIC8vICAgICB9XG4gICAgICAgIFxuICAgIC8vICAgICB2YXIgZmVydGlsaXR5ID0gMFxuICAgIC8vICAgICB2YXIgY29sb3JHcmVlbiA9IDBcbiAgICAvLyAgICAgZm9yIChsZXQgaSA9IHRoaXMucHJvcHMuZGF0YS5vdnVsYXRpb24gLSA1OyBpIDwgdGhpcy5wcm9wcy5kYXRhLm92dWxhdGlvbiA7IGkrKyl7XG4gICAgLy8gICAgICAgICBmZXJ0aWxpdHkgKz0gMjA7XG4gICAgLy8gICAgICAgICBwbXNEYXRhLnB1c2goZmVydGlsaXR5KVxuXG4gICAgLy8gICAgICAgICBsZXQgY29sb3JTdGVwID0gTWF0aC5yb3VuZCgyNTUgLSA1MCkgLyA1O1xuICAgIC8vICAgICAgICAgY29sb3JHcmVlbiArPSAgTnVtYmVyKGNvbG9yU3RlcClcbiAgICAvLyAgICAgICAgIGxldCBjb2xvckdyZWVuSGV4ID0gY29sb3JHcmVlbi50b1N0cmluZygxNilcbiAgICAvLyAgICAgICAgIENvbG9ycy5wdXNoKCcjMDAnICsgY29sb3JHcmVlbkhleCArICcwMCcpXG4gICAgLy8gICAgIH1cblxuICAgIC8vICAgICBjb25zb2xlLmxvZyhwbXNEYXRhKVxuICAgIC8vICAgICBjb25zb2xlLmxvZyh4YXhpcylcbiAgICAvLyAgICAgY29uc29sZS5sb2coQ29sb3JzKVxuICAgIC8vICAgICB2YXIgY2hhcnREYXRhID0ge1xuICAgIC8vICAgICAgICAgdG9vbHRpcDoge1xuICAgIC8vICAgICAgICAgICAgIHk6IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgZm9ybWF0dGVyOiAodmFsdWUpID0+IHsgbGV0IHlUb29sdGlwID0gdmFsdWUgKyBcIiVcIjsgcmV0dXJuIHlUb29sdGlwIH0sXG4gICAgLy8gICAgICAgICAgICAgfSwgICAgICAgICAgICAgIFxuICAgIC8vICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgIHNlcmllczogW3tcbiAgICAvLyAgICAgICAgICAgbmFtZTogJycsXG4gICAgLy8gICAgICAgICAgIGRhdGE6IHBtc0RhdGFcbiAgICAvLyAgICAgICAgIH1dLFxuICAgIC8vICAgICAgICAgb3B0aW9uczoge1xuICAgIC8vICAgICAgICAgICAgIGNoYXJ0OiB7IHR5cGU6ICdiYXInLCBoZWlnaHQ6IDM1MCB9LFxuICAgIC8vICAgICAgICAgICAgIHBsb3RPcHRpb25zOiB7XG4gICAgLy8gICAgICAgICAgICAgICAgIGJhcjogeyBob3Jpem9udGFsOiBmYWxzZSwgY29sdW1uV2lkdGg6ICc5OCUnLCBkaXN0cmlidXRlZCA6IHRydWUsXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBtYXJrZXJzOiB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzOiBbJyNGRjAwMDAnLCAnI0QwMDAwMCcsICcjMDAwMCcsICcjMDAwMCcsICcjNTUwMDAwJ11cbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgICAgICB9LFxuICAgIC8vICAgICAgICAgICAgIGRhdGFMYWJlbHM6IHsgZW5hYmxlZDogdHJ1ZSB9LFxuICAgIC8vICAgICAgICAgICAgIHhheGlzOiB7IGNhdGVnb3JpZXM6IHhheGlzIH0sXG4gICAgLy8gICAgICAgICAgICAgeWF4aXM6IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgdGl0bGU6IHsgdGV4dDogJycgfVxuICAgIC8vICAgICAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICAgICAgZmlsbDoge1xuICAgIC8vICAgICAgICAgICAgICAgICBjb2xvcnMgOiBDb2xvcnMsXG4gICAgLy8gICAgICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgbWFya2Vyczoge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgZmlsbENvbG9yczogQ29sb3JzLFxuICAgIC8vICAgICAgICAgICAgICAgICB9LFxuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIH0sXG4gICAgLy8gICAgIH07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIGNhcmQtY2FzY2FkZSBuYXJyb3dlclwiPlxuICAgICAgICAgICAgICAgIGFzZGZhc2RmYXNkXG4gICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHkgY2FyZC1ib2R5LWNhc2NhZGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPE1EQlJvdyBjbGFzc05hbWU9XCIganVzdGlmeS1jb250ZW50LW1kLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1EQkNvbCBtZD1cIjEyXCIgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1UaXRsZSBjYXJkIGNhcmQtY2FzY2FkZSBuYXJyb3dlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5IGNhcmQtYm9keS1jYXNjYWRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlzdC1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJDb2wgbWQgPSAnOCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+TmFtZSA6IHsgdGhpcy5wcm9wcy5kYXRhLmdpcmxOYW1lIH08L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01EQkNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQkNvbCBtZCA9ICc0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5TdGFydERhdGUgOiB7IHRoaXMucHJvcHMuZGF0YS5zdGFydERhdGUgfSA8L2g1PiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NREJDb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NREJSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQlJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQkNvbCBtZCA9ICczJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5QZXJpb2QgOiB7IHRoaXMucHJvcHMuZGF0YS5jeWNsZSB9PC9oNT4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTURCQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCQ29sIG1kID0gJzMnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1Pk1lbnN0cnVhdGlvbiA6IHsgdGhpcy5wcm9wcy5kYXRhLm1lbnN0cnVhdGlvbiB9PC9oNT4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTURCQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCQ29sIG1kID0gJzMnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PkN1cnJlbnQgOiAgeyBDdXJyZW50RGF5IH0gPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NREJDb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJDb2wgbWQgPSAnMyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+T3Z1bGF0aW9uIDogeyB0aGlzLnByb3BzLmRhdGEub3Z1bGF0aW9uIH08L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01EQkNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01EQlJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01EQlJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTURCQ29sPlxuICAgICAgICAgICAgICAgICAgICA8L01EQlJvdz5cbiAgICAgICAgICAgICAgICAgICAgPE1EQlJvdyBjbGFzc05hbWU9XCJqdXN0aWZ5LWNvbnRlbnQtbWQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TURCQ29sIG1kID0gXCIxMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmRhdGEgPyA8Q2hhcnQgb3B0aW9ucz17Y2hhcnREYXRhLm9wdGlvbnN9IHNlcmllcz17Y2hhcnREYXRhLnNlcmllc30gdHlwZT1cImJhclwiIGhlaWdodD17MzUwfSAvPiA6XCJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTURCQ29sPlxuICAgICAgICAgICAgICAgICAgICA8L01EQlJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNREJDb2wgbWQgPSBcIjlcIj48L01EQkNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNREJDb2wgbWQgPSBcIjNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCQnRuIGNsYXNzTmFtZT1cIml0ZW0xXCIgb25DbGljayA9IHt0aGlzLmxvYWRHaXJsRGF0YX0+IFVwZGF0ZSA8L01EQkJ0bj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTURCQ29sPlxuICAgICAgICAgICAgICAgICAgICA8TURCUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1EQk1vZGFsIGlzT3Blbj17dGhpcy5zdGF0ZS5tb2RhbDF9IHRvZ2dsZT17dGhpcy50b2dnbGV9IHNpemUgPSBcIm1kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJpdGVtVGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJNb2RhbEhlYWRlciAgdG9nZ2xlPXt0aGlzLnRvZ2dsZX0+QWRkIEdyaWw8L01EQk1vZGFsSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQk1vZGFsQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGUgPSB7e21heEhlaWdodCA6IFwiNjgwcHhcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID1cImNvbC1sZy02IGNvbC1tZC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQklucHV0IGxhYmVsPVwiTmFtZSA6IFwiIG9uQ2hhbmdlID0geyB0aGlzLmhhbmRsZUNoYW5nZSB9IG5hbWUgPVwiZ2lybE5hbWVcIiB2YWx1ZSA9IHsgdGhpcy5zdGF0ZS5naXJsTmFtZSB9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPVwiY29sLWxnLTQgY29sLW1kLThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJJbnB1dCBsYWJlbD1cIkN5Y2xlXCIgb25DaGFuZ2UgPSB7IHRoaXMuaGFuZGxlQ2hhbmdlIH0gbmFtZSA9IFwiY3ljbGVcIiB2YWx1ZSA9IHsgdGhpcy5zdGF0ZS5jeWNsZSB9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJjb2wtbGctNiBjb2wtbWQtOFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQklucHV0IGxhYmVsPVwiU3RhcnQgRGF0ZVwiIHBsYWNlaG9sZGUgPSBcInl5eXktbW0tZGRcIiBvbkNoYW5nZSA9IHsgdGhpcy5oYW5kbGVDaGFuZ2UgfSBuYW1lID0gXCJzdGFydERhdGVcIiB2YWx1ZSA9IHsgdGhpcy5zdGF0ZS5zdGFydERhdGUgfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJjb2wtbGctNCBjb2wtbWQtOFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQklucHV0IGxhYmVsPVwiT3Z1bHN0aW9uIFBlcmlvZFwiIG9uQ2hhbmdlID0geyB0aGlzLmhhbmRsZUNoYW5nZSB9IG5hbWUgPSBcIm92dWxhdGlvblwiIHZhbHVlID0geyB0aGlzLnN0YXRlLm92dWxhdGlvbiB9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJjb2wtbGctNiBjb2wtbWQtOFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQklucHV0IGxhYmVsPVwiTWVuc3RydWF0aW9uIFBlcmlvZFwiIG9uQ2hhbmdlID0geyB0aGlzLmhhbmRsZUNoYW5nZSB9IG5hbWUgPSBcIm1lbnN0cnVhdGlvblwiIHZhbHVlID0geyAgdGhpcy5zdGF0ZS5tZW5zdHJ1YXRpb24gfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NREJNb2RhbEJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJNb2RhbEZvb3Rlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJCdG4gY2xhc3NOYW1lID0gXCJpdGVtMVwiIG9uQ2xpY2s9eyB0aGlzLnRvZ2dsZSB9PkNhbmNlbDwvTURCQnRuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQkJ0biBjbGFzc05hbWUgPSBcIml0ZW0xXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljayA9IHsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5naXJsRGF0YVVwZGF0ZSh0aGlzLnN0YXRlKSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXBEYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01EQkJ0bj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NREJNb2RhbEZvb3Rlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L01EQk1vZGFsPlxuICAgICAgICAgICAgICAgICAgICA8L01EQlJvdz5cbiAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblBNU0NoaWxkcmVuQ29tcG9uZW50LmRlZmF1bHRQcm9wcyA9IHtcbiAgICBkYXRhIDoge31cbiB9O1xuIFxuIFBNU0NoaWxkcmVuQ29tcG9uZW50LnByb3BUeXBlcyA9IHtcbiAgICAgZGF0YSA6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgIGdpcmxEYXRhVXBkYXRlIDogUHJvcFR5cGVzLmZ1bmNcbiB9O1xuICJdLCJzb3VyY2VSb290IjoiIn0=