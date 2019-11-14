/* eslint no-magic-numbers: 0 */
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/nova-light/theme.css';
import React, { Component } from 'react';
import '../../extra_dash_ui_components/primeicons/primeicons.css';
import { ExtraDashUiComponents, OrganizationChartComponent } from '../lib';
import orgSample from './sampleData.js/orgChartData';


class App extends Component {
    constructor() {
        super();
        this.state = {
            value: '',
            data: orgSample.data,
            data1: orgSample.data1,
        };
        this.setProps = this.setProps.bind(this);
    }

    setProps(newProps) {
        this.setState(newProps);
    }

    render() {
        return (
            <div>
                <h1>Hello, Dash!</h1>
                <OrganizationChartComponent
                    setProps={e => this.setProps(e)}
                    value={this.state.data1}
                    selectionMode={'single'}
                />
                <ExtraDashUiComponents
                    setProps={this.setProps}
                    value={this.state.value}
                />
            </div>
        );
    }
}

export default App;
