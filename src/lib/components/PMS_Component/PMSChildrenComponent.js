import React, {Component} from 'react';
import PropTypes from 'prop-types';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'react-vis/dist/style.css';
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
  import Chart from 'react-apexcharts'
export default class PMSChildrenComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var xaxis  = []
        var pmsData = []
        var Colors = []
        var CurrentDay = 0
        for( let i = 0; i < ( this.props.data[2]- this.props.data[4] ); i++){
            let date = new Date(this.props.data[1])
            let current = new Date()
            CurrentDay = Math.ceil(Number(current.getTime() - date.getTime()) / 86400000)
            console.log(this.props.data[1])
            let milliDate = date.getTime() + 86400000 * (i + 1)
            let newDate = new Date(milliDate)
            let newDateString = "" + (newDate.getMonth()+1) + "-" + newDate.getDate()
            xaxis.push(newDateString)
        }

        for( let i = 0; i < this.props.data[3]; i++ ) {
            let step = 100/this.props.data[3];
            pmsData.push( Math.round(100 - i * step) )

            let Colorstep = (255 - 50) / this.props.data[3]
            let colorRed = Math.round( 255 - Colorstep * i )
            colorRed = colorRed.toString(16)
            Colors.push('#'+ colorRed+'0000')
        }

        for(let i = this.props.data[3]; i < (this.props.data[2]- this.props.data[4]) - 5 ; i ++){
            pmsData.push(0)
            Colors.push('#FFFFFF')
        }
        var fertility = 0
        var colorGreen = 0
        for (let i = this.props.data[4] - 5; i < this.props.data[4] ; i++){
            fertility += 20;
            pmsData.push(fertility)

            let colorStep = Math.round(255 - 50) / 5;
            colorGreen +=  Number(colorStep)
            let colorGreenHex = colorGreen.toString(16)
            Colors.push('#00' + colorGreenHex + '00')
        }

        console.log(Colors)

        var data = {
            series: [{
              name: 'PMS Tracker',
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
                dataLabels: { enabled: false },
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
            tooltip: {
                y: {
                    formatter: function (value, { series, seriesIndex, dataPointIndex, w }) {
                        return "value" + "%"
                    }
                },
            }
        };


        return (
            <div class="card card-cascade narrower">
                <div class="card-body card-body-cascade">
                    <MDBRow className="justify-content-md-center">
                        <MDBCol md="12">
                            <div class="card card-cascade narrower">
                                <div class="card-body card-body-cascade">
                                    <div class="list-group">
                                        <MDBRow>
                                            <MDBCol md = '8'>
                                                <h5>Name : { this.props.data[0]}</h5>
                                            </MDBCol>
                                            <MDBCol md = '4'>
                                                <h5>StartDate : { this.props.data[1]} </h5> 
                                            </MDBCol>
                                        </MDBRow>
                                        
                                        <MDBRow>
                                            <MDBCol md = '3'>
                                                <h5>Period : { this.props.data[2]}</h5> 
                                            </MDBCol>
                                            <MDBCol md = '3'>
                                                <h5>Menstruation : { this.props.data[3]}</h5> 
                                            </MDBCol>
                                            <MDBCol md = '3'>
                                                <h5>Current :  { CurrentDay } </h5>
                                            </MDBCol>
                                            <MDBCol md = '3'>
                                                <h5>Ovulation : { this.props.data[4]}</h5>
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
                            <Chart options={data.options} series={data.series} type="bar" height={350} />
                        </MDBCol>
                    </MDBRow>
                </div>
            </div>
        );
    }
}

PMSChildrenComponent.defaultProps = {
    value : []
 };
 
 PMSChildrenComponent.propTypes = {
     value : PropTypes.array,
 };
 