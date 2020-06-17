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
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-datepicker */ "./node_modules/react-datepicker/dist/react-datepicker.min.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _PMSChildrenComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PMSChildrenComponent */ "./src/lib/components/PMS_Component/PMSChildrenComponent.js");
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mdbreact */ "./node_modules/mdbreact/dist/mdbreact.esm.js");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ "./node_modules/react-datepicker/dist/react-datepicker.css");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_8__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










 // import DatePicker from 'react-datepicker';

var PMSComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(PMSComponent, _Component);

  function PMSComponent(props) {
    var _this;

    _classCallCheck(this, PMSComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PMSComponent).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      _this.setState(_defineProperty({}, event.target.name, event.target.value));
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange1", function (date) {
      debugger;

      _this.setState({
        startDate: date
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getChild", function (e) {
      _this.setState({
        childData: JSON.parse(_this.props.value)[e.target.value]
      });

      _this.props.setProps({
        currentGirlId: JSON.parse(_this.props.value)[e.target.value].id
      });
    });

    _defineProperty(_assertThisInitialized(_this), "girlDataUpdate", function (result) {
      var updateData = result;
      delete result.modal1;
      var str = updateData.startDate.getFullYear() + "-" + (updateData.startDate.getMonth() + 1) + "-" + updateData.startDate.getDate();
      result.startDate = str;

      _this.props.setProps({
        updateData: updateData
      });

      console.log(result);
      debugger;
    });

    _defineProperty(_assertThisInitialized(_this), "delete", function (result) {
      debugger;

      _this.props.setProps({
        deleteID: result
      });
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
          girlList.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
            "class": "list-group-item list-group-item-action item1",
            id: girlData.id,
            value: x,
            onClick: _this.getChild
          }, girlData[x].girlName));
        }
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBRow"], {
        id: _this.props.id
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBCol"], {
        md: "2"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBCol"], {
        md: "8"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBRow"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBCol"], {
        md: "2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "card card-cascade narrower"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "card-body card-body-cascade",
        style: {
          padding: '0px',
          minHeight: '500px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "list-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        "class": "itemTitle list-group-item list-group-item-action"
      }, "MyGirls"), girlList, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        "class": "list-group-item list-group-item-action addItem",
        onClick: _this.toggle
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        style: {
          "color": "grey"
        }
      }, "Add")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          'width': '5px'
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBCol"], {
        md: "9"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PMSChildrenComponent__WEBPACK_IMPORTED_MODULE_6__["default"], {
        data: _this.state.childData,
        "delete": _this["delete"],
        girlDataUpdate: _this.girlDataUpdate
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBRow"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBModal"], {
        isOpen: _this.state.modal,
        toggle: _this.toggle,
        size: "md"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "itemTitle"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBModalHeader"], {
        toggle: _this.toggle
      }, "Add Gril")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBModalBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "col-lg-3 col-md-1"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        style: {
          'color': 'red'
        }
      }, _this.state.error)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "col-lg-4 col-md-12"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBInput"], {
        label: "Name : ",
        onChange: _this.handleChange,
        name: "girlName",
        value: _this.state.girlName
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "col-lg-8 col-md-8"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        "class": "dateLabel"
      }, "startDate"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_datepicker__WEBPACK_IMPORTED_MODULE_5___default.a, {
        className: "datePicker",
        selected: _this.state.startDate,
        onChange: _this.handleChange1
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "col-lg-6 col-md-8"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBInput"], {
        label: "Cycle",
        onChange: _this.handleChange,
        name: "cycle",
        value: _this.state.cycle
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "col-lg-4 col-md-8"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBInput"], {
        label: "Ovulstion Period",
        onChange: _this.handleChange,
        name: "obulation",
        value: _this.state.obulation
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "col-lg-6 col-md-8"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBInput"], {
        label: "Menstruation Period",
        onChange: _this.handleChange,
        name: "menstruation",
        value: _this.state.menstruation
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBModalFooter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "button",
        onClick: _this.toggle
      }, "CANCLE"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "button",
        onClick: function onClick() {
          if (_this.state.girlName != "" && _this.state.cycle != "" && Number(_this.state.cycle) != NaN && _this.state.startDate != "" && Number(_this.state.cycle) > 0 && _this.state.obulation != "" && Number(_this.state.obulation) != NaN && Number(_this.state.obulation) > 0 && _this.state.menstruation != "" && Number(_this.state.menstruation) != NaN && Number(_this.state.menstruation) > 0) {
            var str = _this.state.startDate.getFullYear() + "-" + (_this.state.startDate.getMonth() + 1) + "-" + _this.state.startDate.getDate();

            var _girlData = {
              startDate: str,
              girlName: _this.state.girlName,
              cycle: Number(_this.state.cycle),
              obulation: Number(_this.state.obulation),
              menstruation: Number(_this.state.menstruation)
            };

            _this.props.setProps({
              newGirl: _girlData
            });

            _this.toggle();
          } else {
            _this.setState({
              error: "Please Input Correctly!"
            });

            return;
          }
        }
      }, "Add Girl"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBCol"], {
        md: "2"
      }));
    });

    _this.state = {
      girlName: "",
      cycle: "",
      startDate: new Date(),
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
  newGirl: null,
  range: 21
};
PMSComponent.propTypes = {
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  newGirl: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  updateData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  range: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  currentGirlId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  deleteID: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX2V4dHJhX3VpX2NvbXBvbmVudHMvLi9zcmMvbGliL2NvbXBvbmVudHMvUE1TX0NvbXBvbmVudC9QTVNDb21wb25lbnQucmVhY3QuanMiXSwibmFtZXMiOlsiUE1TQ29tcG9uZW50IiwicHJvcHMiLCJldmVudCIsInNldFN0YXRlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiZGF0ZSIsInN0YXJ0RGF0ZSIsImUiLCJjaGlsZERhdGEiLCJKU09OIiwicGFyc2UiLCJzZXRQcm9wcyIsImN1cnJlbnRHaXJsSWQiLCJpZCIsInJlc3VsdCIsInVwZGF0ZURhdGEiLCJtb2RhbDEiLCJzdHIiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJkZWxldGVJRCIsIm1vZGFsIiwic3RhdGUiLCJlcnJvciIsImxlbmd0aCIsImdpcmxEYXRhIiwiZ2lybExpc3QiLCJ4IiwicHVzaCIsImdldENoaWxkIiwiZ2lybE5hbWUiLCJwYWRkaW5nIiwibWluSGVpZ2h0IiwidG9nZ2xlIiwiZ2lybERhdGFVcGRhdGUiLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVDaGFuZ2UxIiwiY3ljbGUiLCJvYnVsYXRpb24iLCJtZW5zdHJ1YXRpb24iLCJOdW1iZXIiLCJOYU4iLCJuZXdHaXJsIiwiRGF0ZSIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInJhbmdlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiZnVuYyIsIm9iamVjdCIsIm51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7Q0FFQTs7SUFFcUJBLFk7Ozs7O0FBQ2pCLHdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2Ysc0ZBQU1BLEtBQU47O0FBRGUsbUVBZUosVUFBQUMsS0FBSyxF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QUFMaUIsQ0FBNUI7QUFRQW5ELFlBQVksQ0FBQ29ELFNBQWIsR0FBeUI7QUFDckI5QyxPQUFLLEVBQUcrQyxpREFBUyxDQUFDQyxNQURHO0FBRXJCdkMsSUFBRSxFQUFHc0MsaURBQVMsQ0FBQ0MsTUFGTTtBQUdyQnpDLFVBQVEsRUFBR3dDLGlEQUFTLENBQUNFLElBSEE7QUFJckJSLFNBQU8sRUFBR00saURBQVMsQ0FBQ0csTUFKQztBQUtyQnZDLFlBQVUsRUFBR29DLGlEQUFTLENBQUNHLE1BTEY7QUFNckJMLE9BQUssRUFBR0UsaURBQVMsQ0FBQ0ksTUFORztBQU9yQjNDLGVBQWEsRUFBR3VDLGlEQUFTLENBQUNJLE1BUEw7QUFRckJoQyxVQUFRLEVBQUc0QixpREFBUyxDQUFDSTtBQVJBLENBQXpCLEMiLCJmaWxlIjoiMDY5NDkwYS1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgJy4vUE1TQ29tcG9uZW50LmNzcyc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC1jc3Mtb25seS9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xuaW1wb3J0ICdtZGJyZWFjdC9kaXN0L2Nzcy9tZGIuY3NzJztcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gXCJyZWFjdC1kYXRlcGlja2VyXCI7XG5pbXBvcnQgUE1TQ2hpbGRyZW5Db21wb25lbnQgZnJvbSAnLi9QTVNDaGlsZHJlbkNvbXBvbmVudCc7XG5pbXBvcnQgeyBNREJEYXRlUGlja2VyVjUsIFxuICAgICAgICAgTURCQ29udGFpbmVyLCBcbiAgICAgICAgIE1EQlJvdywgXG4gICAgICAgICBNREJDb2wsIFxuICAgICAgICAgTURCSW5wdXQsIFxuICAgICAgICAgTURCTW9kYWxGb290ZXIsIFxuICAgICAgICAgTURCTW9kYWwsIFxuICAgICAgICAgTURCTW9kYWxIZWFkZXIsIFxuICAgICAgICAgTURCTW9kYWxCb2R5IH0gZnJvbSBcIm1kYnJlYWN0XCI7XG5pbXBvcnQgJy4vUE1TQ29tcG9uZW50LmNzcydcbmltcG9ydCBcInJlYWN0LWRhdGVwaWNrZXIvZGlzdC9yZWFjdC1kYXRlcGlja2VyLmNzc1wiO1xuLy8gaW1wb3J0IERhdGVQaWNrZXIgZnJvbSAncmVhY3QtZGF0ZXBpY2tlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBNU0NvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBnaXJsTmFtZSA6IFwiXCIsIFxuICAgICAgICAgICAgY3ljbGUgOiBcIlwiLFxuICAgICAgICAgICAgc3RhcnREYXRlIDogbmV3IERhdGUoKSxcbiAgICAgICAgICAgIG9idWxhdGlvbiAgOiBcIlwiLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgbWVuc3RydWF0aW9uIDogXCJcIixcbiAgICAgICAgICAgIG1vZGFsIDogZmFsc2UsXG4gICAgICAgICAgICBjaGlsZERhdGEgOiBKU09OLnBhcnNlKHRoaXMucHJvcHMudmFsdWUpWzBdLFxuICAgICAgICAgICAgZXJyb3IgOiBcIlwiIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlQ2hhbmdlID0gZXZlbnQgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgW2V2ZW50LnRhcmdldC5uYW1lXSA6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2UxID0gZGF0ZSA9PiB7XG4gICAgICAgIGRlYnVnZ2VyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc3RhcnREYXRlOiBkYXRlXG4gICAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldENoaWxkID0gZSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY2hpbGREYXRhIDogSlNPTi5wYXJzZSh0aGlzLnByb3BzLnZhbHVlKVtlLnRhcmdldC52YWx1ZV1cbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5wcm9wcy5zZXRQcm9wcyh7XG4gICAgICAgICAgICBjdXJyZW50R2lybElkIDogSlNPTi5wYXJzZSh0aGlzLnByb3BzLnZhbHVlKVtlLnRhcmdldC52YWx1ZV0uaWRcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBnaXJsRGF0YVVwZGF0ZSA9IHJlc3VsdCA9PiB7XG4gICAgICAgIGxldCB1cGRhdGVEYXRhID0gcmVzdWx0XG4gICAgICAgIGRlbGV0ZSByZXN1bHQubW9kYWwxXG4gICAgICAgIHZhciBzdHIgPSB1cGRhdGVEYXRhLnN0YXJ0RGF0ZS5nZXRGdWxsWWVhcigpICsgXCItXCIgKyAodXBkYXRlRGF0YS5zdGFydERhdGUuZ2V0TW9udGgoKSsxKSArIFwiLVwiICsgdXBkYXRlRGF0YS5zdGFydERhdGUuZ2V0RGF0ZSgpXG4gICAgICAgIHJlc3VsdC5zdGFydERhdGUgPSBzdHJcbiAgICAgICAgdGhpcy5wcm9wcy5zZXRQcm9wcyh7XG4gICAgICAgICAgICB1cGRhdGVEYXRhIDogdXBkYXRlRGF0YVxuICAgICAgICB9KVxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXG4gICAgICAgIGRlYnVnZ2VyXG4gICAgfVxuXG4gICAgZGVsZXRlID0gKHJlc3VsdCkgPT57XG4gICAgICAgIGRlYnVnZ2VyXG4gICAgICAgIHRoaXMucHJvcHMuc2V0UHJvcHMoe1xuICAgICAgICAgICAgZGVsZXRlSUQgOiByZXN1bHRcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICB0b2dnbGUgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIG1vZGFsIDogIXRoaXMuc3RhdGUubW9kYWwsXG4gICAgICAgICAgZXJyb3IgOiBcIlwiXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgaWYoSlNPTi5wYXJzZSh0aGlzLnByb3BzLnZhbHVlKS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIGxldCBnaXJsRGF0YSA9IEpTT04ucGFyc2UodGhpcy5wcm9wcy52YWx1ZSlcbiAgICAgICAgICAgIHZhciBnaXJsTGlzdCA9IFtdXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZvcihsZXQgeCBpbiBnaXJsRGF0YSl7XG4gICAgICAgICAgICAgICAgZ2lybExpc3QucHVzaChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gaXRlbTFcIiBpZCA9IHsgZ2lybERhdGEuaWQgfSB2YWx1ZSA9IHsgeCB9IG9uQ2xpY2sgPSB7dGhpcy5nZXRDaGlsZH0+eyBnaXJsRGF0YVt4XS5naXJsTmFtZSB9PC9saT5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxNREJSb3cgaWQgID0ge3RoaXMucHJvcHMuaWR9PlxuICAgICAgICAgICAgICAgIDxNREJDb2wgbWQgPSBcIjJcIj5cblxuICAgICAgICAgICAgICAgIDwvTURCQ29sPlxuICAgICAgICAgICAgICAgIDxNREJDb2wgbWQgPSBcIjhcIj5cbiAgICAgICAgICAgICAgICAgICAgPE1EQlJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNREJDb2wgbWQ9XCIyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgY2FyZC1jYXNjYWRlIG5hcnJvd2VyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHkgY2FyZC1ib2R5LWNhc2NhZGVcIiBzdHlsZSA9IHt7IHBhZGRpbmcgOiAnMHB4JywgbWluSGVpZ2h0IDogJzUwMHB4J319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpc3QtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgIGNsYXNzPVwiaXRlbVRpdGxlIGxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uXCIgPk15R2lybHM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgZ2lybExpc3QgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIGFkZEl0ZW1cIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljayA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBzdHlsZSA9IHt7IFwiY29sb3JcIiA6IFwiZ3JleVwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L01EQkNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGUgPSB7eyd3aWR0aCcgOiAnNXB4J319PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1EQkNvbCBtZD1cIjlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UE1TQ2hpbGRyZW5Db21wb25lbnQgZGF0YSA9IHsgdGhpcy5zdGF0ZS5jaGlsZERhdGEgfSBkZWxldGUgPSB7IHRoaXMuZGVsZXRlIH0gZ2lybERhdGFVcGRhdGUgPSB7IHRoaXMuZ2lybERhdGFVcGRhdGUgfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NREJDb2w+XG4gICAgICAgICAgICAgICAgICAgIDwvTURCUm93PlxuICAgICAgICAgICAgICAgICAgICA8TURCUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1EQk1vZGFsIGlzT3Blbj17dGhpcy5zdGF0ZS5tb2RhbH0gdG9nZ2xlPXt0aGlzLnRvZ2dsZX0gc2l6ZSA9IFwibWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiaXRlbVRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJNb2RhbEhlYWRlciAgdG9nZ2xlPXt0aGlzLnRvZ2dsZX0+QWRkIEdyaWw8L01EQk1vZGFsSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJNb2RhbEJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9XCJjb2wtbGctMyBjb2wtbWQtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBzdHlsZT17eydjb2xvcic6J3JlZCd9fT57IHRoaXMuc3RhdGUuZXJyb3IgfTwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPVwiY29sLWxnLTQgY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJJbnB1dCBsYWJlbD1cIk5hbWUgOiBcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0geyB0aGlzLmhhbmRsZUNoYW5nZSB9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9XCJnaXJsTmFtZVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7IHRoaXMuc3RhdGUuZ2lybE5hbWUgfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9XCJjb2wtbGctOCBjb2wtbWQtOFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJkYXRlTGFiZWxcIj5zdGFydERhdGU8L2xhYmVsPjxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyIGNsYXNzTmFtZSA9IFwiZGF0ZVBpY2tlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17dGhpcy5zdGF0ZS5zdGFydERhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UxfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPiAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJjb2wtbGctNiBjb2wtbWQtOFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCSW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkN5Y2xlXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHsgdGhpcy5oYW5kbGVDaGFuZ2UgfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPSBcImN5Y2xlXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHsgdGhpcy5zdGF0ZS5jeWNsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwiY29sLWxnLTQgY29sLW1kLThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQklucHV0IGxhYmVsPVwiT3Z1bHN0aW9uIFBlcmlvZFwiIG9uQ2hhbmdlID0geyB0aGlzLmhhbmRsZUNoYW5nZSB9IG5hbWUgPSBcIm9idWxhdGlvblwiIHZhbHVlID0geyB0aGlzLnN0YXRlLm9idWxhdGlvbiB9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImNvbC1sZy02IGNvbC1tZC04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJJbnB1dCBsYWJlbD1cIk1lbnN0cnVhdGlvbiBQZXJpb2RcIiBvbkNoYW5nZSA9IHsgdGhpcy5oYW5kbGVDaGFuZ2UgfSBuYW1lID0gXCJtZW5zdHJ1YXRpb25cIiB2YWx1ZSA9IHsgIHRoaXMuc3RhdGUubWVuc3RydWF0aW9uIH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NREJNb2RhbEJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQk1vZGFsRm9vdGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZSA9IFwiYnV0dG9uXCIgb25DbGljaz17IHRoaXMudG9nZ2xlIH0+Q0FOQ0xFPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lID0gXCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljayA9IHsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5zdGF0ZS5naXJsTmFtZSAhPSBcIlwiICYmIHRoaXMuc3RhdGUuY3ljbGUgIT0gXCJcIiAmJiBOdW1iZXIodGhpcy5zdGF0ZS5jeWNsZSkgIT0gTmFOIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiB0aGlzLnN0YXRlLnN0YXJ0RGF0ZSAhPSBcIlwiICYmIE51bWJlcih0aGlzLnN0YXRlLmN5Y2xlKSA+IDAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIHRoaXMuc3RhdGUub2J1bGF0aW9uICE9IFwiXCIgJiYgTnVtYmVyKHRoaXMuc3RhdGUub2J1bGF0aW9uKSAhPSBOYU4gJiYgTnVtYmVyKHRoaXMuc3RhdGUub2J1bGF0aW9uKSA+IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5zdGF0ZS5tZW5zdHJ1YXRpb24gIT0gXCJcIiAmJiBOdW1iZXIodGhpcy5zdGF0ZS5tZW5zdHJ1YXRpb24pICE9IE5hTiAmJiBOdW1iZXIodGhpcy5zdGF0ZS5tZW5zdHJ1YXRpb24pID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3RyID0gKHRoaXMuc3RhdGUuc3RhcnREYXRlLmdldEZ1bGxZZWFyKCkgKyBcIi1cIiArICh0aGlzLnN0YXRlLnN0YXJ0RGF0ZS5nZXRNb250aCgpICsxKSArIFwiLVwiICsgKHRoaXMuc3RhdGUuc3RhcnREYXRlLmdldERhdGUoKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBnaXJsRGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZSA6IHN0cixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdpcmxOYW1lIDogdGhpcy5zdGF0ZS5naXJsTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN5Y2xlIDogTnVtYmVyKHRoaXMuc3RhdGUuY3ljbGUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2J1bGF0aW9uIDogTnVtYmVyKHRoaXMuc3RhdGUub2J1bGF0aW9uKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lbnN0cnVhdGlvbiA6IE51bWJlcih0aGlzLnN0YXRlLm1lbnN0cnVhdGlvbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNldFByb3BzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0dpcmwgOiBnaXJsRGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA6IFwiUGxlYXNlIElucHV0IENvcnJlY3RseSFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+QWRkIEdpcmw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01EQk1vZGFsRm9vdGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NREJNb2RhbD5cbiAgICAgICAgICAgICAgICAgICAgPC9NREJSb3c+XG4gICAgICAgICAgICAgICAgPC9NREJDb2w+XG4gICAgICAgICAgICAgICAgPE1EQkNvbCBtZCA9IFwiMlwiPlxuXG4gICAgICAgICAgICAgICAgPC9NREJDb2w+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L01EQlJvdz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblBNU0NvbXBvbmVudC5kZWZhdWx0UHJvcHMgPSB7XG4gICB2YWx1ZSA6IHt9LFxuICAgaWQgOiBudWxsLFxuICAgc2V0UHJvcHMgOiAoKSA9PiB7fSxcbiAgIG5ld0dpcmwgOiBudWxsLFxuICAgcmFuZ2UgOiAyMVxufTtcblxuUE1TQ29tcG9uZW50LnByb3BUeXBlcyA9IHtcbiAgICB2YWx1ZSA6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaWQgOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNldFByb3BzIDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgbmV3R2lybCA6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgdXBkYXRlRGF0YSA6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgcmFuZ2UgOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGN1cnJlbnRHaXJsSWQgOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGRlbGV0ZUlEIDogUHJvcFR5cGVzLm51bWJlcixcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9