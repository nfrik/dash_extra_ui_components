import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './PMSComponent.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import PMSChildrenComponent from './PMSChildrenComponent';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBModalFooter, MDBIcon, MDBBtn, MDBModal, MDBModalHeader, MDBModalBody } from "mdbreact";
import './PMSComponent.css'
// import DatePicker from 'react-datepicker';

export default class PMSComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            girlName : "", 
            cycle : "",
            startDate : "",
            obulation  : "",                                             
            menstruation : "",
            modal : false,
            childData : JSON.parse(this.props.value)[0],
            error : "" 
        }
    }

    submitHandler = event => {
        event.preventDefault();
        event.target.className += " was-validated";
    }

    handleChange = event => {
        this.setState({ [event.target.name] : event.target.value });
    }

    getChild = e => {
        this.setState({
            childData : JSON.parse(this.props.value)[e.target.value]
        })
        this.setProps({
            id : JSON.parse(this.props.value)[e.target.value].id
        })
    }

    girlDataUpdate = result => {
        delete result.modal1
        this.props.setProps({
            updateData : result
        })
    }

    delete = (result) =>{
        this.props.setProps({
            deleteID : result
        })
    }

    toggle = () => {
        this.setState({
          modal : !this.state.modal,
          error : ""
        });
    }

    render = () => {
        if(JSON.parse(this.props.value).length > 0){
            let girlData = JSON.parse(this.props.value)
            var girlList = []
            
            for(let x in girlData){
                girlList.push(
                    <li class="list-group-item list-group-item-action item1" id = { girlData.id } value = { x } onClick = {this.getChild}>{ girlData[x].girlName }</li>
                )
            }
        }
        debugger
        return (
            <MDBRow id  = {this.props.id}>
                <MDBCol md = "2">

                </MDBCol>
                <MDBCol md = "8">
                    <MDBRow>
                        <MDBCol md="2">
                            <div class="card card-cascade narrower">
                                <div class="card-body card-body-cascade" style = {{ padding : '0px', minHeight : '500px'}}>
                                    <div class="list-group">
                                        <li  class="itemTitle list-group-item list-group-item-action" >MyGirls</li>
                                        { girlList }
                                        <li class="list-group-item list-group-item-action addItem" 
                                            onClick = {
                                                this.toggle
                                            }>
                                            <h5 style = {{ "color" : "grey" }}>
                                                Add 
                                            </h5>
                                        </li>
                                    </div>
                                </div>
                            </div>
                        </MDBCol>
                        <div style = {{'width' : '5px'}}></div>
                        <MDBCol md="9">
                            <PMSChildrenComponent data = { this.state.childData } delete = { this.delete } girlDataUpdate = { this.girlDataUpdate } />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBModal isOpen={this.state.modal} toggle={this.toggle} size = "md">
                            <form action = {this.submitHandler}>
                                <div className = "itemTitle">
                                    <MDBModalHeader  toggle={this.toggle}>Add Gril</MDBModalHeader>
                                </div>
                                <MDBModalBody>
                                    <div style = {{maxHeight : "680px"}}>
                                        <div className = "row">
                                            <div class ="col-lg-3 col-md-1">
                                            </div>
                                            <h5 style={{'color':'red'}}>{ this.state.error }</h5>
                                        </div>
                                        <div class = "row">
                                            <div class ="col-lg-6 col-md-12">
                                                <MDBInput label="Name : " 
                                                    onChange = { this.handleChange } 
                                                    name ="girlName" 
                                                    value = { this.state.girlName }/>
                                            </div>
                                            <div class ="col-lg-4 col-md-8">
                                                <MDBInput 
                                                    label="Cycle" 
                                                    onChange = { this.handleChange } 
                                                    name = "cycle" 
                                                    value = { this.state.cycle}
                                                />
                                            </div>
                                        </div>
                                        <div className = "row">
                                            <div class = "col-lg-6 col-md-8">
                                                <MDBInput 
                                                    label="Start Date" 
                                                    placeholde = "yyyy-mm-dd" 
                                                    onChange = { this.handleChange } 
                                                    name = "startDate" 
                                                    value = { this.state.startDate }
                                                />
                                            </div>
                                            <div class = "col-lg-4 col-md-8">
                                                <MDBInput label="Ovulstion Period" onChange = { this.handleChange } name = "obulation" value = { this.state.obulation }/>
                                            </div> 
                                        </div>
                                        <div class = "row">
                                            <div class = "col-lg-6 col-md-8">
                                                <MDBInput label="Menstruation Period" onChange = { this.handleChange } name = "menstruation" value = {  this.state.menstruation }/>
                                            </div>
                                        </div>                       
                                    </div>
                                </MDBModalBody>
                                <MDBModalFooter>
                                    <MDBBtn className = "item1" onClick={this.toggle}>Cancel</MDBBtn>
                                    <MDBBtn className = "item1"
                                        onClick = {() => {
                                            let dateTrue = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/.test(this.state.startDate)
                                            if(!dateTrue){
                                                this.setState({
                                                    error : 'Date Type must be "yyyy-mm-dd" !'
                                                })
                                                return
                                            }
                                            
                                            if(this.state.girlName != "" && this.state.cycle != "" && Number(this.state.cycle) != NaN 
                                                && this.state.startDate != "" && Number(this.state.cycle) > 0
                                                && this.state.obulation != "" && Number(this.state.obulation) != NaN && Number(this.state.obulation) > 0
                                                && this.state.menstruation != "" && Number(this.state.menstruation) != NaN && Number(this.state.menstruation) > 0) {
                                                let girlData = {
                                                    startDate : this.state.startDate,
                                                    girlName : this.state.girlName,
                                                    cycle : Number(this.state.cycle),
                                                    obulation : Number(this.state.obulation),
                                                    menstruation : Number(this.state.menstruation)
                                                }
                                                this.props.setProps({
                                                    newGirl : girlData
                                                })
                                                this.toggle()
                                            } else {
                                                this.setState({
                                                    error : "Please Input Correctly!"
                                                })
                                                return
                                            }
                                        }}
                                    >Add Girl</MDBBtn>
                                </MDBModalFooter>
                            </form>
                        </MDBModal>
                    </MDBRow>
                </MDBCol>
                <MDBCol md = "2">

                </MDBCol>
                
            </MDBRow>
        );
    }
}

PMSComponent.defaultProps = {
   value : {},
   id : null,
   setProps : () => {},
   newGirl : null,
   range : 21
};

PMSComponent.propTypes = {
    value : PropTypes.string,
    id : PropTypes.string,
    setProps : PropTypes.func,
    newGirl : PropTypes.object,
    updateData : PropTypes.object,
    range : PropTypes.number,
    deleteID : PropTypes.string
};
