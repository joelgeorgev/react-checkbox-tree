import React from 'react';
import Immutable from 'seamless-immutable';

import { Checkbox } from '.';
import treeData from '../data/tree.json';

export class CheckboxTree extends React.PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      tree: Immutable(treeData)
    }
  }

  toggleCheckbox = (targetNode) => {

    // Get key and checkbox status from targetNode object
    let key = targetNode.key;
    let checkboxStatus = !targetNode.checked;

    // Create a mutable deep clone of the component state
    let stateCopy = Immutable.asMutable(this.state.tree, { deep: true });

    let toggleChildNodes = (node => {
      node.checked = checkboxStatus;
      if (node.childKeys && node.childKeys.length) {
        node.childKeys.forEach(toggleChildNodes);
      }
    });

    let traverseNodes = (node => {
      if (node.key === key) {
        node.checked = checkboxStatus;
        if (node.childKeys && node.childKeys.length) {
          node.childKeys.forEach(toggleChildNodes);
        }
      }
      if (node.childKeys && node.childKeys.length) {
        node.childKeys.forEach(traverseNodes);
      }
    });

    stateCopy.forEach(traverseNodes);

    // Create a new immutable state
    let newState = Immutable(stateCopy);

    this.setState({
      tree: newState
    });
  }

  renderCheckboxTree = () => {
    return this.state.tree.map(node => {
      return <Checkbox key={node.key} node={node} handleToggle={this.toggleCheckbox} />;
    })
  }

  render() {
    return (
      <div>
        <ul className='list'>
          {this.renderCheckboxTree()}
        </ul>
      </div>
    );
  }
}