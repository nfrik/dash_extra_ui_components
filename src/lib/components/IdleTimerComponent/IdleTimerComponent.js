import React, { Component } from 'react'
import IdleTimer from 'react-idle-timer'
import PropTypes from 'prop-types';

export default class IdleTimerComponent extends Component {
  constructor(props) {
    super(props)
    this.idleTimer = null
  }

  render() {
    return (
      <>
        <IdleTimer
          ref={ref => { this.idleTimer = ref }}
          element={document}
		      onActive={this.onActive}
          onIdle={this.onIdle}
          onAction={this.onAction}
		      debounce={250}
          timeout={this.props.timeout} />
      </>
    )
  }

  onAction = e => {

    this.props.setProps({
      acType : e.type,
      xPosition : e.x,
      yPosition : e.y,
      idle : null,
      layerY: e.layerY,
      movementX: e.movementX,
      movementY: e.movementY,
      pageX: e.pageX,
      pageY: e.pageY,
      screenX: e.screenX,
      screenY: e.screenY,
      timeStamp: e.timeStamp,
      type: e.type,
      code: e.code,
      key: e.key,
      timeStamp: e.timeStamp,
      type: e.type,
      which: e.which
    })
    console.log(e)
    debugger
  }

  onActive = e => {
    // console.log('user is active', e)
    // console.log('time remaining', this.idleTimer.getRemainingTime())
    this.props.setProps({
      idle : null
    })
  }

  onIdle = e => {
    this.props.setProps({
      idle : "idle"
    })
  }
}

IdleTimerComponent.defaultProps = {
  id : null,
  setProps: () => {},
  action : null,
  idle : null,
  active : null,
  timeout : 3000
};

IdleTimerComponent.propTypes = {
  id: PropTypes.string,
  timeout : PropTypes.number,
  setProps : PropTypes.func,
  action : PropTypes.object,
  idle : PropTypes.string,
  active  : PropTypes.object,  
  acType : PropTypes.string,
  xPosition : PropTypes.number,
  yPosition : PropTypes.number,
  movementX: PropTypes.number,
  movementY: PropTypes.number,
  pageX: PropTypes.number,
  pageY: PropTypes.number,
  screenX: PropTypes.number,
  screenY: PropTypes.number,
  timeStamp: PropTypes.number,
  type: PropTypes.string,
  code: PropTypes.string,
  key: PropTypes.string,
  timeStamp: PropTypes.number,
  type: PropTypes.string,
  which: PropTypes.number,
}