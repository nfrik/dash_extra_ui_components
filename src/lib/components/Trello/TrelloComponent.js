import React, {Component} from 'react';
import Board from 'react-trello';
import classNames from 'classnames';
// import data  from './data.json';
import PropTypes from 'prop-types';
// import './TrelloComponent.css';
//import classNames from 'classnames';
// import Tooltip from '../../utils/ToolTip';
// import ObjectUtils from '../../utils/ObjectUtils';
// import './Button.css';


/**
 * Component to render a button element
 */
export default class TrelloComponent extends Component {
    constructor(props) {
        super(props);
    }

    // handleDragStart(cardId, laneId){
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
    
    // onDataChange(newData) {
    //     // Called everytime the data changes due to user interaction or event bus:
    //     
    // }

    // onCardClick(cardId, metadata, laneId) {
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

    render() {
        return (
            <div>
                <h1>this is trello</h1>
                <Board id = { this.props.id } data = { this.props.value } draggable = { this.props.draggable } onDataChange = { this.props.onDataChange }
                laneDraggable = { this.props.laneDraggable } cardDraggable = { this.props.cardDraggable } 
                collapsibleLanes = { this.props.collapsibleLanes } editable = { this.props.editable } canAddLanes = { this.props.canAddLanes } 
                hideCardDeleteIcon = { this.props.hideCardDeleteIcon } editLaneTitle = { this.props.editLaneTitle } handleDragStart = {this.props.handleDragStart}  
                handleDragEnd = { this.props.handleDragEnd } handleLaneDragStart = { this.props.handleLaneDragStart } handleLaneDragEnd = { this.props.handleLaneDragEnd } 
                onCardClick = { this.props.onCardClick } onCardAdd = { this.props.onCardAdd } onBeforeCardDelete = { this.onBeforeCardDelete } onCardDelete = { this.props.onCardDelete }  
                onCardMoveAcrossLanes = { this.props.onCardMoveAcrossLanes } onLaneAdd = { this.props.onLaneAdd } onLaneDelete = { this.props.onLaneDelete } onLaneUpdate = { this.props.onLaneUpdate }
                onLaneClick = { this.props.onLaneClick } onLaneScroll = { this.props.onLaneScroll }
                />
            </div>
        );
    }
}

TrelloComponent.defaultProps = {
    id : null,
    value : {},
    draggable : false,
    laneDraggable : true,
    cardDraggable :	 true,
    collapsibleLanes : true,
    editable :  true,
    canAddLanes	: true,
    hideCardDeleteIcon : true,
    editLaneTitle :	 true,
};

TrelloComponent.propTypes = {
    id: PropTypes.string,
    value : PropTypes.object,
    draggable : PropTypes.bool,
    laneDraggable : PropTypes.bool,
    cardDraggable :	 PropTypes.bool,
    collapsibleLanes : PropTypes.bool,
    editable :  PropTypes.bool,
    canAddLanes	: PropTypes.bool,
    hideCardDeleteIcon : PropTypes.bool,
    editLaneTitle :	 PropTypes.bool,
    handleDragStart : PropTypes.func, 
    handleDragEnd : PropTypes.func,
    handleLaneDragStart : PropTypes.func,
    handleLaneDragEnd : PropTypes.func,
    onDataChange : PropTypes.func,
    onCardClick : PropTypes.func,
    onCardAdd : PropTypes.func,
    onBeforeCardDelete : PropTypes.func,
    onCardDelete : PropTypes.func,
    onCardMoveAcrossLanes : PropTypes.func,
    onLaneAdd : PropTypes.func,
    onLaneDelete : PropTypes.func,
    onLaneUpdate : PropTypes.func,
    onLaneClick : PropTypes.func,
    onLaneScroll : PropTypes.func,
};
