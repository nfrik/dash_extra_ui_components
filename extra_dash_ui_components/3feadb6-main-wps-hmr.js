webpackHotUpdateextra_dash_ui_components("main",{

/***/ "./src/demo/App.js":
/*!*************************!*\
  !*** ./src/demo/App.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib */ "./src/lib/index.js");
/* harmony import */ var _sampleData_carouselData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sampleData/carouselData */ "./src/demo/sampleData/carouselData.js");
/* harmony import */ var _sampleData_orgChartData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sampleData/orgChartData */ "./src/demo/sampleData/orgChartData.js");
/* harmony import */ var _lib_components_Trello_data_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/components/Trello/data.json */ "./src/lib/components/Trello/data.json");
var _lib_components_Trello_data_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../lib/components/Trello/data.json */ "./src/lib/components/Trello/data.json", 1);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/* eslint no-magic-numbers: 0 */






var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App() {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this));
    _this.state = {
      value: '',
      data: _sampleData_orgChartData__WEBPACK_IMPORTED_MODULE_3__["default"].data,
      data1: _sampleData_orgChartData__WEBPACK_IMPORTED_MODULE_3__["default"].data1,
      selection: null,
      nodes: null,
      expandedKeys: {},
      first: 0,
      rows: 10,
      first2: 0,
      rows2: 10,
      carData: [],
      screenshot: ""
    };
    _this.recaptchaCallback = _this.recaptchaCallback.bind(_assertThisInitialized(_this));
    _this.toggleMovies = _this.toggleMovies.bind(_assertThisInitialized(_this));
    _this.onPageChange = _this.onPageChange.bind(_assertThisInitialized(_this));
    _this.onPageChange2 = _this.onPageChange2.bind(_assertThisInitialized(_this));
    _this.carTemplate = _this.carTemplate.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadJSON('../../car-large.json');
    }
  }, {
    key: "loadJSON",
    value: function loadJSON(path) {
      var _this2 = this;

      var xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
            _this2.setState({
              carData: JSON.parse(xhr.responseText)
            });
          } else {
            console.log('Error');
          }
        }
      };

      xhr.open('GET', path, true);
      xhr.send();
    }
  }, {
    key: "setProps",
    value: function setProps(newProps) {// console.log(newProps);
      // this.setState({
      //     screenshot: newProps.screenshot
      // });
    }
  }, {
    key: "recaptchaCallback",
    value: function recaptchaCallback(response) {
      console.log('Response');
    }
  }, {
    key: "recaptchaExpiredCallback",
    value: function recaptchaExpiredCallback() {
      console.log('Expired');
    }
  }, {
    key: "onDataChange",
    value: function onDataChange(newData) {
      console.log(newData);
    }
  }, {
    key: "onPageChange",
    value: function onPageChange(event) {
      this.setState({
        first: event.first,
        rows: event.rows
      });
    }
  }, {
    key: "onPageChange2",
    value: function onPageChange2(event) {
      this.setState({
        first2: event.first,
        rows2: event.rows
      });
    }
  }, {
    key: "toggleMovies",
    value: function toggleMovies() {
      var expandedKeys = _objectSpread({}, this.state.expandedKeys);

      if (expandedKeys['2']) delete expandedKeys['2'];else expandedKeys['2'] = true;
      this.setState({
        expandedKeys: expandedKeys
      });
    }
  }, {
    key: "carTemplate",
    value: function carTemplate(car) {
      // console.log(car)
      if (!car) {
        return;
      } // data


      var src = './' + car.brand + '.png';
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "p-grid car-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "p-col-12 p-md-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: src,
        alt: "Car"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "p-col-12 p-md-9"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "p-grid"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "p-col-2 p-sm-6"
      }, "Vin: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "p-col-10 p-sm-6"
      }, car.vin), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "p-col-2 p-sm-6"
      }, "Year: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "p-col-10 p-sm-6"
      }, car.year), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "p-col-2 p-sm-6"
      }, "Brand: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "p-col-10 p-sm-6"
      }, car.brand), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "p-col-2 p-sm-6"
      }, "Color: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "p-col-10 p-sm-6"
      }, car.color))));
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      // console.log(this.state.carData.data);
      var items = [{
        label: 'Categories'
      }, {
        label: 'Sports'
      }, {
        label: 'Football'
      }, {
        label: 'Countries'
      }, {
        label: 'Spain'
      }, {
        label: 'F.C. Barcelona'
      }, {
        label: 'Squad'
      }, {
        label: 'Lionel Messi',
        url: 'https://en.wikipedia.org/wiki/Lionel_Messi'
      }];
      var home = {
        icon: 'tumb tumb-home',
        url: 'https://github.com/nfrik/extra_dash_ui_components.git',
        label: 'Home'
      };
      var footer = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        ref: function ref(el) {
          return _this3.loadButton = el;
        }
      }, " Load ");
      var responsiveOptions = [{
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      }, {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      }, {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }];
      var data = [{
        key: '0',
        label: 'Documents',
        data: 'Documents Folder',
        icon: 'pi pi-fw pi-inbox',
        children: [{
          key: '0-0',
          label: 'Work',
          data: 'Work Folder',
          icon: 'pi pi-fw pi-cog',
          children: [{
            key: '0-0-0',
            label: 'Expenses.doc',
            icon: 'pi pi-fw pi-file',
            data: 'Expenses Document'
          }, {
            key: '0-0-1',
            label: 'Resume.doc',
            icon: 'pi pi-fw pi-file',
            data: 'Resume Document'
          }]
        }, {
          key: '0-1',
          label: 'Home',
          data: 'Home Folder',
          icon: 'pi pi-fw pi-home',
          children: [{
            key: '0-1-0',
            label: 'Invoices.txt',
            icon: 'pi pi-fw pi-file',
            data: 'Invoices for this month'
          }]
        }]
      }, {
        key: '1',
        label: 'Events',
        data: 'Events Folder',
        icon: 'pi pi-fw pi-calendar',
        children: [{
          key: '1-0',
          label: 'Meeting',
          icon: 'pi pi-fw pi-calendar-plus',
          data: 'Meeting'
        }, {
          key: '1-1',
          label: 'Product Launch',
          icon: 'pi pi-fw pi-calendar-plus',
          data: 'Product Launch'
        }, {
          key: '1-2',
          label: 'Report Review',
          icon: 'pi pi-fw pi-calendar-plus',
          data: 'Report Review'
        }]
      }, {
        key: '2',
        label: '<div>adsaf</div>Movies',
        data: 'Movies Folder',
        icon: 'pi pi-fw pi-star',
        children: [{
          key: '2-0',
          icon: 'pi pi-fw pi-star',
          label: 'Al Pacino',
          data: 'Pacino Movies',
          children: [{
            key: '2-0-0',
            label: 'Scarface',
            icon: 'pi pi-fw pi-video',
            data: 'Scarface Movie'
          }, {
            key: '2-0-1',
            label: 'Serpico',
            icon: 'pi pi-fw pi-video',
            data: 'Serpico Movie'
          }]
        }, {
          key: '2-1',
          label: 'Robert De Niro',
          icon: 'pi pi-fw pi-star',
          data: 'De Niro Movies',
          children: [{
            key: '2-1-0',
            label: 'Goodfellas',
            icon: 'pi pi-fw pi-video',
            data: 'Goodfellas Movie'
          }, {
            key: '2-1-1',
            label: 'Untouchables',
            icon: 'pi pi-fw pi-video',
            data: 'Untouchables Movie'
          }]
        }]
      }];
      var TrelloData = {
        "lanes": [{
          "id": "PLANNED",
          "title": "Planned Tasks",
          "style": {
            "width": 280
          },
          "cards": [{
            "id": "Milk",
            "title": "Buy milk",
            "label": "15 mins",
            "description": "2 Gallons of milk at the Deli store"
          }, {
            "id": "Plan2",
            "title": "Dispose Garbage",
            "label": "10 mins",
            "description": "Sort out recyclable and waste as needed"
          }, {
            "id": "Plan3",
            "title": "Write Blog",
            "label": "30 mins",
            "description": "Can AI make memes?"
          }, {
            "id": "Plan4",
            "title": "Pay Rent",
            "label": "5 mins",
            "description": "Transfer to bank account"
          }]
        }, {
          "id": "WIP",
          "title": "Work In Progress",
          "style": {
            "width": 280
          },
          "cards": [{
            "id": "Wip1",
            "title": "Clean House",
            "label": "30 mins",
            "description": "Soap wash and polish floor. Polish windows and doors. Scrap all broken glasses"
          }]
        }, {
          "id": "BLOCKED",
          "title": "Blocked",
          "style": {
            "width": 280
          },
          "cards": []
        }]
      };
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["TrelloComponent"], {
        value: TrelloData,
        draggable: true
      }));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHRyYV9kYXNoX3VpX2NvbXBvbmVudHMvLi9zcmMvZGVtby9BcHAuanMiXSwibmFtZXMiOlsiQXBwIiwic3RhdGUiLCJ2YWx1ZSIsImRhdGEiLCJvcmdTYW1wbGUiLCJkYXRhMSIsInNlbGVjdGlvbiIsIm5vZGVzIiwiZXhwYW5kZWRLZXlzIiwiZmlyc3QiLCJyb3dzIiwiZmlyc3QyIiwicm93czIiLCJjYXJEYXRhIiwic2NyZWVuc2hvdCIsInJlY2FwdGNoYUNhbGxiYWNrIiwiYmluZCIsInRvZ2dsZU1vdmllcyIsIm9uUGFnZUNoYW5nZSIsIm9uUGFnZUNoYW5nZTIiLCJjYXJUZW1wbGF0ZSIsImxvYWRKU09OIiwicGF0aCIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsIkRPTkUiLCJzdGF0dXMiLCJzZXRTdGF0ZSIsIkpTT04iLCJwYXJzZSIsInJlc3BvbnNlVGV4dCIsImNvbnNvbGUiLCJsb2ciLCJvcGVuIiwic2VuZCIsIm5ld1Byb3BzIiwicmVzcG9uc2UiLCJuZXdEYXRhIiwiZXZlbnQiLCJjYXIiLCJzcmMiLCJicmFuZCIsInZpbiIsInllYXIiLCJjb2xvciIsIml0ZW1zIiwibGFiZWwiLCJ1cmwiLCJob21lIiwiaWNvbiIsImZvb3RlciIsImVsIiwibG9hZEJ1dHRvbiIsInJlc3BvbnNpdmVPcHRpb25zIiwiYnJlYWtwb2ludCIsIm51bVZpc2libGUiLCJudW1TY3JvbGwiLCJrZXkiLCJjaGlsZHJlbiIsIlRyZWxsb0RhdGEiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQVdBO0FBQ0E7QUFDQTs7SUFFTUEsRzs7Ozs7QUFDRixpQkFBYztBQUFBOztBQUFBOztBQUNWO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLFdBQUssRUFBRSxFQURFO0FBRVRDLFVBQUks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TztBQU5YLFNBRE8sRUFrQ1A7QUFDRSxnQkFBTSxLQURSO0FBRUUsbUJBQVMsa0JBRlg7QUFHRSxtQkFBUztBQUNQLHFCQUFTO0FBREYsV0FIWDtBQU1FLG1CQUFTLENBQ1A7QUFDRSxrQkFBTSxNQURSO0FBRUUscUJBQVMsYUFGWDtBQUdFLHFCQUFTLFNBSFg7QUFJRSwyQkFBZTtBQUpqQixXQURPO0FBTlgsU0FsQ08sRUFpRFA7QUFDRSxnQkFBTSxTQURSO0FBRUUsbUJBQVMsU0FGWDtBQUdFLG1CQUFTO0FBQ1AscUJBQVM7QUFERixXQUhYO0FBTUUsbUJBQVM7QUFOWCxTQWpETztBQURNLE9BQW5CO0FBNkRBLGFBQ0ksd0VBd0dJLDJEQUFDLG9EQUFEO0FBQWlCLGFBQUssRUFBS0EsVUFBM0I7QUFBd0MsaUJBQVMsRUFBSTtBQUFyRCxRQXhHSixDQURKO0FBNEdIOzs7O0VBcmNhQywrQzs7QUF3Y0g5RCxrRUFBZixFIiwiZmlsZSI6IjNmZWFkYjYtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50IG5vLW1hZ2ljLW51bWJlcnM6IDAgKi9cclxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgICBCcmVhZGNydW1ic0Rhc2hVaUNvbXBvbmVudHMsXHJcbiAgICBDYXJvdXNlbENvbXBvbmVudCxcclxuICAgIERhdGFTY3JvbGxlckRhc2hVaUNvbXBvbmVudHMsXHJcbiAgICBPcmdhbml6YXRpb25DaGFydENvbXBvbmVudCxcclxuICAgIFBhZ2luYXRvckRhc2hVaUNvbXBvbmVudHMsXHJcbiAgICBUcmVlRGFzaFVpQ29tcG9uZW50cyxcclxuICAgIFdlYmNhbURhc2hVaUNvbXBvbmVudHMsXHJcbiAgICBNaWNyb3Bob25lRGFzaFVpQ29tcG9uZW50cyxcclxuICAgIFRyZWxsb0NvbXBvbmVudFxyXG59IGZyb20gJy4uL2xpYic7XHJcbmltcG9ydCB7Y2Fyc0Nhcm91c2VsfSBmcm9tICcuL3NhbXBsZURhdGEvY2Fyb3VzZWxEYXRhJztcclxuaW1wb3J0IG9yZ1NhbXBsZSBmcm9tICcuL3NhbXBsZURhdGEvb3JnQ2hhcnREYXRhJztcclxuaW1wb3J0IGRhdGEgZnJvbSBcIi4uL2xpYi9jb21wb25lbnRzL1RyZWxsby9kYXRhLmpzb25cIlxyXG5cclxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgdmFsdWU6ICcnLFxyXG4gICAgICAgICAgICBkYXRhOiBvcmdTYW1wbGUuZGF0YSxcclxuICAgICAgICAgICAgZGF0YTE6IG9yZ1NhbXBsZS5kYXRhMSxcclxuICAgICAgICAgICAgc2VsZWN0aW9uOiBudWxsLFxyXG4gICAgICAgICAgICBub2RlczogbnVsbCxcclxuICAgICAgICAgICAgZXhwYW5kZWRLZXlzOiB7fSxcclxuICAgICAgICAgICAgZmlyc3Q6IDAsXHJcbiAgICAgICAgICAgIHJvd3M6IDEwLFxyXG4gICAgICAgICAgICBmaXJzdDI6IDAsXHJcbiAgICAgICAgICAgIHJvd3MyOiAxMCxcclxuICAgICAgICAgICAgY2FyRGF0YTogW10sXHJcbiAgICAgICAgICAgIHNjcmVlbnNob3Q6IFwiXCJcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMucmVjYXB0Y2hhQ2FsbGJhY2sgPSB0aGlzLnJlY2FwdGNoYUNhbGxiYWNrLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy50b2dnbGVNb3ZpZXMgPSB0aGlzLnRvZ2dsZU1vdmllcy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25QYWdlQ2hhbmdlID0gdGhpcy5vblBhZ2VDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uUGFnZUNoYW5nZTIgPSB0aGlzLm9uUGFnZUNoYW5nZTIuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5jYXJUZW1wbGF0ZSA9IHRoaXMuY2FyVGVtcGxhdGUuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLmxvYWRKU09OKCcuLi8uLi9jYXItbGFyZ2UuanNvbicpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRKU09OKHBhdGgpIHtcclxuICAgICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSBYTUxIdHRwUmVxdWVzdC5ET05FKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhckRhdGE6IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCksXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB4aHIub3BlbignR0VUJywgcGF0aCwgdHJ1ZSk7XHJcbiAgICAgICAgeGhyLnNlbmQoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQcm9wcyhuZXdQcm9wcykge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG5ld1Byb3BzKTtcclxuICAgICAgICAvLyB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAvLyAgICAgc2NyZWVuc2hvdDogbmV3UHJvcHMuc2NyZWVuc2hvdFxyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlY2FwdGNoYUNhbGxiYWNrKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1Jlc3BvbnNlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVjYXB0Y2hhRXhwaXJlZENhbGxiYWNrKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdFeHBpcmVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EYXRhQ2hhbmdlKG5ld0RhdGEpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhuZXdEYXRhKVxyXG4gICAgfVxyXG5cclxuICAgIG9uUGFnZUNoYW5nZShldmVudCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBmaXJzdDogZXZlbnQuZmlyc3QsXHJcbiAgICAgICAgICAgIHJvd3M6IGV2ZW50LnJvd3MsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25QYWdlQ2hhbmdlMihldmVudCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBmaXJzdDI6IGV2ZW50LmZpcnN0LFxyXG4gICAgICAgICAgICByb3dzMjogZXZlbnQucm93cyxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVNb3ZpZXMoKSB7XHJcbiAgICAgICAgbGV0IGV4cGFuZGVkS2V5cyA9IHsuLi50aGlzLnN0YXRlLmV4cGFuZGVkS2V5c307XHJcbiAgICAgICAgaWYgKGV4cGFuZGVkS2V5c1snMiddKSBkZWxldGUgZXhwYW5kZWRLZXlzWycyJ107XHJcbiAgICAgICAgZWxzZSBleHBhbmRlZEtleXNbJzInXSA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2V4cGFuZGVkS2V5czogZXhwYW5kZWRLZXlzfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FyVGVtcGxhdGUoY2FyKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coY2FyKVxyXG4gICAgICAgIGlmICghY2FyKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGRhdGFcclxuXHJcbiAgICAgICAgY29uc3Qgc3JjID0gJy4vJyArIGNhci5icmFuZCArICcucG5nJztcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWdyaWQgY2FyLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1jb2wtMTIgcC1tZC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3NyY30gYWx0PVwiQ2FyXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWNvbC0xMiBwLW1kLTlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtZ3JpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtY29sLTIgcC1zbS02XCI+VmluOiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWNvbC0xMCBwLXNtLTZcIj57Y2FyLnZpbn08L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1jb2wtMiBwLXNtLTZcIj5ZZWFyOiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWNvbC0xMCBwLXNtLTZcIj57Y2FyLnllYXJ9PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtY29sLTIgcC1zbS02XCI+QnJhbmQ6IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtY29sLTEwIHAtc20tNlwiPntjYXIuYnJhbmR9PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtY29sLTIgcC1zbS02XCI+Q29sb3I6IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtY29sLTEwIHAtc20tNlwiPntjYXIuY29sb3J9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zdGF0ZS5jYXJEYXRhLmRhdGEpO1xyXG5cclxuICAgICAgICBjb25zdCBpdGVtcyA9IFtcclxuICAgICAgICAgICAge2xhYmVsOiAnQ2F0ZWdvcmllcyd9LFxyXG4gICAgICAgICAgICB7bGFiZWw6ICdTcG9ydHMnfSxcclxuICAgICAgICAgICAge2xhYmVsOiAnRm9vdGJhbGwnfSxcclxuICAgICAgICAgICAge2xhYmVsOiAnQ291bnRyaWVzJ30sXHJcbiAgICAgICAgICAgIHtsYWJlbDogJ1NwYWluJ30sXHJcbiAgICAgICAgICAgIHtsYWJlbDogJ0YuQy4gQmFyY2Vsb25hJ30sXHJcbiAgICAgICAgICAgIHtsYWJlbDogJ1NxdWFkJ30sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiAnTGlvbmVsIE1lc3NpJyxcclxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0xpb25lbF9NZXNzaScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgY29uc3QgaG9tZSA9IHtcclxuICAgICAgICAgICAgaWNvbjogJ3R1bWIgdHVtYi1ob21lJyxcclxuICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL25mcmlrL2V4dHJhX2Rhc2hfdWlfY29tcG9uZW50cy5naXQnLFxyXG4gICAgICAgICAgICBsYWJlbDogJ0hvbWUnLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGZvb3RlciA9IChcclxuICAgICAgICAgICAgPGJ1dHRvbiByZWY9e2VsID0+ICh0aGlzLmxvYWRCdXR0b24gPSBlbCl9PiBMb2FkIDwvYnV0dG9uPlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNpdmVPcHRpb25zID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiAnMTAyNHB4JyxcclxuICAgICAgICAgICAgICAgIG51bVZpc2libGU6IDMsXHJcbiAgICAgICAgICAgICAgICBudW1TY3JvbGw6IDMsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6ICc3NjhweCcsXHJcbiAgICAgICAgICAgICAgICBudW1WaXNpYmxlOiAyLFxyXG4gICAgICAgICAgICAgICAgbnVtU2Nyb2xsOiAyLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiAnNTYwcHgnLFxyXG4gICAgICAgICAgICAgICAgbnVtVmlzaWJsZTogMSxcclxuICAgICAgICAgICAgICAgIG51bVNjcm9sbDogMSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGtleTogJzAnLFxyXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdEb2N1bWVudHMnLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogJ0RvY3VtZW50cyBGb2xkZXInLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3BpIHBpLWZ3IHBpLWluYm94JyxcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICcwLTAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1dvcmsnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiAnV29yayBGb2xkZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAncGkgcGktZncgcGktY29nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICcwLTAtMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdFeHBlbnNlcy5kb2MnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdwaSBwaS1mdyBwaS1maWxlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiAnRXhwZW5zZXMgRG9jdW1lbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICcwLTAtMScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdSZXN1bWUuZG9jJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAncGkgcGktZncgcGktZmlsZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogJ1Jlc3VtZSBEb2N1bWVudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICcwLTEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0hvbWUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiAnSG9tZSBGb2xkZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAncGkgcGktZncgcGktaG9tZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnMC0xLTAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnSW52b2ljZXMudHh0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAncGkgcGktZncgcGktZmlsZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogJ0ludm9pY2VzIGZvciB0aGlzIG1vbnRoJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGtleTogJzEnLFxyXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdFdmVudHMnLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogJ0V2ZW50cyBGb2xkZXInLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3BpIHBpLWZ3IHBpLWNhbGVuZGFyJyxcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICcxLTAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ01lZXRpbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAncGkgcGktZncgcGktY2FsZW5kYXItcGx1cycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6ICdNZWV0aW5nJyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnMS0xJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdQcm9kdWN0IExhdW5jaCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdwaSBwaS1mdyBwaS1jYWxlbmRhci1wbHVzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogJ1Byb2R1Y3QgTGF1bmNoJyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnMS0yJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdSZXBvcnQgUmV2aWV3JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3BpIHBpLWZ3IHBpLWNhbGVuZGFyLXBsdXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiAnUmVwb3J0IFJldmlldycsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGtleTogJzInLFxyXG4gICAgICAgICAgICAgICAgbGFiZWw6ICc8ZGl2PmFkc2FmPC9kaXY+TW92aWVzJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6ICdNb3ZpZXMgRm9sZGVyJyxcclxuICAgICAgICAgICAgICAgIGljb246ICdwaSBwaS1mdyBwaS1zdGFyJyxcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICcyLTAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAncGkgcGktZncgcGktc3RhcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnQWwgUGFjaW5vJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogJ1BhY2lubyBNb3ZpZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJzItMC0wJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1NjYXJmYWNlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAncGkgcGktZncgcGktdmlkZW8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6ICdTY2FyZmFjZSBNb3ZpZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJzItMC0xJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1NlcnBpY28nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdwaSBwaS1mdyBwaS12aWRlbycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogJ1NlcnBpY28gTW92aWUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnMi0xJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdSb2JlcnQgRGUgTmlybycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdwaSBwaS1mdyBwaS1zdGFyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogJ0RlIE5pcm8gTW92aWVzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICcyLTEtMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdHb29kZmVsbGFzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAncGkgcGktZncgcGktdmlkZW8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6ICdHb29kZmVsbGFzIE1vdmllJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnMi0xLTEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnVW50b3VjaGFibGVzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAncGkgcGktZncgcGktdmlkZW8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6ICdVbnRvdWNoYWJsZXMgTW92aWUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICBjb25zdCBUcmVsbG9EYXRhID0ge1xyXG4gICAgICAgICAgICBcImxhbmVzXCI6IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwiUExBTk5FRFwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlBsYW5uZWQgVGFza3NcIixcclxuICAgICAgICAgICAgICAgIFwic3R5bGVcIjoge1xyXG4gICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDI4MFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFwiY2FyZHNcIjogW1xyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIk1pbGtcIixcclxuICAgICAgICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiQnV5IG1pbGtcIixcclxuICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiMTUgbWluc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCIyIEdhbGxvbnMgb2YgbWlsayBhdCB0aGUgRGVsaSBzdG9yZVwiXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiUGxhbjJcIixcclxuICAgICAgICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiRGlzcG9zZSBHYXJiYWdlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIjEwIG1pbnNcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiU29ydCBvdXQgcmVjeWNsYWJsZSBhbmQgd2FzdGUgYXMgbmVlZGVkXCJcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJQbGFuM1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidGl0bGVcIjogXCJXcml0ZSBCbG9nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIjMwIG1pbnNcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQ2FuIEFJIG1ha2UgbWVtZXM/XCJcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJQbGFuNFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidGl0bGVcIjogXCJQYXkgUmVudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCI1IG1pbnNcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiVHJhbnNmZXIgdG8gYmFuayBhY2NvdW50XCJcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcIldJUFwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIldvcmsgSW4gUHJvZ3Jlc3NcIixcclxuICAgICAgICAgICAgICAgIFwic3R5bGVcIjoge1xyXG4gICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDI4MFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFwiY2FyZHNcIjogW1xyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIldpcDFcIixcclxuICAgICAgICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiQ2xlYW4gSG91c2VcIixcclxuICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiMzAgbWluc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJTb2FwIHdhc2ggYW5kIHBvbGlzaCBmbG9vci4gUG9saXNoIHdpbmRvd3MgYW5kIGRvb3JzLiBTY3JhcCBhbGwgYnJva2VuIGdsYXNzZXNcIlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwiQkxPQ0tFRFwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkJsb2NrZWRcIixcclxuICAgICAgICAgICAgICAgIFwic3R5bGVcIjoge1xyXG4gICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDI4MFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFwiY2FyZHNcIjogW11cclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHsvKiA8Q2Fyb3VzZWxDb21wb25lbnRcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y2Fyc0Nhcm91c2VsfVxyXG4gICAgICAgICAgICAgICAgICAgIG51bVZpc2libGU9ezR9XHJcbiAgICAgICAgICAgICAgICAgICAgbnVtU2Nyb2xsPXsxfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNsYXNzTmFtZT1cImN1c3RvbS1jYXJvdXNlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2l2ZU9wdGlvbnM9e3Jlc3BvbnNpdmVPcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcj17J2N1c3RvbUhlYWRlcid9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcGFnZT17dGhpcy5zdGF0ZS5wYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNldFByb3BzPXt0aGlzLnNldFByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgIGNpcmN1bGFyPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9wbGF5SW50ZXJ2YWw9ezIwMDB9XHJcbiAgICAgICAgICAgICAgICAvPiAqL31cclxuICAgICAgICAgICAgICAgIHsvKiA8UmF0aW5nQ29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UHJvcHM9e3RoaXMuc2V0UHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJzPXszfVxyXG4gICAgICAgICAgICAgICAgLz4gKi99XHJcbiAgICAgICAgICAgICAgICB7LyogPExpc3RCb3hDb21wb25lbnRcclxuICAgICAgICAgICAgICAgICAgICBpZD17J2lkayd9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2NhcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UHJvcHM9e3RoaXMuc2V0UHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogJzE1ZW0nfX1cclxuICAgICAgICAgICAgICAgICAgICBsaXN0U3R5bGU9e3ttYXhIZWlnaHQ6ICcxMDBweCd9fVxyXG4gICAgICAgICAgICAgICAgICAgIGxpc3RDb250YWluZXJTdHlsZT17e21heEhlaWdodDogJzMwMHB4J319XHJcbiAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXA9eydIZXknfVxyXG4gICAgICAgICAgICAgICAgLz4gKi99XHJcbiAgICAgICAgICAgICAgICB7LyogPE9yZ2FuaXphdGlvbkNoYXJ0Q29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UHJvcHM9e3RoaXMuc2V0UHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGF0YTF9XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uTW9kZT1cIm11bHRpcGxlXCJcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb249e3RoaXMuc3RhdGUuc2VsZWN0aW9ufVxyXG4gICAgICAgICAgICAgICAgLz4gKi99XHJcbiAgICAgICAgICAgICAgICB7LyogPEV4dHJhRGFzaFVpQ29tcG9uZW50c1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFByb3BzPXt0aGlzLnNldFByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgLz4gKi99XHJcbiAgICAgICAgICAgICAgICB7LyogPEJyZWFkY3J1bWJzRGFzaFVpQ29tcG9uZW50cyBtb2RlbD17aXRlbXN9IGhvbWU9e2hvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICA8aDE+SGVsbG8sIERhc2ghPC9oMT4gKi99XHJcbiAgICAgICAgICAgICAgICB7LyogPGgzIGNsYXNzTmFtZT1cImZpcnN0XCI+VW5jb250cm9sbGVkPC9oMz5cclxuICAgICAgICAgICAgICAgIDxUcmVlRGFzaFVpQ29tcG9uZW50cyB2YWx1ZT17ZGF0YX0gey4uLnRoaXMuc3RhdGV9IC8+XHJcbiAgICAgICAgICAgICAgICA8aDM+Q29udHJvbGxlZDwvaDM+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMudG9nZ2xlTW92aWVzfT5Ub2dnbGUgTW92aWVzPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8VHJlZURhc2hVaUNvbXBvbmVudHNcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICBleHBhbmRlZEtleXM9e3RoaXMuc3RhdGUuZXhwYW5kZWRLZXlzfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uVG9nZ2xlPXtlID0+IHRoaXMuc2V0U3RhdGUoe2V4cGFuZGVkS2V5czogZS52YWx1ZX0pfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luVG9wOiAnLjVlbSd9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxoMz5EZWZhdWx0PC9oMz5cclxuICAgICAgICAgICAgICAgIDxQYWdpbmF0b3JEYXNoVWlDb21wb25lbnRzXHJcbiAgICAgICAgICAgICAgICAgICAgZmlyc3Q9e3RoaXMuc3RhdGUuZmlyc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgcm93cz17dGhpcy5zdGF0ZS5yb3dzfVxyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsUmVjb3Jkcz17MTIwfVxyXG4gICAgICAgICAgICAgICAgICAgIHJvd3NQZXJQYWdlT3B0aW9ucz17WzEwLCAyMCwgMzBdfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uUGFnZUNoYW5nZT17dGhpcy5vblBhZ2VDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICA+PC9QYWdpbmF0b3JEYXNoVWlDb21wb25lbnRzPiAqL31cclxuICAgICAgICAgICAgICAgIHsvKiA8UGFnaW5hdG9yRGFzaFVpQ29tcG9uZW50cy8+ICovfVxyXG4gICAgICAgICAgICAgICAgey8qIDxoMz5DdXN0b20gVGVtcGxhdGU8L2gzPlxyXG4gICAgICAgICAgICAgICAgPFBhZ2luYXRvckRhc2hVaUNvbXBvbmVudHNcclxuICAgICAgICAgICAgICAgICAgICBmaXJzdD17dGhpcy5zdGF0ZS5maXJzdDJ9XHJcbiAgICAgICAgICAgICAgICAgICAgcm93cz17dGhpcy5zdGF0ZS5yb3dzMn1cclxuICAgICAgICAgICAgICAgICAgICB0b3RhbFJlY29yZHM9ezEyMH1cclxuICAgICAgICAgICAgICAgICAgICByb3dzUGVyUGFnZU9wdGlvbnM9e1sxMCwgMjAsIDMwXX1cclxuICAgICAgICAgICAgICAgICAgICBvblBhZ2VDaGFuZ2U9e3RoaXMub25QYWdlQ2hhbmdlMn1cclxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZT1cIkZpcnN0UGFnZUxpbmsgUHJldlBhZ2VMaW5rIEN1cnJlbnRQYWdlUmVwb3J0IE5leHRQYWdlTGluayBMYXN0UGFnZUxpbmtcIlxyXG4gICAgICAgICAgICAgICAgPjwvUGFnaW5hdG9yRGFzaFVpQ29tcG9uZW50cz4gKi99XHJcbiAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LXNlY3Rpb24gaW1wbGVtZW50YXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICBEZW1vIGlzIGF0IHRoZSBib3R0b20gb2YgdGhpcyBwYWdlLlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtc2VjdGlvbiBpbXBsZW1lbnRhdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEYXRhU2Nyb2xsZXJEYXNoVWlDb21wb25lbnRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmNhckRhdGEuZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVRlbXBsYXRlPXt0aGlzLmNhclRlbXBsYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dzPXsxMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5saW5lPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxIZWlnaHQ9XCI1MDBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcj1cIlNjcm9sbCBEb3duIHRvIExvYWQgTW9yZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8RGF0YVNjcm9sbGVyRGFzaFVpQ29tcG9uZW50c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5jYXJEYXRhLmRhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1UZW1wbGF0ZT17dGhpcy5jYXJUZW1wbGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17NX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGVyPXt0aGlzLmxvYWRCdXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvb3Rlcj17Zm9vdGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI9XCJDbGljayBMb2FkIEJ1dHRvbiBhdCBGb290ZXIgdG8gTG9hZCBNb3JlXCJcclxuICAgICAgICAgICAgICAgICAgICAvPiAqL31cclxuICAgICAgICAgICAgICAgIHsvKiA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICB7LyogPFdlYmNhbURhc2hVaUNvbXBvbmVudHNcclxuICAgICAgICAgICAgICAgICAgICBpZD0nd2ViY2FtJ1xyXG4gICAgICAgICAgICAgICAgICAgIGF1ZGlvPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICBzY3JlZW5zaG90Rm9ybWF0PVwiaW1hZ2UvanBlZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc2NyZWVuc2hvdFdpZHRoPXs1MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezUwMH1cclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezMwMH1cclxuICAgICAgICAgICAgICAgICAgICBzZXRQcm9wcz17dGhpcy5zZXRQcm9wc31cclxuICAgICAgICAgICAgICAgIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgey8qIDxNaWNyb3Bob25lRGFzaFVpQ29tcG9uZW50cy8+ICovfVxyXG4gICAgICAgICAgICAgICAgPFRyZWxsb0NvbXBvbmVudCB2YWx1ZSA9IHsgVHJlbGxvRGF0YSB9IGRyYWdnYWJsZSA9IHt0cnVlfS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==