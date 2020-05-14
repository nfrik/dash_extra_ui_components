import React, {Component} from 'react';
import PropTypes from 'prop-types';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './PMSComponent.css'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBModalFooter, MDBBtn, MDBModal, MDBModalHeader, MDBModalBody } from "mdbreact";

import Chart from 'react-apexcharts'

export default class PMSChildrenComponent extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            modal1 : false,
            modal2: false,
            id : this.props.data.id,
            girlName : "",
            cycle : "",
            startDate : "",
            ovulation  : "",                                             
            menstruation : "",
        })
    }

    toggle = () => {
        this.setState({
          modal1: !this.state.modal1
        });
    }

    toggle1 = () => {
        debugger
        this.setState({
            modal2: !this.state.modal2
        });
    }

    loadGirlData = () => {
        this.setState({
            id : this.props.data.id,
            girlName : this.props.data.girlName,
            cycle : this.props.data.cycle,
            startDate : this.props.data.startDate,
            ovulation  : this.props.data.ovulation,                                             
            menstruation : this.props.data.menstruation,
        })
        this.toggle()
    }

    handleChange = event => {
        this.setState({ [event.target.name] : event.target.value });
    }

    render() {
        var CurrentDay = 0
        let date = new Date(this.props.data.startDate)
        let current = new Date()
        CurrentDay = Math.ceil(Number(current.getTime() - date.getTime()) / 86400000)

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

                    <MDBRow>
                        <MDBModal isOpen={this.state.modal1} toggle={this.toggle} size = "md">
                            <form>
                                <div className = "itemTitle">
                                    <MDBModalHeader  toggle={this.toggle}>Add Girl</MDBModalHeader>
                                </div>
                                <MDBModalBody>
                                    <div style = {{maxHeight : "680px"}}>
                                        <div class = "row">
                                            <div class ="col-lg-6 col-md-12">
                                                <MDBInput label="Name : " onChange = { this.handleChange } name ="girlName" value = { this.state.girlName }/>
                                            </div>
                                            <div class ="col-lg-4 col-md-8">
                                                <MDBInput label="Cycle" onChange = { this.handleChange } name = "cycle" value = { this.state.cycle }/>
                                            </div>
                                        </div>
                                        <div className = "row">
                                            <div class = "col-lg-6 col-md-8">
                                                <MDBInput label="Start Date" placeholde = "yyyy-mm-dd" onChange = { this.handleChange } name = "startDate" value = { this.state.startDate }/>
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
                                        }} >
                                        UpDate
                                    </button>
                                </MDBModalFooter>
                            </form>
                        </MDBModal>
                        <MDBModal isOpen={this.state.modal2} toggle={this.toggle1} size = "md">
                            <form>
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
                            </form>
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
 