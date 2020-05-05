import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './PMSComponent.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import PMSChildrenComponent from './PMSChildrenComponent';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBModalFooter,
    MDBIcon,
    MDBCardHeader,
    MDBBtn,
    MDBInput
  } from "mdbreact";
import './PMSComponent.css'

export default class PMSComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : this.props.value,
            childData : this.props.value[0]
        }
    }

    getChild = e => {
        this.setState({
            childData : this.state.data[e.target.value]
        })
        debugger
    }

    render() {
        let girlData = this.props.value;
        let girlList = []
        for(let x in girlData){
            girlList.push(
                <li class="list-group-item list-group-item-action item1" value = { x } onClick = {this.getChild}>{ girlData[x][0] }</li>
            )
        }

        return (
            <MDBContainer id  = {this.props.id}>
                <MDBRow className="justify-content-md-center">
                    <MDBCol md="2">
                        <div class="card card-cascade narrower">
                            <div class="card-body card-body-cascade" style = {{ padding : '0px', minHeight : '500px'}}>
                                <div class="list-group">
                                <li  class="itemTitle list-group-item list-group-item-action" >MyGirls</li>
                                    { girlList }
                                </div>
                            </div>
                        </div>
                    </MDBCol>
                    <div style = {{'width' : '5px'}}></div>
                    <MDBCol md="9">
                        <PMSChildrenComponent data = { this.state.childData } />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    }
}

PMSComponent.defaultProps = {
   value : {},
   id : null
};

PMSComponent.propTypes = {
    value : PropTypes.array,
    id : PropTypes.string
};
