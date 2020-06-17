import React, {Component} from 'react';
import PropTypes from 'prop-types';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './PMSComponent.css'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBModalFooter, MDBBtn, MDBModal, MDBModalHeader, MDBModalBody } from "mdbreact";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class PMSChildrenComponent extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            modal1 : false,
            modal2: false,
            id : this.props.data.id,
            girlName : "",
            cycle : "",
            startDate : new Date(),
            ovulation  : "",
            menstruation : "",
        })
        debugger
    }

    toggle = () => {
        this.setState({
          modal1: !this.state.modal1
        });
    }

    toggle1 = () => {
        this.setState({
            modal2: !this.state.modal2
        });
    }

    loadGirlData = () => {
        let startDate = new Date(this.props.data.startDate)
        this.setState({
            id : this.props.data.id,
            girlName : this.props.data.girlName,
            cycle : this.props.data.cycle,
            startDate : startDate,
            ovulation  : this.props.data.ovulation,                                             
            menstruation : this.props.data.menstruation,
        })
        this.toggle()
    }

    handleChange = event => {
        this.setState({ [event.target.name] : event.target.value });
    }

    handleChange1 = date => {
        this.setState({
            startDate : date
        })
    }

    render() {
        var CurrentDay = 0
        let date = new Date(this.props.data.startDate)
        let current = new Date()
        CurrentDay = Math.ceil(Number(current.getTime() - date.getTime()) / 86400000)
        debugger
        return (
            <div class="card card-cascade narrower">
                <div class="card-body card-body-cascade">
                    <MDBRow className=" justify-content-md-center">
                        <MDBCol md="12" className="">
                            <div class="itemTitle card card-cascade narrower">
                                <div class="card-body card-body-cascade">
                                    <div class="list-group">
                                        <MDBRow>
                                            <MDBCol md = '8'>
                                                <h5>Name : { this.props.data.girlName }</h5>
                                            </MDBCol>
                                            <MDBCol md = '4'>
                                                <h5>StartDate : { this.props.data.startDate } </h5> 
                                            </MDBCol>
                                        </MDBRow>
                                        
                                        <MDBRow>
                                            <MDBCol md = '3'>
                                                <h5>Period : { this.props.data.cycle }</h5> 
                                            </MDBCol>
                                            <MDBCol md = '3'>
                                                <h5>Menstruation : { this.props.data.menstruation }</h5> 
                                            </MDBCol>
                                            <MDBCol md = '3'>
                                                <h5>Current :  { CurrentDay } </h5>
                                            </MDBCol>
                                            <MDBCol md = '3'>
                                                <h5>Ovulation : { this.props.data.ovulation }</h5>
                                            </MDBCol>
                                        </MDBRow>
                                        <MDBRow>
                                            
                                        </MDBRow>
                                    </div>
                                </div>
                            </div>
                        </MDBCol>
                    </MDBRow>
                    <br/>
                    { this.props.data.girlName == "" ? <div></div>:
                     <MDBRow className="justify-content-md-center">
                        <MDBCol md = "3">
                            <button className="button" onClick = { this.toggle1 }> Delete </button>
                        </MDBCol>
                        <MDBCol md = "3">

                        </MDBCol>
                        <MDBCol md = "3">
                            <button className="button" onClick = { this.loadGirlData }> Update </button>
                        </MDBCol>      
                    </MDBRow>
                    } 
                    <MDBRow>
                        <MDBModal isOpen={this.state.modal1} toggle={this.toggle} size = "md">
                                <div className = "itemTitle">
                                    <MDBModalHeader  toggle={this.toggle}>Update Girl</MDBModalHeader>
                                </div>
                                <MDBModalBody>
                                    <div>
                                        <div class = "row">
                                            <div class ="col-lg-4 col-md-12">
                                                <MDBInput label="Name : " onChange = { this.handleChange } name ="girlName" value = { this.state.girlName }/>
                                            </div>
                                            <div class ="col-lg-8 col-md-12">
                                                <label class="dateLabel">startDate</label><br/>
                                                <DatePicker className = "datePicker"
                                                    selected={this.state.startDate}
                                                    onChange={this.handleChange1}
                                                />
                                            </div>
                                        </div>
                                        <div className = "row">
                                            <div class = "col-lg-6 col-md-8">
                                                <MDBInput label="Cycle" onChange = { this.handleChange } name = "cycle" value = { this.state.cycle }/>
                                            </div>
                                            <div class = "col-lg-4 col-md-8">
                                                <MDBInput label="Ovulstion Period" onChange = { this.handleChange } name = "ovulation" value = { this.state.ovulation }/>
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
                                    <button className = "button" onClick={ this.toggle }>Cancel</button>
                                    <button className = "button" 
                                        onClick = {() => {
                                            this.toggle()
                                            this.props.girlDataUpdate(this.state)
                                            debugger
                                        }} >
                                        UpDate
                                    </button>
                                </MDBModalFooter>
                        </MDBModal>
                        <MDBModal isOpen={this.state.modal2} toggle={this.toggle1} size = "md">
                                <div className = "itemTitle">
                                    <MDBModalHeader  toggle={this.toggle1}></MDBModalHeader>
                                </div>
                                <MDBModalBody>
                                    <h2>Really want to Delete?</h2>
                                </MDBModalBody>
                                <MDBModalFooter>
                                    <button className = "button" onClick={ this.toggle1 }>CANCLE</button>
                                    <button className = "button" 
                                        onClick = {() => {
                                            this.toggle1()
                                            this.props.delete(this.props.data.id)
                                            
                                        }} >
                                        OK
                                    </button>
                                </MDBModalFooter>
                        </MDBModal>
                    </MDBRow>
                </div>
            </div>
        );
    }
}

PMSChildrenComponent.defaultProps = {
    data : {},
    range : 21
 };
 
 PMSChildrenComponent.propTypes = {
     data : PropTypes.object,
     girlDataUpdate : PropTypes.func,
     range : PropTypes.number,
     delete : PropTypes.func,
 };
 