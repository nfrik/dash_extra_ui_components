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
    _classCallCheck(this, TrelloComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(TrelloComponent).call(this, props));
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
      this.props.setProps({
        changedData: newData
      });
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
        editable: this.props.editable,
        laneDraggable: this.props.laneDraggable,
        cardDraggable: this.props.cardDraggable,
        collapsibleLanes: this.props.collapsibleLanes,
        canAddLanes: this.props.canAddLanes,
        hideCardDeleteIcon: this.props.hideCardDeleteIcon,
        editLaneTitle: this.props.editLaneTitle,
        onDataChange: this.onDataChange // handleDragStart = {this.props.handleDragStart}  
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
  editLaneTitle: true,
  changedData: null,
  setProps: function setProps() {}
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
  editLaneTitle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  changedData: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHRyYV9kYXNoX3VpX2NvbXBvbmVudHMvLi9zcmMvbGliL2NvbXBvbmVudHMvVHJlbGxvL1RyZWxsb0NvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJUcmVsbG9Db21wb25lbnQiLCJwcm9wcyIsIm5ld0RhdGEiLCJzZXRQcm9wcyIsImNoYW5nZWREYXRhIiwiaWQiLCJ2YWx1ZSIsImRyYWdnYWJsZSIsImVkaXRhYmxlIiwibGFuZURyYWdnYWJsZSIsImNhcmREcmFnZ2FibGUiLCJjb2xsYXBzaWJsZUxhbmVzIiwiY2FuQWRkTGFuZXMiLCJoaWRlQ2FyZERlbGV0ZUljb24iLCJlZGl0TGFuZVRpdGxlIiwib25EYXRhQ2hhbmdlIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwib2JqZWN0IiwiYm9vbCIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUVBOztDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7Ozs7SUFHcUJBLGU7Ozs7O0FBQ2pCLDJCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsd0ZBQ1RBLEtBRFM7QUFFbEIsRyxDQUVEO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7aUNBRWFDLE8sRUFBUztBQUNsQixXQUFLRCxLQUFMLENBQVdFLFFBQVgsQ0FBb0I7QUFDaEJDLG1CQUFXLEVBQUdGO0FBREUsT0FBcEI7QUFHQTtBQUNILEssQ0FFRDtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDSDtBQUNBOzs7OzZCQUVZO0FBQ0wsYUFDSSx3RUFDSSx3RkFESixFQUVJLDJEQUFDLG1EQUFEO0FBQU8sVUFBRSxFQUFLLEtBQUtELEtBQUwsQ0FBV0ksRUFBekI7QUFBOEIsWUFBSSxFQUFLLEtBQUtKLEtBQUwsQ0FBV0ssS0FBbEQ7QUFBMEQsaUJBQVMsRUFBSyxLQUFLTCxLQUFMLENBQVdNLFNBQW5GO0FBQStGLGdCQUFRLEVBQUssS0FBS04sS0FBTCxDQUFXTyxRQUF2SDtBQUNBLHFCQUFhLEVBQUssS0FBS1AsS0FBTCxDQUFXUSxhQUQ3QjtBQUM2QyxxQkFBYSxFQUFLLEtBQUtSLEtBQUwsQ0FBV1MsYUFEMUU7QUFDMEYsd0JBQWdCLEVBQUssS0FBS1QsS0FBTCxDQUFXVSxnQkFEMUg7QUFFQSxtQkFBVyxFQUFLLEtBQUtWLEtBQUwsQ0FBV1csV0FGM0I7QUFFeUMsMEJBQWtCLEVBQUssS0FBS1gsS0FBTCxDQUFXWSxrQkFGM0U7QUFFZ0cscUJBQWEsRUFBSyxLQUFLWixLQUFMLENBQVdhLGFBRjdIO0FBR0Esb0JBQVksRUFBSyxLQUFLQyxZQUh0QixDQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBUkEsUUFGSixDQURKO0FBZUg7Ozs7RUExRXdDQywrQzs7O0FBNkU3Q2hCLGVBQWUsQ0FBQ2lCLFlBQWhCLEdBQStCO0FBQzNCWixJQUFFLEVBQUcsSUFEc0I7QUFFM0JDLE9BQUssRUFBRyxFQUZtQjtBQUczQkMsV0FBUyxFQUFHLEtBSGU7QUFJM0JFLGVBQWEsRUFBRyxJQUpXO0FBSzNCQyxlQUFhLEVBQUksSUFMVTtBQU0zQkMsa0JBQWdCLEVBQUcsSUFOUTtBQU8zQkgsVUFBUSxFQUFJLElBUGU7QUFRM0JJLGFBQVcsRUFBRyxJQVJhO0FBUzNCQyxvQkFBa0IsRUFBRyxJQVRNO0FBVTNCQyxlQUFhLEVBQUksSUFWVTtBQVczQlYsYUFBVyxFQUFHLElBWGE7QUFZM0JELFVBQVEsRUFBRSxvQkFBTSxDQUFFO0FBWlMsQ0FBL0I7QUFlQUgsZUFBZSxDQUFDa0IsU0FBaEIsR0FBNEI7QUFDeEJiLElBQUUsRUFBRWMsaURBQVMsQ0FBQ0MsTUFEVTtBQUV4QmQsT0FBSyxFQUFHYSxpREFBUyxDQUFDRSxNQUZNO0FBR3hCZCxXQUFTLEVBQUdZLGlEQUFTLENBQUNHLElBSEU7QUFJeEJiLGVBQWEsRUFBR1UsaURBQVMsQ0FBQ0csSUFKRjtBQUt4QlosZUFBYSxFQUFJUyxpREFBUyxDQUFDRyxJQUxIO0FBTXhCWCxrQkFBZ0IsRUFBR1EsaURBQVMsQ0FBQ0csSUFOTDtBQU94QmQsVUFBUSxFQUFJVyxpREFBUyxDQUFDRyxJQVBFO0FBUXhCVixhQUFXLEVBQUdPLGlEQUFTLENBQUNHLElBUkE7QUFTeEJULG9CQUFrQixFQUFHTSxpREFBUyxDQUFDRyxJQVRQO0FBVXhCUixlQUFhLEVBQUlLLGlEQUFTLENBQUNHLElBVkg7QUFXeEJuQixVQUFRLEVBQUdnQixpREFBUyxDQUFDSSxJQVhHO0FBWXhCbkIsYUFBVyxFQUFHZSxpREFBUyxDQUFDRTtBQVpBLENBQTVCLEMiLCJmaWxlIjoiMDJlOTI2OC1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEJvYXJkIGZyb20gJ3JlYWN0LXRyZWxsbyc7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG4vLyBpbXBvcnQgZGF0YSAgZnJvbSAnLi9kYXRhLmpzb24nO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG4vLyBpbXBvcnQgJy4vVHJlbGxvQ29tcG9uZW50LmNzcyc7XHJcbi8vaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbi8vIGltcG9ydCBUb29sdGlwIGZyb20gJy4uLy4uL3V0aWxzL1Rvb2xUaXAnO1xyXG4vLyBpbXBvcnQgT2JqZWN0VXRpbHMgZnJvbSAnLi4vLi4vdXRpbHMvT2JqZWN0VXRpbHMnO1xyXG4vLyBpbXBvcnQgJy4vQnV0dG9uLmNzcyc7XHJcblxyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCB0byByZW5kZXIgYSBidXR0b24gZWxlbWVudFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJlbGxvQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGhhbmRsZURyYWdTdGFydChjYXJkSWQsIGxhbmVJZCl7XHJcbiAgICAvLyAgICAgLy8gQ2FsbGJhY2sgZnVuY3Rpb24gdHJpZ2dlcmVkIHdoZW4gY2FyZCBkcmFnIGlzIHN0YXJ0ZWRcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBoYW5kbGVEcmFnRW5kKGNhcmRJZCwgc291cmNlTGFuZUlkLCB0YXJnZXRMYW5lSWQsIHBvc2l0aW9uLCBjYXJkRGV0YWlscykge1xyXG4gICAgLy8gICAgIC8vIENhbGxiYWNrIGZ1bmN0aW9uIHRyaWdnZXJlZCB3aGVuIGNhcmQgZHJhZyBlbmRzLCByZXR1cm4gZmFsc2UgaWYgeW91IHdhbnQgdG8gY2FuY2VsIGRyb3A6IFxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGhhbmRsZUxhbmVEcmFnU3RhcnQobGFuZUlkKSB7XHJcbiAgICAvLyAgICAgLy8gQ2FsbGJhY2sgZnVuY3Rpb24gdHJpZ2dlcmVkIHdoZW4gbGFuZSBkcmFnIGlzIHN0YXJ0ZWQ6IFxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGhhbmRsZUxhbmVEcmFnRW5kKHJlbW92ZWRJbmRleCwgYWRkZWRJbmRleCwgcGF5bG9hZCkge1xyXG4gICAgLy8gICAgIC8vIENhbGxiYWNrIGZ1bmN0aW9uIHRyaWdnZXJlZCB3aGVuIGxhbmUgZHJhZyBlbmRzOiBcclxuICAgIC8vIH1cclxuICAgIFxyXG4gICAgb25EYXRhQ2hhbmdlKG5ld0RhdGEpIHtcclxuICAgICAgICB0aGlzLnByb3BzLnNldFByb3BzKHtcclxuICAgICAgICAgICAgY2hhbmdlZERhdGEgOiBuZXdEYXRhXHJcbiAgICAgICAgfSlcclxuICAgICAgICBkZWJ1Z2dlclxyXG4gICAgfVxyXG5cclxuICAgIC8vIG9uQ2FyZENsaWNrKGNhcmRJZCwgbWV0YWRhdGEsIGxhbmVJZCkge1xyXG4gICAgLy8gICAgIC8vIENhbGxlZCB3aGVuIGEgY2FyZCBpcyBjbGlja2VkOiBcclxuICAgIC8vIH1cclxuICAgIFxyXG4gICAgLy8gb25DYXJkQWRkKGNhcmQsIGxhbmVJZCkge1xyXG4gICAgLy8gICAgIC8vIENhbGxlZCB3aGVuIGEgbmV3IGNhcmQgaXMgYWRkZWQ6IFxyXG4gICAgLy8gfVxyXG4gICAgXHJcbiAgICAvLyBvbkNvbmZpcm1DYXJkRGVsZXRlKGNhbGxiYWNrKSB7XHJcbiAgICAvLyAgICAgLy8gQ2FsbGVkIGJlZm9yZSBkZWxldGUgYSBjYXJkLCBwbGVhc2UgY2FsbCB0aGUgY2FsbGJhY2soKSBpZiBjb25maXJtIHRvIGRlbGV0ZSBhIGNhcmQ6IFxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIG9uQ2FyZERlbGV0ZShjYXJkSWQsIGxhbmVJZCkge1xyXG4gICAgLy8gICAgIC8vIENhbGxlZCB3aGVuIGEgY2FyZCBpcyBkZWxldGVkOiBcclxuICAgIC8vIH1cclxuICAgIFxyXG4gICAgLy8gb25DYXJkTW92ZUFjcm9zc0xhbmVzKGZyb21MYW5lSWQsIHRvTGFuZUlkLCBjYXJkSWQsIGluZGV4KSB7XHJcbiAgICAvLyAgICAgLy8gQ2FsbGVkIHdoZW4gYSBjYXJkIGlzIG1vdmVkIGFjcm9zcyBsYW5lcyBcclxuICAgIC8vIH1cclxuICAgIFxyXG4gICAgLy8gb25MYW5lQWRkKHBhcmFtcykge1xyXG4gICAgLy8gICAgIC8vIENhbGxlZCB3aGVuIGEgbmV3IGxhbmUgaXMgYWRkZWQ6IFxyXG4gICAgLy8gfVxyXG4gICAgXHJcbiAgICAvLyBvbkxhbmVEZWxldGUobGFuZUlkKSB7XHJcbiAgICAvLyAgICAgLy8gQ2FsbGVkIHdoZW4gYSBsYW5lIGlzIGRlbGV0ZWQgXHJcbiAgICAvLyB9XHJcblx0Ly8gZnVuY3Rpb25cdENhbGxlZCB3aGVuIGEgbGFuZSBhdHRyaWJ1dGVzIGFyZSB1cGRhdGVkIG9uTGFuZVVwZGF0ZShsYW5lSWQsIGRhdGEpXHJcblx0Ly8gZnVuY3Rpb25cdENhbGxlZCB3aGVuIGEgbGFuZSBpcyBjbGlja2VkIG9uTGFuZUNsaWNrKGxhbmVJZCkuIENhcmQgY2xpY2tzIGFyZSBub3QgcHJvcGFnYXRlZCB0byBsYW5lIGNsaWNrIGV2ZW50XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aDE+dGhpcyBpcyB0cmVsbG88L2gxPlxyXG4gICAgICAgICAgICAgICAgPEJvYXJkIGlkID0geyB0aGlzLnByb3BzLmlkIH0gZGF0YSA9IHsgdGhpcy5wcm9wcy52YWx1ZSB9IGRyYWdnYWJsZSA9IHsgdGhpcy5wcm9wcy5kcmFnZ2FibGUgfSBlZGl0YWJsZSA9IHsgdGhpcy5wcm9wcy5lZGl0YWJsZSB9XHJcbiAgICAgICAgICAgICAgICBsYW5lRHJhZ2dhYmxlID0geyB0aGlzLnByb3BzLmxhbmVEcmFnZ2FibGUgfSBjYXJkRHJhZ2dhYmxlID0geyB0aGlzLnByb3BzLmNhcmREcmFnZ2FibGUgfSBjb2xsYXBzaWJsZUxhbmVzID0geyB0aGlzLnByb3BzLmNvbGxhcHNpYmxlTGFuZXMgfSAgXHJcbiAgICAgICAgICAgICAgICBjYW5BZGRMYW5lcyA9IHsgdGhpcy5wcm9wcy5jYW5BZGRMYW5lcyB9IGhpZGVDYXJkRGVsZXRlSWNvbiA9IHsgdGhpcy5wcm9wcy5oaWRlQ2FyZERlbGV0ZUljb24gfSBlZGl0TGFuZVRpdGxlID0geyB0aGlzLnByb3BzLmVkaXRMYW5lVGl0bGUgfSBcclxuICAgICAgICAgICAgICAgIG9uRGF0YUNoYW5nZSA9IHsgdGhpcy5vbkRhdGFDaGFuZ2UgfVxyXG4gICAgICAgICAgICAgICAgLy8gaGFuZGxlRHJhZ1N0YXJ0ID0ge3RoaXMucHJvcHMuaGFuZGxlRHJhZ1N0YXJ0fSAgXHJcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGVEcmFnRW5kID0geyB0aGlzLnByb3BzLmhhbmRsZURyYWdFbmQgfSBoYW5kbGVMYW5lRHJhZ1N0YXJ0ID0geyB0aGlzLnByb3BzLmhhbmRsZUxhbmVEcmFnU3RhcnQgfSBoYW5kbGVMYW5lRHJhZ0VuZCA9IHsgdGhpcy5wcm9wcy5oYW5kbGVMYW5lRHJhZ0VuZCB9IFxyXG4gICAgICAgICAgICAgICAgLy8gb25DYXJkQ2xpY2sgPSB7IHRoaXMucHJvcHMub25DYXJkQ2xpY2sgfSBvbkNhcmRBZGQgPSB7IHRoaXMucHJvcHMub25DYXJkQWRkIH0gb25CZWZvcmVDYXJkRGVsZXRlID0geyB0aGlzLm9uQmVmb3JlQ2FyZERlbGV0ZSB9IG9uQ2FyZERlbGV0ZSA9IHsgdGhpcy5wcm9wcy5vbkNhcmREZWxldGUgfSAgXHJcbiAgICAgICAgICAgICAgICAvLyBvbkNhcmRNb3ZlQWNyb3NzTGFuZXMgPSB7IHRoaXMucHJvcHMub25DYXJkTW92ZUFjcm9zc0xhbmVzIH0gb25MYW5lQWRkID0geyB0aGlzLnByb3BzLm9uTGFuZUFkZCB9IG9uTGFuZURlbGV0ZSA9IHsgdGhpcy5wcm9wcy5vbkxhbmVEZWxldGUgfSBvbkxhbmVVcGRhdGUgPSB7IHRoaXMucHJvcHMub25MYW5lVXBkYXRlIH1cclxuICAgICAgICAgICAgICAgIC8vIG9uTGFuZUNsaWNrID0geyB0aGlzLnByb3BzLm9uTGFuZUNsaWNrIH0gb25MYW5lU2Nyb2xsID0geyB0aGlzLnByb3BzLm9uTGFuZVNjcm9sbCB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5UcmVsbG9Db21wb25lbnQuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgaWQgOiBudWxsLFxyXG4gICAgdmFsdWUgOiB7fSxcclxuICAgIGRyYWdnYWJsZSA6IGZhbHNlLFxyXG4gICAgbGFuZURyYWdnYWJsZSA6IHRydWUsXHJcbiAgICBjYXJkRHJhZ2dhYmxlIDpcdCB0cnVlLFxyXG4gICAgY29sbGFwc2libGVMYW5lcyA6IHRydWUsXHJcbiAgICBlZGl0YWJsZSA6ICB0cnVlLFxyXG4gICAgY2FuQWRkTGFuZXNcdDogdHJ1ZSxcclxuICAgIGhpZGVDYXJkRGVsZXRlSWNvbiA6IHRydWUsXHJcbiAgICBlZGl0TGFuZVRpdGxlIDpcdCB0cnVlLFxyXG4gICAgY2hhbmdlZERhdGEgOiBudWxsLFxyXG4gICAgc2V0UHJvcHM6ICgpID0+IHt9LFxyXG59O1xyXG5cclxuVHJlbGxvQ29tcG9uZW50LnByb3BUeXBlcyA9IHtcclxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgdmFsdWUgOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgZHJhZ2dhYmxlIDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBsYW5lRHJhZ2dhYmxlIDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBjYXJkRHJhZ2dhYmxlIDpcdCBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGNvbGxhcHNpYmxlTGFuZXMgOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGVkaXRhYmxlIDogIFByb3BUeXBlcy5ib29sLFxyXG4gICAgY2FuQWRkTGFuZXNcdDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBoaWRlQ2FyZERlbGV0ZUljb24gOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGVkaXRMYW5lVGl0bGUgOlx0IFByb3BUeXBlcy5ib29sLFxyXG4gICAgc2V0UHJvcHMgOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIGNoYW5nZWREYXRhIDogUHJvcFR5cGVzLm9iamVjdCxcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==