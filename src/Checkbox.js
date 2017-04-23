import React, { Component } from 'react';

class Checkbox extends Component {
    render() {
        if (this.props.config.childKeys && this.props.config.childKeys.length) {
            let nodeList = this.props.config.childKeys.map((node) => {
                return <Checkbox key={node.key} config={node} handleToggle={this.props.handleToggle} />;
            })
            return (
                <li>
                    <input type='checkbox' data-attr={this.props.config.key} checked={this.props.config.checked}
                        onChange={this.props.handleToggle} />
                    <span>{this.props.config.key}</span>
                    <ul>
                        {nodeList}
                    </ul>
                </li>
            );
        } else {
            return (
                <li>
                    <input type='checkbox' data-attr={this.props.config.key} checked={this.props.config.checked}
                        onChange={this.props.handleToggle} />
                    <span>{this.props.config.key}</span>
                </li>
            );
        }

    }
}

export default Checkbox;