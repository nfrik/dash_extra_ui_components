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

    loadGirlData = () => {
        this.setState({
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
        var xaxis  = []
        var pmsData = []
        var Colors = []
        var CurrentDay = 0
    
        for( let i = 0; i < ( this.props.data.cycle - this.props.data.ovulation ); i++){
            let date = new Date(this.props.data.startDate)
            let current = new Date()
            CurrentDay = Math.ceil(Number(current.getTime() - date.getTime()) / 86400000)
            let milliDate = date.getTime() + 86400000 * (i + 1)
            let newDate = new Date(milliDate)
            let newDateString = "" + (newDate.getMonth()+1) + "-" + newDate.getDate()
            xaxis.push(newDateString)
        }

        for( let j = 0; j < this.props.data.menstruation; j++ ) {
            let step = 100/this.props.data.menstruation;
            pmsData.push( Math.round(100 - j * step) )

            let Colorstep = (255 - 50) / this.props.data.menstruation
            let colorRed = Math.round( 255 - Colorstep * j )
            console.log(colorRed)
            debugger
            colorRed = colorRed.toString(16)
            Colors.push('#'+ colorRed+'0000')
        }

        for(let i = this.props.data.menstruation; i < (this.props.data.cycle- this.props.data.ovulation) - 5 ; i ++){
            pmsData.push(0)
            Colors.push('#FFFFFF')
        }
        
        var fertility = 0
        var colorGreen = 0
        for (let i = this.props.data.ovulation - 5; i < this.props.data.ovulation ; i++){
            fertility += 20;
            pmsData.push(fertility)

            let colorStep = Math.round(255 - 50) / 5;
            colorGreen +=  Number(colorStep)
            let colorGreenHex = colorGreen.toString(16)
            Colors.push('#00' + colorGreenHex + '00')
        }

        console.log(pmsData)
        console.log(xaxis)
        console.log(Colors)
        var chartData = {
            tooltip: {
                y: {
                    formatter: (value) => { let yTooltip = value + "%"; return yTooltip },
                },              
            },
            series: [{
              name: '',
              data: pmsData
            }],
            options: {
                chart: { type: 'bar', height: 350 },
                plotOptions: {
                    bar: { horizontal: false, columnWidth: '98%', distributed : true,
                        markers: {
                            colors: ['#FF0000', '#D00000', '#0000', '#0000', '#550000']
                        }
                    },
                },
                dataLabels: { enabled: true },
                xaxis: { categories: xaxis },
                yaxis: {
                    title: { text: '' }
                },
                fill: {
                    colors : Colors,
                },
                legend: {
                    markers: {
                        fillColors: Colors,
                    },
                }
            },
        };

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
                    <MDBRow className="justify-content-md-center">
                        <MDBCol md = "11">
                            {this.props.data ? <Chart options={chartData.options} series={chartData.series} type="bar" height={350} /> :""}
                        </MDBCol>
                    </MDBRow>
                        <MDBCol md = "9"></MDBCol>
                        <MDBCol md = "3">
                            <MDBBtn className="item1" onClick = {this.loadGirlData}> Update </MDBBtn>
                        </MDBCol>
                    <MDBRow>
                        <MDBModal isOpen={this.state.modal1} toggle={this.toggle} size = "md">
                            <form>
                                <div className = "itemTitle">
                                    <MDBModalHeader  toggle={this.toggle}>Add Gril</MDBModalHeader>
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
                                    <MDBBtn className = "item1" onClick={ this.toggle }>Cancel</MDBBtn>
                                    <MDBBtn className = "item1" 
                                        onClick = {() => {
                                            this.toggle()
                                            this.props.girlDataUpdate(this.state) 
                                        }} >
                                        UpDate
                                    </MDBBtn>
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
    data : {}
 };
 
 PMSChildrenComponent.propTypes = {
     data : PropTypes.object,
     girlDataUpdate : PropTypes.func
 };
 