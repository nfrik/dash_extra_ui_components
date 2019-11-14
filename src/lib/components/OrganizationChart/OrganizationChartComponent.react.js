import PropTypes from 'prop-types';
import React, { Component } from 'react';
import OrganizationChart from './OrganizationChart.react.js';

export default class OrganizationChartComponent extends Component {
    constructor() {
        super();
        this.state = {
            selection: [],
        };

        this.nodeTemplate = this.nodeTemplate.bind(this);
    }

    componentDidMount() {
        this.setState({data: this.props.data});
    }

    nodeTemplate(node) {
        if (node.type === 'person') {
            return (
                <div className="node-card">
                    <div className="node-header">{node.label}</div>
                    <div className="node-content">
                        <img
                            alt={node.data.avatar}
                            src={node.data.avatar}
                            style={{width: '60px', height: '60px'}}
                        />
                        <div>{node.data.name}</div>
                    </div>
                </div>
            );
        } else {
            return node.label;
        }
    }

    render() {
        if (this.props.value.length == 0) {
            return '';
        }
        return (
            <div>
                <OrganizationChart
                    nodeTemplate={this.nodeTemplate}
                    selection={this.state.selection}
                    onSelectionChange={event =>
                        this.setState({selection: event.data})
                    }
                    {...this.props}
                />
            </div>
        );
    }
}

OrganizationChartComponent.defaultProps = {
    value: [],
    selectionMode: 'single',
    setProps: () => {},
};

OrganizationChartComponent.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,
    /**
     * An array of nested TreeNodes
     */
    value: PropTypes.array,
    /**
     * Defines the selection mode, valid values "single" and "multiple".
     */
    selectionMode: PropTypes.string,
    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,
};
