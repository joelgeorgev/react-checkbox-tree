import React, { Component } from 'react';

export class Checkbox extends Component {

  handleToggle = () => {
    this.props.handleToggle(this.props.node);
  }

  render() {
    if (this.props.node.childKeys && this.props.node.childKeys.length) {
      let nodeList = this.props.node.childKeys.map(childNode => {
        return <Checkbox key={childNode.key} node={childNode} handleToggle={this.props.handleToggle} />;
      })
      return (
        <li>
          <input type='checkbox' checked={this.props.node.checked} className='pointer'
            onChange={this.handleToggle} />
          <label className='ml2'>{this.props.node.key}</label>
          <ul className='list'>
            {nodeList}
          </ul>
        </li>
      );
    } else {
      return (
        <li>
          <input type='checkbox' checked={this.props.node.checked} className='pointer'
            onChange={this.handleToggle} />
          <label className='ml2'>{this.props.node.key}</label>
        </li>
      );
    }
  }
}