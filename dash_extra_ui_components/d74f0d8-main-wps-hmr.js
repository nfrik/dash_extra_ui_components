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
    _classCallCheck(this, PMSChildrenComponent);

    return _super.call(this, props); // this.state = ({
    //     modal1 : false,
    //     girlName : "", 
    //     cycle : "",
    //     startDate : "",
    //     ovulation  : "",                                             
    //     menstruation : "",
    // })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX2V4dHJhX3VpX2NvbXBvbmVudHMvLi9zcmMvbGliL2NvbXBvbmVudHMvUE1TX0NvbXBvbmVudC9QTVNDaGlsZHJlbkNvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJQTVNDaGlsZHJlbkNvbXBvbmVudCIsInByb3BzIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwiZGF0YSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImdpcmxEYXRhVXBkYXRlIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7SUFFcUJBLG9COzs7OztBQUNqQixnQ0FBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDZCQUNUQSxLQURTLEdBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNILEcsQ0FFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7OzZCQUVTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVJLDBCQUNJO0FBQUssaUJBQU07QUFBWCx1QkFESjtBQWdHSDs7OztFQXJONkNDLCtDOzs7QUF3TmxERixvQkFBb0IsQ0FBQ0csWUFBckIsR0FBb0M7QUFDaENDLE1BQUksRUFBRztBQUR5QixDQUFwQztBQUlDSixvQkFBb0IsQ0FBQ0ssU0FBckIsR0FBaUM7QUFDN0JELE1BQUksRUFBR0UsaURBQVMsQ0FBQ0MsTUFEWTtBQUU3QkMsZ0JBQWMsRUFBR0YsaURBQVMsQ0FBQ0c7QUFGRSxDQUFqQyxDIiwiZmlsZSI6ImQ3NGYwZDgtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0ICdib290c3RyYXAtY3NzLW9ubHkvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcbmltcG9ydCAnbWRicmVhY3QvZGlzdC9jc3MvbWRiLmNzcyc7XG5pbXBvcnQgJy4vUE1TQ29tcG9uZW50LmNzcydcbmltcG9ydCB7IE1EQkNvbnRhaW5lciwgTURCUm93LCBNREJDb2wsIE1EQklucHV0LCBNREJNb2RhbEZvb3RlciwgTURCQnRuLCBNREJNb2RhbCwgTURCTW9kYWxIZWFkZXIsIE1EQk1vZGFsQm9keSB9IGZyb20gXCJtZGJyZWFjdFwiO1xuXG5pbXBvcnQgQ2hhcnQgZnJvbSAncmVhY3QtYXBleGNoYXJ0cydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUE1TQ2hpbGRyZW5Db21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgLy8gdGhpcy5zdGF0ZSA9ICh7XG4gICAgICAgIC8vICAgICBtb2RhbDEgOiBmYWxzZSxcbiAgICAgICAgLy8gICAgIGdpcmxOYW1lIDogXCJcIiwgXG4gICAgICAgIC8vICAgICBjeWNsZSA6IFwiXCIsXG4gICAgICAgIC8vICAgICBzdGFydERhdGUgOiBcIlwiLFxuICAgICAgICAvLyAgICAgb3Z1bGF0aW9uICA6IFwiXCIsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIC8vICAgICBtZW5zdHJ1YXRpb24gOiBcIlwiLFxuICAgICAgICAvLyB9KVxuICAgIH1cblxuICAgIC8vIHRvZ2dsZSA9ICgpID0+IHtcbiAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgLy8gICAgICAgbW9kYWwxOiAhdGhpcy5zdGF0ZS5tb2RhbDFcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gfVxuXG4gICAgLy8gbG9hZEdpcmxEYXRhID0gKCkgPT4ge1xuICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAvLyAgICAgICAgIGdpcmxOYW1lIDogdGhpcy5wcm9wcy5kYXRhLmdpcmxOYW1lLFxuICAgIC8vICAgICAgICAgY3ljbGUgOiB0aGlzLnByb3BzLmRhdGEuY3ljbGUsXG4gICAgLy8gICAgICAgICBzdGFydERhdGUgOiB0aGlzLnByb3BzLmRhdGEuc3RhcnREYXRlLFxuICAgIC8vICAgICAgICAgb3Z1bGF0aW9uICA6IHRoaXMucHJvcHMuZGF0YS5vdnVsYXRpb24sICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgLy8gICAgICAgICBtZW5zdHJ1YXRpb24gOiB0aGlzLnByb3BzLmRhdGEubWVuc3RydWF0aW9uLFxuICAgIC8vICAgICB9KVxuICAgIC8vICAgICB0aGlzLnRvZ2dsZSgpXG4gICAgLy8gfVxuXG4gICAgLy8gaGFuZGxlQ2hhbmdlID0gZXZlbnQgPT4ge1xuICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHsgW2V2ZW50LnRhcmdldC5uYW1lXSA6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcbiAgICAvLyB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgLy8gICAgIHZhciB4YXhpcyAgPSBbXVxuICAgIC8vICAgICB2YXIgcG1zRGF0YSA9IFtdXG4gICAgLy8gICAgIHZhciBDb2xvcnMgPSBbXVxuICAgIC8vICAgICB2YXIgQ3VycmVudERheSA9IDBcbiAgICBcbiAgICAvLyAgICAgZm9yKCBsZXQgaSA9IDA7IGkgPCAoIHRoaXMucHJvcHMuZGF0YS5jeWNsZSAtIHRoaXMucHJvcHMuZGF0YS5vdnVsYXRpb24gKTsgaSsrKXtcbiAgICAvLyAgICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUodGhpcy5wcm9wcy5kYXRhLnN0YXJ0RGF0ZSlcbiAgICAvLyAgICAgICAgIGxldCBjdXJyZW50ID0gbmV3IERhdGUoKVxuICAgIC8vICAgICAgICAgQ3VycmVudERheSA9IE1hdGguY2VpbChOdW1iZXIoY3VycmVudC5nZXRUaW1lKCkgLSBkYXRlLmdldFRpbWUoKSkgLyA4NjQwMDAwMClcbiAgICAvLyAgICAgICAgIGxldCBtaWxsaURhdGUgPSBkYXRlLmdldFRpbWUoKSArIDg2NDAwMDAwICogKGkgKyAxKVxuICAgIC8vICAgICAgICAgbGV0IG5ld0RhdGUgPSBuZXcgRGF0ZShtaWxsaURhdGUpXG4gICAgLy8gICAgICAgICBsZXQgbmV3RGF0ZVN0cmluZyA9IFwiXCIgKyAobmV3RGF0ZS5nZXRNb250aCgpKzEpICsgXCItXCIgKyBuZXdEYXRlLmdldERhdGUoKVxuICAgIC8vICAgICAgICAgeGF4aXMucHVzaChuZXdEYXRlU3RyaW5nKVxuICAgIC8vICAgICB9XG5cbiAgICAvLyAgICAgZm9yKCBsZXQgaiA9IDA7IGogPCB0aGlzLnByb3BzLmRhdGEubWVuc3RydWF0aW9uOyBqKysgKSB7XG4gICAgLy8gICAgICAgICBsZXQgc3RlcCA9IDEwMC90aGlzLnByb3BzLmRhdGEubWVuc3RydWF0aW9uO1xuICAgIC8vICAgICAgICAgcG1zRGF0YS5wdXNoKCBNYXRoLnJvdW5kKDEwMCAtIGogKiBzdGVwKSApXG5cbiAgICAvLyAgICAgICAgIGxldCBDb2xvcnN0ZXAgPSAoMjU1IC0gNTApIC8gdGhpcy5wcm9wcy5kYXRhLm1lbnN0cnVhdGlvblxuICAgIC8vICAgICAgICAgbGV0IGNvbG9yUmVkID0gTWF0aC5yb3VuZCggMjU1IC0gQ29sb3JzdGVwICogaiApXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhjb2xvclJlZClcbiAgICAvLyAgICAgICAgIGRlYnVnZ2VyXG4gICAgLy8gICAgICAgICBjb2xvclJlZCA9IGNvbG9yUmVkLnRvU3RyaW5nKDE2KVxuICAgIC8vICAgICAgICAgQ29sb3JzLnB1c2goJyMnKyBjb2xvclJlZCsnMDAwMCcpXG4gICAgLy8gICAgIH1cblxuICAgIC8vICAgICBmb3IobGV0IGkgPSB0aGlzLnByb3BzLmRhdGEubWVuc3RydWF0aW9uOyBpIDwgKHRoaXMucHJvcHMuZGF0YS5jeWNsZS0gdGhpcy5wcm9wcy5kYXRhLm92dWxhdGlvbikgLSA1IDsgaSArKyl7XG4gICAgLy8gICAgICAgICBwbXNEYXRhLnB1c2goMClcbiAgICAvLyAgICAgICAgIENvbG9ycy5wdXNoKCcjRkZGRkZGJylcbiAgICAvLyAgICAgfVxuICAgICAgICBcbiAgICAvLyAgICAgdmFyIGZlcnRpbGl0eSA9IDBcbiAgICAvLyAgICAgdmFyIGNvbG9yR3JlZW4gPSAwXG4gICAgLy8gICAgIGZvciAobGV0IGkgPSB0aGlzLnByb3BzLmRhdGEub3Z1bGF0aW9uIC0gNTsgaSA8IHRoaXMucHJvcHMuZGF0YS5vdnVsYXRpb24gOyBpKyspe1xuICAgIC8vICAgICAgICAgZmVydGlsaXR5ICs9IDIwO1xuICAgIC8vICAgICAgICAgcG1zRGF0YS5wdXNoKGZlcnRpbGl0eSlcblxuICAgIC8vICAgICAgICAgbGV0IGNvbG9yU3RlcCA9IE1hdGgucm91bmQoMjU1IC0gNTApIC8gNTtcbiAgICAvLyAgICAgICAgIGNvbG9yR3JlZW4gKz0gIE51bWJlcihjb2xvclN0ZXApXG4gICAgLy8gICAgICAgICBsZXQgY29sb3JHcmVlbkhleCA9IGNvbG9yR3JlZW4udG9TdHJpbmcoMTYpXG4gICAgLy8gICAgICAgICBDb2xvcnMucHVzaCgnIzAwJyArIGNvbG9yR3JlZW5IZXggKyAnMDAnKVxuICAgIC8vICAgICB9XG5cbiAgICAvLyAgICAgY29uc29sZS5sb2cocG1zRGF0YSlcbiAgICAvLyAgICAgY29uc29sZS5sb2coeGF4aXMpXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKENvbG9ycylcbiAgICAvLyAgICAgdmFyIGNoYXJ0RGF0YSA9IHtcbiAgICAvLyAgICAgICAgIHRvb2x0aXA6IHtcbiAgICAvLyAgICAgICAgICAgICB5OiB7XG4gICAgLy8gICAgICAgICAgICAgICAgIGZvcm1hdHRlcjogKHZhbHVlKSA9PiB7IGxldCB5VG9vbHRpcCA9IHZhbHVlICsgXCIlXCI7IHJldHVybiB5VG9vbHRpcCB9LFxuICAgIC8vICAgICAgICAgICAgIH0sICAgICAgICAgICAgICBcbiAgICAvLyAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICBzZXJpZXM6IFt7XG4gICAgLy8gICAgICAgICAgIG5hbWU6ICcnLFxuICAgIC8vICAgICAgICAgICBkYXRhOiBwbXNEYXRhXG4gICAgLy8gICAgICAgICB9XSxcbiAgICAvLyAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAvLyAgICAgICAgICAgICBjaGFydDogeyB0eXBlOiAnYmFyJywgaGVpZ2h0OiAzNTAgfSxcbiAgICAvLyAgICAgICAgICAgICBwbG90T3B0aW9uczoge1xuICAgIC8vICAgICAgICAgICAgICAgICBiYXI6IHsgaG9yaXpvbnRhbDogZmFsc2UsIGNvbHVtbldpZHRoOiAnOTglJywgZGlzdHJpYnV0ZWQgOiB0cnVlLFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgbWFya2Vyczoge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yczogWycjRkYwMDAwJywgJyNEMDAwMDAnLCAnIzAwMDAnLCAnIzAwMDAnLCAnIzU1MDAwMCddXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgICAgICBkYXRhTGFiZWxzOiB7IGVuYWJsZWQ6IHRydWUgfSxcbiAgICAvLyAgICAgICAgICAgICB4YXhpczogeyBjYXRlZ29yaWVzOiB4YXhpcyB9LFxuICAgIC8vICAgICAgICAgICAgIHlheGlzOiB7XG4gICAgLy8gICAgICAgICAgICAgICAgIHRpdGxlOiB7IHRleHQ6ICcnIH1cbiAgICAvLyAgICAgICAgICAgICB9LFxuICAgIC8vICAgICAgICAgICAgIGZpbGw6IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgY29sb3JzIDogQ29sb3JzLFxuICAgIC8vICAgICAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgLy8gICAgICAgICAgICAgICAgIG1hcmtlcnM6IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGZpbGxDb2xvcnM6IENvbG9ycyxcbiAgICAvLyAgICAgICAgICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICB9LFxuICAgIC8vICAgICB9O1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBjYXJkLWNhc2NhZGUgbmFycm93ZXJcIj5cbiAgICAgICAgICAgICAgICBhc2RmYXNkZmFzZFxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5IGNhcmQtYm9keS1jYXNjYWRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxNREJSb3cgY2xhc3NOYW1lPVwiIGp1c3RpZnktY29udGVudC1tZC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNREJDb2wgbWQ9XCIxMlwiIGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtVGl0bGUgY2FyZCBjYXJkLWNhc2NhZGUgbmFycm93ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keSBjYXJkLWJvZHktY2FzY2FkZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpc3QtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCQ29sIG1kID0gJzgnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1Pk5hbWUgOiB7IHRoaXMucHJvcHMuZGF0YS5naXJsTmFtZSB9PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NREJDb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJDb2wgbWQgPSAnNCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+U3RhcnREYXRlIDogeyB0aGlzLnByb3BzLmRhdGEuc3RhcnREYXRlIH0gPC9oNT4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTURCQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTURCUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJDb2wgbWQgPSAnMyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+UGVyaW9kIDogeyB0aGlzLnByb3BzLmRhdGEuY3ljbGUgfTwvaDU+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01EQkNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQkNvbCBtZCA9ICczJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5NZW5zdHJ1YXRpb24gOiB7IHRoaXMucHJvcHMuZGF0YS5tZW5zdHJ1YXRpb24gfTwvaDU+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01EQkNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQkNvbCBtZCA9ICczJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5DdXJyZW50IDogIHsgQ3VycmVudERheSB9IDwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTURCQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCQ29sIG1kID0gJzMnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1Pk92dWxhdGlvbiA6IHsgdGhpcy5wcm9wcy5kYXRhLm92dWxhdGlvbiB9PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NREJDb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NREJSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQlJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NREJSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L01EQkNvbD5cbiAgICAgICAgICAgICAgICAgICAgPC9NREJSb3c+XG4gICAgICAgICAgICAgICAgICAgIDxNREJSb3cgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LW1kLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1EQkNvbCBtZCA9IFwiMTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5kYXRhID8gPENoYXJ0IG9wdGlvbnM9e2NoYXJ0RGF0YS5vcHRpb25zfSBzZXJpZXM9e2NoYXJ0RGF0YS5zZXJpZXN9IHR5cGU9XCJiYXJcIiBoZWlnaHQ9ezM1MH0gLz4gOlwiXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L01EQkNvbD5cbiAgICAgICAgICAgICAgICAgICAgPC9NREJSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TURCQ29sIG1kID0gXCI5XCI+PC9NREJDb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TURCQ29sIG1kID0gXCIzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQkJ0biBjbGFzc05hbWU9XCJpdGVtMVwiIG9uQ2xpY2sgPSB7dGhpcy5sb2FkR2lybERhdGF9PiBVcGRhdGUgPC9NREJCdG4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L01EQkNvbD5cbiAgICAgICAgICAgICAgICAgICAgPE1EQlJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNREJNb2RhbCBpc09wZW49e3RoaXMuc3RhdGUubW9kYWwxfSB0b2dnbGU9e3RoaXMudG9nZ2xlfSBzaXplID0gXCJtZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiaXRlbVRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCTW9kYWxIZWFkZXIgIHRvZ2dsZT17dGhpcy50b2dnbGV9PkFkZCBHcmlsPC9NREJNb2RhbEhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJNb2RhbEJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlID0ge3ttYXhIZWlnaHQgOiBcIjY4MHB4XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9XCJjb2wtbGctNiBjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJJbnB1dCBsYWJlbD1cIk5hbWUgOiBcIiBvbkNoYW5nZSA9IHsgdGhpcy5oYW5kbGVDaGFuZ2UgfSBuYW1lID1cImdpcmxOYW1lXCIgdmFsdWUgPSB7IHRoaXMuc3RhdGUuZ2lybE5hbWUgfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID1cImNvbC1sZy00IGNvbC1tZC04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCSW5wdXQgbGFiZWw9XCJDeWNsZVwiIG9uQ2hhbmdlID0geyB0aGlzLmhhbmRsZUNoYW5nZSB9IG5hbWUgPSBcImN5Y2xlXCIgdmFsdWUgPSB7IHRoaXMuc3RhdGUuY3ljbGUgfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwiY29sLWxnLTYgY29sLW1kLThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJJbnB1dCBsYWJlbD1cIlN0YXJ0IERhdGVcIiBwbGFjZWhvbGRlID0gXCJ5eXl5LW1tLWRkXCIgb25DaGFuZ2UgPSB7IHRoaXMuaGFuZGxlQ2hhbmdlIH0gbmFtZSA9IFwic3RhcnREYXRlXCIgdmFsdWUgPSB7IHRoaXMuc3RhdGUuc3RhcnREYXRlIH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwiY29sLWxnLTQgY29sLW1kLThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJJbnB1dCBsYWJlbD1cIk92dWxzdGlvbiBQZXJpb2RcIiBvbkNoYW5nZSA9IHsgdGhpcy5oYW5kbGVDaGFuZ2UgfSBuYW1lID0gXCJvdnVsYXRpb25cIiB2YWx1ZSA9IHsgdGhpcy5zdGF0ZS5vdnVsYXRpb24gfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwiY29sLWxnLTYgY29sLW1kLThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJJbnB1dCBsYWJlbD1cIk1lbnN0cnVhdGlvbiBQZXJpb2RcIiBvbkNoYW5nZSA9IHsgdGhpcy5oYW5kbGVDaGFuZ2UgfSBuYW1lID0gXCJtZW5zdHJ1YXRpb25cIiB2YWx1ZSA9IHsgIHRoaXMuc3RhdGUubWVuc3RydWF0aW9uIH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTURCTW9kYWxCb2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCTW9kYWxGb290ZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCQnRuIGNsYXNzTmFtZSA9IFwiaXRlbTFcIiBvbkNsaWNrPXsgdGhpcy50b2dnbGUgfT5DYW5jZWw8L01EQkJ0bj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJCdG4gY2xhc3NOYW1lID0gXCJpdGVtMVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2sgPSB7KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZ2lybERhdGFVcGRhdGUodGhpcy5zdGF0ZSkgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVwRGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NREJCdG4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTURCTW9kYWxGb290ZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NREJNb2RhbD5cbiAgICAgICAgICAgICAgICAgICAgPC9NREJSb3c+XG4gICAgICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5QTVNDaGlsZHJlbkNvbXBvbmVudC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgZGF0YSA6IHt9XG4gfTtcbiBcbiBQTVNDaGlsZHJlbkNvbXBvbmVudC5wcm9wVHlwZXMgPSB7XG4gICAgIGRhdGEgOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICBnaXJsRGF0YVVwZGF0ZSA6IFByb3BUeXBlcy5mdW5jXG4gfTtcbiAiXSwic291cmNlUm9vdCI6IiJ9