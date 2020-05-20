import React, {Component} from 'react';
import {StepsComponent, MenuBarComponent, PanelMenuComponent, GPayButtonComponent, PMSComponent} from '../lib';
import GPayButton from 'react-google-pay-button';
class StepsDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        return (
            <div>
                <h3>Hello</h3>
                {/* <GPayButton
                    totalPriceStatus={'FINAL'}
                    totalPrice={'14.45'}
                    currencyCode={'GBP'}
                    countryCode={'GB'}
                    development={true}
                /> */}
                <GPayButtonComponent />
            </div>
        );
    }
}

export default StepsDemo;
