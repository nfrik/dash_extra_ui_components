webpackHotUpdateextra_dash_ui_components("main",{

/***/ "./src/lib/components/Trello/TrelloComponent.js":
/*!******************************************************!*\
  !*** ./src/lib/components/Trello/TrelloComponent.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TrelloComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_trello__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-trello */ "./node_modules/react-trello/dist/index.js");
/* harmony import */ var react_trello__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_trello__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



 // import data  from './data.json';

 // import './TrelloComponent.css';
//import classNames from 'classnames';
// import Tooltip from '../../utils/ToolTip';
// import ObjectUtils from '../../utils/ObjectUtils';
// import './Button.css';

/**
 * Component to render a button element
 */

var TrelloComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(TrelloComponent, _Component);

  function TrelloComponent(props) {
    var _this;

    _classCallCheck(this, TrelloComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TrelloComponent).call(this, props));
    _this.state = {
      value: ""
    };
    return _this;
  } // handleDragStart(cardId, laneId){
  //     // Callback function triggered when card drag is started
  // }
  // handleDragEnd(cardId, sourceLaneId, targetLaneId, position, cardDetails) {
  //     // Callback function triggered when card drag ends, return false if you want to cancel drop: 
  // }
  // handleLaneDragStart(laneId) {
  //     // Callback function triggered when lane drag is started: 
  // }
  // handleLaneDragEnd(removedIndex, addedIndex, payload) {
  //     // Callback function triggered when lane drag ends: 
  // }


  _createClass(TrelloComponent, [{
    key: "onDataChange",
    value: function onDataChange(newData) {
      // Called everytime the data changes due to user interaction or event bus:
      // this.setState({value : newData});
      debugger;
    } // onCardClick(cardId, metadata, laneId) {
    //     // Called when a card is clicked: 
    // }
    // onCardAdd(card, laneId) {
    //     // Called when a new card is added: 
    // }
    // onConfirmCardDelete(callback) {
    //     // Called before delete a card, please call the callback() if confirm to delete a card: 
    // }
    // onCardDelete(cardId, laneId) {
    //     // Called when a card is deleted: 
    // }
    // onCardMoveAcrossLanes(fromLaneId, toLaneId, cardId, index) {
    //     // Called when a card is moved across lanes 
    // }
    // onLaneAdd(params) {
    //     // Called when a new lane is added: 
    // }
    // onLaneDelete(laneId) {
    //     // Called when a lane is deleted 
    // }
    // function	Called when a lane attributes are updated onLaneUpdate(laneId, data)
    // function	Called when a lane is clicked onLaneClick(laneId). Card clicks are not propagated to lane click event

  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "this is trello"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_trello__WEBPACK_IMPORTED_MODULE_1___default.a, {
        id: this.props.id,
        data: this.props.value,
        draggable: this.props.draggable,
        onDataChange: this.onDataChange,
        editable: this.props.editable,
        laneDraggable: this.props.laneDraggable,
        cardDraggable: this.props.cardDraggable,
        collapsibleLanes: this.props.collapsibleLanes,
        canAddLanes: this.props.canAddLanes,
        hideCardDeleteIcon: this.props.hideCardDeleteIcon,
        editLaneTitle: this.props.editLaneTitle // handleDragStart = {this.props.handleDragStart}  
        // handleDragEnd = { this.props.handleDragEnd } handleLaneDragStart = { this.props.handleLaneDragStart } handleLaneDragEnd = { this.props.handleLaneDragEnd } 
        // onCardClick = { this.props.onCardClick } onCardAdd = { this.props.onCardAdd } onBeforeCardDelete = { this.onBeforeCardDelete } onCardDelete = { this.props.onCardDelete }  
        // onCardMoveAcrossLanes = { this.props.onCardMoveAcrossLanes } onLaneAdd = { this.props.onLaneAdd } onLaneDelete = { this.props.onLaneDelete } onLaneUpdate = { this.props.onLaneUpdate }
        // onLaneClick = { this.props.onLaneClick } onLaneScroll = { this.props.onLaneScroll }

      }));
    }
  }]);

  return TrelloComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


