import React, {Component} from 'react';
import {StepsComponent, MenuBarComponent, PanelMenuComponent, PMSComponent} from '../lib';

class StepsDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        const value = '[{"girlName": "Anna", "startDate": "2020-04-25", "cycle": 30, "menstruation": 7, "ovulation": 14},{"girlName": "Olga", "startDate": "2020-04-28", "cycle": 28, "menstruation": 5, "ovulation": 13}]'
        return (
            <div>
                <PMSComponent value = { value }/>
            </div>
        );
    }
}

export default StepsDemo;
