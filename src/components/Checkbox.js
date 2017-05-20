import React, { Component } from 'react';

class Checkbox extends Component {
	render() {
		if (this.props.node.childKeys && this.props.node.childKeys.length) {
			let nodeList = this.props.node.childKeys.map(childNode => {
				return <Checkbox key={childNode.key} node={childNode} handleToggle={this.props.handleToggle} />;
			})
			return (
				<li>
					<input type='checkbox' checked={this.props.node.checked}
						onChange={this.props.handleToggle.bind(this, this.props.node)} />
					<span>{this.props.node.key}</span>
					<ul>
						{nodeList}
					</ul>
				</li>
			);
		} else {
			return (
				<li>
					<input type='checkbox' checked={this.props.node.checked}
						onChange={this.props.handleToggle.bind(this, this.props.node)} />
					<span>{this.props.node.key}</span>
				</li>
			);
		}

	}
}

export default Checkbox;