TrelloComponent.defaultProps = {
  id: null,
  value: {},
  draggable: false,
  laneDraggable: true,
  cardDraggable: true,
  collapsibleLanes: true,
  editable: true,
  canAddLanes: true,
  hideCardDeleteIcon: true,
  editLaneTitle: true
};
TrelloComponent.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  value: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  draggable: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  laneDraggable: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  cardDraggable: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  collapsibleLanes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  editable: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  canAddLanes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  hideCardDeleteIcon: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  editLaneTitle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHRyYV9kYXNoX3VpX2NvbXBvbmVudHMvLi9zcmMvbGliL2NvbXBvbmVudHMvVHJlbGxvL1RyZWxsb0NvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJUcmVsbG9Db21wb25lbnQiLCJwcm9wcyIsInN0YXRlIiwidmFsdWUiLCJuZXdEYXRhIiwiaWQiLCJkcmFnZ2FibGUiLCJvbkRhdGFDaGFuZ2UiLCJlZGl0YWJsZSIsImxhbmVEcmFnZ2FibGUiLCJjYXJkRHJhZ2dhYmxlIiwiY29sbGFwc2libGVMYW5lcyIsImNhbkFkZExhbmVzIiwiaGlkZUNhcmREZWxldGVJY29uIiwiZWRpdExhbmVUaXRsZSIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsIm9iamVjdCIsImJvb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUVBOztDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7Ozs7SUFHcUJBLGU7Ozs7O0FBQ2pCLDJCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YseUZBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDVEMsV0FBSyxFQUFHO0FBREMsS0FBYjtBQUZlO0FBS2xCLEcsQ0FFRDtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7O2lDQUVhQyxPLEVBQVM7QUFDbEI7QUFDQTtBQUNBO0FBQ0gsSyxDQUVEO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNIO0FBQ0E7Ozs7NkJBRVk7QUFDTCxhQUNJLHdFQUNJLHdGQURKLEVBRUksMkRBQUMsbURBQUQ7QUFBTyxVQUFFLEVBQUssS0FBS0gsS0FBTCxDQUFXSSxFQUF6QjtBQUE4QixZQUFJLEVBQUssS0FBS0osS0FBTCxDQUFXRSxLQUFsRDtBQUEwRCxpQkFBUyxFQUFLLEtBQUtGLEtBQUwsQ0FBV0ssU0FBbkY7QUFBK0Ysb0JBQVksRUFBSyxLQUFLQyxZQUFySDtBQUFvSSxnQkFBUSxFQUFLLEtBQUtOLEtBQUwsQ0FBV08sUUFBNUo7QUFDQSxxQkFBYSxFQUFLLEtBQUtQLEtBQUwsQ0FBV1EsYUFEN0I7QUFDNkMscUJBQWEsRUFBSyxLQUFLUixLQUFMLENBQVdTLGFBRDFFO0FBQzBGLHdCQUFnQixFQUFLLEtBQUtULEtBQUwsQ0FBV1UsZ0JBRDFIO0FBRUEsbUJBQVcsRUFBSyxLQUFLVixLQUFMLENBQVdXLFdBRjNCO0FBRXlDLDBCQUFrQixFQUFLLEtBQUtYLEtBQUwsQ0FBV1ksa0JBRjNFO0FBRWdHLHFCQUFhLEVBQUssS0FBS1osS0FBTCxDQUFXYSxhQUY3SCxDQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBUEEsUUFGSixDQURKO0FBY0g7Ozs7RUEzRXdDQywrQzs7O0FBOEU3Q2YsZUFBZSxDQUFDZ0IsWUFBaEIsR0FBK0I7QUFDM0JYLElBQUUsRUFBRyxJQURzQjtBQUUzQkYsT0FBSyxFQUFHLEVBRm1CO0FBRzNCRyxXQUFTLEVBQUcsS0FIZTtBQUkzQkcsZUFBYSxFQUFHLElBSlc7QUFLM0JDLGVBQWEsRUFBSSxJQUxVO0FBTTNCQyxrQkFBZ0IsRUFBRyxJQU5RO0FBTzNCSCxVQUFRLEVBQUksSUFQZTtBQVEzQkksYUFBVyxFQUFHLElBUmE7QUFTM0JDLG9CQUFrQixFQUFHLElBVE07QUFVM0JDLGVBQWEsRUFBSTtBQVZVLENBQS9CO0FBYUFkLGVBQWUsQ0FBQ2lCLFNBQWhCLEdBQTRCO0FBQ3hCWixJQUFFLEVBQUVhLGlEQUFTLENBQUNDLE1BRFU7QUFFeEJoQixPQUFLLEVBQUdlLGlEQUFTLENBQUNFLE1BRk07QUFHeEJkLFdBQVMsRUFBR1ksaURBQVMsQ0FBQ0csSUFIRTtBQUl4QlosZUFBYSxFQUFHUyxpREFBUyxDQUFDRyxJQUpGO0FBS3hCWCxlQUFhLEVBQUlRLGlEQUFTLENBQUNHLElBTEg7QUFNeEJWLGtCQUFnQixFQUFHTyxpREFBUyxDQUFDRyxJQU5MO0FBT3hCYixVQUFRLEVBQUlVLGlEQUFTLENBQUNHLElBUEU7QUFReEJULGFBQVcsRUFBR00saURBQVMsQ0FBQ0csSUFSQTtBQVN4QlIsb0JBQWtCLEVBQUdLLGlEQUFTLENBQUNHLElBVFA7QUFVeEJQLGVBQWEsRUFBSUksaURBQVMsQ0FBQ0c7QUFWSCxDQUE1QixDIiwiZmlsZSI6Ijk3MGEyYWEtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCb2FyZCBmcm9tICdyZWFjdC10cmVsbG8nO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuLy8gaW1wb3J0IGRhdGEgIGZyb20gJy4vZGF0YS5qc29uJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuLy8gaW1wb3J0ICcuL1RyZWxsb0NvbXBvbmVudC5jc3MnO1xyXG4vL2ltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG4vLyBpbXBvcnQgVG9vbHRpcCBmcm9tICcuLi8uLi91dGlscy9Ub29sVGlwJztcclxuLy8gaW1wb3J0IE9iamVjdFV0aWxzIGZyb20gJy4uLy4uL3V0aWxzL09iamVjdFV0aWxzJztcclxuLy8gaW1wb3J0ICcuL0J1dHRvbi5jc3MnO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgdG8gcmVuZGVyIGEgYnV0dG9uIGVsZW1lbnRcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyZWxsb0NvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB2YWx1ZSA6IFwiXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaGFuZGxlRHJhZ1N0YXJ0KGNhcmRJZCwgbGFuZUlkKXtcclxuICAgIC8vICAgICAvLyBDYWxsYmFjayBmdW5jdGlvbiB0cmlnZ2VyZWQgd2hlbiBjYXJkIGRyYWcgaXMgc3RhcnRlZFxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGhhbmRsZURyYWdFbmQoY2FyZElkLCBzb3VyY2VMYW5lSWQsIHRhcmdldExhbmVJZCwgcG9zaXRpb24sIGNhcmREZXRhaWxzKSB7XHJcbiAgICAvLyAgICAgLy8gQ2FsbGJhY2sgZnVuY3Rpb24gdHJpZ2dlcmVkIHdoZW4gY2FyZCBkcmFnIGVuZHMsIHJldHVybiBmYWxzZSBpZiB5b3Ugd2FudCB0byBjYW5jZWwgZHJvcDogXHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gaGFuZGxlTGFuZURyYWdTdGFydChsYW5lSWQpIHtcclxuICAgIC8vICAgICAvLyBDYWxsYmFjayBmdW5jdGlvbiB0cmlnZ2VyZWQgd2hlbiBsYW5lIGRyYWcgaXMgc3RhcnRlZDogXHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gaGFuZGxlTGFuZURyYWdFbmQocmVtb3ZlZEluZGV4LCBhZGRlZEluZGV4LCBwYXlsb2FkKSB7XHJcbiAgICAvLyAgICAgLy8gQ2FsbGJhY2sgZnVuY3Rpb24gdHJpZ2dlcmVkIHdoZW4gbGFuZSBkcmFnIGVuZHM6IFxyXG4gICAgLy8gfVxyXG4gICAgXHJcbiAgICBvbkRhdGFDaGFuZ2UobmV3RGF0YSkge1xyXG4gICAgICAgIC8vIENhbGxlZCBldmVyeXRpbWUgdGhlIGRhdGEgY2hhbmdlcyBkdWUgdG8gdXNlciBpbnRlcmFjdGlvbiBvciBldmVudCBidXM6XHJcbiAgICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7dmFsdWUgOiBuZXdEYXRhfSk7XHJcbiAgICAgICAgZGVidWdnZXJcclxuICAgIH1cclxuXHJcbiAgICAvLyBvbkNhcmRDbGljayhjYXJkSWQsIG1ldGFkYXRhLCBsYW5lSWQpIHtcclxuICAgIC8vICAgICAvLyBDYWxsZWQgd2hlbiBhIGNhcmQgaXMgY2xpY2tlZDogXHJcbiAgICAvLyB9XHJcbiAgICBcclxuICAgIC8vIG9uQ2FyZEFkZChjYXJkLCBsYW5lSWQpIHtcclxuICAgIC8vICAgICAvLyBDYWxsZWQgd2hlbiBhIG5ldyBjYXJkIGlzIGFkZGVkOiBcclxuICAgIC8vIH1cclxuICAgIFxyXG4gICAgLy8gb25Db25maXJtQ2FyZERlbGV0ZShjYWxsYmFjaykge1xyXG4gICAgLy8gICAgIC8vIENhbGxlZCBiZWZvcmUgZGVsZXRlIGEgY2FyZCwgcGxlYXNlIGNhbGwgdGhlIGNhbGxiYWNrKCkgaWYgY29uZmlybSB0byBkZWxldGUgYSBjYXJkOiBcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBvbkNhcmREZWxldGUoY2FyZElkLCBsYW5lSWQpIHtcclxuICAgIC8vICAgICAvLyBDYWxsZWQgd2hlbiBhIGNhcmQgaXMgZGVsZXRlZDogXHJcbiAgICAvLyB9XHJcbiAgICBcclxuICAgIC8vIG9uQ2FyZE1vdmVBY3Jvc3NMYW5lcyhmcm9tTGFuZUlkLCB0b0xhbmVJZCwgY2FyZElkLCBpbmRleCkge1xyXG4gICAgLy8gICAgIC8vIENhbGxlZCB3aGVuIGEgY2FyZCBpcyBtb3ZlZCBhY3Jvc3MgbGFuZXMgXHJcbiAgICAvLyB9XHJcbiAgICBcclxuICAgIC8vIG9uTGFuZUFkZChwYXJhbXMpIHtcclxuICAgIC8vICAgICAvLyBDYWxsZWQgd2hlbiBhIG5ldyBsYW5lIGlzIGFkZGVkOiBcclxuICAgIC8vIH1cclxuICAgIFxyXG4gICAgLy8gb25MYW5lRGVsZXRlKGxhbmVJZCkge1xyXG4gICAgLy8gICAgIC8vIENhbGxlZCB3aGVuIGEgbGFuZSBpcyBkZWxldGVkIFxyXG4gICAgLy8gfVxyXG5cdC8vIGZ1bmN0aW9uXHRDYWxsZWQgd2hlbiBhIGxhbmUgYXR0cmlidXRlcyBhcmUgdXBkYXRlZCBvbkxhbmVVcGRhdGUobGFuZUlkLCBkYXRhKVxyXG5cdC8vIGZ1bmN0aW9uXHRDYWxsZWQgd2hlbiBhIGxhbmUgaXMgY2xpY2tlZCBvbkxhbmVDbGljayhsYW5lSWQpLiBDYXJkIGNsaWNrcyBhcmUgbm90IHByb3BhZ2F0ZWQgdG8gbGFuZSBjbGljayBldmVudFxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgxPnRoaXMgaXMgdHJlbGxvPC9oMT5cclxuICAgICAgICAgICAgICAgIDxCb2FyZCBpZCA9IHsgdGhpcy5wcm9wcy5pZCB9IGRhdGEgPSB7IHRoaXMucHJvcHMudmFsdWUgfSBkcmFnZ2FibGUgPSB7IHRoaXMucHJvcHMuZHJhZ2dhYmxlIH0gb25EYXRhQ2hhbmdlID0geyB0aGlzLm9uRGF0YUNoYW5nZSB9IGVkaXRhYmxlID0geyB0aGlzLnByb3BzLmVkaXRhYmxlIH1cclxuICAgICAgICAgICAgICAgIGxhbmVEcmFnZ2FibGUgPSB7IHRoaXMucHJvcHMubGFuZURyYWdnYWJsZSB9IGNhcmREcmFnZ2FibGUgPSB7IHRoaXMucHJvcHMuY2FyZERyYWdnYWJsZSB9IGNvbGxhcHNpYmxlTGFuZXMgPSB7IHRoaXMucHJvcHMuY29sbGFwc2libGVMYW5lcyB9ICBcclxuICAgICAgICAgICAgICAgIGNhbkFkZExhbmVzID0geyB0aGlzLnByb3BzLmNhbkFkZExhbmVzIH0gaGlkZUNhcmREZWxldGVJY29uID0geyB0aGlzLnByb3BzLmhpZGVDYXJkRGVsZXRlSWNvbiB9IGVkaXRMYW5lVGl0bGUgPSB7IHRoaXMucHJvcHMuZWRpdExhbmVUaXRsZSB9IFxyXG4gICAgICAgICAgICAgICAgLy8gaGFuZGxlRHJhZ1N0YXJ0ID0ge3RoaXMucHJvcHMuaGFuZGxlRHJhZ1N0YXJ0fSAgXHJcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGVEcmFnRW5kID0geyB0aGlzLnByb3BzLmhhbmRsZURyYWdFbmQgfSBoYW5kbGVMYW5lRHJhZ1N0YXJ0ID0geyB0aGlzLnByb3BzLmhhbmRsZUxhbmVEcmFnU3RhcnQgfSBoYW5kbGVMYW5lRHJhZ0VuZCA9IHsgdGhpcy5wcm9wcy5oYW5kbGVMYW5lRHJhZ0VuZCB9IFxyXG4gICAgICAgICAgICAgICAgLy8gb25DYXJkQ2xpY2sgPSB7IHRoaXMucHJvcHMub25DYXJkQ2xpY2sgfSBvbkNhcmRBZGQgPSB7IHRoaXMucHJvcHMub25DYXJkQWRkIH0gb25CZWZvcmVDYXJkRGVsZXRlID0geyB0aGlzLm9uQmVmb3JlQ2FyZERlbGV0ZSB9IG9uQ2FyZERlbGV0ZSA9IHsgdGhpcy5wcm9wcy5vbkNhcmREZWxldGUgfSAgXHJcbiAgICAgICAgICAgICAgICAvLyBvbkNhcmRNb3ZlQWNyb3NzTGFuZXMgPSB7IHRoaXMucHJvcHMub25DYXJkTW92ZUFjcm9zc0xhbmVzIH0gb25MYW5lQWRkID0geyB0aGlzLnByb3BzLm9uTGFuZUFkZCB9IG9uTGFuZURlbGV0ZSA9IHsgdGhpcy5wcm9wcy5vbkxhbmVEZWxldGUgfSBvbkxhbmVVcGRhdGUgPSB7IHRoaXMucHJvcHMub25MYW5lVXBkYXRlIH1cclxuICAgICAgICAgICAgICAgIC8vIG9uTGFuZUNsaWNrID0geyB0aGlzLnByb3BzLm9uTGFuZUNsaWNrIH0gb25MYW5lU2Nyb2xsID0geyB0aGlzLnByb3BzLm9uTGFuZVNjcm9sbCB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5UcmVsbG9Db21wb25lbnQuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgaWQgOiBudWxsLFxyXG4gICAgdmFsdWUgOiB7fSxcclxuICAgIGRyYWdnYWJsZSA6IGZhbHNlLFxyXG4gICAgbGFuZURyYWdnYWJsZSA6IHRydWUsXHJcbiAgICBjYXJkRHJhZ2dhYmxlIDpcdCB0cnVlLFxyXG4gICAgY29sbGFwc2libGVMYW5lcyA6IHRydWUsXHJcbiAgICBlZGl0YWJsZSA6ICB0cnVlLFxyXG4gICAgY2FuQWRkTGFuZXNcdDogdHJ1ZSxcclxuICAgIGhpZGVDYXJkRGVsZXRlSWNvbiA6IHRydWUsXHJcbiAgICBlZGl0TGFuZVRpdGxlIDpcdCB0cnVlLFxyXG59O1xyXG5cclxuVHJlbGxvQ29tcG9uZW50LnByb3BUeXBlcyA9IHtcclxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgdmFsdWUgOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgZHJhZ2dhYmxlIDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBsYW5lRHJhZ2dhYmxlIDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBjYXJkRHJhZ2dhYmxlIDpcdCBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGNvbGxhcHNpYmxlTGFuZXMgOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGVkaXRhYmxlIDogIFByb3BUeXBlcy5ib29sLFxyXG4gICAgY2FuQWRkTGFuZXNcdDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBoaWRlQ2FyZERlbGV0ZUljb24gOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGVkaXRMYW5lVGl0bGUgOlx0IFByb3BUeXBlcy5ib29sLFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9