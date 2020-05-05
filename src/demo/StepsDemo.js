import React, {Component} from 'react';
import {StepsComponent, MenuBarComponent, PanelMenuComponent, PMSComponent} from '../lib';

class StepsDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        const value = [['Anna', '2020-05-01',30, 5,15],['Olga', '2020-04-28',28, 7,14]]
        return (
            <div>
                <PMSComponent value = { value }/>
            </div>
        );
    }
}

export default StepsDemo;
